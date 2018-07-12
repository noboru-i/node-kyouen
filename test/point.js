"use strict";
var expect = require("chai").expect;
var { Point } = require("../dist/point.js");
var { Line } = require("../dist/line.js");

describe("abs function", () => {
  it("should return 5", () => {
    var result = new Point(3, 4).abs();
    expect(result).to.equal(5);
  });
});

describe("difference function", () => {
  it("should return (2, -1)", () => {
    var result = new Point(1, 2).difference(new Point(-1, 3));
    expect(result).to.deep.equal(new Point(2, -1));
  });
});

describe("sum function", () => {
  it("should return (0, 5)", () => {
    var result = new Point(1, 2).sum(new Point(-1, 3));
    expect(result).to.deep.equal(new Point(0, 5));
  });
});

describe("calculateMidperpendicular function", () => {
  it("should return 2x-y-4=0", () => {
    var midperpendicular = new Point(1, 3).calculateMidperpendicular(
      new Point(5, 1)
    );
    expect(midperpendicular.getY(1)).to.equal(-2);
    expect(midperpendicular.getY(2)).to.equal(0);
  });
});

describe("calculateMidpoint function", () => {
  it("should return (0, 1)", () => {
    var result = new Point(2, 0).calculateMidpoint(new Point(-2, 2));
    expect(result).to.deep.equal(new Point(0, 1));
  });
});

describe("calculateDistance function", () => {
  it("should return 5", () => {
    var result = new Point(4, 3).calculateDistance(new Point(1, -1));
    expect(result).to.equal(5);
  });
});
