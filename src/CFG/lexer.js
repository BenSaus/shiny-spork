export function getTokens(line) {
    let pos = 0
    const tokens = []

    while (pos < line.length) {
        //console.log("loop", line[pos])

        if (line[pos] === "<") {
            //console.log("Found symbol")

            const { symbolText: symbolText, newPos: newPos } = scanSymbol(
                line,
                pos
            )
            tokens.push(parseSymbol(symbolText))
            pos = newPos
        } else {
            const start = pos
            while (line[pos] !== "<" && pos < line.length) {
                pos = pos + 1
            }

            const tokenText = line.slice(start, pos)
            tokens.push({
                type: "STRING",
                tokenText,
            })
        }
    }

    return tokens
}

// Scans forward to consume the whole symbol
// Assumes that line[pos] === "<"
function scanSymbol(line, pos) {
    // skip the "<" character
    let cursor = pos + 1
    let start = cursor

    while (line[cursor] !== ">") {
        cursor = cursor + 1
    }
    const symbolText = line.slice(start, cursor)
    //console.log(symbolText)

    return { symbolText, newPos: cursor + 1 }
}

function parseSymbol(symbolText) {
    let mods = []
    let tokenText = ""

    if (symbolText.includes(".")) {
        const strings = symbolText.split(".")

        tokenText = strings[0]
        strings.shift()
        mods = strings
    } else {
        tokenText = symbolText
    }

    return {
        type: "SYMBOL",
        tokenText: tokenText,
        modifiers: mods,
    }
}
