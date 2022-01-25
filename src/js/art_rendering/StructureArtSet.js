import {StructureArtGenerator} from "./StructureArtGenerator";
import {StructurePaletteFactory} from "./StructurePaletteFactory";
import {CanvasUtil} from "../vendor/CanvasUtil";
import {ColorRGB} from "../vendor/ColorRGB";

/**
 * The art components need to display a structure.
 */
export class StructureArtSet {
  constructor(structure) {
    this.structure = structure;
    this.structureArtGenerator = new StructureArtGenerator();
    this.structurePaletteFactory = new StructurePaletteFactory();
  }

  /**
   * @param {string[]} paths
   * @return {Promise<Image[]>}
   */
  async getImagesFromPaths(paths) {
    const images = [];
    for (let i = 0; i < paths.length; i++) {
      const image = new Image();
      image.decoding = 'sync';
      image.src = paths[i];
      await image.decode();
      images.push(image);
    }
    return images;
  }

  /**
   * @param images
   * @return {Image[]}
   */
  paletteSwapImages(images) {
    const canvas = document.createElement('canvas');
    canvas.id = "PaletteSwapImages" + (Math.random() * 100);
    const palette = this.getPalette();
    const context = canvas.getContext('2d');
    const canvasUtil = new CanvasUtil(canvas, context);

    for (let i = 0; i < images.length; i++) {
      canvas.width = images[i].width;
      canvas.height = images[i].height;
      context.drawImage(images[i], 0, 0);
      canvasUtil.swapColors(palette);
      images[i].src = canvas.toDataURL("image/png");

      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.remove();

    return images;
  }

  /**
   * Given a list of SVG path elements, swap the current color with the new color for each element that
   * matches the target color.
   * Modes:
   *   DEFAULT - Swaps the current color with the new color
   *   EXCEPT_TARGET - Swaps all colors except the target color with the new color
   * @param {NodeListOf<SVGPathElement>}svgPathElements
   */
  paletteSwapSVGPaths(svgPathElements) {
    const colorSwapList = this.getPalette();

    for (let i = 0; i < svgPathElements.length; i++) {
      const fill = svgPathElements[i].getAttribute('fill');

      if (typeof fill !== 'string') {
        continue;
      }

      const currentColor = ColorRGB.makeFromRGBString(fill);

      for (let j = 0; j < colorSwapList.length; j++) {
        const targetColor = colorSwapList[j][0];
        const newColor = colorSwapList[j][1];

        let swapMode = 'DEFAULT';
        if (colorSwapList[j].length > 2 && colorSwapList[j][2] === 'EXCEPT_TARGET') {
          swapMode = 'EXCEPT_TARGET';
        }

        if (
          swapMode === 'DEFAULT' && currentColor.isEqual(targetColor) ||
          swapMode === 'EXCEPT_TARGET' && !currentColor.isEqual(targetColor)
        ) {
          svgPathElements[i].setAttribute('fill', newColor.toString());
          break;
        }
      }

    }
  }

  /**
   * @return {String[]} The paths of the layers that make up the structure art and background.
   */
  getLayers() {
    return this.structureArtGenerator.generate(this.structure);
  }

  /**
   * @return {Promise<Image[]>}
   */
  async getLayerImages() {
    return this.paletteSwapImages(await this.getImagesFromPaths(this.getLayers()));
  }

  /**
   * @return {String[]} The paths of the layers that make up the structure art background.
   */
  getBackgroundLayers() {
    return this.structureArtGenerator.generateBackground(this.structure);
  }

  /**
   * @return {Promise<Image[]>}
   */
  async getBackgroundLayerImages() {
    return await this.getImagesFromPaths(this.getBackgroundLayers());
  }

  /**
   * @return {String[]} The paths of the layers that make up the only the structure art.
   */
  getStructureLayers() {
    return this.structureArtGenerator.generateStructure(this.structure);
  }

  /**
   * @return {Promise<Image[]>}
   */
  async getStructureLayerImages() {
    return this.paletteSwapImages(await this.getImagesFromPaths(this.getStructureLayers()));
  }

  /**
   * @return {array} Color swap palette based on the structures color.
   */
  getPalette() {
    return this.structurePaletteFactory.generatePaletteSwap(this.structure);
  }

  /**
   * @param {string} feature
   * @return {string[]}
   */
  getStructureFeature(feature) {
    return this.structureArtGenerator.getFeature(this.structure, feature);
  }

  /**
   * @param {string} feature
   * @return {Promise<Image[]>}
   */
  async getStructureFeatureImages(feature) {
    return this.paletteSwapImages(await this.getImagesFromPaths(this.getStructureFeature(feature)));
  }
}
