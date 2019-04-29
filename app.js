const redux = require('redux')

const initialState = {
    counter: 357
}

let rootReducer = (state = initialState, action) => {
    if(action.type == 'INC_COUNTER') {
        return{
            counter: state.counter + 1
        }
    } else if(action.type == 'DEC_COUNTER') {
        return{
            counter: state.counter - 1
        }  
    } else if(action.type == 'SUB_COUNTER') {
        return{
            counter: state.counter - action.value
        }
    }

}


const store = redux.createStore(rootReducer)

store.subscribe(() => {
    console.log('[subscribed]', store.getState())
})

store.dispatch({
    type: 'INC_COUNTER'
})

store.dispatch({
    type: 'DEC_COUNTER'
})
store.dispatch({
    type: 'SUB_COUNTER',
    value: 20
})
