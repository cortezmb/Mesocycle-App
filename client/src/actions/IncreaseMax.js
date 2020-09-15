
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

