
import {FILTER_DATA, PROBLEMA2} from "./actionTypes"
import {PROBLEMA3} from "./actionTypes"


export function problema2Fetch(payload){
    return {
        type: PROBLEMA2.Fetching,
        payload
    }
}
export function problema2Success(payload){
    return {
        type: PROBLEMA2.success,
         payload
    }
}
export function problema2Failed(error){
    return {
        type: PROBLEMA2.failed,
        error
    }
}
export function problema3Fetch(payload){
    return {
        type: PROBLEMA3.Fetching,
        payload
    }
}
export function problema3Success(payload){
    return {
        type: PROBLEMA3.success,
         payload
    }
}
export function problema3Failed(error){
    return {
        type: PROBLEMA3.failed,
        error
    }
}
export function filtrar(payload){
    return {
        type: FILTER_DATA.Filtrar,
        payload
    }
}