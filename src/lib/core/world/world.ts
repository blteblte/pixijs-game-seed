import { Container } from 'pixi.js';
import { Level } from '../level/level';

export class World {

  public gravity = .001

  protected currentLevel: Level

  constructor(
    protected container: Container
  ) { }

  public loadLevel(level: Level) {
    level.setContainer(this.container)
    level.setWorld(this)
    level.load().then(() => {
      this.currentLevel = level
    })
  }

  public unloadLevel() {
    if (this.currentLevel) {
      this.currentLevel.unload().then(() => {
        this.currentLevel = undefined
      })
    }
  }

  public tick(delta) {
    if (this.currentLevel) {
      this.currentLevel.tick(delta)
    }

    // ...
  }

}