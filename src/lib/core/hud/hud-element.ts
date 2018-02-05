import { Vector2 } from '../math/vector2';
import { HudItem } from './hud-item';
import { Container, Sprite } from 'pixi.js';

export class HudElement {
  constructor(
      public id: string
    , protected container: Container
    , public location: Vector2 = new Vector2(0, 0)
    , protected props: HudItem[] = []
  ) { }

  _update(propName: string, fn: (prop: HudItem) => Sprite) {
    const prop = this.props.find(x => x.propName === propName)
    if (!prop) { return }

    prop.element = fn(prop)

    if (prop.element) {
      const newLocation = this.location
        .clone()
        .add(prop.relativeLocation)

      prop.element.x = newLocation.x
      prop.element.y = newLocation.y
    }

    this.container && this.container.addChild(prop.element)
  }
}