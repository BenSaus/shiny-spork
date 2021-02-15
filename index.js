import generator from "./generator"

import cfg from "./CFG"
export { cfg, generator }

import {
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
} from "./rand"

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
