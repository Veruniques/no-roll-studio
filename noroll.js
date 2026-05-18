import * as THREE from 'three';

/* =====================================================================
   PROJECT DATA — 54 tiles (6 faces × 9 tiles).
   Edit any tile here. To use a real image later, replace `color` with
   `image: 'path/to/thumb.jpg'` and update tileMaterial() to load it.
   ===================================================================== */

const PALETTE = [
  '#e94c1f', '#f4a261', '#e9c46a', '#2a9d8f', '#264653', '#1d3557',
  '#a8dadc', '#457b9d', '#e63946', '#f1faee', '#bc6c25', '#dda15e',
  '#606c38', '#283618', '#fefae0', '#d4a373', '#ccd5ae', '#e9edc9',
  '#fad2e1', '#bee1e6', '#cddafd', '#fde2e4', '#dfe7fd', '#bcd4e6',
  '#001219', '#005f73', '#0a9396', '#94d2bd', '#ee9b00', '#ca6702',
  '#9b2226', '#ae2012', '#bb3e03', '#ff6b6b', '#ffd166', '#06d6a0',
  '#118ab2', '#073b4c', '#7209b7', '#560bad', '#480ca8', '#3a0ca3',
  '#3f37c9', '#4361ee', '#4895ef', '#4cc9f0', '#f72585', '#b5179e',
  '#7b2cbf', '#9d4edd', '#5a189a', '#10002b', '#240046', '#3c096c',
];

const FACE_LABELS = ['RIGHT', 'LEFT', 'TOP', 'BOTTOM', 'FRONT', 'BACK'];
const CATEGORIES  = ['CINEMA SPOT', 'YT COMMERCIAL', 'AI COMMERCIAL', 'AI REMAKE', 'HYBRID AI', 'TV COMMERCIAL'];

// Shades of #0F583D — brand green, varying lightness and slight hue shifts.
// Used for all surrounding tiles. The 8 shades cycle around the center.
const GREEN_SHADES = [
  '#0F583D', // base
  '#1a7551', // lighter
  '#093d2a', // darker
  '#256e4f', // muted lighter
  '#0c4a34', // deep
  '#2d8662', // bright
  '#164a37', // shadowed
  '#3a9670', // mint-leaning
];

/* Real project data, keyed by face index (0..5).
   Used to populate the hover preview for the 6 center (clickable) tiles. */
const THUMB_BASE = 'https://cdn.prod.website-files.com/69cceb194fe2acd762a294ab/';
const PROJECT_DATA = [
  {
    title: 'AI sponsor spot for cinema, for <em>RB</em>',
    desc:  'A cinematic AI sponsor spot directed for RB — full creative direction, no random generation.',
    thumb: THUMB_BASE + '6a0a14e1703fe31852d877e5_RB%20thumbnail_1.4.1.avif',
  },
  {
    title: 'YT commercial for <em>Monoprix</em>',
    desc:  'YouTube-native commercial for Monoprix, built with AI tools under a tight creative brief.',
    thumb: THUMB_BASE + '6a0a14e1dcc86926c3cfe27a_Monoprix%20thumbnail_1.7.1.avif',
  },
  {
    title: 'Voice commercial for <em>Fameplay</em>',
    desc:  'Voice-driven AI commercial for Fameplay — narrative direction meets generative production.',
    thumb: THUMB_BASE + '6a0a14e1752a7b23433a3695_Voice%20Advertisement_1.10.1.avif',
  },
  {
    title: 'AI remake of <em>Kofola</em> commercial',
    desc:  'A directed AI remake of an iconic Kofola commercial — asked by the original creator.',
    thumb: THUMB_BASE + '6a0a14e19d8abdb601506400_KofolaThumbnail_1.6.1.avif',
  },
  {
    title: 'Hybrid production commercial for <em>RB</em>',
    desc:  'Mixed-medium commercial for RB combining live footage with AI-directed sequences.',
    thumb: THUMB_BASE + '6a0a14e1f34c17ceb171e0fd_RB%20GENZ%20AD%20thumbnail_2.1.1.avif',
  },
  {
    title: 'AI commercial for <em>PPAS</em>',
    desc:  'A fully AI-generated TV commercial for PPAS — proof that direction matters even when every frame is generated.',
    thumb: THUMB_BASE + '6a0a14e14763583705e2dabc_PPAS%20thumbnail_1.2.2.avif',
  },
];

const TILES = [];
for (let f = 0; f < 6; f++) {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const idx = f * 9 + r * 3 + c;
      const isCenter = (r === 1 && c === 1);

      // Surrounding tiles cycle through GREEN_SHADES; index varies per position
      // so neighbouring tiles aren't identical, giving subtle facet variation.
      const greenIdx = (r * 3 + c + f * 2) % GREEN_SHADES.length;

      // For center (clickable) tiles: numbered 01-06 by face, matching the
      // portfolio section's project numbering. Outer green tiles still use
      // their grid position for visual identity (not user-facing).
      const projectNum = isCenter ? String(f + 1).padStart(2, '0') : String(idx + 1).padStart(2, '0');
      const projectData = isCenter ? PROJECT_DATA[f] : null;

      TILES.push({
        id: `${f}-${r}-${c}`,
        num: isCenter ? projectNum : `${f}.${r}${c}`,
        face: FACE_LABELS[f],
        title: isCenter ? projectData.title : `Project ${String(idx + 1).padStart(2, '0')}`,
        desc:  isCenter ? projectData.desc  : `Placeholder description for tile ${f}.${r}${c}. Swap this with your real project copy.`,
        thumb: isCenter ? projectData.thumb : null,
        tag: CATEGORIES[f],
        color: isCenter ? '#000000' : GREEN_SHADES[greenIdx],
        link: isCenter ? `#project-${projectNum}` : `#project-${String(idx + 1).padStart(2, '0')}`,
        isCenter: isCenter,
      });
    }
  }
}

/* =====================================================================
   SCENE
   ===================================================================== */

