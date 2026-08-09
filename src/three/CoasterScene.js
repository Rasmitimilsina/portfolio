import * as THREE from 'three';

export class CoasterScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.container = canvas.parentElement;

    // Mouse parallax tracking
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.clock = new THREE.Clock();
    
    // Animation state
    this.scrollState = {
      imageRotX: 0.08,
      imageRotY: -0.28,
      imageRotZ: 0,
      imagePosX: 1.4,
      imagePosY: 0.08,
      basePosY: 0.08,
      imageScale: 1.1,
      glowColor: 0xffffff,
      destruction: 0,
      hidden: false,
      isFlipped: false,
      hovered: false
    };

    this.onPictureClick = null;
    this.targetRotY = -0.28;

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();
    this.setupRenderer();
    this.setupCamera();
    this.createCoaster();
    this.createParticleDestructionSystem();
    this.createLighting();
    this.setupRaycaster();
    this.addEventListeners();
    this.animate();
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 0, 7.0);
  }

  createCoaster() {
    this.rootGroup = new THREE.Group();
    this.scene.add(this.rootGroup);

    if (this.imageGroup) {
      this.rootGroup.remove(this.imageGroup);
    }

    this.imageGroup = new THREE.Group();
    this.rootGroup.add(this.imageGroup);

    const cardWidth = 2.3;
    const cardHeight = 2.9;
    const cardDepth = 0.08;

    // 1. Sleek Dark Metallic Card Frame Base
    const frameGeo = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x121212,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 1.0
    });
    this.frameMesh = new THREE.Mesh(frameGeo, frameMat);
    this.frameMesh.castShadow = true;
    this.frameMesh.receiveShadow = true;
    this.imageGroup.add(this.frameMesh);

    // 2. Front Face with Natural High-Quality Portrait Image
    const frontGeo = new THREE.PlaneGeometry(cardWidth - 0.1, cardHeight - 0.1);
    this.frontMat = new THREE.MeshPhysicalMaterial({
      roughness: 0.15,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 1.0
    });
    this.frontMesh = new THREE.Mesh(frontGeo, this.frontMat);
    this.frontMesh.position.z = cardDepth / 2 + 0.005;
    this.imageGroup.add(this.frontMesh);

    // 3. Back Face with Natural High-Quality Portrait Image
    const backGeo = new THREE.PlaneGeometry(cardWidth - 0.1, cardHeight - 0.1);
    this.backMat = new THREE.MeshPhysicalMaterial({
      roughness: 0.15,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 1.0
    });
    this.backMesh = new THREE.Mesh(backGeo, this.backMat);
    this.backMesh.position.z = -cardDepth / 2 - 0.005;
    this.backMesh.rotation.y = Math.PI;
    this.imageGroup.add(this.backMesh);

    // 4. Glowing White Border Accent
    const glowGeo = new THREE.BoxGeometry(cardWidth + 0.04, cardHeight + 0.04, 0.02);
    this.glowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 1.8,
      transparent: true,
      opacity: 0.85
    });
    this.glowMesh = new THREE.Mesh(glowGeo, this.glowMaterial);
    this.glowMesh.position.z = 0;
    this.imageGroup.add(this.glowMesh);

    // Load Natural User Portrait Image Texture (Called AFTER frontMat & backMat exist!)
    const textureLoader = new THREE.TextureLoader();
    const applyTexture = (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      if (this.frontMat) { this.frontMat.map = tex; this.frontMat.needsUpdate = true; }
      if (this.backMat) { this.backMat.map = tex; this.backMat.needsUpdate = true; }
      this.renderer.render(this.scene, this.camera);
    };

    textureLoader.load('./user-avatar.jpg', (tex) => {
      applyTexture(tex);
    }, undefined, () => {
      textureLoader.load('./assets/user-avatar.jpg', (tex2) => {
        applyTexture(tex2);
      }, undefined, () => {
        textureLoader.load('/user-avatar.jpg', (tex3) => {
          applyTexture(tex3);
        });
      });
    });
  }

  createParticleDestructionSystem() {
    const particleCount = 350;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0xffffff);
    const purpleColor = new THREE.Color(0xe4e4e7);
    const pinkColor = new THREE.Color(0xa1a1aa);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 2.5;
      const y = (Math.random() - 0.5) * 3.0;
      const z = (Math.random() - 0.5) * 0.3;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities[i * 3] = (Math.random() - 0.5) * 4.5;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 4.5 + 1.2;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 3.5;

      const rand = Math.random();
      const color = rand < 0.5 ? cyanColor : (rand < 0.8 ? purpleColor : pinkColor);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(geometry, material);
    this.particleVelocities = velocities;
    this.baseParticlePositions = positions.slice();
    this.rootGroup.add(this.particles);
  }

  setupRaycaster() {
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.lastFlipTime = 0;

    const handlePointer = (e) => {
      let clientX = e.clientX;
      let clientY = e.clientY;

      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      }

      if (clientX === undefined || clientY === undefined) return;

      this.pointer.x = (clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(clientY / window.innerHeight) * 2 + 1;
      this.raycaster.setFromCamera(this.pointer, this.camera);

      if (!this.imageGroup) return;
      const intersects = this.raycaster.intersectObjects([this.frontMesh, this.backMesh, this.frameMesh]);

      if (intersects.length > 0) {
        this.scrollState.hovered = true;
        document.body.style.cursor = 'pointer';
        if (e.type === 'click' || e.type === 'touchend') {
          this.toggleCardFlip();
        }
      } else {
        this.scrollState.hovered = false;
        document.body.style.cursor = 'default';
      }
    };

    window.addEventListener('mousemove', handlePointer);
    window.addEventListener('click', handlePointer);
    window.addEventListener('touchstart', handlePointer, { passive: true });
    window.addEventListener('touchend', handlePointer);
  }

  toggleCardFlip() {
    const now = Date.now();
    if (this.lastFlipTime && now - this.lastFlipTime < 450) {
      return; // Ignore duplicate touch/click events fired by mobile browsers within 450ms
    }
    this.lastFlipTime = now;

    this.scrollState.isFlipped = !this.scrollState.isFlipped;
    this.targetRotY += Math.PI;

    this.scrollState.glowColor = 0xffffff;

    if (this.onPictureClick) {
      this.onPictureClick(this.scrollState.isFlipped);
    }
  }

  createLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambientLight);

    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    this.keyLight.position.set(5, 8, 5);
    this.scene.add(this.keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
    fillLight.position.set(-6, -2, -4);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rimLight.position.set(0, 5, -8);
    this.scene.add(rimLight);
  }

  addEventListeners() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        this.mouse.targetX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        this.mouse.targetY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    }, { passive: true });

    window.addEventListener('resize', () => {
      this.onResize();
    });
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);

    if (width < 768) {
      this.scrollState.imagePosX = 0;
      this.scrollState.basePosY = -0.25;
      this.scrollState.imageScale = 0.72;
      this.camera.position.z = 8.8;
    } else if (width < 1024) {
      this.scrollState.imagePosX = 1.1;
      this.scrollState.basePosY = 0.05;
      this.scrollState.imageScale = 0.92;
      this.camera.position.z = 8.0;
    } else if (width < 1280) {
      this.scrollState.imagePosX = 1.35;
      this.scrollState.basePosY = 0.05;
      this.scrollState.imageScale = 1.05;
      this.camera.position.z = 7.8;
    } else {
      this.scrollState.imagePosX = 1.65;
      this.scrollState.basePosY = 0.08;
      this.scrollState.imageScale = 1.15;
      this.camera.position.z = 7.5;
    }

    this.scrollState.imagePosY = this.scrollState.basePosY;
  }

  setScrollOffset(scrollY) {
    const vh = window.innerHeight;
    const scrollProgress = scrollY / vh;
    this.scrollState.imagePosY = this.scrollState.basePosY + (scrollProgress * 4.5);

    const opacityFactor = Math.max(0, 1 - (scrollProgress * 1.6));
    
    if (this.frontMat) this.frontMat.opacity = opacityFactor;
    if (this.backMat) this.backMat.opacity = opacityFactor;
    if (this.frameMesh) this.frameMesh.material.opacity = opacityFactor;
    if (this.glowMaterial) this.glowMaterial.opacity = opacityFactor * 0.85;

    if (scrollProgress >= 0.75) {
      this.scrollState.hidden = true;
    } else {
      this.scrollState.hidden = false;
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (!this.imageGroup) return;

    const elapsedTime = this.clock.getElapsedTime();

    // 1. Mouse Parallax
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.rootGroup.rotation.y = this.mouse.x * 0.22;
    this.rootGroup.rotation.x = this.mouse.y * 0.18;

    // 2. Floating Wave Motion
    const floatY = Math.sin(elapsedTime * 2.2) * 0.12;
    const floatZ = Math.sin(elapsedTime * 1.6) * 0.05;
    this.imageGroup.position.x += (this.scrollState.imagePosX - this.imageGroup.position.x) * 0.08;
    this.imageGroup.position.y += (this.scrollState.imagePosY + floatY - this.imageGroup.position.y) * 0.08;

    // 3. Smooth 3D Flip Interpolation
    this.scrollState.imageRotY += (this.targetRotY - this.scrollState.imageRotY) * 0.09;
    this.imageGroup.rotation.y = this.scrollState.imageRotY;
    this.imageGroup.rotation.z = floatZ;

    // Hover scale pulse
    const hoverBoost = this.scrollState.hovered ? 0.06 : 0;
    const s = this.scrollState.imageScale + hoverBoost;
    this.imageGroup.scale.set(s, s, s);

    // Particle Destruction
    const d = this.scrollState.destruction || 0;
    if (d > 0.01) {
      this.particles.material.opacity = Math.sin(Math.min(d, 1) * Math.PI) * 0.95;

      const cardScale = Math.max(0, 1 - d * 1.15);
      this.frameMesh.scale.set(cardScale, cardScale, cardScale);
      if (this.frontMesh) this.frontMesh.scale.set(cardScale, cardScale, cardScale);
      if (this.backMesh) this.backMesh.scale.set(cardScale, cardScale, cardScale);
      this.glowMesh.scale.set(cardScale, cardScale, cardScale);

      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < this.particleVelocities.length / 3; i++) {
        const vx = this.particleVelocities[i * 3];
        const vy = this.particleVelocities[i * 3 + 1];
        const vz = this.particleVelocities[i * 3 + 2];

        positions[i * 3] = this.baseParticlePositions[i * 3] + vx * d * 1.8;
        positions[i * 3 + 1] = this.baseParticlePositions[i * 3 + 1] + vy * d * 1.8;
        positions[i * 3 + 2] = this.baseParticlePositions[i * 3 + 2] + vz * d * 1.8;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    } else {
      this.particles.material.opacity = 0;
      this.frameMesh.scale.set(1, 1, 1);
      if (this.frontMesh) this.frontMesh.scale.set(1, 1, 1);
      if (this.backMesh) this.backMesh.scale.set(1, 1, 1);
      this.glowMesh.scale.set(1, 1, 1);
    }

    // Visibility control
    if (d >= 0.95 || this.scrollState.hidden) {
      this.imageGroup.visible = false;
    } else {
      this.imageGroup.visible = true;
    }

    // Glow color lerp
    if (this.glowMaterial) {
      this.glowMaterial.color.lerp(new THREE.Color(this.scrollState.glowColor), 0.1);
      this.glowMaterial.emissive.lerp(new THREE.Color(this.scrollState.glowColor), 0.1);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
