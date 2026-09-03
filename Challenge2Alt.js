import * as THREE from "https://unpkg.com/three@0.167.1/build/three.module.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x210e1b);

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 4, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1.5
);

scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(
    0xd59de6,
    2
);

directionalLight.position.set(5, 10, 7);

scene.add(directionalLight);

// Ground (Bonus)
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshStandardMaterial({
        color: 0xbdabba
    })
);

ground.rotation.x = -Math.PI / 2;

scene.add(ground);

function createCastle(xPosition, bodyColor) {

    const castle = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({
        color: bodyColor
    });

    // MAIN
    const main = new THREE.Mesh(
        new THREE.BoxGeometry(7, 13, 5),
        material
    );

    main.position.set(0, 2, 0);

    castle.add(main);

    // SKULL
    const skull = new THREE.Mesh(
        new THREE.SphereGeometry(1, 16, 16),
        material
    );

    // Translation
    skull.position.set(0, 3, 1.5);

    // Scaling
    skull.scale.set(3, 3, 3);

    castle.add(skull);

    // TAIL
    const tail = new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.15,
            0.15,
            2,
            16
        ),
        material
    );

    tail.position.set(-1.8, 2, 0);

    // Rotation
    tail.rotation.z = Math.PI / 4;

    castle.add(tail);

    // FOUR TOWERS
    const towerGeometry =
        new THREE.CylinderGeometry(
            1.3,
            1.3,
            19
        );

    const towerPositions = [
        [-4, 0, 2],
        [4, 0, 2],
        [-7.5, 0.75],
        [7.5, 0.75]
    ];

    towerPositions.forEach(pos => {

        const tower = new THREE.Mesh(
            towerGeometry,
            material
        );

        tower.position.set(
            pos[0],
            pos[1],
            pos[2]
        );

        castle.add(tower);
    });

    // EYES
    const eyeMaterial =
        new THREE.MeshStandardMaterial({
            color: 0x000000
        });

    const leftEye = new THREE.Mesh(
        new THREE.SphereGeometry(1, 16, 16),
        eyeMaterial
    );

    leftEye.position.set(
        -0.9,
        3.5,
        3.5
    );

    castle.add(leftEye);

    const rightEye = new THREE.Mesh(
        new THREE.SphereGeometry(1, 16, 16),
        eyeMaterial
    );

    rightEye.position.set(
        0.9,
        3.5,
        3.5
    );

    castle.add(rightEye);

    castle.position.x = xPosition;

    scene.add(castle);
}

// Main Castle
createCastle(0, 0x6b7863);

// Bonus: Toy Ball
// const toyBall = new THREE.Mesh(
//     new THREE.SphereGeometry(0.4, 32, 32),
//     new THREE.MeshStandardMaterial({
//         color: 0xff0000
//     })
// );

// toyBall.position.set(3, 0.4, 0);

// scene.add(toyBall);

// peak of mountain
const peak = new THREE.Mesh(
    new THREE.ConeGeometry(
        2.1,
        6.6,
        8
    ),
    new THREE.MeshStandardMaterial({
        color: 0xededed
    })
);

peak.position.set(
    0,
    3.3,
    -4
);

peak.scale.set(12, 3, 5);

scene.add(peak);

// Animation Loop
function animate() {

    requestAnimationFrame(
        animate
    );

    // toyBall.rotation.y += 0.03;

    renderer.render(
        scene,
        camera
    );
}

animate();

// Responsive
window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);