const canvas = document.getElementById('cube-canvas');
const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 9);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

scene.add(new THREE.AmbientLight(0xffffff, 0.65));

const key = new THREE.DirectionalLight(0xffffff, 1.1);
key.position.set(5, 6, 5);
key.castShadow = true;
key.shadow.mapSize.set(1024, 1024);
key.shadow.camera.near = 0.1;
key.shadow.camera.far = 30;
key.shadow.camera.left = -8; key.shadow.camera.right = 8;
key.shadow.camera.top = 8;   key.shadow.camera.bottom = -8;
key.shadow.bias = -0.0008;
scene.add(key);

const fill = new THREE.DirectionalLight(0xffe9d6, 0.45);
fill.position.set(-4, 2, 3);
scene.add(fill);

const rim = new THREE.DirectionalLight(0xc8d8ff, 0.35);
rim.position.set(0, -3, -5);
scene.add(rim);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(40, 40),
  new THREE.ShadowMaterial({ opacity: 0.16 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -2.6;
ground.receiveShadow = true;
scene.add(ground);

/* =====================================================================
   CUBE — 27 cubies with real GAPS so background shows through.
   Each outer face uses its tile color.
   Inner sides use a dark material — visible through gaps for depth.
   ===================================================================== */

const CUBIE_SIZE = 0.86;   // smaller than spacing → visible gap
const SPACING    = 1.04;
const cubeGroup = new THREE.Group();
scene.add(cubeGroup);

const cubies = [];

/* Texture loader for project thumbnails. To get true "object-fit: cover"
   behavior on the square cube face, we don't use Three.js UV manipulation
   (which can be unreliable depending on geometry UV layout). Instead, when
   each thumbnail loads, we draw it into a SQUARE canvas — center-cropping
   it manually — and use the resulting canvas as a CanvasTexture. This is
   bulletproof: no stretching, no UV math, the source is already square. */
const tileTextures = []; // index 0..5 = face → THREE.CanvasTexture (or null)

function loadCenterCroppedTexture(url, faceIdx, onReady) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const SIZE = 512;
    const canvas = document.createElement('canvas');
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext('2d');
    // Center-crop: largest square that fits inside the source image
    const srcSide = Math.min(img.width, img.height);
    const sx = (img.width  - srcSide) / 2;
    const sy = (img.height - srcSide) / 2;
    try {
      ctx.drawImage(img, sx, sy, srcSide, srcSide, 0, 0, SIZE, SIZE);
      // Test if canvas is tainted (CORS rejected the read) by trying to read it
      ctx.getImageData(0, 0, 1, 1);
      // Canvas is clean — use it as a CanvasTexture
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      console.log(`[cube-tile ${faceIdx}] canvas-cropped texture ready (${img.width}×${img.height} → 512²)`);
      onReady(tex);
    } catch (err) {
      // Canvas was tainted by cross-origin draw. Fall back to using the image
      // directly as a Texture. The image will be stretched on the square face
      // (no crop possible without canvas), but at least it shows.
      console.warn(`[cube-tile ${faceIdx}] canvas tainted (CORS), falling back to direct texture (image will stretch):`, err.message);
      const tex = new THREE.Texture(img);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      onReady(tex);
    }
  };
  img.onerror = (err) => {
    console.error(`[cube-tile ${faceIdx}] image load failed:`, url, err);
  };
  img.src = url;
}

for (let f = 0; f < 6; f++) {
  loadCenterCroppedTexture(PROJECT_DATA[f].thumb, f, (tex) => {
    tileTextures[f] = tex;
    const tileId = `${f}-1-1`;
    let applied = 0;
    cubies.forEach(cubie => {
      if (!Array.isArray(cubie.material)) return;
      cubie.material.forEach(mat => {
        if (mat.userData?.tile?.id === tileId) {
          mat.map = tex;
          if (mat.color) mat.color.set(0xffffff);
          mat.needsUpdate = true;
          applied++;
        }
      });
    });
    console.log(`[cube-tile ${f}] applied to ${applied} material(s)`);
  });
}

function tileMaterial(tile) {
  // Center (project) tiles: MeshBasicMaterial — does NOT react to scene lights,
  // so the thumbnail displays at its true colors with no shadows or darkening.
  // Outer green tiles: MeshStandardMaterial — keeps the 3D-lit cube aesthetic.
  if (tile.isCenter) {
    const faceIdx = parseInt(tile.id.split('-')[0], 10);
    const texture = tileTextures[faceIdx] || null;
    const mat = new THREE.MeshBasicMaterial({
      color: texture ? 0xffffff : new THREE.Color(tile.color),
      map: texture,
    });
    mat.userData.tile = tile;
    return mat;
  }
  const mat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(tile.color),
    roughness: 0.45,
    metalness: 0.05,
  });
  mat.userData.tile = tile;
  return mat;
}

function innerMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x14110f,
    roughness: 0.85,
    metalness: 0.0,
  });
}

/* BoxGeometry material order: [+X, -X, +Y, -Y, +Z, -Z]
   For each face, when this cubie is on that face's outer layer, compute the
   tile's (row, col) on that face from the cubie's grid coords. row goes
   top→bottom (0..2), col goes left→right (0..2) when looking at the face. */
const FACE_MAP = [
  // [faceIdx, gridAxis ('x'|'y'|'z'), gridSign (1 or -1), rowFn, colFn]
  [0, 'x',  1, (gx,gy,gz) => 1 - gy, (gx,gy,gz) => 1 - gz], // +X RIGHT
  [1, 'x', -1, (gx,gy,gz) => 1 - gy, (gx,gy,gz) => 1 + gz], // -X LEFT
  [2, 'y',  1, (gx,gy,gz) => 1 + gz, (gx,gy,gz) => 1 + gx], // +Y TOP
  [3, 'y', -1, (gx,gy,gz) => 1 - gz, (gx,gy,gz) => 1 + gx], // -Y BOTTOM
  [4, 'z',  1, (gx,gy,gz) => 1 - gy, (gx,gy,gz) => 1 + gx], // +Z FRONT
  [5, 'z', -1, (gx,gy,gz) => 1 - gy, (gx,gy,gz) => 1 - gx], // -Z BACK
];

