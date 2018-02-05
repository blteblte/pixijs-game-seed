import { HudElement } from './hud-element';
import { Container, Text } from 'pixi.js';
import { Vector2 } from '../math/vector2';
import { Hud } from './hud';

export class HudTextElement extends HudElement {

  private propName = 'Text'

  constructor(id: string, container: Container, location: Vector2) {
    super(id, container, location)
    this.props.push({
      propName: this.propName,
      relativeLocation: new Vector2(0, 0),
      element: new Text('', { fontFamily: 'Consolas', fontSize: 20, align: 'center', fill: 0xffffff })
    })
    Hud.add(this)
  }

  public setText(txt: string) {
    this._update(this.propName, (prop) => {
      const text = prop.element as Text
      text.text = txt
      return text
    })
  }

  public appendText(txt: string) {
    this._update(this.propName, (prop) => {
      const text = prop.element as Text
      text.text += txt
      return text
    })
  }

  public clearText() {
    this._update(this.propName, (prop) => {
      const text = prop.element as Text
      text.text = ''
      return text
    })
  }

}