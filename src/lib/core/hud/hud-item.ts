import { Vector2 } from '../math/vector2';
import { Sprite } from 'pixi.js';

export interface HudItem {
  relativeLocation: Vector2
  propName: string
  element: Sprite
}