function materialsForCubie(gx, gy, gz) {
  const g = { x: gx, y: gy, z: gz };
  return FACE_MAP.map(([faceIdx, axis, sign, rowFn, colFn]) =>
    g[axis] === sign
      ? tileMaterial(TILES[faceIdx * 9 + rowFn(gx,gy,gz) * 3 + colFn(gx,gy,gz)])
      : innerMaterial()
  );
}

const cubieGeom = new THREE.BoxGeometry(CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE);

// Border material for center tiles — bright orange, drawn as flat lines
// (no lighting), and slightly inflated so it sits on the face surface.
const BORDER_COLOR = 0xFF2E00;
const borderMat = new THREE.LineBasicMaterial({
  color: BORDER_COLOR,
  linewidth: 2, // note: most browsers cap line width at 1px in WebGL
});

// Helper — given a face direction (axis, sign), build a square border outline
// the size of one face, positioned just outside that face of the cubie.
function makeFaceBorder(axis, sign) {
  const s = CUBIE_SIZE / 2;
  const offset = s + 0.002;        // outward push to prevent z-fighting
  const off = sign * offset;
  // Square outline (5 points, closed loop). The two corners of the square
  // live on the two non-`axis` axes. We build the loop on those and place
  // the constant `off` value on `axis`.
  const corners = [[-s,-s], [s,-s], [s,s], [-s,s], [-s,-s]];
  const pts = corners.map(([a, b]) => {
    if (axis === 'x') return new THREE.Vector3(off,   a,   b);
    if (axis === 'y') return new THREE.Vector3(  a, off,   b);
    /* z */            return new THREE.Vector3(  a,   b, off);
  });
  return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), borderMat);
}

// A center cubie has exactly ONE non-zero axis. Detect which.
function getCenterFaceAxis(gx, gy, gz) {
  const g = { x: gx, y: gy, z: gz };
  const axes = ['x','y','z'].filter(a => g[a] !== 0);
  return axes.length === 1 ? [axes[0], g[axes[0]]] : null;
}

for (let x = -1; x <= 1; x++) {
  for (let y = -1; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      const mats = materialsForCubie(x, y, z);
      const cubie = new THREE.Mesh(cubieGeom, mats);
      cubie.position.set(x * SPACING, y * SPACING, z * SPACING);
      cubie.castShadow = true;
      cubie.receiveShadow = true;
      cubie.userData = { gx: x, gy: y, gz: z };

      // If this is the center of a face, attach an orange border outline
      const centerFace = getCenterFaceAxis(x, y, z);
      if (centerFace) {
        const border = makeFaceBorder(centerFace[0], centerFace[1]);
        cubie.add(border); // child of the cubie so it rotates with it
      }

      cubeGroup.add(cubie);
      cubies.push(cubie);
    }
  }
}

/* =====================================================================
   DICE — green showing 1, orange showing 6.
   Built from BoxGeometry with canvas-drawn pip textures per face.
   Each die's 6 faces follow standard dice convention: opposite faces sum to 7.
   ===================================================================== */

// Draw pips for a given dice number onto a canvas, return as a THREE.Texture
// Pip positions on a 3x3 grid; (0,0) top-left, (2,2) bottom-right.
const PIP_LAYOUTS = {
  1: [[1, 1]],
  2: [[0, 0], [2, 2]],
  3: [[0, 0], [1, 1], [2, 2]],
  4: [[0, 0], [2, 0], [0, 2], [2, 2]],
  5: [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]],
  6: [[0, 0], [2, 0], [0, 1], [2, 1], [0, 2], [2, 2]],
};

