"use strict";
var expect = require("chai").expect;
var Point = require("../dist/lib/point.js");

describe("calculateAbs function", () => {
  it("should return 5", () => {
    var result = new Point(3, 4).calculateAbs();
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
