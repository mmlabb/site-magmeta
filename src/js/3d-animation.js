import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";

const canvas = document.getElementById("3d");

// Scene setup
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // Use the existing canvas
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100vw";
canvas.style.height = "100vh";
canvas.style.pointerEvents = "none";

const dirLight = new THREE.DirectionalLight(0x5d2e9a, 10);
dirLight.position.set(2, 4, 2);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 2;
dirLight.shadow.camera.bottom = -2;
dirLight.shadow.camera.left = -2;
dirLight.shadow.camera.right = 2;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 40;
scene.add(dirLight);

// const axesHelper = new THREE.AxesHelper(5);
// dirLight.add(axesHelper);
// scene.add(axesHelper);

// Load the GLB model
const loader = new GLTFLoader();
let phone;
// GSAP animation
const tl = gsap.timeline();
loader.load("./iphone_15pro.glb", (gltf) => {
  const model = gltf.scene;
  phone = model;
  phone.position.y = -10;
  phone.rotation.y = 3;
  scene.add(model);

  tl.to(model.position, {
    y: 0, // 360 degrees
    duration: 1,
    ease: "power2.out",
    // onUpdate: () => {
    //   camera.lookAt(model.position);
    // },
  });
  tl.to(model.rotation, {
    y: Math.PI * 2.35, // 360 degrees
    duration: 3,
    ease: "power2.inOut",
  });
});

// Initial camera position
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);
gsap.to(camera.position, {
  x: 1,
  y: 0,
  z: 1.5,
  duration: 3,
  // ease: "power2.inOut",
  onUpdate: () => {
    camera.lookAt(-1, 0, 0.4);
  },
});

// Animation function
function animate() {
  requestAnimationFrame(animate);
  // controls.update();

  renderer.render(scene, camera);
}

// Start animation
animate();

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
