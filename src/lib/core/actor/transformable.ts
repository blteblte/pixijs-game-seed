import { Container } from "pixi.js";

export abstract class Transformable <T extends Container> {

  protected abstract container: T

  private _x: number = 0
  public get x(): number { return this._x }
  public set x(value: number) { this._x = value; this.applyTransform() }

  private _y: number = 0
  public get y(): number { return this._y }
  public set y(value: number) { this._y = value; this.applyTransform() }

  private _scaleX: number = 1
  public get scaleX(): number { return this._scaleX }
  public set scaleX(value: number) { this._scaleX = value; this.applyTransform() }

  private _scaleY: number = 1
  public get scaleY(): number { return this._scaleY }
  public set scaleY(value: number) { this._scaleY = value; this.applyTransform() }

  private _rotation: number = 0
  public get rotation(): number { return this._rotation }
  public set rotation(value: number) { this._rotation = value; this.applyTransform() }

  private _skewX: number = 0
  public get skewX(): number { return this._skewX }
  public set skewX(value: number) { this._skewX = value; this.applyTransform() }

  private _skewY: number = 0
  public get skewY(): number { return this._skewY }
  public set skewY(value: number) { this._skewY = value; this.applyTransform() }

  private _pivotX: number = .5
  public get pivotX(): number { return this._pivotX }
  public set pivotX(value: number) { this._pivotX = value; this.applyTransform() }

  private _pivotY: number = .5
  public get pivotY(): number { return this._pivotY }
  public set pivotY(value: number) { this._pivotY = value; this.applyTransform() }

  protected applyTransform() {
    this.container.setTransform(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.pivotX, this.pivotY)
  }
}