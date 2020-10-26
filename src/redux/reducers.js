
import {PROBLEMA2, PROBLEMA3, FILTER_DATA} from "./actionTypes"

const initialState = {
    isFetch: false,
    data: null,
    error: null
}
export function problema2Reducer(state = initialState, action) {

    
    switch (action.type) {
        case PROBLEMA2.Fetching:
            return{
                ...state,
                isFetch:true,
                error:null
            }
        case PROBLEMA2.success:
            return{
                ...state,
                isFetch:false,
                data: action.payload
            }
        case PROBLEMA2.failed:
            return{
                ...state,
                isFetch:false,
                error:action.error
            }

        default:
            return {...state}
            break;
    }

}

const initialState2 = {
    isFetch: false,
    data: null,
    error: null,
    token:null,
    filtro:{filter:"all", price:""}
}
export function problema3Reducer(state = initialState2, action) {

    
    
    switch (action.type) {
        case PROBLEMA3.Fetching:
            return{
                ...state,
                isFetch:true,
                error:null
            }
        case PROBLEMA3.success:
            return{
                ...state,
                isFetch:false,
                data: action.payload.bookings,
                token: action.payload.token
            }
        case PROBLEMA3.failed:
            return{
                ...state,
                isFetch:false,
                error:action.error
            }
        case FILTER_DATA.Filtrar:
            console.log(action.payload)
            return{
                ...state,
                filtro:action.payload
                
            }

        default:
            return {...state}
            break;
    }

}