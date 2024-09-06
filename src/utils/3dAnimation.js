import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";
// import iphoneModel from '@/utils/iphone_15pro.glb'
// create a function to load
// and animate a 3D model
function loadModel() {
  if (window.innerWidth <= 991) return;

  const canvas = document.getElementById("3d");

  // Scene setup
  const scene = new THREE.Scene();
  // scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);
  const camera = new THREE.PerspectiveCamera(
    75,
    document.body.clientWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // Use the existing canvas
  console.log(
    "🚀 ~ loadModel ~ window.innerWidth:",
    document.body.clientWidth,
    canvas.clientWidth
  );

  renderer.setSize(document.body.clientWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

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
    console.log(
      "🚀 ~ window.addEventListener ~ document.body.clientWidth:",
      document.body.clientWidth
    );

    renderer.setSize(document.body.clientWidth, window.innerHeight);
    camera.aspect = document.body.clientWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Update cube position based on scroll
  // window.addEventListener("scroll", () => {
  //   // Get scroll position (you can adjust the scale factor)
  //   const scrollY = window.scrollY;
  //   if (phone) phone.position.y = -scrollY *  0.001; // Adjust the multiplier as needed
  // });
}

export default loadModel;
