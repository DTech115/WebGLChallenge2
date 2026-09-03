# webGLChallenge2Alt

This project creates a simple 3D animal scene in the browser using Three.js. The scene includes a stylized animal, a second bonus animal, a ground plane, grass tufts, and a toy ball. The goal is to practice basic 3D scene construction and object transformations in WebGL.

## Overview

- A sky-blue background is used for the scene.
- A camera is positioned to view the scene from a slight angle.
- Lighting is added so the objects are visible and shaded.
- Multiple meshes are combined to form animal shapes.
- The scene is animated with a rotating toy ball.

## Transformations

### Translation

Use translation to position body parts. In this project, each shape is placed in the correct location relative to the model by setting its position. For example, the head is moved forward and upward, and the legs are positioned under the body so the animal looks balanced.

### Scaling

Use scaling to make the head larger than the arms. The head is scaled to a slightly larger size than the rest of the body parts so it appears more prominent and cartoon-like. This helps create a recognizable animal silhouette.

### Rotation

Use rotation to angle one arm or leg. In the scene, the tail is rotated to create a more dynamic pose, and the body parts can also be angled to suggest motion. Rotation is used to give the object a natural and more lifelike shape.

## Files

- `Challenge2Alt.js` – main scene setup and animation logic
- `Challenge2Alt.html` – HTML page that loads the scene
- `index.html` – alternative entry page
- `three.min.js` – local Three.js library file

## Run the project

Open the project in a browser using a local web server, for example:

```bash
cd /workspaces/webGLChallenge2Alt
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/Challenge2Alt.html
```

This ensures the browser loads the JavaScript modules correctly and the scene renders as expected.