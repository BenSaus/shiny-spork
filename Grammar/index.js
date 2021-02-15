const { default: Expander } = require("./Expander")

import { expandCall } from "./expander"

const defaultStartSymbol = { type: "SYMBOL", tokenText: "start", modifiers: [] }

export function expand(grammar, output) {
    return expandCall(defaultStartSymbol, grammar, output)
}
