

const initialState = {
    counter: 0,
    weight1: 0,
    weight2: 0,
    weight3: 0,
    weight4: 0,
    weight5: 0,

    inclinePushMovement:
        {
            name: ""
        },
    
    chestIsolationMovement: 
        {
            name: ""
        },
    horizontalPushMovement:
        {
            name: ""
        },
    rearOrSideDeltsMovement:
        {
            name: ""
        },
    horizontalPullMovement:
        {
            name: ""
        }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - 1
            }

        //Start reducer for 10 Rep Max Input
        case 'INCREASE_MAX_INCLINE_PUSH':
            return {
                ...state,
                weight1: action.weight1.pounds
            }
        case 'INCREASE_MAX_CHEST_ISOLATION':
            return {
                ...state,
                weight2: action.weight2.pounds
            }
        case 'INCREASE_MAX_HORIZONTAL_PUSH':
            return {
                ...state,
                weight3: action.weight3.pounds
            }
        case 'INCREASE_MAX_SIDE_OR_REAR_DELTS':
            return {
                ...state,
                weight4: action.weight4.pounds
            }
        case 'INCREASE_MAX_HORIZONTAL_PULL':
            return {
                ...state,
                weight5: action.weight5.pounds
            }
       
       //Start reducer for exercises
            case 'ADD_INCLINE_PUSH':
            return {
                ...state,
                inclinePushMovement: action.movement
            }
        case 'ADD_CHEST_ISOLATION':
            return {
                ...state,
                chestIsolationMovement: action.movement
            }
        case 'ADD_HORIZONTAL_PUSH':
            return {
                ...state,
                horizontalPushMovement: action.movement
            }
        case 'ADD_REAR_OR_SIDE_DELTS':
            return {
                ...state,
                rearOrSideDeltsMovement: action.movement
            }
        case 'ADD_HORIZONTAL_PULL':
            return {
                ...state,
                horizontalPullMovement: action.movement
            }
        default:
            return state;
    }

}

export default reducer;