// `bg` and `pip` are CSS color strings.
function makeDieFaceTexture(number, bg, pip) {
  const size = 512;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  const positions = PIP_LAYOUTS[number] || [];
  const radius = size * 0.085;
  const cellPos = [size * 0.25, size * 0.50, size * 0.75]; // 3x3 cell centers

  ctx.fillStyle = pip;
  for (const [gx, gy] of positions) {
    ctx.beginPath();
    ctx.arc(cellPos[gx], cellPos[gy], radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeDie(bg, pip, frontNumber) {
  // BoxGeometry material order: [+X, -X, +Y, -Y, +Z, -Z]. Camera at z=9
  // looks at the +Z face directly, so the `frontNumber` goes on slot 4.
  // Opposite faces sum to 7 (standard die convention).
  const LAYOUTS = {
    1: [2, 5, 3, 4, 1, 6],   // front=1 back=6, 2/5 on X, 3/4 on Y
    6: [5, 2, 4, 3, 6, 1],   // front=6 back=1
  };
  const nums = LAYOUTS[frontNumber] || [1, 2, 3, 4, 5, 6];
  const mats = nums.map(n => new THREE.MeshStandardMaterial({
    map: makeDieFaceTexture(n, bg, pip),
    roughness: 0.4,
    metalness: 0.05,
    transparent: true,
    opacity: 0,
  }));
  // Slight edge rounding (~2% of size) — softens the silhouette without
  // making the die look bulgy.
  const DIE_SIZE = 1.2;
  const geom = makeRoundedBoxGeometry(DIE_SIZE, DIE_SIZE, DIE_SIZE, 0.025, 3);
  const mesh = new THREE.Mesh(geom, mats);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/* Rounded box that keeps 6 material groups (so we can still apply a different
   pip texture per face). Each vertex is clamped to an inner box, then projected
   outward by `radius` — that gives spherical fillets at edges + corners. */
function makeRoundedBoxGeometry(width, height, depth, radius, segments) {
  const geo = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);
  const pos = geo.attributes.position;
  const ix = width/2 - radius, iy = height/2 - radius, iz = depth/2 - radius;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const cx = THREE.MathUtils.clamp(v.x, -ix, ix);
    const cy = THREE.MathUtils.clamp(v.y, -iy, iy);
    const cz = THREE.MathUtils.clamp(v.z, -iz, iz);
    const dx = v.x - cx, dy = v.y - cy, dz = v.z - cz;
    const len = Math.hypot(dx, dy, dz);
    if (len > 0) {
      pos.setXYZ(i,
        cx + dx / len * radius,
        cy + dy / len * radius,
        cz + dz / len * radius);
    }
  }
  geo.computeVertexNormals();
  return geo;
}

// Both dice use white pips on their colored faces.
const greenDie  = makeDie('#0A3B29', '#FFFFFF', 1);
const orangeDie = makeDie('#FF5700', '#FFFFFF', 6);
scene.add(greenDie, orangeDie);

// Green starts co-located with the cube — that's the "transformation"
// trick (cube fades out, die fades in at the same point).
// Orange emerges from the distant background.
greenDie.position.set(0, 0, 0);
orangeDie.position.set(0.7, 0.3, -25);

// Mobile-aware die scale. On narrow viewports the dice shrink so they
// don't dominate the small screen. Re-applied on resize/orientation change.
function applyDieScale() {
  const w = window.innerWidth;
  // < 480px → 60% size, < 720px → 75% size, otherwise full size
  const scale = w < 480 ? 0.6 : w < 720 ? 0.75 : 1.0;
  greenDie.scale.setScalar(scale);
  orangeDie.scale.setScalar(scale);
}
applyDieScale();
window.addEventListener('resize', applyDieScale);



const state = {
  autoSpeedY: 0.0035,
  autoSpeedX: 0.0014,
  velX: 0, velY: 0,
  isDragging: false,
  lastX: 0, lastY: 0,
  mouseX: 0, mouseY: 0,
  repelOffset: new THREE.Vector3(),
};

const cursorEl = document.getElementById('cursor');

/* =====================================================================
   MOBILE HAMBURGER MENU
   Toggle visibility, close on link tap or Escape key.
   ===================================================================== */
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function setMenuOpen(open) {
  hamburgerBtn.classList.toggle('open', open);
  mobileMenu.classList.toggle('open', open);
  hamburgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
  hamburgerBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.style.overflow = open ? 'hidden' : ''; // prevent background scroll while open
}

hamburgerBtn.addEventListener('click', () => {
  setMenuOpen(!hamburgerBtn.classList.contains('open'));
});

// Close menu when any link inside is tapped (link will scroll itself via data-scroll-to)
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => setMenuOpen(false));
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && hamburgerBtn.classList.contains('open')) setMenuOpen(false);
});

// Smooth scroll to a project anchor (`#project-01` etc.) from a cube tile click.
// Uses scrollIntoView so it works whether or not the project section is in view yet.
function scrollToProject(hash) {
  const id = hash.replace(/^#/, '');
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Fallback: hard navigate if no element exists for the anchor
    window.location.hash = hash;
  }
}

window.addEventListener('mousemove', (e) => {
  state.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  state.mouseY = -((e.clientY / window.innerHeight) * 2 - 1);
  cursorEl.style.left = e.clientX + 'px';
  cursorEl.style.top  = e.clientY + 'px';

  if (state.isDragging) {
    const dx = e.clientX - state.lastX;
    const dy = e.clientY - state.lastY;
    state.velY = dx * 0.005;
    state.velX = dy * 0.005;
    state.lastX = e.clientX;
    state.lastY = e.clientY;
  }
});

canvas.addEventListener('mousedown', (e) => {
  state.isDragging = true;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
  state.downX = e.clientX;
  state.downY = e.clientY;
  state.downTime = performance.now();
  cursorEl.classList.add('drag');
});
window.addEventListener('mouseup', (e) => {
  // Determine if this was a click (small motion, short duration) vs a drag
  if (state.isDragging && state.downX !== undefined) {
    const dx = e.clientX - state.downX;
    const dy = e.clientY - state.downY;
    const distSq = dx * dx + dy * dy;
    const elapsed = performance.now() - state.downTime;
    if (distSq < 36 && elapsed < 350) {
      // It's a click — find which tile (if any) is under the cursor and open its link
      mouseVec.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseVec.y = -((e.clientY / window.innerHeight) * 2 - 1);
      raycaster.setFromCamera(mouseVec, camera);
      const hits = raycaster.intersectObjects(cubies, false);
      if (hits.length) {
        const matIdx = Math.floor(hits[0].faceIndex / 2);
        const mat = hits[0].object.material[matIdx];
        const tile = mat?.userData?.tile;
        if (tile && tile.isCenter && tile.link) {
          scrollToProject(tile.link);
        }
      }
    }
  }
  state.isDragging = false;
  cursorEl.classList.remove('drag');
});

canvas.addEventListener('touchstart', (e) => {
  state.isDragging = true;
  state.lastX = e.touches[0].clientX;
  state.lastY = e.touches[0].clientY;
  state.downX = e.touches[0].clientX;
  state.downY = e.touches[0].clientY;
  state.downTime = performance.now();
}, { passive: true });
window.addEventListener('touchmove', (e) => {
  if (!state.isDragging) return;
  const t = e.touches[0];
  const dx = t.clientX - state.lastX;
  const dy = t.clientY - state.lastY;
  state.velY = dx * 0.005;
  state.velX = dy * 0.005;
  state.lastX = t.clientX;
  state.lastY = t.clientY;
}, { passive: true });
window.addEventListener('touchend', (e) => {
  if (state.isDragging && state.downX !== undefined) {
    const last = e.changedTouches && e.changedTouches[0];
    if (last) {
      const dx = last.clientX - state.downX;
      const dy = last.clientY - state.downY;
      const distSq = dx * dx + dy * dy;
      const elapsed = performance.now() - state.downTime;
      if (distSq < 64 && elapsed < 400) {
        mouseVec.x = (last.clientX / window.innerWidth) * 2 - 1;
        mouseVec.y = -((last.clientY / window.innerHeight) * 2 - 1);
        raycaster.setFromCamera(mouseVec, camera);
        const hits = raycaster.intersectObjects(cubies, false);
        if (hits.length) {
          const matIdx = Math.floor(hits[0].faceIndex / 2);
          const mat = hits[0].object.material[matIdx];
          const tile = mat?.userData?.tile;
          if (tile && tile.isCenter && tile.link) {
            scrollToProject(tile.link);
          }
        }
      }
    }
  }
  state.isDragging = false;
});

