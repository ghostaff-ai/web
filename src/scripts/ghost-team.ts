// The app's six ghosts, live, in a row: the "these are the ones who work for you"
// moment after the film. Same models and the same jelly-sway shader as the app
// (ghostaff-ai/app, apps/mobile/components/ghost/GhostScene.tsx), ported to plain
// three.js. Loaded only when the section comes near the screen.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const HEM = 0.32;
const time = { value: 0 };

function alive(material: THREE.MeshStandardMaterial) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = time;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        float w = pow(clamp((${HEM.toFixed(2)} - position.y) / ${HEM.toFixed(2)}, 0.0, 1.0), 2.2);
        float a = atan(position.z, position.x);
        transformed.y += 0.017 * sin(a * 6.0 + uTime * 2.4) * w;
        transformed.xz *= 1.0 + 0.025 * sin(a * 6.0 + uTime * 2.4 + 1.2) * w;
        float h = clamp(position.y, 0.0, 1.0);
        h *= h;
        transformed.x += 0.035 * h * sin(uTime * 1.3);
        transformed.z += 0.02 * h * sin(uTime * 1.05 + 1.0);`,
      );
  };
}

async function load(loader: GLTFLoader, id: string) {
  const gltf = await loader.loadAsync(`/ghosts/${id}.glb`);
  gltf.scene.updateMatrixWorld(true);
  const group = new THREE.Group();
  const meshes: THREE.Mesh[] = [];
  gltf.scene.traverse((o) => o instanceof THREE.Mesh && meshes.push(o));
  for (const o of meshes) {
    o.geometry.applyMatrix4(o.matrixWorld);
    o.position.set(0, 0, 0);
    o.quaternion.identity();
    o.scale.set(1, 1, 1);
    alive(o.material as THREE.MeshStandardMaterial);
    group.add(o);
  }
  return group;
}

export function mountGhostTeam(canvas: HTMLCanvasElement, ids: string[]) {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.25).texture;
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0.9, 7.5);
  const rim = new THREE.DirectionalLight('#8c6eff', 2.5);
  rim.position.set(-3, 2, -2);
  scene.add(rim, new THREE.AmbientLight('#ffffff', 0.3));

  const ghosts: { g: THREE.Group; x: number; phase: number }[] = [];
  const loader = new GLTFLoader();
  const n = ids.length;
  ids.forEach(async (id, i) => {
    const g = await load(loader, id);
    const x = (i - (n - 1) / 2) * 1.25;
    g.scale.setScalar(1.15);
    g.position.set(x, 0, -Math.abs(x) * 0.35);
    g.rotation.y = -x * 0.12;
    scene.add(g);
    ghosts.push({ g, x, phase: i * 1.1 });
  });

  const mouse = { x: 0, y: 0 };
  addEventListener('pointermove', (e) => {
    mouse.x = e.clientX / innerWidth - 0.5;
    mouse.y = e.clientY / innerHeight - 0.5;
  });

  const size = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Step back as far as the whole row (about 8 units wide) needs to fit.
    const halfFov = Math.atan(Math.tan(THREE.MathUtils.degToRad(15)) * camera.aspect);
    camera.position.z = Math.max(6, 4.3 / Math.tan(halfFov));
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(size).observe(canvas);
  size();

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const t = still ? 0 : clock.getElapsedTime();
    time.value = t;
    for (const { g, x, phase } of ghosts) {
      g.position.y = 0.08 * Math.sin(t * 1.4 + phase);
      g.rotation.y = -x * 0.12 + mouse.x * 0.5;
    }
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.05;
    camera.position.y += (0.9 - mouse.y * 0.4 - camera.position.y) * 0.05;
    camera.lookAt(0, 0.6, 0);
    renderer.render(scene, camera);
  });
}
