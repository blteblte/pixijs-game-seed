import { Level } from '../../lib/core/level/level';
import { Ball } from '../actors/ball';
import { Platform } from '../actors/platform';

export class Level1 extends Level {

  async load() {
    const ball = new Ball()
    ball.isAffectedByGravity = true
    this.addActor(ball)

    this.addActor(new Platform())

  }

  async unload() {
    console.log('unload lvl 1')
  }

  levelTick(delta: number) {

  }

}