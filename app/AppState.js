import { Case } from "./models/Case.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // SECTION GLOBAL VARIABLES

  cases = [
    new Case({ agency: "NSA", report: "redacted" }),
    new Case({ agency: "CIA", report: "reports not filed" }),
    new Case({ agency: "ISA", report: "super secret codex" }),
    new Case({ agency: "DED", })
  ]

  activeCase = null

  // !SECTION GLOBAL VARIABLES

  // NOTE Used to load initial data
  init() {
    // loadState('cases', [Case])
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
