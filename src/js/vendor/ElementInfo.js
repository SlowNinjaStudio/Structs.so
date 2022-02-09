import {Coordinate} from "./MoreMath";

export class ElementInfo {

  /**
   * @param {HTMLElement} element
   */
  static getElementCenter(element) {
    return new Coordinate(
      Math.floor(element.offsetWidth / 2),
      Math.floor(element.offsetHeight / 2),
    );
  }

  /**
   * @param {HTMLElement} element
   * @return {Coordinate}
   */
  static getPosition(element) {
    const rect = element.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return new Coordinate(rect.left + scrollLeft, rect.top + scrollTop);
  }

}
