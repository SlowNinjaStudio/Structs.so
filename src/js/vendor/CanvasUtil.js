export class CanvasUtil {
  constructor(canvas, context = null) {
    this.canvas = canvas;
    this.context = context ? context : canvas.getContext("2d");
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
}
