import * as vec2 from "./vec2"

describe('Vec2', () => {
    test('create, no values given', () => {
        const v = vec2.create()
        expect(v.x).toBe(0)
        expect(v.y).toBe(0)
    })
    test('create, 1,2 values given', () => {
        const v = vec2.create(1, 2)
        expect(v.x).toBe(1)
        expect(v.y).toBe(2)
    })
    test('ScalarAddition, 1,2 values given', () => {
        const v = vec2.create(1, 2)
        const add = vec2.scalarAddition(v, 9)
        expect(add.x).toBe(10)
        expect(add.y).toBe(11)
    })
    test('ScalarSubtraction, 1,2 values given', () => {
        const v = vec2.create(1, 2)
        const subtr = vec2.scalarSubtraction(v, 3)
        expect(subtr.x).toBe(-2)
        expect(subtr.y).toBe(-1)
    })
    test('ScalarMultiplication, 1,2 values given', () => {
        const v = vec2.create(1, 2)
        const mult = vec2.scalarMultiplication(v, 3)
        expect(mult.x).toBe(3)
        expect(mult.y).toBe(6)
    })
    test('ScalarDivision, 1,2 values given', () => {
        const v = vec2.create(1, 2)
        const div = vec2.scalarDivision(v, 1)
        expect(div.x).toBe(1)
        expect(div.y).toBe(2)
    })
    test('add, 1,2 values given', () => {
        const v1 = vec2.create(1, 2)
        const v2 = vec2.create(1, 2)
        const add = vec2.add(v1, v2)
        expect(add.x).toBe(2)
        expect(add.y).toBe(4)
    })
    test('subtract, 1,2 values given', () => {
        const v1 = vec2.create(1, 2)
        const v2 = vec2.create(1, 2)
        const subt = vec2.subtract(v1, v2)
        expect(subt.x).toBe(0)
        expect(subt.y).toBe(0)
    })
    test('multiply, 1,2 values given', () => {
        const v1 = vec2.create(1, 2)
        const v2 = vec2.create(1, 2)
        const mult = vec2.multiply(v1, v2)
        expect(mult.x).toBe(1)
        expect(mult.y).toBe(4)
    })
    test('divide, 1,2 values given', () => {
        const v1 = vec2.create(1, 2)
        const v2 = vec2.create(1, 2)
        const div = vec2.divide(v1, v2)
        expect(div.x).toBe(1)
        expect(div.y).toBe(1)
    })
    test('dot product', () => {
        const v1 = vec2.create(9, 2)
        const v2 = vec2.create(3, 7)
        const dot = vec2.dot(v1, v2)
        expect(dot).toBe(21)
    })
    test('magnitude of vec(9,2)', () => {
        const v = vec2.create(9, 2)
        const mag = vec2.magnitude(v)
        expect(parseFloat(mag.toFixed(3))).toBe(9.220)
    })
    test('magnitudeSqrt of vec(9,2)', () => {
        const v = vec2.create(9, 2)
        const mag = vec2.magnitudeSqrt(v)
        expect(mag).toBe(85)
    })
    test('Normalized, v(3,1) values given', () => {
        const v = vec2.create(3, 1)
        const norm = vec2.normalized(v)
        expect(parseFloat(norm.x.toFixed(3))).toBe(0.949)
        expect(parseFloat(norm.y.toFixed(3))).toBe(0.316)
    })
    test('Negate, vec(2,-1)', () => {
        const v = vec2.create(2, -1)
        const neg = vec2.negate(v)
        expect(neg.x).toBe(-2)
        expect(neg.y).toBe(1)
    })
    test('Scalar Projection, v(2,3) values given', () => {
        const v1 = vec2.create(2, 3)
        const v2 = vec2.create(5, 7)
        const scalProj = vec2.scalarProjection(v1, v2)
        expect(parseFloat(scalProj.toFixed(3))).toBe(13.387)
    })
    test('Vector Projection, v(2,3) values given', () => {
        const v1 = vec2.create(2, 3)
        const v2 = vec2.create(5, 7)
        const vecProj = vec2.VectorProjection(v1, v2)
        expect(parseFloat(vecProj.x.toFixed(3))).toBe(7.426)
        expect(parseFloat(vecProj.y.toFixed(3))).toBe(11.138)
    })
    test('Unit vector, v(2,3) values given', () => {
        const v = vec2.create(3, 1)
        const uv = vec2.unitVector(v)
        expect(parseFloat(uv.x.toFixed(3))).toBe(0.949)
        expect(parseFloat(uv.y.toFixed(3))).toBe(0.316)
    })
    test('Distance, v1(2,3) and v2(5,7) values given', () => {
        const v1 = vec2.create(2, 3)
        const v2 = vec2.create(5, 7)
        const dist = vec2.distance(v1, v2)
        expect(dist).toBe(5)
    })
    test('Distance Squared, v1(2,3) and v2(5,7) values given', () => {
        const v1 = vec2.create(2, 3)
        const v2 = vec2.create(5, 7)
        const dist = vec2.distanceSqrt(v1, v2)
        expect(dist).toBe(25)
    })
})