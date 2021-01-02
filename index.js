//Low to high inclusive
function range(low, high) {
    let dist = high - low
    return Math.random() * dist + low
}

function rangeInt(low, high) {
    let dist = high - low
    return Math.round(Math.random() * dist + low)
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

// Choose one element randomly
function randChoice(array) {
    let choice = rangeInt(0, array.length - 1)
    return array[choice]
}

function randChoiceSplit(string, splitChar = ",") {
    let array = string.split(splitChar)
    let choice = rangeInt(0, array.length - 1)
    return array[choice]
}

// Choose pickNum of elements randomly with no duplicates
function randChoiceNoDups(array, pickNum) {
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

function gaussianRandom(start, end, variation) {
    return Math.floor(start + _gaussianRand(variation) * (end - start + 1))
}

function _gaussianRand(variation) {
    let rand = 0

    for (let i = 0; i < variation; i += 1) {
        rand += Math.random()
    }

    return rand / variation
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

if (typeof module !== "undefined") {
    module.exports = {
        range,
        rangeInt,
        randBool,
        range0,
        range1,
        randChoice,
        randChoiceSplit,
        randChoiceNoDups,
        gaussianRandom,
    }
}
