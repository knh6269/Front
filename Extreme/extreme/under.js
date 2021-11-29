import React, {useEffect, useState} from 'react';
import { useWindowDimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {
  NativeBaseProvider,
  Box,
  HStack,
  Text,
  Image,
  View,
  flex
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';

// import cart from '../cart';

export default function Under({ navigation }) {
    const [me, setme] = useState();
    let zz=async()=>{
        setme(await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/user/data/${me}`);
        const json = await response.json();
    }     
    
    useEffect(() => {
        zz();
      }, [me]);

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
        console.log("ca"+me)
        if(me!=null){
        navigation.navigate('my_page');
        }
        else{
        navigation.navigate('login');
        }
    }
    const register_activity = () => {
        navigation.navigate('register_activity');
    }

    return (
        <NativeBaseProvider>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={cart}>
                    <IconA name="shoppingcart" size={40}></IconA>
                </TouchableOpacity>
                <TouchableOpacity onPress={heart}>
                    <IconA name="heart" size={40}></IconA>
                </TouchableOpacity>
                <TouchableOpacity onPress={register_activity}>
                    <IconA name="home" size={40}></IconA>
                </TouchableOpacity>
                <TouchableOpacity onPress={map}>
                    <IconF name="map-pin" size={40}></IconF>
                </TouchableOpacity>
                <TouchableOpacity onPress={my_page}>
                    <IconA name="user" size={40}></IconA>
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>
    )
}