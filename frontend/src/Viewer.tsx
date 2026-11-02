import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {PLYLoader} from 'three/addons/loaders/PLYLoader.js';
type CameraData={photo:string;center_m:number[];Rcw:number[][]};
export default function Viewer({url,previewUrl,cameraUrl}:{url:string;previewUrl:string;cameraUrl:string}){
 const host=useRef<HTMLDivElement>(null);const reset=useRef(()=>{});const material=useRef<THREE.PointsMaterial|null>(null);const cameraGroup=useRef<THREE.Group|null>(null);const measuring=useRef(false);const clear=useRef(()=>{});
 const [status,setStatus]=useState('加载点云…'),[size,setSize]=useState(2),[showCameras,setShowCameras]=useState(false),[measure,setMeasure]=useState(false),[distance,setDistance]=useState<number|null>(null);
 useEffect(()=>{measuring.current=measure},[measure]);
 useEffect(()=>{if(material.current)material.current.size=size},[size]);
 useEffect(()=>{if(cameraGroup.current)cameraGroup.current.visible=showCameras},[showCameras]);
 useEffect(()=>{
  if(!host.current)return;const el=host.current;let disposed=false,frame=0;setDistance(null);setStatus('加载点云…');
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true})}catch{setStatus('无法初始化 WebGL，请下载 PLY 在桌面工具中查看');return}
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor('#151b24');el.appendChild(renderer.domElement);
  const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(48,1,.001,1000);camera.up.set(0,-1,0);const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;
  let cloud:THREE.Points|null=null;let radius=1;let reference:CameraData|null=null;const marks=new THREE.Group();scene.add(marks);const cameras=new THREE.Group();scene.add(cameras);cameraGroup.current=cameras;cameras.visible=showCameras;
  const picked:THREE.Vector3[]=[];const geometries:THREE.BufferGeometry[]=[];const mats:THREE.Material[]=[];
  function clearMarks(){picked.length=0;for(const child of [...marks.children]){const obj=child as THREE.Mesh;obj.geometry?.dispose();(obj.material as THREE.Material)?.dispose();marks.remove(child)}setDistance(null)}clear.current=clearMarks;
  function fit(){if(!cloud)return;const box=new THREE.Box3().setFromObject(cloud);const center=box.getCenter(new THREE.Vector3());radius=Math.max(box.getSize(new THREE.Vector3()).length()/2,.01);controls.target.copy(center);if(reference){const c=new THREE.Vector3(...reference.center_m as [number,number,number]);const away=c.clone().sub(center).normalize();camera.position.copy(center).addScaledVector(away,radius*2.7);camera.up.set(-reference.Rcw[1][0],-reference.Rcw[1][1],-reference.Rcw[1][2])}else camera.position.copy(center).add(new THREE.Vector3(0,0,-radius*2.7));camera.near=radius/1000;camera.far=radius*100;camera.updateProjectionMatrix();controls.update()}reset.current=fit;
  async function load(path:string,final:boolean){const res=await fetch(path);if(!res.ok)throw new Error('点云文件无法读取');const bytes=await res.arrayBuffer();if(disposed)return;const geo=new PLYLoader().parse(bytes);geo.computeBoundingSphere();if(cloud){scene.remove(cloud);cloud.geometry.dispose();(cloud.material as THREE.Material).dispose()}
   const mat=new THREE.PointsMaterial({size,vertexColors:geo.hasAttribute('color'),sizeAttenuation:false});material.current=mat;cloud=new THREE.Points(geo,mat);scene.add(cloud);fit();setStatus(`${geo.getAttribute('position').count.toLocaleString()} 点 · ${final?'完整模型':'快速预览'}`);
  }
  (async()=>{try{if(previewUrl!==url)await load(previewUrl,false);await load(url,true);const response=await fetch(cameraUrl);if(!response.ok)return;const data:CameraData[]=await response.json();if(disposed)return;reference=[...data].sort((a,b)=>Number(a.photo)-Number(b.photo))[0]||null;fit();
   for(const c of data){const center=new THREE.Vector3(...c.center_m as [number,number,number]);const mat=new THREE.LineBasicMaterial({color:0x6ea8ff});mats.push(mat);const scale=radius*.035;const vertices=[[-1,-.7,1],[1,-.7,1],[1,.7,1],[-1,.7,1]].map(v=>{const a=new THREE.Vector3(...v as [number,number,number]).multiplyScalar(scale);const r=c.Rcw;return new THREE.Vector3(r[0][0]*a.x+r[1][0]*a.y+r[2][0]*a.z,r[0][1]*a.x+r[1][1]*a.y+r[2][1]*a.z,r[0][2]*a.x+r[1][2]*a.y+r[2][2]*a.z).add(center)});const lines:THREE.Vector3[]=[];vertices.forEach((v,i)=>lines.push(center,v,v,vertices[(i+1)%4]));const g=new THREE.BufferGeometry().setFromPoints(lines);geometries.push(g);cameras.add(new THREE.LineSegments(g,mat))}
  }catch(e){if(!disposed)setStatus(String(e))}})();
  const ray=new THREE.Raycaster();const mouse=new THREE.Vector2();let down=[0,0];
  const onDown=(e:PointerEvent)=>{down=[e.clientX,e.clientY]};
  const onClick=(e:PointerEvent)=>{if(!measuring.current||!cloud||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5)return;const rect=renderer.domElement.getBoundingClientRect();mouse.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);ray.params.Points!.threshold=radius*.004;ray.setFromCamera(mouse,camera);const hit=ray.intersectObject(cloud)[0];if(hit?.index===undefined)return;if(picked.length===2)clearMarks();const pos=cloud.geometry.getAttribute('position');const point=new THREE.Vector3().fromBufferAttribute(pos,hit.index);picked.push(point);const ball=new THREE.Mesh(new THREE.SphereGeometry(radius*.006,12,8),new THREE.MeshBasicMaterial({color:0xffc857}));ball.position.copy(point);marks.add(ball);if(picked.length===2){marks.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(picked),new THREE.LineBasicMaterial({color:0xffc857})));setDistance(picked[0].distanceTo(picked[1]))}};
  renderer.domElement.addEventListener('pointerdown',onDown);renderer.domElement.addEventListener('pointerup',onClick);
  const resize=new ResizeObserver(()=>{const w=el.clientWidth,h=el.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()});resize.observe(el);
  function tick(){frame=requestAnimationFrame(tick);controls.update();renderer.render(scene,camera)}tick();
  return()=>{disposed=true;cancelAnimationFrame(frame);resize.disconnect();renderer.domElement.removeEventListener('pointerdown',onDown);renderer.domElement.removeEventListener('pointerup',onClick);controls.dispose();clearMarks();if(cloud){cloud.geometry.dispose();(cloud.material as THREE.Material).dispose()}geometries.forEach(g=>g.dispose());mats.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();material.current=null;cameraGroup.current=null};
 },[url,previewUrl,cameraUrl]);
 return <div className="viewer"><div className="canvas" ref={host} aria-label="三维点云，拖动旋转，右键平移，滚轮缩放"/><div className="canvas-top"><span className="live-dot"/>{status}<span className="unit">米 · LiDAR 尺度</span></div><div className="viewer-tools"><button onClick={()=>reset.current()}>适应全部</button><button aria-pressed={showCameras} onClick={()=>setShowCameras(!showCameras)}>相机位置</button><button aria-pressed={measure} onClick={()=>{setMeasure(!measure);clear.current()}}>两点测距</button><label>点大小 <input aria-label="点大小" type="range" min="1" max="5" step=".5" value={size} onChange={e=>setSize(+e.target.value)}/></label></div><div className="canvas-bottom">{measure?(distance!==null?`两点距离 ${(distance*100).toFixed(1)} cm · 点选新端点重测`:'请在可见点云上依次选择两个真实点'): '左键旋转 · 右键平移 · 滚轮缩放'}<span>坐标未对齐地面或朝北</span></div></div>
}
