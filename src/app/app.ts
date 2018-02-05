import { Application } from 'pixi.js';
import { KeyControlls } from '../lib/core/controlls/key-controlls';
import { Vector2 } from '../lib/core/math/vector2';
import { HudTextElement } from '../lib/core/hud/hud-text-element';

export const VIEWPORT_WIDTH = 1920
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

    /* init HUD elements .... todo - this is a mess */
    new HudTextElement('controlls', this.stage, new Vector2(10, VIEWPORT_HEIGHT - 30))

    this.ticker.add(this.gameLoop.bind(this))
    container.appendChild(this.view)
  }

  gameLoop(delta) {

  }
}

/* bootstrap app */
const gameContainer = document.createElement('my-game')
gameContainer.style.width = '100%'
gameContainer.style.display = 'inline-block'
const app = new App(gameContainer)
const { style } = app.view
style.width = '100%'
style.height = '100%'
style.display = 'block'

/* append game to DOM */
document.body.appendChild(gameContainer)
