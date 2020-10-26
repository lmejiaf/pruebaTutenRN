import React, { useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'
import { tailwind } from '../../tailwind'
import Container from '../atomos/Container'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { filtrar } from '../../redux/actions';



function ScreenDataFilter({ navigation, filter }) {


    const [selectPriceFilter, setFilterPrice] = useState("all")
    // const [selectServiceFilter, setFilterService] = useState(0)
    const [precio, setPrecio] = useState("")

    const isNumber = (val) => {
        return new RegExp("^-?[0-9][0-9,\.]+$").test(val)
    }


    return (
        <Container auth={true}>

            <Text style={[tailwind('text-xl text-white text-center font-bold my-5'), { textAlignVertical: "center" }]}>Filtro por precio</Text>

            <TextInput value={precio} onChangeText={(val) => setPrecio(val)} keyboardType="phone-pad" style={[tailwind("bg-white rounded-full w-11/12 mb-5 px-4 h-12 text-xl"), {}]} placeholder="Escriba el precio"></TextInput>
            <View style={[tailwind('w-11/12 h-12')]}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ index, item }) => {
                        // const [active, setActive] = useState(false)
                        return <Pressable onPress={() => setFilterPrice(item.key)} style={[tailwind('rounded-lg w-20 mx-2'), { borderWidth: 1, borderColor: "white" }]}><Text style={[tailwind('text-white text-lg h-full text-center'), { textAlignVertical: "center" }]} >{item.key}</Text></Pressable>
                    }}

                    data={[{ key: "all" }, { key: "all with" }, { key: "=" }, { key: ">=" }, { key: "<=" }]}
                />
            </View>
            <Text style={[tailwind('text-xl text-white text-center font-bold my-5'), { textAlignVertical: "center" }]}>filtro: {selectPriceFilter}</Text>
            <Text style={[tailwind('text-xl text-white text-center font-bold my-5'), { textAlignVertical: "center" }]}>precio: {precio}</Text>



            <Pressable onPress={() => {


                if (selectPriceFilter === "all") {
                    filter({ filter: "all", price: precio })
                    navigation.navigate('Data')
                } else {
                    if (precio.trim().length !== 0 && isNumber(precio)) {
                        filter({ filter: selectPriceFilter, price: precio })
                        navigation.navigate('Data')
                    } else {
                        Alert.alert(
                            "Advertencia",
                            "El precio está mal escrito, no debe contener letras o simbolos",
                            [
                                { text: "no filtrar", onPress: () => navigation.navigate('Data') },

                                { cancelable: false }
                            ]
                        )
                    }
                }

            }} style={[tailwind('bg-green-600 rounded-full w-11/12 px-4 h-12'), { position: "absolute", top: hp(92), borderWidth: 0 }]} >
                <Text style={[tailwind('text-xl text-white text-center h-full'), { textAlignVertical: "center" }]}>Aplicar filtro</Text>
            </Pressable>







        </Container>
    )
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        filter: (payload) => dispatch(filtrar(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenDataFilter)