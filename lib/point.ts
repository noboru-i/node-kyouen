class Point {
  constructor(public readonly x: number, public readonly y: number) {}

  public calculateAbs(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  public difference(p2: Point): Point {
    return new Point(this.x - p2.x, this.y - p2.y)
  }

  public sum(p2: Point): Point {
    return new Point(this.x + p2.x, this.y + p2.y)
  }
}

export { Point }
