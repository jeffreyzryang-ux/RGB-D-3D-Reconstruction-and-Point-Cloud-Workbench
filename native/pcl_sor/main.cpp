// Called by scripts/clean_point_cloud.py with a private output directory.
#include <pcl/common/io.h>
#include <pcl/common/point_tests.h>
#include <pcl/filters/statistical_outlier_removal.h>
#include <pcl/io/ply_io.h>
#include <cmath>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <stdexcept>

using Cloud = pcl::PointCloud<pcl::PointXYZRGB>;

void write_subset(const std::filesystem::path& path, const Cloud& input,
                  const pcl::Indices& indices) {
    if (indices.empty()) {
        std::ofstream output;
        output.exceptions(std::ios::failbit | std::ios::badbit);
        output.open(path, std::ios::binary);
        output << "ply\nformat binary_little_endian 1.0\nelement vertex 0\n"
                  "property float x\nproperty float y\nproperty float z\n"
                  "property uchar red\nproperty uchar green\nproperty uchar blue\nend_header\n";
        output.close();
        return;
    }
    Cloud subset;
    pcl::copyPointCloud(input, indices, subset);
    if (pcl::PLYWriter().write(path.string(), subset, true, false) < 0)
        throw std::runtime_error("Could not write " + path.string());
}

int main(int argc, char** argv) {
    try {
        if (argc != 5)
            throw std::runtime_error("Expected INPUT.ply OUTPUT_DIR MEAN_K STDDEV");
        const int k = std::stoi(argv[3]);
        const double threshold = std::stod(argv[4]);
        Cloud::Ptr input(new Cloud);
        pcl::PCLPointCloud2 blob;
        if (pcl::io::loadPLYFile(argv[1], blob) < 0)
            throw std::runtime_error("Could not read input PLY");
        for (const auto field : {"x", "y", "z"})
            if (pcl::getFieldIndex(blob, field) < 0)
                throw std::runtime_error("Input must contain XYZ coordinates");
        if (pcl::getFieldIndex(blob, "rgb") < 0 && pcl::getFieldIndex(blob, "rgba") < 0)
            throw std::runtime_error("Input must contain RGB colors");
        pcl::fromPCLPointCloud2(blob, *input);
        if (k < 2 || input->size() <= static_cast<std::size_t>(k) ||
            !std::isfinite(threshold) || threshold <= 0)
            throw std::runtime_error("Invalid parameters or too few input points");
        for (const auto& point : *input)
            if (!pcl::isFinite(point))
                throw std::runtime_error("Input contains non-finite coordinates");

        pcl::StatisticalOutlierRemoval<pcl::PointXYZRGB> sor(true);
        sor.setInputCloud(input);
        sor.setMeanK(k);
        sor.setStddevMulThresh(threshold);
        pcl::Indices kept;
        sor.filter(kept);
        const auto removed = sor.getRemovedIndices();
        if (kept.size() + removed->size() != input->size())
            throw std::runtime_error("Point count mismatch");
        const std::filesystem::path out(argv[2]);
        write_subset(out / "cleaned.ply", *input, kept);
        write_subset(out / "removed.ply", *input, *removed);
        std::cout << input->size() << " " << kept.size() << " " << removed->size() << "\n";
    } catch (const std::exception& error) {
        std::cerr << error.what() << "\n";
        return 1;
    }
}
