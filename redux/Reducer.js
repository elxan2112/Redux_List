const firstState = { list: [{name: 'Elxan', number: '5555'}]}

function ejdahaReducer(state = firstState, action){
    switch(action.type) {
        case 'fullAction':
            console.log(action.payload)
            if(action.payload.name === "" || action.payload.name=== undefined || action.payload.number ==="" || action.payload.number === undefined){
                return {list:[...state.list]}
            }
            else{
                return {
                    ...state, list:[...state.list, action.payload]
                }
            }
        case 'clearAction':
            return{
                list: []
            }
        default: return state;
    }
}

export default ejdahaReducer