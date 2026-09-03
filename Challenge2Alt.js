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
    skull.position.set(0, 4, 1.5);

    // Scaling
    skull.scale.set(3, 3, 3);

    castle.add(skull);

    // HELMET
    const helmet = new THREE.Mesh(
        new THREE.CylinderGeometry(
            2.8,
            2.8,
            1.5
        ),
        material
    );
    const helmet2 = new THREE.Mesh(
        new THREE.SphereGeometry(
            2.7
        ),
        material
    );

    helmet.position.set(0, 5.7, 2);
    helmet2.position.set(0, 6.5, 2);

    // Rotation
    // helmet.rotation.z = Math.PI / 4;

    castle.add(helmet);
    castle.add(helmet2);

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
        [-7.5, 0.75, 0],
        [7.5, 0.75, 0]
    ];

    const towerHatGeometry =
        new THREE.CylinderGeometry(
            1.7,
            1.7,
            1.6
        );

    const towerHatPositions = [
        [-4, 9, 2],
        [4, 9, 2],
        [-7.5, 9.2, 0],
        [7.5, 9.2, 0]
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

    towerHatPositions.forEach(pos => {

        const towerHat = new THREE.Mesh(
            towerHatGeometry,
            material
        )

        towerHat.position.set(
            pos[0],
            pos[1],
            pos[2]
        )

        castle.add(towerHat);
    });

    // EYES
    const eyeMaterial =
        new THREE.MeshStandardMaterial({
            color: 0x000000
        });

    const leftEye = new THREE.Mesh(
        new THREE.SphereGeometry(1, 10, 4),
        eyeMaterial
    );

    leftEye.position.set(
        -0.9,
        4.1,
        3.5
    );

    castle.add(leftEye);

    const rightEye = new THREE.Mesh(
        new THREE.SphereGeometry(1, 10, 4),
        eyeMaterial
    );

    rightEye.position.set(
        0.9,
        4.1,
        3.5
    );

    castle.add(rightEye);

    castle.position.x = xPosition;

    // NOSE
    const noseMaterial =
        new THREE.MeshStandardMaterial({
            color: 0x000000
        });

    const nose = new THREE.Mesh(
        new THREE.ConeGeometry(0.4, 0.8),
        noseMaterial
    );

     nose.position.set(
        0,
        3.6,
        4.4
    );

    castle.add(nose);

    const doorMaterial =
        new THREE.MeshStandardMaterial({
            color: 0x401800
        });

    const door = new THREE.Mesh(
        new THREE.BoxGeometry(1.7, 2, 0.5),
        doorMaterial
    );

     door.position.set(
        0,
        1.8,
        3.9
    );

    castle.add(door);


    


    scene.add(castle);

    
}

// Main Castle
createCastle(0, 0x6b7863);

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