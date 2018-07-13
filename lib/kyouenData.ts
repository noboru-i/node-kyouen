import { Line } from './line'
import { Point } from './point'

class KyouenData {
  public readonly points: Point[]
  public readonly lineKyouen: boolean
  public readonly center: Point | null
  public readonly radius: number | null
  public readonly line: Line | null
  constructor(p1: Point, p2: Point, p3: Point, p4: Point, aLine: Line)
  constructor(
    p1: Point,
    p2: Point,
    p3: Point,
    p4: Point,
    aCenter: Point,
    aRadius: number
  )
  constructor(p1: Point, p2: Point, p3: Point, p4: Point, a: any, b?: number) {
    this.points = [p1, p2, p3, p4]
    if (a instanceof Line) {
      // Line
      this.lineKyouen = true
      this.center = null
      this.radius = null
      this.line = a
      return
    }

    this.lineKyouen = false
    this.center = a
    this.radius = b ? b : null
    this.line = null
  }
}

export { KyouenData }
