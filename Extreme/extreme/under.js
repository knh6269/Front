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
import home_activity from './home_activity';

// import cart from '../cart';

export default function Under({ navigation }) {
    const [me, setme] = useState();
    let zz=async()=>{
        setme(await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/user/data/${me}`);
        const json = await response.json();
        console.log(me)
    }     
    
    useEffect(() => {
        zz();
      }, []);

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
    const home = () => {
        navigation.navigate('home');
    }

    return (
        <NativeBaseProvider>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>    
                    <TouchableOpacity onPress={cart}>
                        <Image
                        source={require('./images/cart-outline.png')}
                        style={{width: 40, height: 40, }}
                        alt="trans_1"
                        />
                        <Text style={{textAlign:'center',fontSize:10}}>장바구니</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>    
                    <TouchableOpacity onPress={heart}>
                        <Image
                        source={require('./images/cards-heart-outline.png')}
                        style={{width: 40, height: 40, }}
                        alt="trans_1"
                        />
                        <Text style={{textAlign:'center',fontSize:10}}>찜</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>    
                    <TouchableOpacity onPress={home}>
                        <Image
                        source={require('./images/home-outline.png')}
                        style={{width: 40, height: 40, }}
                        alt="trans_1"
                        />
                        <Text style={{textAlign:'center', fontSize:10, color:'#1d7dc3'}}>홈</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>    
                    <TouchableOpacity onPress={map}>
                        <Image
                        source={require('./images/map-marker-outline.png')}
                        style={{width: 40, height: 40, }}
                        alt="trans_1"
                        />
                        <Text style={{textAlign:'center',fontSize:10}}>날씨 지도</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>    
                    <TouchableOpacity onPress={my_page}>
                        <Image
                        source={require('./images/account-outline.png')}
                        style={{width: 40, height: 40, }}
                        alt="trans_1"
                        />
                        <Text style={{textAlign:'center',fontSize:10}}>마이페이지</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </NativeBaseProvider>
    )
}