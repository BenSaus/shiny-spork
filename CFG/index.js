import { expandCFG } from "./expander"

const defaultStartSymbol = { type: "SYMBOL", tokenText: "start", modifiers: [] }

export default {
    expand: function(cfg, output) {
        return expandCFG(defaultStartSymbol, cfg, output)
    },
}
