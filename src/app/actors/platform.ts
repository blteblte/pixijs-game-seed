import { Actor } from '../../lib/core/actor/actor';
import { Container, Graphics } from 'pixi.js';

export class Platform extends Actor<Container> {

  constructor() { super(Container) }

  async load() {
    const g = new Graphics()
    g.beginFill(0xffffff)
    g.drawRect(0, 0, 1, 1)
    this.container.addChild(g)

    this.x = 700
    this.y = 700
    this.scaleX = 400
    this.scaleY = 100
  }

  async unload() {

  }

  actorTick(delta: number) {

  }

}