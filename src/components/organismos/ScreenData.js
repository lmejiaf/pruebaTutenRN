import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { tailwind } from '../../tailwind'
import Container from '../atomos/Container'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import moment from 'moment';

function ScreenData({ navigation, bookings, filtros }) {


    const [bgs, setBgs] = useState(bookings || []);





    useEffect(() => {


        if (bookings != null) {
            setBgs(bookings)
        } else {
            setBgs(bgs)
        }

    }, [bookings])

    // useEffect(() => {

    //     // console.log(route.params);
    //     if (bookings != null ) {
    //         switch (filtros.filter) {
    //             case "all" || "":
    //                 setBgs(bookings);
    //                 break;
    //             case "all with":
    //                 setBgs(bookings.filter(item => item.bookingPrice.toString() === filtros.price));
    //                 break;
    //             case "=":
    //                 setBgs(bookings.filter(item => item.bookingPrice.toString() === filtros.price));
    //                 break;
    //             case ">=":
    //                 setBgs(bookings.filter(item => item.bookingPrice.toString() >= filtros.price));
    //                 break;
    //             case "<=":
    //                 setBgs(bookings.filter(item => item.bookingPrice.toString() <= filtros.price));
    //                 break;
    //             default:
    //                 setBgs(bookings);
    //                 break;
    //         }
    //     }

    // }, [])


    const getDataFilter = (filtrador) => {
        if (bookings != null) {
            switch (filtrador) {
                case "all" || "":
                    return bookings;
                    break;
                case "all with":
                    return bookings.filter(item => item.bookingPrice.toString() === filtros.price);
                    break;
                case "=":
                    return bookings.filter(item => item.bookingPrice.toString() === filtros.price);
                    break;
                case ">=":
                    return bookings.filter(item => item.bookingPrice.toString() >= filtros.price);
                    break;
                case "<=":
                    return bookings.filter(item => item.bookingPrice.toString() <= filtros.price);
                    break;
                default:
                    return bookings;
                    break;
            }
        } else {
            return [];
        }
    }





    return (
        <Container auth={true}>
            <View style={[tailwind('h-full w-11/12 my-6'), { height: hp(86) }]}>
                <FlatList
                    keyExtractor={(item, index) => item.bookingId.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[tailwind('bg-white rounded-xl my-2 h-48'), {}]}>
                                <Text style={[tailwind('text-xl text-black text-center'), { textAlignVertical: "center" }]}>BookingId: {item.bookingId}</Text>
                                <Text style={[tailwind('text-xl text-black text-center'), { textAlignVertical: "center" }]}>Cliente: {item.locationId.tutenUser.firstName} {item.locationId.tutenUser.lastName}</Text>
                                <Text style={[tailwind('text-xl text-black text-center'), { textAlignVertical: "center" }]}>Fecha de creación: {moment.unix(item.bookingTime).format("MM/DD/YY")}</Text>
                                <Text style={[tailwind('text-xl text-black text-center'), { textAlignVertical: "center" }]}>Dirección: {item.locationId.streetAddress}</Text>
                                <Text style={[tailwind('text-xl text-black text-center'), { textAlignVertical: "center" }]}>Precio: {item.bookingPrice}</Text>







                            </View>
                        )
                    }}

                    data={getDataFilter(filtros.filter)}
                />
            </View>

            <Pressable onPress={() => navigation.navigate("FilterData")} style={[tailwind('bg-green-600 rounded-full w-11/12 px-4 h-12'), { position: "absolute", top: hp(92), borderWidth: 0 }]} >
                <Text style={[tailwind('text-xl text-white text-center h-full'), { textAlignVertical: "center" }]}>Filtrar información</Text>
            </Pressable>







        </Container>
    )
}

const mapStateToProps = state => {
    return {
        bookings: state.problema3Reducer.data,
        filtros: state.problema3Reducer.filtro
    }
}
export default connect(mapStateToProps, null)(ScreenData)