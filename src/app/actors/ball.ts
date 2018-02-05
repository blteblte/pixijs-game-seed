import { Actor } from "../../lib/core/actor/actor";
import { Container, Graphics } from "pixi.js";
import { Vector2 } from "../../lib/core/math/vector2";
import { KeyControlls } from "../../lib/core/controlls/key-controlls";

export class Ball extends Actor<Container> {

  private elapsedTime: number = 0

  private moveSpeed = 10
  private speedDecrease = 20
  private bounceScale = 100

  constructor(location: Vector2) { super(Container, location) }

  async load() {
    const g = new Graphics()
    g.beginFill(0xFFFFFF)
    g.drawCircle(0, 0, 10)
    this.container.addChild(g)
  }

  async unload() {

  }

  public moveRight(by: number) {
    this.x += by
  }

  public moveLeft(by: number) {
    this.x -= by
  }

  public moveUp(by: number) {
    this.y -= by
  }

  public moveDown(by: number) {
    this.y += by
  }

  actorTick(delta: number) {

    if (KeyControlls.JUMP) {
      this.bounceScale = 200
    }
    else {
      this.bounceScale = 100
    }

    if (KeyControlls.LEFT) {
      this.moveLeft(this.moveSpeed)
    }

    if (KeyControlls.RIGHT) {
      this.moveRight(this.moveSpeed)
    }

    if (KeyControlls.UP) {
      this.moveUp(this.moveSpeed)
    }

    if (KeyControlls.DOWN) {
      this.moveDown(this.moveSpeed)
    }

    this.elapsedTime += delta
    const currentLocation = this.getLocation()
    let value = Math.sin((this.elapsedTime + delta) / this.speedDecrease) - Math.sin(this.elapsedTime / this.speedDecrease)
    value *= this.bounceScale
    const newLocation = currentLocation.clone().setY(
      currentLocation.y + value
    )
    this.moveTo(newLocation)
  }

}