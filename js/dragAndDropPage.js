/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vendor/DragNDrop/DragNDropDraggableItem.js":
/*!***********************************************************!*\
  !*** ./src/js/vendor/DragNDrop/DragNDropDraggableItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragNDropDraggableItem": () => (/* binding */ DragNDropDraggableItem)
/* harmony export */ });
/* harmony import */ var _ElementInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ElementInfo */ "./src/js/vendor/ElementInfo.js");
/* harmony import */ var _MoreMath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MoreMath */ "./src/js/vendor/MoreMath.js");
/* harmony import */ var _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragNDropEventDetail */ "./src/js/vendor/DragNDrop/DragNDropEventDetail.js");




class DragNDropDraggableItem {

  /**
   * @param {string} draggableItemId
   */
  constructor(draggableItemId) {
    this.draggableItemId = draggableItemId;
    this.originalDraggableElement = document.getElementById(this.draggableItemId);
    this.draggableElement = this.originalDraggableElement;
    this.initialZIndex = this.draggableElement.style.zIndex;
    this.elementCenter = _ElementInfo__WEBPACK_IMPORTED_MODULE_0__.ElementInfo.getElementCenter(this.draggableElement);
    this.copyCount = 0;
    this.dragStartTargetId = `DragNDropDragStart-${this.draggableItemId}`;
    this.dragStartTargetElement = document.getElementById(this.dragStartTargetId);
  }

  /**
   * @return {function}
   */
  onDrag() {
    return function(event) {
      const mousePosition = _MoreMath__WEBPACK_IMPORTED_MODULE_1__.Coordinate.makeFromEvent(event);
      const detail = new _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_2__.DragNDropEventDetail(
        this.draggableItemId,
        this.draggableElement,
        mousePosition.x,
        mousePosition.y
      );
      const dragEvent = new CustomEvent('DRAG_N_DROP_DRAG', { detail });

      this.draggableElement.style.left = mousePosition.x - this.elementCenter.x + 'px';
      this.draggableElement.style.top = mousePosition.y - this.elementCenter.y + 'px';
      document.dispatchEvent(dragEvent);
    }.bind(this);
  }

  /**
   * @param {string} eventName
   * @param {function} itemDragHandler
   * @param {string} dragType COPY|MOVE
   * @param {HTMLElement} selectedDraggableElement
   * @param {function} beforeDragStart
   * @param {function} afterDragEnd
   * @return {function}
   */
  onDragStart(
    eventName,
    itemDragHandler,
    dragType = 'COPY',
    selectedDraggableElement = null,
    beforeDragStart = () => {},
    afterDragEnd = () => {}
  ) {
    return function (event) {
      event.preventDefault();

      beforeDragStart();

      if (dragType === 'COPY') {
        this.copyCount++;
        this.draggableElement = this.originalDraggableElement.cloneNode(true);
        this.draggableElement.id = `${this.draggableElement.id}-copy-${this.copyCount}`;
      } else if (dragType === 'MOVE' && selectedDraggableElement !== null) {
        this.draggableElement = selectedDraggableElement;
      }
      document.body.appendChild(this.draggableElement);

      const eventEnd = (eventName === 'touchmove') ? 'touchend' : 'mouseup';
      const endHandler = this.onDrop(eventName, itemDragHandler);
      document.addEventListener(eventEnd, endHandler, { once: true });

      const mousePosition = _MoreMath__WEBPACK_IMPORTED_MODULE_1__.Coordinate.makeFromEvent(event);
      this.draggableElement.style.position = 'absolute';
      this.draggableElement.style.zIndex = '999';
      this.draggableElement.style.left = mousePosition.x - this.elementCenter.x + 'px';
      this.draggableElement.style.top = mousePosition.y - this.elementCenter.y + 'px';

      document.addEventListener(eventName, itemDragHandler);

      afterDragEnd();
    }.bind(this);
  }

