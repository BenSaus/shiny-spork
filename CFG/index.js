import { expandCFG } from "./expander.js"

const defaultStartSymbol = { type: "SYMBOL", tokenText: "start", modifiers: [] }

export default {
    expand: function (grammar) {
        const output = []
        expandCFG(defaultStartSymbol, grammar, output)
        return output
    },
}
