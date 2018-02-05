import { Application } from 'pixi.js';
import { KeyControlls } from '../lib/core/controlls/key-controlls';
import { Vector2 } from '../lib/core/math/vector2';
import { HudTextElement } from '../lib/core/hud/hud-text-element';
import { World } from '../lib/core/world/world';
import { Level1 } from './levels/level-1';

export const W = 1920
export const H = W / 16 * 9

class App extends Application {
  constructor(container) {
    super(W, H, <any>{
      backgroundColor: '#000',
      antialias: true,
      transparent: false,
      resolution: 1
    })

    KeyControlls.initialize()

    /* init HUD elements .... todo - this is a mess */
    new HudTextElement('controlls', this.stage, new Vector2(10, H - 30))

    const world = new World(this.stage)
    this.ticker.add(world.tick.bind(world))

    world.loadLevel(new Level1())

    container.appendChild(this.view)
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
