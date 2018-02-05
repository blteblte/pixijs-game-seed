import { HudElement } from './hud-element';
import { HudItem } from './hud-item';
import { Sprite } from 'pixi.js';

export class Hud {

  protected static hudElements: HudElement[] = []

  public static add(hudElement: HudElement) {
    this.hudElements.push(hudElement)
  }

  public static get(id: string) {
    return this.hudElements.find(x => x.id === id)
  }

  public static remove(hudElement: HudElement) {
    const index = this.hudElements.findIndex(x => x === hudElement)
    if (index > -1) {
      this.hudElements.splice(index, 1)
    }
  }

  public static _update(hudId: string, propName: string, fn: (prop: HudItem) => Sprite) {
    const hudElement = this.hudElements.find(x => x.id === hudId)
    if (hudElement) {
      hudElement._update(propName, fn)
    }
  }

}