/* Hover — find exact tile under cursor via faceIndex → material slot */
const raycaster = new THREE.Raycaster();
const mouseVec = new THREE.Vector2();
let hoveredTileId = null;
let hoverTimeout = null;

const previewEl  = document.getElementById('preview');
const prevNum    = document.getElementById('prev-num');
const prevSwatch = document.getElementById('prev-swatch');
const prevTitle  = document.getElementById('prev-title');
const prevDesc   = document.getElementById('prev-desc');
const prevTag    = document.getElementById('prev-tag');

function checkHover() {
  if (state.isDragging) return;
  mouseVec.x = state.mouseX;
  mouseVec.y = state.mouseY;
  raycaster.setFromCamera(mouseVec, camera);
  const hits = raycaster.intersectObjects(cubies, false);

  if (hits.length) {
    const hit = hits[0];
    // BoxGeometry: 2 triangles per face → faceIndex / 2 gives material slot 0..5
    const matIdx = Math.floor(hit.faceIndex / 2);
    const mat = hit.object.material[matIdx];
    const tile = mat?.userData?.tile;

    if (tile && tile.isCenter) {
      // Only the center (black) tile of each face shows the project preview.
      // The surrounding green-shaded tiles are visual filler.
      cursorEl.classList.add('hover');
      if (tile.id !== hoveredTileId) {
        hoveredTileId = tile.id;
        prevNum.textContent  = `PROJECT ${tile.num}`;
        prevSwatch.src       = tile.thumb || '';
        prevTitle.innerHTML  = tile.title;
        prevDesc.textContent = tile.desc;
        prevTag.textContent  = tile.tag;
        previewEl.classList.add('show');
        clearTimeout(hoverTimeout);
      }
    } else if (hoveredTileId !== null) {
      // Either hovering an inner face, a non-center green tile, or empty space
      cursorEl.classList.remove('hover');
      hoveredTileId = null;
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => previewEl.classList.remove('show'), 200);
    } else {
      cursorEl.classList.remove('hover');
    }
  } else if (hoveredTileId !== null) {
    cursorEl.classList.remove('hover');
    hoveredTileId = null;
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => previewEl.classList.remove('show'), 200);
  }
}

/* =====================================================================
   SCROLL-DRIVEN TRANSFORMATION
   progress 0 → 1 as user scrolls through hero height.
   0.00 - 0.20  : cube alive, auto-rotating. Dice hidden.
   0.20 - 0.45  : cube starts shrinking and fading. Dice fade in at center.
   0.45 - 0.75  : dice separate outward (left/right) while tumbling on multiple axes.
   0.75 - 1.00  : dice fall slightly and rotate to their final landing pose.
                  Green lands at left showing 1 up. Orange lands at right showing 6 up.
   ===================================================================== */

const scrollHintEl = document.getElementById('scroll-hint');
const replayEl = document.getElementById('replay');
const statementEl = document.getElementById('statement');

let scrollProgress = 0;       // 0 to 1, tracks scroll through hero into section 2
let secondaryProgress = 0;    // 0 to 1, tracks scroll from section 2 into section 3
let smoothProgress = 0;       // lerped for smoother frame-to-frame motion
let smoothSecondary = 0;
const _zero = new THREE.Vector3(); // reusable origin vector to avoid per-frame allocation

