import _ from 'lodash'
export default (state={},action)=>{
    switch(action.type){
        case 'GET_POST_CAT':
            return {..._.mapKeys(action.payload,'id')}
        case "ADD_POST_CAT":
            return{...state,[action.payload.id]:action.payload}
        case "DELETE_POST_CAT":
            console.log(action.payload)
            return _.omit(state,action.payload)
        default :
            return state
    }
}