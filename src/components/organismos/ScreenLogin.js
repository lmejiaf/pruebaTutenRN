import { tailwind, getColor } from '../../tailwind';

import {

    Text,
    Pressable,
    TextInput,
    View,
} from 'react-native';




import React, { useState } from 'react'
import Container from '../atomos/Container';
import { connect } from 'react-redux';
import { problema3Fetch } from '../../redux/actions';

function ScreenLogin({ navigation, auth }) {


    const [email, setEmail] = useState("testapis@tuten.cl")
    const [pwd, setPwd] = useState("1234")

    const app = "APP_BCK"

    return (
        <Container auth={false} >
            {/* <View styke={tailwind('items-center')}> */}


            <TextInput value={email} style={[tailwind("bg-white rounded-full w-10/12  px-4 text-xl h-12 mt-12"), {}]} placeholder="testapis@tuten.cl" keyboardType="email-address"></TextInput>
            <TextInput value={pwd} style={[tailwind("bg-white rounded-full w-10/12 my-5 px-4 h-12 text-xl"), {}]} placeholder="1234" secureTextEntry ></TextInput>

            <Pressable onPress={() => { auth({ email: email, password: pwd, app: app }); navigation.navigate("Data") }} style={tailwind('bg-green-600 rounded-full w-10/12 px-4 h-12')}>
                <Text style={[tailwind('text-xl text-white text-center h-full'), { textAlignVertical: "center" }]}>Ingresar</Text>
            </Pressable>
            {/* </View> */}

        </Container>
    )
}


const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        auth: (payload) => dispatch(problema3Fetch(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScreenLogin);

