import { expandCFG } from "./expander"

const defaultStartSymbol = { type: "SYMBOL", tokenText: "start", modifiers: [] }

export default {
    expand: function(cfg) {
        const output = []
        expandCFG(defaultStartSymbol, cfg, output)
        return output
    },
}
