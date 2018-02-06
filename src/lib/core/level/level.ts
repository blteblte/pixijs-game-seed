import { Container } from 'pixi.js';
import { IActor } from '../actor/iactor';
import { World } from '../world/world';

export abstract class Level {

  protected world?: World
  setWorld(world: World) { this.world = world }
  unsetWorld() { this.world = undefined }

  protected actors: IActor[] = []
  protected container: Container

  constructor() { }

  abstract async load()
  abstract async unload()
  abstract levelTick(delta: number)

  addActor(actor: IActor) {
    if (!this.container) return
    actor.setWorld(this.world)
    actor.setLevel(this)
    actor.load().then(() => {
      this.container.addChild(actor.getContainer())
      this.actors.push(actor)
    })
  }

  removeActor(actor: IActor) {
    if (!this.container) return
    actor.unsetLevel()
    actor.unsetWorld()
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
