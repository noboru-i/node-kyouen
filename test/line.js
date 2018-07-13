"use strict";
var expect = require("chai").expect;
var { Point } = require("../dist/point.js");
var { Line } = require("../dist/line.js");

describe("getY function", () => {
  it("should return 5", () => {
    var result = new Line(new Point(1, 1), new Point(2, 3)).getY(3);
    expect(result).to.equal(5);
  });
});

describe("getX function", () => {
  it("should return 4", () => {
    var result = new Line(new Point(0, 0), new Point(-2, 1)).getX(-2);
    expect(result).to.equal(4);
  });
});

describe("calculateIntersection function", () => {
  it("should return (1, 2)", () => {
    var line2 = new Line(new Point(0, 3), new Point(4, -1));
    var result = new Line(
      new Point(0, 0),
      new Point(0.5, 1)
    ).calculateIntersection(line2);
    expect(result).to.deep.equal(new Point(1, 2));
  });
});
