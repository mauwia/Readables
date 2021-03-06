import _ from 'lodash'
export default (state={},action)=>{
    switch(action.type){
        case 'GET_COMMENTS':
            return {..._.mapKeys(action.payload,'id')}
        case "ADD_COMMENT":
            return{...state,[action.payload.id]:action.payload}
        case "DELETE_COMMENT":
            return _.omit(state,action.payload)
        // case "UPDATE_POST_CAT":
        //     return{...state,[action.payload.id]:action.payload}
        // case "GET_POST":
        //     return action.payload
        default :
            return state
    }
}