function updateScrollProgress() {
  const heroHeight = window.innerHeight;
  scrollProgress = THREE.MathUtils.clamp(window.scrollY / heroHeight, 0, 1);
  // Secondary progress: 0 when we're at end of section 2 (1 viewport scrolled),
  // 1 when we've scrolled 2 full viewports (into section 3 territory).
  secondaryProgress = THREE.MathUtils.clamp(
    (window.scrollY - heroHeight) / heroHeight, 0, 1
  );
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// Standard easing helpers
function easeInOut(t) { return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2; }
function easeOut(t)   { return 1 - Math.pow(1 - t, 3); }
function easeIn(t)    { return t * t * t; }
function smoothstep(edge0, edge1, x) {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

// Final landing positions for the two dice.
// We want them side-by-side fairly close to each other, centered horizontally,
// sitting in the lower portion of the viewport so they appear above the statement.
// World units — the camera is at z=9 with FOV 35, so roughly ±3 fills the view.
const GREEN_LANDING = new THREE.Vector3(-1.6, -0.6, 1.5);
const ORANGE_LANDING = new THREE.Vector3(1.6, -0.6, 1.5);

// Hover oscillation offsets after landing (continuous gentle drift)
let hoverPhase = 0;



function animate() {
  requestAnimationFrame(animate);
  hoverPhase += 0.02;

  // Smooth the scroll progress so frame-to-frame motion isn't jittery
  smoothProgress += (scrollProgress - smoothProgress) * 0.12;
  smoothSecondary += (secondaryProgress - smoothSecondary) * 0.12;
  const p = smoothProgress;
  const sp = smoothSecondary; // 0→1 as user enters section 3

  /* ============================================================
     PHASE 1: Rubik's cube life — only active when progress is low.
     ============================================================ */
  state.velX *= 0.94;
  state.velY *= 0.94;

  const inertia = Math.abs(state.velX) + Math.abs(state.velY);
  const cubeActive = p < 0.05; // cube only auto-rotates when essentially at top

  if (cubeActive) {
    if (!state.isDragging && inertia < 0.0008) {
      cubeGroup.rotation.y += state.autoSpeedY;
      cubeGroup.rotation.x += state.autoSpeedX;
    } else {
      cubeGroup.rotation.y += state.velY;
      cubeGroup.rotation.x += state.velX;
    }

    // Cursor repel
    const target = new THREE.Vector3(state.mouseX * 2.2, state.mouseY * 1.6, 0);
    const dir = new THREE.Vector3().subVectors(new THREE.Vector3(0,0,0), target);
    const dist = dir.length();
    const repelStrength = THREE.MathUtils.clamp(1.4 / (dist * dist + 0.4), 0, 0.55);
    dir.normalize().multiplyScalar(repelStrength);
    state.repelOffset.lerp(dir, 0.08);
  } else {
    // Bleed the repel offset back to zero so cube isn't askew when transitioning
    state.repelOffset.lerp(new THREE.Vector3(0,0,0), 0.1);
  }

  /* ============================================================
     PHASE 2: The ROLL — the cube tumbles fast and shrinks to die size.
     The crossfade to the green die is hidden inside the fast rotation
     when the cube is at its smallest, around p=0.30–0.40.
     ============================================================ */
  const rollProgress = smoothstep(0.05, 0.40, p);
  const rollEased    = easeInOut(rollProgress);

  // Shrink: Rubik's cube spans ~3.12 units, die is 1.2 → final scale 0.38
  cubeGroup.scale.setScalar(THREE.MathUtils.lerp(1.0, 0.38, rollEased));

  // Roll: extra spin during transformation, fades as we reach landing
  if (rollProgress > 0 && rollProgress < 1) {
    cubeGroup.rotation.y += 0.15 * (1 - rollEased) * easeIn(rollProgress);
    cubeGroup.rotation.x += 0.10 * (1 - rollEased) * easeIn(rollProgress);
  }

  // Fade: cubies vanish in the last third of the roll
  const cubeFade = 1 - smoothstep(0.30, 0.40, p);
  cubeGroup.visible = cubeFade > 0.02;
  for (const cubie of cubies) {
    for (const mat of cubie.material) {
      mat.transparent = true;
      mat.opacity = cubeFade;
    }
  }

  if (rollProgress > 0.05) state.repelOffset.lerp(_zero, 0.1);
  cubeGroup.position.x = state.repelOffset.x * (1 - rollEased);
  cubeGroup.position.y = state.repelOffset.y * (1 - rollEased);

  /* ============================================================
     PHASE 3: Dice fade in.
     - Green die: takes over from the rolling cube at exactly p=0.35,
       when the cube is fully collapsed to die-size and rotating fastest.
       The fast rotation hides the material swap.
     - Orange die: emerges from the distant background, delayed so it
       feels like a separate event.
     ============================================================ */
  // Green die fade-in is timed tightly to overlap with cube fade-out:
  // - Cube fades out from p=0.30 to p=0.40
  // - Green die fades in from p=0.32 to p=0.42
  // The 2% overlap windows on both sides give a brief moment where both
  // are partially visible, which sells the "transformation" rather than
  // "swap".
  const greenFade = smoothstep(0.32, 0.42, p);
  const orangeFade = smoothstep(0.40, 0.60, p);

  // Fade dice OUT as user scrolls into section 3 (they yield to the monologue)
  // sp goes 0→1 as user scrolls from end-of-hero into section 3.
  // We start fading at sp=0.2 and fully gone by sp=0.7.
  const sectionFade = 1 - smoothstep(0.2, 0.7, sp);

  greenDie.material.forEach(m => { m.opacity = greenFade * sectionFade; });
  orangeDie.material.forEach(m => { m.opacity = orangeFade * sectionFade; });
  greenDie.visible = greenFade * sectionFade > 0.005;
  orangeDie.visible = orangeFade * sectionFade > 0.005;

  /* ============================================================
     PHASE 4: Trajectories — different starting points per die.
     Both arrive at their landing spots by jp=1.
     ============================================================ */
  const jpRaw = THREE.MathUtils.clamp((p - 0.2) / 0.8, 0, 1);
  const jp = easeInOut(jpRaw);

  // GREEN: starts at the cube's position (origin in front of camera), then
  // drifts BACKWARD slightly in z (recedes a tiny bit, like settling) before
  // coming forward to its landing position. This adds a subtle "the cube
  // collapses, the die emerges" beat without doing a full back-and-forth.
  // Position + arc lerp into a helper to halve the duplication.
  function lerpDieTo(die, startPos, landing, jp, arcAmp) {
    die.position.x = THREE.MathUtils.lerp(startPos.x, landing.x, jp);
    die.position.y = THREE.MathUtils.lerp(startPos.y, landing.y, jp) + Math.sin(jp * Math.PI) * arcAmp;
    die.position.z = THREE.MathUtils.lerp(startPos.z, landing.z, jp);
  }
  // GREEN: starts at the cube's position (origin in front of camera).
  // ORANGE: starts far back in the distance, grows forward as it approaches.
  lerpDieTo(greenDie,  new THREE.Vector3(0, 0, 0),       GREEN_LANDING,  jp, 0.20);
  lerpDieTo(orangeDie, new THREE.Vector3(0.7, 0.3, -25), ORANGE_LANDING, jp, 0.35);

  // Tumble + snap to clean orientation in the last 8% of journey.
  // Green tumbles HIGH at start (it must match the cube's roll speed during
  // the crossfade); both decay to a clean settled landing.
  const tumbleAmount = easeOut(1 - jp);
  const snapT = jp > 0.92 ? (jp - 0.92) / 0.08 : 0;
  function tumbleDie(die, mx, my, mz) {
    die.rotation.x = jp * Math.PI * mx * tumbleAmount * (1 - snapT);
    die.rotation.y = jp * Math.PI * my * tumbleAmount * (1 - snapT);
    die.rotation.z = jp * Math.PI * mz * tumbleAmount * (1 - snapT);
  }
  tumbleDie(greenDie,   3.5,  4.0,  2.0);
  tumbleDie(orangeDie, -2.5,  3.0, -1.8);

  /* ============================================================
     PHASE 5: After landing — gentle hover & "nod" toward statement.
     Adds a subtle bobbing motion + tilts the dice slightly to "point" downward.
     ============================================================ */
  if (jp > 0.98) {
    const landed = (jp - 0.98) / 0.02;
    // Slow vertical bob
    const bob = Math.sin(hoverPhase) * 0.04 * landed;
    const bob2 = Math.sin(hoverPhase * 0.7 + 1.5) * 0.04 * landed;
    greenDie.position.y += bob;
    orangeDie.position.y += bob2;
    // Gentle nod forward (rotate around X so the face tilts toward the user/down)
    greenDie.rotation.x = Math.sin(hoverPhase * 0.5) * 0.06 * landed;
    orangeDie.rotation.x = Math.sin(hoverPhase * 0.5 + 0.7) * 0.06 * landed;
    // Slight inward Y rotation so they look like they're addressing each other / the center
    greenDie.rotation.y = 0.15 * landed + Math.sin(hoverPhase * 0.4) * 0.05 * landed;
    orangeDie.rotation.y = -0.15 * landed + Math.sin(hoverPhase * 0.4 + 1) * 0.05 * landed;
  }

  /* ============================================================
     PHASE 6: UI affordances based on scroll state.
     ============================================================ */
  // Show scroll hint only while user is at the top and hasn't started scrolling
  if (p < 0.05) {
    scrollHintEl.classList.add('show');
  } else {
    scrollHintEl.classList.remove('show');
  }

  // Reveal section 2 statement text + subtitle as cube fades out
  const statementText = document.querySelector('.statement-text');
  const statementSub = document.querySelector('.statement-sub');
  const statementCoda = document.querySelector('.statement-coda');
  if (statementText && statementSub) {
    if (p > 0.3) {
      statementText.classList.add('show');
      statementSub.classList.add('show');
    } else {
      statementText.classList.remove('show');
      statementSub.classList.remove('show');
    }
  }
  // Reveal the coda after dice have landed (later than headline reveal).
  // Tied to p>0.85 so it appears at the end of the dice-landing animation —
  // the punchline lands as the dice settle. */
  if (statementCoda) {
    if (p > 0.85) {
      statementCoda.classList.add('show');
    } else {
      statementCoda.classList.remove('show');
    }
  }

  // Hide ticker once transitioning to dice
  const tickerEl = document.querySelector('.ticker');
  if (tickerEl) {
    if (p > 0.15) tickerEl.classList.add('hidden');
    else tickerEl.classList.remove('hidden');
  }

  // Fade the hero headline as we scroll out of the hero section.
  // This lets the section 2 headline have the stage to itself.
  const headlineStackEl = document.querySelector('.headline-stack');
  if (headlineStackEl) {
    if (p > 0.15) headlineStackEl.classList.add('fading');
    else headlineStackEl.classList.remove('fading');
  }

  // Lock cube canvas pointer events once scrolled in (so section 2 is interactive)
  if (p > 0.1) {
    canvas.classList.add('locked');
  } else {
    canvas.classList.remove('locked');
  }

  // Fade out the entire canvas once user has passed the monologue section.
  // Beyond that point the cube/dice are no longer part of the narrative —
  // About/Portfolio/Contact should have the cream background to themselves.
  const aboutEl = document.getElementById('about');
  if (aboutEl) {
    const aboutTop = aboutEl.offsetTop;
    if (window.scrollY + window.innerHeight * 0.5 > aboutTop) {
      canvas.classList.add('faded');
    } else {
      canvas.classList.remove('faded');
    }
  }

  // Show replay button once dice have landed, hide again in section 3
  if (jp > 0.95 && sp < 0.3) {
    replayEl.classList.add('show');
  } else {
    replayEl.classList.remove('show');
  }

  // Hover detection only works when cube is alive
  if (cubeActive) {
    checkHover();
  } else {
    // Hide preview if it was open
    if (hoveredTileId !== null) {
      hoveredTileId = null;
      previewEl.classList.remove('show');
    }
  }

  renderer.render(scene, camera);
}
animate();

// Replay button — scrolls smoothly back to the top so the user can see the
// transformation again. We do this rather than instantly resetting because
// scroll-driven animations need scroll to actually move to look right.
replayEl.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* =====================================================================
   SMOOTH-SCROLL NAVIGATION
   Any element with data-scroll-to="<sectionId>" smoothly scrolls there.
   Also updates the side-nav active dot based on which section is in view.
   ===================================================================== */
document.querySelectorAll('[data-scroll-to]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(el.dataset.scrollTo);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const sideNavButtons = document.querySelectorAll('.side-nav button');
sideNavButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Update active side-nav dot based on scroll position
const sectionIds = ['hero', 'statement', 'monologue', 'about', 'portfolio', 'contact'];
function updateActiveSection() {
  const scrollY = window.scrollY;
  const viewportMid = scrollY + window.innerHeight / 2;
  let activeId = sectionIds[0];
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.offsetTop <= viewportMid) activeId = id;
  }
  sideNavButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === activeId);
  });
}
window.addEventListener('scroll', updateActiveSection, { passive: true });
updateActiveSection();

