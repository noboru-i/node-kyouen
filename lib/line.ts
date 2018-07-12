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

  public getIntersection(l2: Line): Point | null {
    const f1 = this.p2.x - this.p1.x
    const g1 = this.p2.y - this.p1.y
    const f2 = l2.p2.x - l2.p1.x
    const g2 = l2.p2.y - l2.p1.y

    const det = f2 * g1 - f1 * g2
    if (det === 0) {
      return null
    }

    const dx = l2.p1.x - this.p1.x
    const dy = l2.p1.y - this.p1.y
    const t1 = (f2 * dy - g2 * dx) / det

    return new Point(this.p1.x + f1 * t1, this.p1.y + g1 * t1)
  }
}

export { Line }