  /**
   * @param {string} eventName
   * @param {function} itemDragHandler
   * @return {function}
   */
  onDrop(eventName, itemDragHandler) {
    return function (event) {
      event.preventDefault();

      document.removeEventListener(eventName, itemDragHandler);

      const eventStart = (eventName === 'touchmove') ? 'touchstart' : 'mousedown';
      this.draggableElement.addEventListener(eventStart, this.onDragStart(
        eventName,
        itemDragHandler,
        'MOVE',
        this.draggableElement
      ));

      this.draggableElement.style.zIndex = this.initialZIndex;

      const mousePosition = _MoreMath__WEBPACK_IMPORTED_MODULE_1__.Coordinate.makeFromEvent(event);
      const detail = new _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_2__.DragNDropEventDetail(
        this.draggableItemId,
        this.draggableElement,
        mousePosition.x,
        mousePosition.y
      );
      const dropEvent = new CustomEvent('DRAG_N_DROP_DROP', { detail });

      document.dispatchEvent(dropEvent);
    }.bind(this);
  }

  addDragStartListener(element, beforeDragStart = () => {}, afterDragStart = () => {}) {
    const itemDragHandler = this.onDrag();

    const touchStartHandler = this.onDragStart('touchmove', itemDragHandler, 'COPY', null, beforeDragStart, afterDragStart);
    const mouseDownHandler = this.onDragStart('mousemove', itemDragHandler, 'COPY', null, beforeDragStart, afterDragStart);

    element.addEventListener('touchstart', touchStartHandler);
    element.addEventListener('mousedown', mouseDownHandler);
  }

  init() {
    const dragStartTarget = this.dragStartTargetElement ? this.dragStartTargetElement : this.originalDraggableElement;
    this.addDragStartListener(dragStartTarget);
  }

}


/***/ }),

/***/ "./src/js/vendor/DragNDrop/DragNDropDroppableArea.js":
/*!***********************************************************!*\
  !*** ./src/js/vendor/DragNDrop/DragNDropDroppableArea.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragNDropDroppableArea": () => (/* binding */ DragNDropDroppableArea)
/* harmony export */ });
/* harmony import */ var _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragNDropEventDetail */ "./src/js/vendor/DragNDrop/DragNDropEventDetail.js");
/* harmony import */ var _ElementInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ElementInfo */ "./src/js/vendor/ElementInfo.js");
/* harmony import */ var _MoreMath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MoreMath */ "./src/js/vendor/MoreMath.js");




class DragNDropDroppableArea {

  /**
   * @param {string} droppableAreaId
   */
  constructor(droppableAreaId) {
    this.droppableAreaId = droppableAreaId;
    this.onDropInside = () => {};
    this.onDropOutside = () => {};
    this.onDragOver = () => {};
  }

  init() {
    document.addEventListener('DRAG_N_DROP_DROP', function(customEvent) {
      const dropEventDetail = _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_0__.DragNDropEventDetail.makeFromCustomEvent(customEvent);
      const droppableAreaElement = document.getElementById(this.droppableAreaId);
      const droppableAreaPosition = _ElementInfo__WEBPACK_IMPORTED_MODULE_1__.ElementInfo.getPosition(droppableAreaElement);
      const droppableAreaShape = new _MoreMath__WEBPACK_IMPORTED_MODULE_2__.Rectangle(
        droppableAreaElement.offsetWidth,
        droppableAreaElement.offsetHeight,
        droppableAreaPosition.x,
        droppableAreaPosition.y
      );

      if (droppableAreaShape.isPointInside(dropEventDetail.getPosition())) {
        this.onDropInside(customEvent);
      } else {
        this.onDropOutside(customEvent);
      }
    }.bind(this));

    document.addEventListener('DRAG_N_DROP_DRAG', function(customEvent) {
      const dropEventDetail = _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_0__.DragNDropEventDetail.makeFromCustomEvent(customEvent);
      const droppableAreaElement = document.getElementById(this.droppableAreaId);
      const droppableAreaPosition = _ElementInfo__WEBPACK_IMPORTED_MODULE_1__.ElementInfo.getPosition(droppableAreaElement);
      const droppableArea = new _MoreMath__WEBPACK_IMPORTED_MODULE_2__.Rectangle(
        droppableAreaElement.offsetWidth,
        droppableAreaElement.offsetHeight,
        droppableAreaPosition.x,
        droppableAreaPosition.y
      );

      if (droppableArea.isPointInside(dropEventDetail.getPosition())) {
        this.onDragOver(customEvent);
      }
    }.bind(this));
  }

}


