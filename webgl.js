function initCanvas() {
  const canvas = document.querySelector("#gl-canvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    console.warn(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    return;
  }
}

initCanvas();
