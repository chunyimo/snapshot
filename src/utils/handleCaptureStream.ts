import drawCanvas from './drawCanvas';

const handleCaptureStream = (stream: MediaStream) => {
  if (stream) {
    const track = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(track);
    imageCapture
      .grabFrame()
      .then((imageBitmap: ImageBitmap) => {
        const canvas = document.querySelector(
          '#grabFrameCanvas'
        ) as HTMLCanvasElement;
        if (canvas) {
          drawCanvas(canvas, imageBitmap);
        }
      })
      .catch((e) => console.error);
  }
  const video = document.querySelector('video');
  if (video) {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => video.play();
  }
};

export default handleCaptureStream;
