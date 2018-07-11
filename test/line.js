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