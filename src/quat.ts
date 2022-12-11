import *as Vec3 from "./vec3"
import { vec3 } from "./types"
import { EPSILON, kEpsilon } from "./utils/floatingPoints"

type Quat = Float32Array

export const create = (x = 0, y = 0, z = 0, w = 0): Quat => new Float32Array([x, y, z, w])
export const identityQuaternion = (): Quat => create(0, 0, 0, 1)
// Combines rotations /lhs/ and /rhs/
export const multiply = (lhs: Quat, rhs: Quat): Quat => new Float32Array([
    lhs[3] * rhs[0] + lhs[0] * rhs[3] + lhs[1] * rhs[2] - lhs[2] * rhs[1],
    lhs[3] * rhs[1] + lhs[1] * rhs[3] + lhs[2] * rhs[0] - lhs[0] * rhs[2],
    lhs[3] * rhs[2] + lhs[2] * rhs[3] + lhs[0] * rhs[1] - lhs[1] * rhs[0],
    lhs[3] * rhs[3] - lhs[0] * rhs[0] - lhs[1] * rhs[1] - lhs[2] * rhs[2]])
// Rotates the point /point/ with /rotation/.
export const multiplyfromvec3 = (rotation: Quat, point: vec3): vec3 => {
    const x = rotation[0] * 2
    const y = rotation[1] * 2
    const z = rotation[2] * 2
    const xx = rotation[0] * x;
    const yy = rotation[1] * y;
    const zz = rotation[2] * z;
    const xy = rotation[0] * y;
    const xz = rotation[0] * z;
    const yz = rotation[1] * z;
    const wx = rotation[3] * x;
    const wy = rotation[3] * y;
    const wz = rotation[3] * z;

    const res = Vec3.create()
    res[0] = (1 - (yy + zz)) * point[0] + (xy - wz) * point[1] + (xz + wy) * point[2];
    res[1] = (xy + wz) * point[0] + (1 - (xx + zz)) * point[1] + (yz - wx) * point[2];
    res[2] = (xz - wy) * point[0] + (yz + wx) * point[1] + (1 - (xx + yy)) * point[2];
    return res;
}
// Is the dot product of two quaternions within tolerance for them to be considered equal?
export const isEqualUsingDot = (dot: number): boolean => dot > 1 - kEpsilon
// Are two quaternions equal to each other?
export const equals = (lhs: Quat, rhs: Quat): boolean => isEqualUsingDot(Dot(lhs, rhs))
// Are two quaternions different from each other?
export const differentEquals = (lhs: Quat, rhs: Quat): boolean => lhs !== rhs

export const identity = (): Quat => identityQuaternion()

export const eualerAngles = (a: number, b: number, c: number): Quat => new Float32Array()
export const normalized = (q: Quat): Quat => Normalize(q)
export const setFromToRotation = (a: number, b: number, c: number): Quat => new Float32Array()
export const setLookRotation = (view: vec3): void => {
    const up = Vec3.up

}
export const toAngleAxis = (a: number, v: vec3): Quat => new Float32Array()
export const toString = (a: number, v: vec3): Quat => new Float32Array()
export const Angle = (a: Quat, b: Quat): number => 1
export const AngleAxis = (angle: number, axis: vec3): Quat => create(axis[0] * Math.sin(angle * 0.5), axis[1] * Math.sin(angle * 0.5), axis[2] * Math.sin(angle * 0.5), Math.cos(angle * 0.5))
export const Dot = (a: Quat, b: Quat): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
export const Eualer = (a: number, b: number, c: number): Quat => new Float32Array()
export const FromToRotation = (fromDirection: vec3, toDirection: vec3): Quat => new Float32Array()
export const Inverse = (rotation: Quat): Quat => new Float32Array()
export const Lerp = (a: number): Quat => new Float32Array()
export const LerpUnclamped = (a: number): Quat => new Float32Array()
/**
 * 
 * @param forward The direction to look in
 * @param upwards The vector that defines in which direcrtions up is
 * @returns 
 */
export const LookRotation = (forward: vec3, upwards = Vec3.up): Quat => new Float32Array()
export const Normalize = (q: Quat): Quat => Math.sqrt(Dot(q, q)) < EPSILON ? identity() : create(q[0] / Math.sqrt(Dot(q, q)), q[1] / Math.sqrt(Dot(q, q)), q[2] / Math.sqrt(Dot(q, q)), q[3] / Math.sqrt(Dot(q, q)))
/**
 * 
 * @param from 
 * @param to 
 * @param maxDegreesDelta 
 * @returns 
 */
export const rotateTowards = (from: Quat, to: Quat, maxDegreesDelta: number): Quat => {
    const angle = Angle(from, to)
    if (angle === 0) to
    return SlerpUnclamped(from, to, Math.min(1, maxDegreesDelta / angle))
}
export const Slerp = (a: Quat, b: Quat, t: number): Quat => new Float32Array()
export const SlerpUnclamped = (a: Quat, b: Quat, t: number): Quat => new Float32Array()