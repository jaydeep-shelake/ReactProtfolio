import {combineReducers} from 'redux'

const handleMenu=(state={open:false},action)=>{
 switch (action.type) {
     case 'OPEN':
        return {...state,open:action.payload}
     case 'CLOSE':
        return {...state,open:action.payload}
     default:
         return state
 }
}
export default combineReducers({
    open:handleMenu
})