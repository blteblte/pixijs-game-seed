import { Container } from 'pixi.js';
import { IActor } from './iactor';
import { Vector2 } from '../math/vector2';
import { Transformable } from './transformable';
import { World } from '../world/world';
import { Level } from '../level/level';

export abstract class Actor<T extends Container>
  extends Transformable<T>
  implements IActor
{
  /* world */
  protected world?: World
  public setWorld(world: World) { this.world = world }
  public unsetWorld() { this.world = undefined }

  /* level */
  protected level?: Level
  public setLevel(level: Level) { this.level = level }
  public unsetLevel() { this.level = undefined }

  /* movement */
  public velocity: Vector2 = new Vector2(0, 0)
  public isAffectedByGravity: boolean

  protected container: T

  constructor(type: new () => T) {
    super()

    this.container = new type()
    this.applyTransform()
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

    this.x += this.velocity.x
    this.y += this.velocity.y

    if (this.world) this.tickPhysics(delta)
  }

  private tickPhysics(delta: number) {

    // if (this.isAffectedByGravity) {
    //   const { gravity } = this.world
    //   if (gravity !== 0) {
    //     this.velocity.y = gravity
    //       * /* falling time */(100)
    //   }
    // }

  }
}