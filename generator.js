import { randChoice, randChoiceNoDupes } from "./rand"

// Given a template object produce random data
// The first param is the entire input object.
function recursiveGenerate(fullObj, focus) {
    console.log("Generate", obj)
    const output = {}

    //iterate through the object's keys
    for (const key in obj) {
        console.log("Key", key)
        //If the key is an array, choose a value from it
        if (Array.isArray(obj[key])) {
            console.log("Array")
            output[key] = randChoice(obj[key])
        } else if (isObject(obj[key])) {
            console.log("Object")

            // recursive call
            output[key] = generate(obj[key])
        }
    }

    return output
}

function shallowGenerate(obj) {
    console.log("Generate", obj)
    const output = {}

    //iterate through the object's keys
    for (const key in obj) {
        // console.log("Key", key);

        //If the key is an array, choose a value from it
        if (Array.isArray(obj[key])) {
            // console.log("Array");
            output[key] = randChoice(obj[key])
        } else if (typeof obj[key] === "string") {
            // This value has been hardwired, so simply copy it to the output
            output[key] = obj[key]
        } else if (isObject(obj[key])) {
            // console.log("Object");

            let choiceNum = getChoiceNumber(obj[key].choose)
            let list = obj[key].values

            // NOTE: References to other keys must have already been chosen
            if (typeof obj[key].dependsOn === "string") {
                const referenceKey = obj[key].dependsOn
                const subObj = obj[key]

                // Grab the existing generated value from the output object
                const valueOfRef = output[referenceKey]

                for (const subKey in subObj.values) {
                    if (subKey === valueOfRef) {
                        if (choiceNum === 1) {
                            // output[key] = randChoice(subObj.values[subKey]);
                            list = subObj.values[subKey]
                        } else if (choiceNum > 1) {
                            list = randChoiceNoDupes(
                                subObj.values[subKey],
                                choiceNum
                            )
                        }
                    }
                }
            }

            output[key] = getChoices(list, choiceNum)
            console.log("Last", output[key])
        }
    }

    return output
}

function getChoiceNumber(chooseNumString) {
    if (typeof chooseNumString === "string") {
        return Number(chooseNumString)
    } else {
        return 1
    }
}

function getChoices(list, choiceNum) {
    if (choiceNum === 1) {
        return randChoice(list)
    } else if (choiceNum > 1) {
        return randChoiceNoDupes(list, choiceNum)
    }
}

const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === "[object Object]"
}

export default { shallowGenerate }
