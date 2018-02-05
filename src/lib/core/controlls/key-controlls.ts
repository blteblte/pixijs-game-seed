import { KeyBindings } from './key-bindings';
import { Hud } from '../hud/hud';
import { HudTextElement } from '../hud/hud-text-element';

export class KeyControlls {

  public static Debug = true

  public static UP = false
  public static DOWN = false
  public static LEFT = false
  public static RIGHT = false
  public static JUMP = false

  public static initialize() {
    document.addEventListener('keydown', (e) => {
      handleControlls.bind(this)(e, true)
    })

    document.addEventListener('keyup', (e) => {
      handleControlls.bind(this)(e, false)
    })
  }
}

function handleControlls(e, value: boolean) {
  Object.keys(this).forEach(function(key) {
    if (isKey(e, KeyBindings[key] || []))
    {
      if (KeyControlls[key] !== value) {
        KeyControlls[key] = value

        if (KeyControlls.Debug) {
          const e = Hud.get('controlls') as HudTextElement
          if (value) e.appendText(` ${key}`)
          else e.clearText()
        }
      }
    }
  })
}

function isKey(e, codes = []) {
  const key = e.which || e.keyCode
  return codes.findIndex(code => code === key) !== -1
}