import { put, take, call, all, takeEvery, fork } from 'redux-saga/effects';

import axios from "axios"

//actiontypes
import { PROBLEMA2, PROBLEMA3 } from "./actionTypes"


//actions
import { problema2Failed, problema2Success, problema3Failed, problema3Success } from "./actions"
import AsyncStorage from '@react-native-async-storage/async-storage';





//sagas

function* fetchConversion({ payload }) {






    console.log(payload);



    try {

        const response = yield call(() =>
            axios.post('http://localhost:9100/problema2/convertir',
                payload, // only if not an object. Otherwise don't use outer {},
                {
                    headers: {


                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*",

                    }
                },
            ))
        console.log(response.data);
        yield put(problema2Success(response.data));


    } catch (error) {
        yield put(problema2Failed(error))
        console.log(error);
    }

}
function* fetchToken({ payload }) {

    console.log("el token:" + payload);



    try {

        const user = yield call(() =>
            axios.put('https://dev.tuten.cl/TutenREST/rest/user/' + payload.email.replace("@", "%40"),
                payload,// only if not an object. Otherwise don't use outer {},
                {
                    headers: {


                        'Content-Type': 'application/json',
                        'App': 'APP_BCK',
                        'Accept': 'application/json',
                        'Password': payload.password

                    }
                },
            ))




        const bookings = yield call(() =>
            axios.get('https://dev.tuten.cl/TutenREST/rest/user/' + "contacto@tuten.cl".replace("@", "%40") + "/bookings",
                {
                    params: {
                        current: true,
                    },
                    headers: {


                        'Content-Type': 'application/json',
                        'App': 'APP_BCK',
                        'Accept': 'application/json',
                        'Token': user.data.sessionTokenBck,
                        'Adminemail': payload.email

                    }
                },// only if not an object. Otherwise don't use outer {},

            ))



        const response = {
            token: user.data.sessionTokenBck,
            bookings: bookings.data
        }

        const saveToken = async () => {
            try {
                const token= await AsyncStorage.setItem('userToken', user.data.sessionTokenBck)
                
            } catch (error) {

            }
        }
        console.log("aki toi");
        yield call(saveToken);

        yield put(problema3Success(response));




    } catch (error) {
        yield put(problema3Failed(error))
        console.log(error);
    }


}






//sagaRoot
export default function* rootSaga() {
    yield all([
        takeEvery(PROBLEMA2.Fetching, fetchConversion),
        takeEvery(PROBLEMA3.Fetching, fetchToken),
        // takeEvery(SALIDA.SOLICITUD, salir),
        // takeEvery(REGISTRO.SOLICITUD, registrar),
        // takeEvery(RECUPERAR.SOLICITUD, recuperar_pwd),
        //takeEvery(ENVIAR.SOLICITUD, addPedido),
        //fork(syncEstadoSaga),
        //fork(syncProductosSaga),
    ]);
}