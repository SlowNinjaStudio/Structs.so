/**
 * Graphics engine for rendering pixel art on the web.
 */
import {CanvasUtil} from "./CanvasUtil";

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
    this.canvasUtil = new CanvasUtil(this.canvas, this.context);

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
    this.canvasUtil.swapColors(this.palette);
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
