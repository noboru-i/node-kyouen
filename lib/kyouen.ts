import * as Combinatorics from 'js-combinatorics'

import { KyouenData } from './kyouenData'
import { Line } from './line'
import { Point } from './point'

class Kyouen {
  constructor(public readonly points: Point[]) {}

  public hasKyouen(): KyouenData | null {
    if (this.points.length < 4) {
      return null
    }

    // loop by conbination
    const combination = Combinatorics.combination(this.points, 4)
    let combi = combination.next()
    while (combi) {
      // check that tuple is kyouen
      const p1 = combi[0]
      const p2 = combi[1]
      const p3 = combi[2]
      const p4 = combi[3]
      const kyouen = this.isKyouen(p1, p2, p3, p4)
      if (kyouen) {
        return kyouen
      }
      combi = combination.next()
    }

    return null
  }

  private isKyouen(
    p1: Point,
    p2: Point,
    p3: Point,
    p4: Point
  ): KyouenData | null {
    const l12 = p1.calculateMidperpendicular(p2)
    const l23 = p2.calculateMidperpendicular(p3)

    const intersection123 = l12.calculateIntersection(l23)
    if (intersection123 === null) {
      // p1, p2, p3 is on the line.
      const l34 = p3.calculateMidperpendicular(p4)
      const intersection234 = l23.calculateIntersection(l34)
      if (intersection234 === null) {
        // p2, p3, p4 is on the line.
        return new KyouenData(p1, p2, p3, p4, new Line(p1, p2))
      }
      return null
    }

    const dist1 = p1.calculateDistance(intersection123)
    const dist2 = p4.calculateDistance(intersection123)
    if (Math.abs(dist1 - dist2) === 0) {
      return new KyouenData(p1, p2, p3, p4, intersection123, dist1)
    }

    return null
  }
}

export { Kyouen }
