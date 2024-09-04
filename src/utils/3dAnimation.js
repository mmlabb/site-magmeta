import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";
// import iphoneModel from '@/utils/iphone_15pro.glb'
// create a function to load
// and animate a 3D model
function loadModel() {
  const canvas = document.getElementById("3d");
  console.log("🚀 ~ loadModel ~ canvas:", canvas);

  // Scene setup
  const scene = new THREE.Scene();
  // scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);
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
  canvas.style.width = "100%";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";

  const dirLight = new THREE.DirectionalLight(0xf9f9f9, 8);
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
  loader.load("/iphone_15pro.glb", (gltf) => {
    const model = gltf.scene;
    phone = model;
    phone.position.y = -10;
    scene.add(model);

    /**
     * Animação que o celular aparece debaixo para cima virado de costa
     * depois faz um flip e fica com a tela virada para camera
     * Celular está alinhado na vertical
     */
    tl.to(model.position, {
      y: 0, // 360 degrees
      duration: 1,
      ease: "power3",
    });
    tl.to(model.rotation, {
      y: Math.PI * 2.3, // 360 degrees
      // x: Math.PI * -0.25,
      duration: 3,
      ease: "power2.inOut",
    });

    setTimeout(() => {
      tl.to(model.rotation, {
        y: Math.PI * 4.3, // 360 degrees
        x: Math.PI * -0.25,
        duration: 30,
        ease: "power2.inOut",
      });
    }, 4000);
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
      camera.lookAt(-1.3, 0, 0.4);
    },
  });

  // Update cube position based on scroll
  window.addEventListener("scroll", () => {
    // Get scroll position (you can adjust the scale factor)
    const scrollY = window.scrollY;
    if (phone) phone.position.y = -scrollY * -0.002; // Adjust the multiplier as needed
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
}

export default loadModel;
