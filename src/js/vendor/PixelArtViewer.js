/**
 * Graphics engine for rendering pixel art on the web.
 */
export class PixelArtViewer {

  /**
   * @param {HTMLCanvasElement} canvas the target canvas that will become the viewer
   * @param {Array.<string>} imageLayerPaths the paths to the images to render. Image layers are rendered in order.
   * @param {Array.<Array>} palette list of colors to swap
   */
  constructor(canvas, imageLayerPaths, palette = []) {
    this.canvas = canvas;
    this.aspectRatio = canvas.height / canvas.width;
    this.context = canvas.getContext("2d");
    this.imageLayerPaths = imageLayerPaths;
    this.numImagesLoaded = 0;
    this.layers = [];
    this.palette = palette;

    this.lockAspectRatio();
    this.loadAndRenderImageLayers();
  }

  /**
   * Locks the aspect ratio so that the aspect ratio is maintained even if the image is responsively resized.
   */
  lockAspectRatio() {
    this.canvas.height = this.canvas.width * this.aspectRatio;
  }

  /**
   * Check that all images have been loaded. Used before rendering to reduce re-renders.
   * @returns {boolean}
   */
  areAllImagesLoaded() {
    return this.numImagesLoaded === this.imageLayerPaths.length;
  }

  /**
   * Loads and renders the image layers in the order defined by the image paths.
   */
  loadAndRenderImageLayers() {
    for(let i = 0; i < this.imageLayerPaths.length; i++) {
      const img = new Image();
      const viewer = this;
      img.onload = () => {
        viewer.numImagesLoaded++;
        if (viewer.areAllImagesLoaded()) {
          viewer.render();
        }
      }
      img.src = this.imageLayerPaths[i];
      this.layers[i] = img;
    }
  }

  /**
   * Draw all image layers to the canvas in order.
   */
  render() {
    this.clearCanvas();
    for(let i = 0; i < this.layers.length; i++) {
      this.context.drawImage(this.layers[i], 0, 0);
    }
    this.swapColors(this.palette);
  }

  /**
   * Given an array of color pairs, swap the first color with the second color in the canvas.
   * Modes:
   *   DEFAULT - Swaps the first color with the second color
   *   EXCEPT_TARGET - Swaps all colors except the first color with the second color
   * @param {Array.<Array>} colorSwapList
   */
  swapColors(colorSwapList) {
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      for (let j = 0; j < colorSwapList.length; j++) {
        const targetColor = colorSwapList[j][0];
        const newColor = colorSwapList[j][1];
        let swapMode = 'DEFAULT';
        if (colorSwapList[j].length > 2 && colorSwapList[j][2] === 'EXCEPT_TARGET') {
          swapMode = 'EXCEPT_TARGET';
        }
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];
        if (
          swapMode === 'DEFAULT' && red === targetColor.r && green === targetColor.g && blue === targetColor.b ||
          swapMode === 'EXCEPT_TARGET' && (red !== targetColor.r || green !== targetColor.g || blue !== targetColor.b)
        ) {
          data[i]     = newColor.r; // red
          data[i + 1] = newColor.g; // green
          data[i + 2] = newColor.b; // blue
        }
      }
    }
    this.context.putImageData(imageData, 0, 0);
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
