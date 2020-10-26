import React from 'react'



import { tailwind, getColor } from '../../tailwind';

import {
    SafeAreaView,

    StatusBar,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const checkToken = async() => {

    const token= await AsyncStorage.getItem('userToken');
    return token;
}



export default function Container({ children, auth }) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={getColor('blue-500')} />
            <SafeAreaView style={tailwind("flex-1 items-center bg-blue-500")}>


                

                {
                    auth === true ? checkToken() != null ? (<>{children}</>) : (<Text style={[tailwind('text-xl text-white text-center font-bold my-5'), { textAlignVertical: "center" }]}>Usted no está autorizado</Text>) : (<>{children}</>)
                }

            </SafeAreaView>
        </>
    )
}
