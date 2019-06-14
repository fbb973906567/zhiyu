// Reducer
function counter(state = { count: 4 }, action) {
    const count = state.count
    console.log(state);
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        case 'decrease':
            return { count: count + 1 }
        default:
            return state
    }
}

export default counter;