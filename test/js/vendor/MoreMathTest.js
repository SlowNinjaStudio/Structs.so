import { DTest } from "../../DTestFramework";
import {MoreMath} from "../../../src/js/vendor/MoreMath";

const roundDecimalsTest = new DTest('Round Decimals Test', function (params) {
  this.assertEquals(MoreMath.roundDecimals(params.number, params.digits), params.expected);
}, function () {
  return [
    {
      number: 0.123456789,
      digits: 2,
      expected: 0.12
    },
    {
      number: 0.15,
      digits: 1,
      expected: 0.2
    },
    {
      number: 0.1,
      digits: 0,
      expected: 0
    },
    {
      number: 0,
      digits: 0,
      expected: 0
    }
  ];
});

const parametricEquationOfTheCircleTest = new DTest('Parametric Equation Of The Circle Test', function (params) {
  const coordinate = MoreMath.parametricEquationOfTheCircle(params.xOrigin, params.yOrigin, params.radius, params.thetaInRadians);
  this.assertEquals(coordinate.x, params.expectedX);
  this.assertEquals(coordinate.y, params.expectedY);
}, function () {
  return [
    {
      xOrigin: 0,
      yOrigin: 0,
      radius: 1,
      thetaInRadians: 2 * Math.PI,
      expectedX: 1,
      expectedY: 0,
    },
    {
      xOrigin: 0,
      yOrigin: 0,
      radius: 1,
      thetaInRadians: Math.PI / 2,
      expectedX: 0,
      expectedY: 1,
    },
    {
      xOrigin: 0,
      yOrigin: 0,
      radius: 1,
      thetaInRadians: Math.PI,
      expectedX: -1,
      expectedY: 0,
    },
    {
      xOrigin: 0,
      yOrigin: 0,
      radius: 1,
      thetaInRadians: (3/2) * Math.PI,
      expectedX: 0,
      expectedY: -1,
    }
  ];
});

// Test execution
console.log('MoreMathTest');
roundDecimalsTest.run();
parametricEquationOfTheCircleTest.run();
