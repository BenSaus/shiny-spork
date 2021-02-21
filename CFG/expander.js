import rand from "../rand"
import { getTokens } from "./lexer"

// Input is expected to be an object
//   { type: 'STRING', tokenText: 'Hello ', modifiers:[] },
//   { type: 'SYMBOL', tokenText: 'Adj' },
// Grammar has <> around symbols only within tokenText
export function expandCFG(input, grammar, output) {
    //console.log("input", input)

    if (input.type === "SYMBOL") {
        const choice = rand.randChoice(grammar[input.tokenText])
        //console.log("choice", choice)

        const tokens = getTokens(choice)
        //console.log("tokens", tokens)

        if (tokens.length > 1) {
            for (let token of tokens) {
                //console.log("token", token)
                expandCFG(token, grammar, output)

                if (token.type === "SYMBOL") {
                    for (let modName of token.modifiers) {
                        //console.log("modifier", modName)

                        output[output.length - 1] = modifiers[modName](
                            output[output.length - 1]
                        )
                    }
                }
            }
        } else {
            //console.log("No tokens found, adding:", choice)
            expandCFG(tokens[0], grammar, output)
        }
    } else {
        output.push(input.tokenText)
    }
}

const modifiers = {
    a: (input) => {
        return "a " + input
    },
    s: (input) => {
        return input + "s"
    },
    the: (input) => {
        return "the " + input
    },
    capitalize: (input) => {
        return input[0].toUpperCase() + input.slice(1, input.length)
    },

    // TODO: Modifers like
    //      ChooseNoDupes(2)
    //      Choose(2)
    //      ChooseUpTo(5)
    //      a or an
}
