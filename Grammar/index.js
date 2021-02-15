const { default: Expander } = require("./Expander")

import { expandCall } from "./expander"

const defaultStartSymbol = { type: "SYMBOL", tokenText: "start", modifiers: [] }

export function expand(start = defaultStartSymbol, grammar, output) {
    return expandCall(start, grammar, output)
}
