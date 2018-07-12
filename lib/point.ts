import { Line } from './line'

class Point {
  constructor(public readonly x: number, public readonly y: number) {}

  public abs(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  public difference(p2: Point): Point {
    return new Point(this.x - p2.x, this.y - p2.y)
  }

  public sum(p2: Point): Point {
    return new Point(this.x + p2.x, this.y + p2.y)
  }

  public calculateMidperpendicular(p2: Point): Line {
    const midpoint = this.calculateMidpoint(p2)
    const diff = this.difference(p2)
    const gradient = new Point(diff.y, -1 * diff.x)
    return new Line(midpoint, midpoint.sum(gradient))
  }

  public calculateMidpoint(p2: Point): Point {
    return new Point((this.x + p2.x) / 2, (this.y + p2.y) / 2)
  }

  public calculateDistance(p2: Point): number {
    return this.difference(p2).abs()
  }
}

export { Point }
