import { Level } from "../../lib/core/level/level";
import { Ball } from "../actors/ball";
import { Vector2 } from "../../lib/core/math/vector2";

export class Level1 extends Level {

  async load() {
    this.addActor(new Ball(new Vector2(600, 400)))
  }

  async unload() {
    console.log('unload lvl 1')
  }

  levelTick(delta: number) {

  }

}