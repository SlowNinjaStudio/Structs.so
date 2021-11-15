export class Uint8ClampedArrayUtil {

  /**
   * Append array2 to array1.
   *
   * @param {Uint8ClampedArray} array1
   * @param {Uint8ClampedArray} array2
   * @return {Uint8ClampedArray}
   */
  static concat(array1, array2) {
    const concatenated = new Uint8ClampedArray(array1.length + array2.length);
    concatenated.set(array1);
    concatenated.set(array2, array1.length);
    return concatenated;
  }

  /**
   * Pixels stored in a Uint8ClampedArray take up 4 spaces for the RGBA values.
   * To reverse a Uint8ClampedArray storing pixels, the 4 array elements making up a single pixel must be moved together.
   *
   * @param {Uint8ClampedArray} arr
   * @return {Uint8ClampedArray}
   */
  static reversePixels(arr) {
    const reversed = [];
    for (let i = arr.length; i > 0; i -= 4) {
      reversed.push(arr[i - 4]);
      reversed.push(arr[i - 3]);
      reversed.push(arr[i - 2]);
      reversed.push(arr[i - 1]);
    }
    return new Uint8ClampedArray(reversed);
  }

  // a = new Uint8ClampedArray([111, 112, 113, 114, 121, 122, 123, 124, 211, 212, 213, 214, 221, 222, 223, 224])
  // Uint8ClampedArrayUtil.flipHorizontal(a, 2)
  // 121, 122, 123, 124, 111, 112, 113, 114, 221, 222, 223, 224, 211, 212, 213, 214
  /**
   * Horizontally flips an image store as a Uint8ClampedArray.
   *
   * @param {Uint8ClampedArray} arr
   * @param {number} width the width of the image the array represents
   * @return {Uint8ClampedArray}
   */
  static flipHorizontal(arr, width) {
    let arrayWidth = 4 * width;
    let flipped = new Uint8ClampedArray([]);
    for(let i = 0; i < arr.length; i += arrayWidth) {
      const sub = arr.subarray(i, i + arrayWidth);
      flipped = Uint8ClampedArrayUtil.concat(flipped, this.reversePixels(sub));
    }
    return flipped;
  }
}
