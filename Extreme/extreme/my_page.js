import React, {useState, Component, useEffect } from "react";
import { Image, ScrollView } from 'react-native';
import Under from "./under";

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    StyleSheet,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { VStack, NativeBaseProvider, Box} from "native-base";
import { justifyContent } from "styled-system";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';

export default function My_page({navigation}) {
    let [data,setData]=useState()
    

    let zz=async()=>{
        let me=(await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/user/data/${me}`);
        const json = await response.json();
        setData(json);
        console.log("s")
    }     
    const ww=()=>{
    navigation.navigate('user_info');
    }
    const logout=async()=>{
        console.log("로그아웃")
        AsyncStorage.removeItem('user_id');
        navigation.navigate('home')
        setData()
    }
    const order_list = () => {
        navigation.navigate('order_list');
    }
    useEffect(() => {
        zz();
      }, []);
      
    {if(data!=null){
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box style={{ marginTop: '10%', flexDirection:"row-reverse", alignItems:'center', justifyContent:'space-between', marginLeft:'10%', marginRight:'10%'}}>
                    <Image
                        source={{ uri: data.data.profile_image }}
                        style={{ width: 100, height: 100, borderRadius: 50 }} />
                    <Box>
                        <Text style={{marginTop:'5%', fontSize:20}}>{data.data.nickname} 님</Text>
                        <Text style={{marginTop:'5%', fontSize:18}}>반갑습니다.</Text>
                    </Box>
                </Box>
                
                <Box style={{ marginTop: '3%', marginLeft: '10%', marginRight: '10%', flexDirection: 'column'}}>
                    <Box style={{ flexDirection: 'row', alignContent:'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>전화번호</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}> : </Text>
                        <Text style={{marginLeft:'5%', fontSize:16, textAlign:'center'}}>{data.data.phone_number}</Text>
                    </Box>
                    <Box style={{ flexDirection: 'row', marginTop:'3%', alignContent:'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 18 }}>이메일</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}> : </Text>
                        <Text style={{marginLeft:'5%', fontSize:16}}>{data.data.email}</Text>
                    </Box>
                    <Box style={{ flexDirection: 'row', marginTop:'3%', alignContent:'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 18 }}>생년월일</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}> : </Text>
                        <Text style={{marginLeft:'5%', fontSize:16}}>{data.data.birthday}</Text>
                    </Box>
                </Box>
                
                <Box style={{ marginTop: '10%', marginLeft: '10%', marginRight: '10%', flexDirection:'column'}}>
                    <TouchableOpacity onPress={ww}>
                        <Box style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                            <IconM name="navigate-before" size={25} style={{ justifyContent: 'center', textAlign: 'center' }}></IconM>
                            <Text fontSize={16} style={{justifyContent:'center', textAlign:'center'}}>회원 정보 수정</Text>
                        </Box>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={order_list}>
                        <Box style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginTop:'5%' }}>
                            <IconM name="navigate-before" size={25} style={{ justifyContent: 'center', textAlign: 'center' }}></IconM>
                            <Text fontSize={16} style={{justifyContent:'center', textAlign:'center'}}>주문 내역</Text>
                        </Box>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={logout}>
                        <Box style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginTop:'5%' }}>
                            <IconM name="navigate-before" size={25} style={{ justifyContent: 'center', textAlign: 'center' }}></IconM>
                            <Text fontSize={16} style={{justifyContent:'center', textAlign:'center'}}>로그아웃</Text>
                        </Box>
                    </TouchableOpacity>

                </Box>

                <Box marginTop='10%' marginLeft='5%' marginRight='5%' borderWidth={0.5}></Box>
                
                <Box style={{ marginTop: '10%', marginLeft: '5%', marginRight: '5%', flexDirection:'column'}}>
                    <Text>문의</Text>
                    <Text style={{marginTop:'3%'}}>E-mail : aaa@aaa.com</Text>
                    <Text style={{marginTop:'3%'}}>Tel : 000-0000-0000</Text>
                </Box>
                
            </ScrollView >

            <View style={{ width: Width, height: '11%', }}>
                <Under navigation={navigation}></Under>
            </View>
        </NativeBaseProvider>
    );}
    else 
       return(
           <View><Text>dd</Text></View>
       )}

}