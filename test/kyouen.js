"use strict";
var expect = require("chai").expect;
var { Point } = require("../dist/point.js");
var { Kyouen } = require("../dist/kyouen.js");

describe("hasKyouen function", () => {
  it("should return null", () => {
    var result = new Kyouen([
      new Point(1, 1),
      new Point(2, 3),
      new Point(2, 3)
    ]).hasKyouen();
    expect(result).to.be.null;
  });

  it("should return line kyouen", () => {
    var result = new Kyouen([
      new Point(1, 1),
      new Point(2, 2),
      new Point(3, 3),
      new Point(4, 4)
    ]).hasKyouen();
    expect(result.lineKyouen).to.be.true;
    expect(result.line.getY(-1)).to.equal(-1);
  });

  it("should return oval kyouen", () => {
    var result = new Kyouen([
      new Point(2, 2),
      new Point(3, 2),
      new Point(2, 3),
      new Point(3, 3)
    ]).hasKyouen();
    expect(result.lineKyouen).to.be.false;
    expect(result.center).to.deep.equal(new Point(2.5, 2.5));
    expect(result.radius).to.equal(0.5 * Math.sqrt(2));
  });
});
