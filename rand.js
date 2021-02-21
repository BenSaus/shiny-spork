function range(low, high) {
    return Math.random() * (high - low) + low
}

// WARNING: High exclusive
function rangeInt(low, high) {
    low = Math.ceil(low)
    high = Math.floor(high)
    return Math.floor(Math.random() * (high - low) + low) //The maximum is exclusive and the minimum is inclusive
}

function rangeIntInclusive(low, high) {
    low = Math.ceil(low)
    high = Math.floor(high)
    return Math.floor(Math.random() * (high - low + 1) + low) //The maximum is inclusive and the minimum is inclusive
}

// Zero to high
function range0(high) {
    return Math.random() * high
}

// 1 to High
function range1(high) {
    return Math.random() * high + 1
}

//Randomly true or false
function randBool(chanceOfTrue) {
    if (chanceOfTrue) {
        return Math.random() <= chanceOfTrue
    } else return Math.random() <= 0.5
}

// Choose one array element randomly
function randChoice(array) {
    let choice = rangeInt(0, array.length)
    return array[choice]
}

function randChoiceSplit(string, splitChar = ",") {
    let array = string.split(splitChar)
    let choice = rangeInt(0, array.length)
    return array[choice]
}

// Choose pickNum of elements randomly with no duplicates
function randChoiceNoDupes(array, pickNum) {
    if (pickNum > array.length) {
        throw new Error(
            "Number of picks cannot be greater than the length of the given array"
        )
    }

    let result = []
    let choiceArray = array.slice()

    for (let x = 0; x < pickNum; x++) {
        let choice = rangeInt(0, choiceArray.length)

        result.push(choiceArray[choice])
        choiceArray.splice(choice, 1)
    }

    return result
}

function randChoiceDupes(array, pickNum) {
    const output = []
    for (let x = 0; x < pickNum; x++) {
        output.push(randChoice(array))
    }

    return output
}

// https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve/36481059#36481059

function randNormal(min, max, skew) {
    let u = 0,
        v = 0
    while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random()
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

    num = num / 10.0 + 0.5 // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range
    num = Math.pow(num, skew) // Skew
    num *= max - min // Stretch to fill range
    num += min // offset to min
    return num
}

function randChoiceTree(tree) {}

// 10,20,70   All arguments sum to 100. 10% to return 0, 20% to return 1, 70% to return 2
function randChoicePercent() {
    let choice = Math.random()
    let total = 0

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]

        if (total / 100 > choice) return i
    }
}

export default {
    range,
    rangeInt,
    rangeIntInclusive,
    randBool,
    range0,
    range1,
    randNormal,
    randChoice,
    randChoiceSplit,
    randChoiceNoDupes,
    randChoiceDupes,
    randChoicePercent,
}
