
export const chooseInclinePush = (exercise) => {

    return {
        type: 'ADD_INCLINE_PUSH',
        movement: exercise
    }
}

export const chooseChestIsolation = (exercise) => {

    return {
        type: 'ADD_CHEST_ISOLATION',
        movement: exercise
    }
}

export const chooseHorizontalPush = (exercise) => {

    return {
        type: 'ADD_HORIZONTAL_PUSH',
        movement: exercise
    }
}

export const chooseRearOrSideDelts = (exercise) => {

    return {
        type: 'ADD_REAR_OR_SIDE_DELTS',
        movement: exercise
    }
}

export const chooseHorizontalPull = (exercise) => {

    return {
        type: 'ADD_HORIZONTAL_PULL',
        movement: exercise
    }
}

export const increaseMaxInclinePush = (pounds) => {

    return {
        type: 'INCREASE_MAX_INCLINE_PUSH',
        weight1: pounds
    }
}

export const increaseMaxChestIsolation = (pounds) => {

    return {
        type: 'INCREASE_MAX_CHEST_ISOLATION',
        weight2: pounds
    }

}
export const increaseMaxHorizontalPush = (pounds) => {

    return {
        type: 'INCREASE_MAX_HORIZONTAL_PUSH',
        weight3: pounds
    }
}