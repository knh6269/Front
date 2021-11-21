import * as React from 'react';
import { useWindowDimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {Dimensions,} from "react-native"
import {
  NativeBaseProvider,
  Box,
  HStack,
  Text,
  Image,
  View,
  flex
} from 'native-base';
import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';

export default function Under({ navigation }) {

    const cart = () => {
        navigation.navigate('cart');
    }
    const heart = () => {
        navigation.navigate('heart');
    }
    const map = () => {
        navigation.navigate('weather_map');
    }
    const my_page = () => {
        navigation.navigate('my_page');
    }
    const register_activity = () => {
        navigation.navigate('register_activity');
    }
    

    return (
        <NativeBaseProvider>
            <View style={{flexDirection: 'row',  justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={cart}>
                    <IconA name="shoppingcart" size={40} style={{ flex: 1, }}></IconA>
                </TouchableOpacity>
                <TouchableOpacity onPress={heart}>
                    <IconA name="heart" size={40} style={{ flex: 1, }}></IconA>
                </TouchableOpacity>
                <TouchableOpacity onPress={register_activity}>
                    <IconA name="home" size={40} style={{ flex: 1, }}></IconA>
                </TouchableOpacity>
                <TouchableOpacity onPress={map}>
                    <IconF name="map-pin" size={40} style={{ flex: 1, }}></IconF>
                </TouchableOpacity>
                <TouchableOpacity onPress={my_page}>
                    <IconA name="user" size={40} style={{ flex: 1, }}></IconA>
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>
    )
}