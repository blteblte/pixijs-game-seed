import { Container } from 'pixi.js';
import { Level } from '../level/level';

export class World {

  protected currentLevel: Level

  constructor(
    protected container: Container
  ) { }

  loadLevel(level: Level) {
    level.setContainer(this.container)
    level.load().then(() => {
      this.currentLevel = level
    })
  }

  unloadLevel() {
    if (this.currentLevel) {
      this.currentLevel.unload().then(() => {
        this.currentLevel = undefined
      })
    }
  }

  tick(delta) {
    if (this.currentLevel) {
      this.currentLevel.tick(delta)
    }

    // ...
  }

}