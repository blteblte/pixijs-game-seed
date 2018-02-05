/**
 * 2D Vector class
 */
export class Vector2 {

  constructor (
      public x = 0
    , public y = 0
  ) { }

  clone() {
    return new Vector2(this.x, this.y)
  }

  add(v: Vector2) {
    this.x += v.x
    this.y += v.y
    return this
  }

  sub(v: Vector2) {
    this.x -= v.x
    this.y -= v.y
    return this
  }

  invert() {
    this.x *= -1
    this.y *= -1
    return this
  }

  multiplyScalar(s: number) {
    this.x *= s
    this.y *= s
    return this
  }

  divideScalar(s: number) {
    if (s === 0) {
      this.x = 0
      this.y = 0
    } else {
      const invScalar = 1 / s
      this.x *= invScalar
      this.y *= invScalar
    }
    return this
  }

  dot(v: Vector2) {
    return this.x * v.x + this.y * v.y
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y
  }

  normalize() {
    return this.divideScalar(this.length())
  }

  distanceTo(v: Vector2) {
    return Math.sqrt(this.distanceToSq(v))
  }

  distanceToSq(v: Vector2) {
    var dx = this.x - v.x, dy = this.y - v.y
    return dx * dx + dy * dy
  }

  set(x: number, y: number) {
    this.x = x
    this.y = y
    return this
  }

  setX(x) {
    this.x = x
    return this
  }

  setY(y) {
    this.y = y
    return this
  }

  setLength(l: number) {
    var oldLength = this.length()
    if(oldLength !== 0 && l !== oldLength) {
        this.multiplyScalar(l / oldLength)
    }
    return this
  }

  lerp(v: Vector2, alpha: number) {
    this.x += (v.x - this.x) * alpha
    this.y += (v.y - this.y) * alpha
    return this
  }

  rad() {
    return Math.atan2(this.x, this.y)
  }

  deg() {
    return this.rad() * 180 / Math.PI
  }

  equals(v: Vector2) {
    return this.x === v.x && this.y === v.y
  }

  rotate(theta: number) {
    const xtemp = this.x
    this.x = this.x * Math.cos(theta) - this.y * Math.sin(theta)
    this.y = xtemp * Math.sin(theta) + this.y * Math.cos(theta)
    return this
  }

}