/* =====================================================================
   PITCH-FRAME LIVE PREVIEW
   Form inputs on the left → slate preview on the right.
   ===================================================================== */
const pitchSubject  = document.getElementById('pitch-subject');
const pitchMedia    = document.getElementById('pitch-media');
const pitchEmail    = document.getElementById('pitch-email');
const moodChipsEl   = document.getElementById('pitch-mood-chips');
const pitchFrame    = document.getElementById('pitch-frame');
const frameSubject  = document.getElementById('frame-subject');
const frameScene    = document.getElementById('frame-scene');
const frameMoodLbl  = document.getElementById('frame-mood-label');

let currentMood = null;

// Mood chips — single-select, toggleable, drives the slate background gradient
moodChipsEl.querySelectorAll('.pitch-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const mood = chip.dataset.mood;
    if (currentMood === mood) {
      currentMood = null;
      chip.classList.remove('active');
    } else {
      currentMood = mood;
      moodChipsEl.querySelectorAll('.pitch-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    }
    pitchFrame.className = 'pitch-frame' + (currentMood ? ' mood-' + currentMood : '');
    frameMoodLbl.textContent = 'MOOD: ' + (currentMood ? currentMood.toUpperCase() : '—');
  });
});

// Live text updates — Scene and Type of production write to the slate
function updateFrame() {
  const subj = pitchSubject.value.trim();
  if (subj) {
    frameSubject.textContent = subj.toUpperCase();
    frameSubject.classList.remove('empty');
  } else {
    frameSubject.textContent = '';
    frameSubject.classList.add('empty');
  }
  const mdt = pitchMedia.value.trim();
  if (mdt) {
    frameScene.textContent = mdt;
    frameScene.classList.remove('empty');
  } else {
    frameScene.textContent = '';
    frameScene.classList.add('empty');
  }
}
[pitchSubject, pitchMedia].forEach(el => {
  el.addEventListener('input', updateFrame);
});

