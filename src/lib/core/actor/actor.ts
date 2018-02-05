import { Container } from 'pixi.js';
import { IActor } from './iactor';
import { Vector2 } from '../math/vector2';
import { Transformable } from './transformable';

export abstract class Actor<T extends Container>
  extends Transformable<T>
  implements IActor
{
  protected container: T

  constructor(type: new () => T, location?: Vector2) {
    super()

    this.container = new type()
    if (location) {
      this.container.x = location.x
      this.container.y = location.y
    }
  }

  abstract async load()
  abstract async unload()
  abstract async actorTick(delta: number)

  public getLocation(): Vector2 {
    return new Vector2(this.container.x, this.container.y)
  }

  public moveTo(newLocation: Vector2) {
    this.x = newLocation.x
    this.y = newLocation.y
    return this
  }

  public getContainer() {
    return this.container
  }

  public tick(delta: number) {
    this.actorTick(delta)
  }
}