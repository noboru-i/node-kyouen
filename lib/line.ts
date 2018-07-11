import { Point } from './point'

/**
 * a*x+b*y+c=0
 */
class Line {
  public readonly a: number
  public readonly b: number
  public readonly c: number
  constructor(public readonly p1: Point, public readonly p2: Point) {
    this.a = p1.y - p2.y
    this.b = p2.x - p1.x
    this.c = p1.x * p2.y - p2.x * p1.y
  }

  public getY(x: number): number {
    return (-1 * (this.a * x + this.c)) / this.b
  }

  public getX(y: number): number {
    return (-1 * (this.b * y + this.c)) / this.a
  }
}

export { Line }
