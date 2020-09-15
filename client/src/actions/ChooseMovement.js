
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