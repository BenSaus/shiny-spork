import { expandCFG } from "./expander"

const defaultStartSymbol = { type: "SYMBOL", tokenText: "start", modifiers: [] }

export default {
    expand: function (grammar) {
        const output = []
        expandCFG(defaultStartSymbol, grammar, output)
        return output
    },
}
