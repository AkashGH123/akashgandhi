import {G_LOGIN} from "./types"

export const fetchLogin=response=>dispatch=>{
dispatch({
    type:G_LOGIN,
    payload:response
})
}