import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//const light = new THREE.HemisphereLight(0xffffff, 0x1c1c1c, 0.7);
//scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 6);
directionalLight.position.set( -1000000, 1000000, 1000000);
scene.add(directionalLight);

//const controls = new OrbitControls(camera, renderer.domElement);

const earthTexture = new THREE.TextureLoader().load("/earth_texture_map_1000px.jpg");
const earthNormalTexture = new THREE.TextureLoader().load("/IMG_20240614_134058.jpg");
const earthDerictionalTexture = new THREE.TextureLoader().load("/210121_VFXAssetsFreeEarthDisplacementMap.jpg");

const moonTexture = new THREE.TextureLoader().load("/moon.jpg");
const moonNormalTexture = new THREE.TextureLoader().load("/normal.jpg");

const geometry = new THREE.SphereGeometry(1.5, 32, 32);
const geometryMoon = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshStandardMaterial({
  map: earthTexture,
  normalMap: earthNormalTexture,
  bumpMap: earthDerictionalTexture,
  bumpScale: 10,
});
const materialMoon = new THREE.MeshStandardMaterial({
  map: moonTexture,
  normalMap: moonNormalTexture,
});


const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const moon = new THREE.Mesh(geometryMoon, materialMoon);
scene.add(moon);


camera.position.z = 15;

function animate() {

  sphere.rotation.y += 0.01;

  moon.position.x = -6;

  renderer.render(scene, camera);

}
