import { desktopCapturer } from 'electron';
import handleCaptureStream from './handleCaptureStream';

const captureScreen = () => {
  desktopCapturer
    .getSources({ types: ['window', 'screen'] })
    .then(async (sources) => {
      for (const source of sources) {
        if (source.id === 'window:67350:0') {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: false,
              video: {
                // @ts-ignore
                mandatory: {
                  chromeMediaSource: 'desktop',
                  chromeMediaSourceId: source.id,
                  minWidth: 1280,
                  maxWidth: 1280,
                  minHeight: 720,
                  maxHeight: 720,
                },
              },
            });
            handleCaptureStream(stream);
          } catch (error) {}
        }
        console.info(source);
      }
      return null;
    })
    .catch(console.error);
};

export default captureScreen;
