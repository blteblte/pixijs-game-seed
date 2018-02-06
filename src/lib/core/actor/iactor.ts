import { Container } from 'pixi.js';
import { World } from '../world/world';
import { Level } from '../level/level';

export interface IActor {
  getContainer(): Container
  load(): Promise<void>
  unload(): Promise<void>
  tick(delta: number)
  setWorld(world: World)
  setLevel(level: Level)
  unsetWorld()
  unsetLevel()
}