/***/ }),

/***/ "./src/js/vendor/DragNDrop/DragNDropDroppableAreaAutoSnap.js":
/*!*******************************************************************!*\
  !*** ./src/js/vendor/DragNDrop/DragNDropDroppableAreaAutoSnap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragNDropDroppableAreaAutoSnap": () => (/* binding */ DragNDropDroppableAreaAutoSnap)
/* harmony export */ });
/* harmony import */ var _DragNDropDroppableArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragNDropDroppableArea */ "./src/js/vendor/DragNDrop/DragNDropDroppableArea.js");
/* harmony import */ var _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragNDropEventDetail */ "./src/js/vendor/DragNDrop/DragNDropEventDetail.js");
/* harmony import */ var _DragNDropSnapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragNDropSnapContainer */ "./src/js/vendor/DragNDrop/DragNDropSnapContainer.js");




class DragNDropDroppableAreaAutoSnap extends _DragNDropDroppableArea__WEBPACK_IMPORTED_MODULE_0__.DragNDropDroppableArea {

  /**
   * @param {string} droppableAreaId
   */
  constructor(droppableAreaId) {
    super(droppableAreaId);
    this.snapContainers = new Map();
    this.onDropInside = function(customEvent) {
      const detail = _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_1__.DragNDropEventDetail.makeFromCustomEvent(customEvent);
      const snapContainer = this.getSnapContainer(detail.draggableItemId);
      if (snapContainer) {
        snapContainer.containerElement.replaceChildren(detail.draggableElement);
        detail.draggableElement.style.position = 'relative';
        detail.draggableElement.style.left = 'auto';
        detail.draggableElement.style.top = 'auto';
        detail.draggableElement.style.zIndex = '0';
      } else {
        detail.draggableElement.remove();
      }
    }.bind(this);
    this.onDropOutside = function(customEvent) {
      const detail = _DragNDropEventDetail__WEBPACK_IMPORTED_MODULE_1__.DragNDropEventDetail.makeFromCustomEvent(customEvent);
      detail.draggableElement.remove();
    };
  }

  /**
   * @param {DragNDropSnapContainer} snapContainer
   */
  addSnapContainer(snapContainer) {
    this.snapContainers.set(snapContainer.draggableItemId, snapContainer);
  }

  /**
   * @param draggableItemId
   * @return {DragNDropSnapContainer}
   */
  getSnapContainer(draggableItemId) {
    return this.snapContainers.get(draggableItemId);
  }

}


/***/ }),

/***/ "./src/js/vendor/DragNDrop/DragNDropEventDetail.js":
/*!*********************************************************!*\
  !*** ./src/js/vendor/DragNDrop/DragNDropEventDetail.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragNDropEventDetail": () => (/* binding */ DragNDropEventDetail)
/* harmony export */ });
/* harmony import */ var _MoreMath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MoreMath */ "./src/js/vendor/MoreMath.js");


class DragNDropEventDetail {

  /**
   * @param {string} draggableItemId
   * @param {HTMLElement} draggableElement
   * @param {number} x
   * @param {number} y
   */
  constructor(draggableItemId, draggableElement, x, y) {
    this.draggableItemId = draggableItemId;
    this.draggableElement = draggableElement;
    this.x = x;
    this.y = y;
  }

  /**
   * @param {CustomEvent} customEvent
   * @return {DragNDropEventDetail}
   */
  static makeFromCustomEvent(customEvent) {
    return new DragNDropEventDetail(
      customEvent.detail.draggableItemId,
      customEvent.detail.draggableElement,
      customEvent.detail.x,
      customEvent.detail.y
    );
  }

