import { KeyBindings } from './key-bindings';

export class KeyControlls {

  public static UP = false
  public static DOWN = false
  public static LEFT = false
  public static RIGHT = false
  public static JUMP = false

  public static initialize() {
    document.addEventListener('keydown', (e) => {
      handleControlls(e, true)
    })

    document.addEventListener('keyup', (e) => {
      handleControlls(e, false)
    })
  }
}

function handleControlls(e, value: boolean) {
  Object.keys(this).forEach(function(key) {
    if (isKey(e, KeyBindings[key] || []))
      this[key] = value
  })
}

function isKey(e, codes = []) {
  const key = e.which || e.keyCode
  return codes.findIndex(code => code === key) !== -1
}