import { Application, Text } from 'pixi.js';
import { KeyControlls } from '../lib/core/controlls/key-controlls';
import { Hud } from '../lib/core/hud/hud';
import { HudElement } from '../lib/core/hud/hud-element';
import { Vector2 } from '../lib/core/math/vector2';

export const VIEWPORT_WIDTH = 1000
export const VIEWPORT_HEIGHT = VIEWPORT_WIDTH / 16 * 9

class App extends Application {
  constructor(container) {
    super(VIEWPORT_WIDTH, VIEWPORT_HEIGHT, <any>{
      backgroundColor: '#000',
      antialias: true,
      transparent: false,
      resolution: 1
    })

    KeyControlls.initialize()

    Hud.add(new HudElement('controlls', (this as any).stage, new Vector2(10, 10), [
      { propName: 'pressedKey', relativeLocation: new Vector2(0, 0), element: new Text('hey') }
    ]))

    ;(this as any).ticker.add(this.gameLoop.bind(this))
    container.appendChild((this as any).view)
  }

  gameLoop(delta) {



  }
}

/* bootstrap app */
const gameContainer = document.createElement('my-game')
gameContainer.style.display = 'inline-block'
new App(gameContainer)

/* append game to DOM */
document.body.appendChild(gameContainer)