  /**
   * @return {Coordinate}
   */
  getPosition() {
    return new _MoreMath__WEBPACK_IMPORTED_MODULE_0__.Coordinate(this.x, this.y);
  }

}


/***/ }),

/***/ "./src/js/vendor/DragNDrop/DragNDropSnapContainer.js":
/*!***********************************************************!*\
  !*** ./src/js/vendor/DragNDrop/DragNDropSnapContainer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragNDropSnapContainer": () => (/* binding */ DragNDropSnapContainer)
/* harmony export */ });
class DragNDropSnapContainer {

  /**
   * @param {string} snapContainerId
   * @param {string} draggableItemId
   */
  constructor(snapContainerId, draggableItemId) {
    this.snapContainerId = snapContainerId;
    this.draggableItemId = draggableItemId;
    this.containerElement = document.getElementById(this.snapContainerId);
  }

}


/***/ }),

/***/ "./src/js/vendor/ElementInfo.js":
/*!**************************************!*\
  !*** ./src/js/vendor/ElementInfo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementInfo": () => (/* binding */ ElementInfo)
/* harmony export */ });
/* harmony import */ var _MoreMath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreMath */ "./src/js/vendor/MoreMath.js");


class ElementInfo {

  /**
   * @param {HTMLElement} element
   */
  static getElementCenter(element) {
    return new _MoreMath__WEBPACK_IMPORTED_MODULE_0__.Coordinate(
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
    return new _MoreMath__WEBPACK_IMPORTED_MODULE_0__.Coordinate(rect.left + scrollLeft, rect.top + scrollTop);
  }

}


/***/ }),

/***/ "./src/js/vendor/MoreMath.js":
/*!***********************************!*\
  !*** ./src/js/vendor/MoreMath.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoordinateError": () => (/* binding */ CoordinateError),
/* harmony export */   "Coordinate": () => (/* binding */ Coordinate),
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle),
/* harmony export */   "MoreMath": () => (/* binding */ MoreMath)
/* harmony export */ });
class CoordinateError extends Error {

  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = "CoordinateError";
  }

}

class Coordinate {
  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * @param {Event} event
   * @return {Coordinate}
   * @throws {CoordinateError}
   */
  static makeFromEvent(event) {
    if (event instanceof TouchEvent && event.changedTouches.length > 0) {
      return new Coordinate(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
    } else if (event instanceof MouseEvent) {
      return new Coordinate(event.pageX, event.pageY);
    } else {
      throw new CoordinateError('Unknown event type');
    }
  }
}

class Rectangle {

  /**
   * @param {Number} width
   * @param {Number} height
   * @param {Number} x
   * @param {Number} y
   */
  constructor(width, height, x = 0, y = 0) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Coordinate} point
   * @return {boolean}
   */
  isPointInside(point) {
    return this.x <= point.x && point.x <= this.x + this.width
      && this.y <= point.y && point.y <= this.y + this.height;
  }

}

class MoreMath {
  /**
   * @param {number} number
   * @param {number} digits The number of digits to appear after the decimal point
   * @return {number}
   */
  static roundDecimals(number, digits) {
    const precision = Math.pow(10, digits);
    return Math.round(number * precision) / precision;
  }

  /**
   * @param {number} xOrigin
   * @param {number} yOrigin
   * @param {number} radius
   * @param {number} thetaInRadians
   * @return {Coordinate}
   */
  static parametricEquationOfTheCircle(xOrigin, yOrigin, radius, thetaInRadians) {
    const xCircle = xOrigin + radius * Math.cos(thetaInRadians);
    const yCircle = yOrigin + radius * Math.sin(thetaInRadians);
    return new Coordinate(
      this.roundDecimals(xCircle, 2),
      this.roundDecimals(yCircle, 2)
    )
  }