/* =====================================================================
   FORM SUBMISSION — Formspree (one-click, no mail client required).

   How it works:
   - User clicks Send → fields posted to Formspree's endpoint via fetch()
   - Formspree forwards as email to veronikadominikova@gmail.com
   - User sees "Pitch sent" confirmation inline; no mail client opens
   - On failure, falls back to mailto: so the lead isn't lost

   What's protected (unchanged from before):
   - Strict email regex (not HTML5's permissive default)
   - Scene must have at least 2 characters
   - Honeypot field: bots that fill it get silently rejected
   - Time-on-page check: real users take >2s, bots are instant
   - localStorage rate limit: 1 submit per 30s per browser
   - Formspree adds its own server-side spam filter on top of all this
   ===================================================================== */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjrqrkj';
const FALLBACK_EMAIL = 'veronikadominikova@gmail.com'; // used if Formspree is down
const PAGE_LOAD_TIME = Date.now();
const RATE_LIMIT_MS = 30_000;

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const honeypotEl = document.getElementById('pitch-website');
const errorEl    = document.getElementById('pitch-error');
const submitBtn  = document.getElementById('pitch-submit');

function showError(msg, focusEl) {
  errorEl.textContent = msg;
  errorEl.classList.remove('success');
  errorEl.classList.add('show');
  if (focusEl) focusEl.focus();
}
function showSuccess(msg) {
  errorEl.textContent = msg;
  errorEl.classList.add('show', 'success');
}
function clearError() {
  errorEl.classList.remove('show', 'success');
  errorEl.textContent = '';
}

// Clear error when user edits any input
[pitchSubject, pitchMedia, pitchEmail].forEach(el => {
  el.addEventListener('input', clearError);
});

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  clearError();

  // 1. Anti-bot: honeypot
  if (honeypotEl.value) return;

  // 2. Anti-bot: time-on-page
  if (Date.now() - PAGE_LOAD_TIME < 2000) return;

  // 3. Rate limit
  try {
    const last = parseInt(localStorage.getItem('pitch-last-sent') || '0', 10);
    if (Date.now() - last < RATE_LIMIT_MS) {
      showError('Hold on a sec — try again in a moment.');
      return;
    }
  } catch (_) { /* localStorage may be disabled — proceed anyway */ }

  // 4. Read fields
  const subject = pitchSubject.value.trim();
  const media   = pitchMedia.value.trim();
  const email   = pitchEmail.value.trim();

  // 5. Validate scene name
  if (subject.length < 2) {
    showError('Name your scene first.', pitchSubject);
    return;
  }

  // 6. Validate email
  if (!email) {
    showError('Drop your email so I can write back.', pitchEmail);
    return;
  }
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    showError("That email doesn't look right.", pitchEmail);
    return;
  }

  // 7. Submit to Formspree. Lock the button so impatient users don't double-click.
  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  const payload = {
    scene: subject,
    type_of_production: media || '(not specified)',
    mood: currentMood ? currentMood.toUpperCase() : '(not chosen)',
    email: email,                  // Formspree treats this as the sender
    _replyto: email,               // makes "Reply" in Gmail go to sender, not Formspree
    _subject: `Pitch: ${subject}` + (currentMood ? ` (${currentMood})` : ''),
  };

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      // Success — record submit time, clear form, show confirmation
      try { localStorage.setItem('pitch-last-sent', String(Date.now())); } catch (_) {}
      pitchSubject.value = '';
      pitchMedia.value = '';
      pitchEmail.value = '';
      // Trigger updateFrame to clear the slate preview too
      if (typeof updateFrame === 'function') updateFrame();
      // Clear mood
      if (typeof currentMood !== 'undefined' && currentMood !== null) {
        document.querySelectorAll('.pitch-chip.active').forEach(c => c.classList.remove('active'));
        const moodLbl = document.getElementById('frame-mood-label');
        if (moodLbl) moodLbl.textContent = 'MOOD: —';
        currentMood = null;
        pitchFrame.className = 'pitch-frame';
      }
      showSuccess('Pitch sent. I\'ll get back to you soon.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    } else {
      // Server error from Formspree — let user know AND fall back to mailto
      throw new Error(`Formspree returned ${response.status}`);
    }
  } catch (err) {
    console.warn('Formspree submission failed, falling back to mailto:', err);
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
    // Fallback: open mailto so the lead is not lost
    const mailLines = [
      'SCENE:', subject, '',
      'TYPE OF PRODUCTION / MEDIA:', media || '(not specified)', '',
      'MOOD:', currentMood ? currentMood.toUpperCase() : '(not chosen)', '',
      'Directed by: ' + email,
    ];
    const href = 'mailto:' + FALLBACK_EMAIL +
                 '?subject=' + encodeURIComponent(payload._subject) +
                 '&body=' + encodeURIComponent(mailLines.join('\n'));
    showError('Sending failed — opening your mail app as backup.');
    setTimeout(() => { window.location.href = href; }, 800);
  }
});
