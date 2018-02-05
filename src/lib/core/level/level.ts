import { Container } from 'pixi.js';
import { IActor } from '../actor/iactor';

export abstract class Level {

  constructor(
      protected container?: Container
    , protected actors: IActor[] = []
  ) {
    if (this.container && actors && actors.length) {
      actors.forEach(actor => container.addChild(actor.getContainer()))
    }
  }

  abstract async load()
  abstract async unload()
  abstract levelTick(delta: number)

  addActor(actor: IActor) {
    if (!this.container) return
    actor.load().then(() => {
      this.container.addChild(actor.getContainer())
      this.actors.push(actor)
    })
  }

  removeActor(actor: IActor) {
    if (!this.container) return
    actor.unload().then(() => {
      this.container.removeChild(actor.getContainer())
      this.actors.splice(this.actors.findIndex(x => x === actor), 1)
    })
  }

  setContainer(container: Container) { this.container = container }
  getActors() { return this.actors }

  tick(delta: number) {
    this.levelTick(delta)
    if (this.actors && this.actors.length) {
      this.actors.forEach(actor => actor.tick(delta))
    }
  }

}