  /**
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./drag-and-drop/js/dragAndDropPage.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_vendor_DragNDrop_DragNDropDraggableItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/js/vendor/DragNDrop/DragNDropDraggableItem */ "./src/js/vendor/DragNDrop/DragNDropDraggableItem.js");
/* harmony import */ var _src_js_vendor_DragNDrop_DragNDropSnapContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/vendor/DragNDrop/DragNDropSnapContainer */ "./src/js/vendor/DragNDrop/DragNDropSnapContainer.js");
/* harmony import */ var _src_js_vendor_DragNDrop_DragNDropDroppableAreaAutoSnap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/js/vendor/DragNDrop/DragNDropDroppableAreaAutoSnap */ "./src/js/vendor/DragNDrop/DragNDropDroppableAreaAutoSnap.js");




window.addEventListener('load', () => {
  const draggableItems = [
    new _src_js_vendor_DragNDrop_DragNDropDraggableItem__WEBPACK_IMPORTED_MODULE_0__.DragNDropDraggableItem('barrelStandard'),
    new _src_js_vendor_DragNDrop_DragNDropDraggableItem__WEBPACK_IMPORTED_MODULE_0__.DragNDropDraggableItem('barrelMuzzleBreak'),
    new _src_js_vendor_DragNDrop_DragNDropDraggableItem__WEBPACK_IMPORTED_MODULE_0__.DragNDropDraggableItem('recoilSpring'),
    new _src_js_vendor_DragNDrop_DragNDropDraggableItem__WEBPACK_IMPORTED_MODULE_0__.DragNDropDraggableItem('recoilHydraulic'),
    new _src_js_vendor_DragNDrop_DragNDropDraggableItem__WEBPACK_IMPORTED_MODULE_0__.DragNDropDraggableItem('receiverMechanical'),
    new _src_js_vendor_DragNDrop_DragNDropDraggableItem__WEBPACK_IMPORTED_MODULE_0__.DragNDropDraggableItem('receiverElectronic')
  ];

  for (let i = 0; i < draggableItems.length; i++) {
    draggableItems[i].init();
  }

  const snapContainers = [
    new _src_js_vendor_DragNDrop_DragNDropSnapContainer__WEBPACK_IMPORTED_MODULE_1__.DragNDropSnapContainer('snapTargetBarrel', 'barrelStandard'),
    new _src_js_vendor_DragNDrop_DragNDropSnapContainer__WEBPACK_IMPORTED_MODULE_1__.DragNDropSnapContainer('snapTargetBarrel', 'barrelMuzzleBreak'),
    new _src_js_vendor_DragNDrop_DragNDropSnapContainer__WEBPACK_IMPORTED_MODULE_1__.DragNDropSnapContainer('snapTargetRecoil', 'recoilSpring'),
    new _src_js_vendor_DragNDrop_DragNDropSnapContainer__WEBPACK_IMPORTED_MODULE_1__.DragNDropSnapContainer('snapTargetRecoil', 'recoilHydraulic'),
    new _src_js_vendor_DragNDrop_DragNDropSnapContainer__WEBPACK_IMPORTED_MODULE_1__.DragNDropSnapContainer('snapTargetReceiver', 'receiverMechanical'),
    new _src_js_vendor_DragNDrop_DragNDropSnapContainer__WEBPACK_IMPORTED_MODULE_1__.DragNDropSnapContainer('snapTargetReceiver', 'receiverElectronic'),
  ];

  const detailedItemViewDroppableArea = new _src_js_vendor_DragNDrop_DragNDropDroppableAreaAutoSnap__WEBPACK_IMPORTED_MODULE_2__.DragNDropDroppableAreaAutoSnap('detailedItemViewDroppableArea');

  for (let i = 0; i < snapContainers.length; i++) {
    detailedItemViewDroppableArea.addSnapContainer(snapContainers[i]);
  }

  detailedItemViewDroppableArea.init();
});

})();

/******/ })()
;
//# sourceMappingURL=dragAndDropPage.js.map