import {G_LOGIN} from "../actions/types"

const INITIAL_STATE={
    signSuccess:null
}

export default function(state=INITIAL_STATE,action){
switch(action.type){
case G_LOGIN:
    //console.log(action.payload)
    return {...state,signSuccess:action.payload}
default:
    return state




}




}