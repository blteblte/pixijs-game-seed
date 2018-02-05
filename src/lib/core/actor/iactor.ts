import { Container } from 'pixi.js';

export interface IActor {
  getContainer(): Container
  load(): Promise<void>
  unload(): Promise<void>
  tick(delta: number)
}