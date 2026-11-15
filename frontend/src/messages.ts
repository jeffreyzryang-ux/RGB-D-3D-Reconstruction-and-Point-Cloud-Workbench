// Translate server messages for both current and previously saved jobs.
// Legacy source keys use Unicode escapes; displayed translations are English.
const messages: [string, string][] = [
  [
    "\u6b63\u5e38\u6279\u6b21\u970010–200\u7ec4；\u5c0f\u6279\u91cf\u8bca\u65ad\u97003–200\u7ec4",
    "Normal batches require 10–200 captures; diagnostic batches require 3–200.",
  ],
  [
    "\u672a\u5f62\u6210\u81f3\u5c113\u4e2a\u76f8\u673a\u7684\u6709\u6548\u6a21\u578b；\u53ef\u4e0b\u8f7d\u65e5\u5fd7\u53ca\u8bca\u65ad",
    "No valid model with at least three cameras was reconstructed. Review the logs and diagnostics.",
  ],
  [
    "\u9700\u8981schema 2 \u7684 ARKit \u6df1\u5ea6\u6570\u636e",
    "ARKit depth data with schema version 2 is required.",
  ],
  [
    "\u5f15\u64ce\u81ea\u52a8\u8c03\u6574\u8fc7\u521d\u59cb\u5316\u6761\u4ef6；\u8bf7\u7ed3\u5408\u8d28\u91cf\u62a5\u544a\u9a8c\u6536。",
    "The engine adjusted its initialization conditions. Review the quality report before accepting the result.",
  ],
  [
    "order.json \u5fc5\u987b\u552f\u4e00\u8986\u76d6\u6240\u6709\u62cd\u6444\u7ec4",
    "order.json must list every capture group exactly once.",
  ],
  [
    "\u5f53\u524d\u9002\u914d\u5668\u53ea\u63a5\u53d7\u65b9\u54111、\u50cf\u7d20\u5185\u53c2、\u672a\u6d4b\u91cf\u7578\u53d8",
    "The importer requires orientation 1, pixel-based intrinsics, and unmeasured distortion.",
  ],
  [
    "\u65e0\u6cd5\u8bc6\u522b\u6279\u6b21\u6839\u76ee\u5f55，\u8bf7\u4e0a\u4f20\u5b8c\u6574\u62cd\u6444\u6587\u4ef6\u5939",
    "Could not identify the batch root. Upload the complete capture folder.",
  ],
  [
    "\u5f53\u524d\u91c7\u96c6\u683c\u5f0f\u9700\u8981\u6b63\u6574\u6570\u62cd\u6444\u6587\u4ef6\u5939\u540d",
    "Capture folders must be named with positive integers without leading zeros.",
  ],
  [
    " \u6267\u884c\u5931\u8d25，\u8be6\u60c5\u89c1\u65e5\u5fd7（\u9000\u51fa\u7801 ",
    " failed. See the log for details (exit code ",
  ],
  ["\u6df1\u5ea6\u683c\u5f0f/\u6765\u6e90/\u5355\u4f4d\u4e0d\u53d7\u652f\u6301", "Unsupported depth format, source, or units."],
  ["\u4e0d\u652f\u6301\u8be5\u6587\u4ef6\u5c42\u7ea7\u6216\u9690\u85cf\u6587\u4ef6", "Unsupported folder depth or hidden file."],
  [
    "\u670d\u52a1\u4e2d\u65ad，\u8bf7\u91cd\u8bd5\u751f\u6210\u65b0\u7248\u672c",
    "The service was interrupted. Retry to create a new version.",
  ],
  [
    "ZIP\u89e3\u538b\u5bb9\u91cf\u6216\u6587\u4ef6\u6570\u8d85\u9650",
    "The extracted ZIP exceeds the size or file-count limit.",
  ],
  [
    "\u6587\u4ef6\u8def\u5f84\u4e0d\u80fd\u8d8a\u51fa\u6279\u6b21\u76ee\u5f55",
    "File paths must stay within the batch directory.",
  ],
  ["\u91cd\u590dcapture_id", "Duplicate capture_id."],
  [
    "\u6df1\u5ea6\u6216\u7f6e\u4fe1\u5ea6\u5b57\u8282\u6570\u4e0d\u5339\u914d",
    "Depth or confidence file size does not match its dimensions.",
  ],
  [
    "\u91cd\u590d\u56fe\u7247，\u8bf7\u53bb\u91cd\u540e\u63d0\u4ea4",
    "Duplicate images. Remove duplicates before submitting.",
  ],
  ["\u56fe\u7247\u4e0e\u6df1\u5ea6\u65f6\u95f4\u6233\u4e0d\u4e00\u81f4", "Image and depth timestamps do not match."],
  [
    "\u6ca1\u6709\u53ef\u7528\u4e2d\u9ad8\u7f6e\u4fe1\u5ea6\u6df1\u5ea6",
    "No valid medium- or high-confidence depth samples.",
  ],
  ["RGB\u5c3a\u5bf8\u6216\u65b9\u5411\u4e0d\u4e00\u81f4", "RGB dimensions or orientation do not match."],
  ["\u53ea\u80fd\u91cd\u8bd5\u5df2\u7ed3\u675f\u7684\u4efb\u52a1", "Only finished jobs can be retried."],
  ["ZIP\u9700\u4e0a\u4f20\u81f3\u7a7a\u6279\u6b21", "Upload the ZIP to an empty batch."],
  ["\u6587\u4ef6\u7ed1\u5b9a\u540d\u79f0\u4e0d\u5339\u914d", "Referenced filenames do not match."],
  ["\u6df1\u5ea6\u5b58\u50a8\u683c\u5f0f\u4e0d\u652f\u6301", "Unsupported depth storage layout."],
  [
    "\u6df1\u5ea6\u5185\u53c2\u6620\u5c04\u4e0d\u4e00\u81f4",
    "Depth intrinsics do not match the RGB-to-depth scaling.",
  ],
  ["\u6587\u4ef6\u6216\u6279\u6b21\u5bb9\u91cf\u8d85\u9650", "File or batch size limit exceeded."],
  ["\u7f3a\u5c11\u672c\u673a\u64cd\u4f5c\u6807\u8bb0", "The local request header is missing."],
  ["\u6279\u6b21\u6587\u4ef6\u6570\u91cf\u8d85\u9650", "Too many files in this batch."],
  ["\u56fe\u7247\u8d85\u8fc730MB", "The image exceeds 30 MB."],
  ["ZIP\u5185\u8def\u5f84\u91cd\u590d", "Duplicate paths in the ZIP."],
  ["\u4e0d\u652f\u6301\u7684\u6587\u4ef6：", "Unsupported file: "],
  ["\u4ec5\u652f\u6301\u672c\u673a\u8bbf\u95ee", "Only local access is supported."],
  ["\u56fe\u7247\u50cf\u7d20\u6570\u8d85\u9650", "The image exceeds the pixel-count limit."],
  ["ZIP\u5bb9\u91cf\u8d85\u9650", "ZIP size limit exceeded."],
  ["\u4e0d\u63a5\u53d7\u7b26\u53f7\u94fe\u63a5", "Symbolic links are not accepted."],
  ["\u524d\u7aef\u5c1a\u672a\u6784\u5efa", "The frontend has not been built."],
  ["\u975e\u6cd5\u6587\u4ef6\u8def\u5f84", "Invalid file path."],
  ["\u7ed3\u679c\u5c1a\u672a\u5b8c\u6210", "Results are not ready."],
  ["\u4e0d\u5141\u8bb8\u7684\u6765\u6e90", "Origin not allowed."],
  ["\u6279\u6b21\u5df2\u7ecf\u63d0\u4ea4", "This batch has already been submitted."],
  ["\u6df1\u5ea6\u5c3a\u5bf8\u65e0\u6548", "Invalid depth dimensions."],
  ["\u975e\u6cd5\u7f6e\u4fe1\u5ea6\u503c", "Invalid confidence values."],
  ["\u4efb\u52a1\u4e0d\u5b58\u5728", "Job not found."],
  ["\u6587\u4ef6\u4e0d\u5b58\u5728", "File not found."],
  ["\u9879\u76ee\u4e0d\u5b58\u5728", "Project not found."],
  ["\u6279\u6b21\u5df2\u63d0\u4ea4", "This batch has already been submitted."],
  ["\u7f3a\u5931\u6587\u4ef6 ", "Missing file: "],
  ["\u6587\u4ef6\u91cd\u590d", "Duplicate file."],
  ["\u975e\u6cd5\u5185\u53c2", "Invalid camera intrinsics."],
  ["\u6a21\u578b ", "Model "],
];

export function englishMessage(message: string): string {
  return messages.reduce(
    (text, [source, translation]) => text.split(source).join(translation),
    message,
  );
}
