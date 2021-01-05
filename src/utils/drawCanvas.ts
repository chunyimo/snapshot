const drawCanvas = (canvas: HTMLCanvasElement, img: ImageBitmap) => {
  const width = Number(getComputedStyle(canvas).width.split('px')[0]);
  const height = Number(getComputedStyle(canvas).height.split('px')[0]);
  const devicePixelRatio = window.devicePixelRatio || 1;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  const canvasContext = canvas.getContext('2d');
  if (canvasContext) {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
  }
};

export default drawCanvas;
