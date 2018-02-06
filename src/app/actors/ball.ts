import { Actor } from "../../lib/core/actor/actor";
import { Container, Graphics } from "pixi.js";
import { KeyControlls } from "../../lib/core/controlls/key-controlls";

export class Ball extends Actor<Container> {

  private movementAcceleration = 1
  private jumpAcceleration = 1

  constructor() { super(Container) }

  async load() {
    const g = new Graphics()
    g.beginFill(0xFFFFFF)
    g.drawCircle(0, 0, 10)
    this.container.addChild(g)
    this.x = 600
    this.y = 400
  }

  async unload() {

  }

  actorTick(delta: number) {
    if (KeyControlls.RIGHT) {
      this.velocity.x += this.movementAcceleration
    } else if (!KeyControlls.LEFT) {
      if (this.velocity.x > 0) {
        let newVelocity = this.velocity.x - this.movementAcceleration
        if (newVelocity < 0) newVelocity = 0
        this.velocity.x = newVelocity
      }
    }

    if (KeyControlls.LEFT) {
      this.velocity.x -= this.movementAcceleration
    } else if (!KeyControlls.RIGHT) {
      if (this.velocity.x < 0) {
        let newVelocity = this.velocity.x + this.movementAcceleration
        if (newVelocity > 0) newVelocity = 0
        this.velocity.x = newVelocity
      }
    }

    if (KeyControlls.JUMP) {
      this.velocity.y -= this.jumpAcceleration
    }
  }

}