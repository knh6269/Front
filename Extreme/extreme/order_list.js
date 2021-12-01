import React, {useState, Component, useEffect } from "react";
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    VStack,
    Button,
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from "./test";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function order_list({ navigation }) {
    const [data,setData]=useState(); //연휘야 여기 담겨있어~
    const review=()=>{
            navigation.navigate('review');
    }
    
    const order_list_detail=()=>{
            navigation.navigate('order_list_detail');
    }

    const get_order_list=async()=>{
        let me=(await AsyncStorage.getItem('user_id'));
        const response = await fetch(`GET https://extreme-kor.herokuapp.com/reservation/orderlist?id=daeun`);
        const json = await response.json();
        setData(json.data);
    }

    useEffect(() => {
        get_order_list();
      }, []);

    const dd=()=>{
        console.log(data)
    }
    if(data){
    return (
        <NativeBaseProvider>
            <Box style={{ flexDirection: 'row', marginTop: '5%' }}>
                <HStack>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <IconM name="navigate-before" size={25} style={{}}></IconM>
                    </TouchableOpacity>
                    <Text fontSize={20}>주문 내역</Text>
                </HStack>
            </Box>

            <ScrollView>
                <Box>
                    <Box style={{ backgroundColor:'white', marginTop:'5%', borderWidth:1, paddingLeft:'3%', paddingRight:'3%' }}>
                        <HStack space={1} marginRight={'3%'} justifyContent={'space-between'}>
                            <Text>2021.11.13</Text>
                            <TouchableOpacity onPress={dd}>
                                <Box style={{justifyContent:'center'}}>
                                    <HStack>
                                        <Text fontSize={14} color={'#4f8bc2'} justifyContent={'center'}>주문 상세보기</Text>
                                        <IconA name="right" size={14} justifyContent={'center'}></IconA>
                                    </HStack>
                                </Box>
                            </TouchableOpacity>
                        </HStack>
                        
                        <Box style={{ marginTop: '3%', }}>
                            <Text style={{fontSize:16, fontWeight:'bold'}}>구입한 상품명</Text>
                            <Box style={{flexDirection:'row', marginTop: '3%',}}>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{width:73, height:73}}
                                    alt="trans_1" />
                                <Box style={{flexDirection:'column', marginLeft:'3%', fontSize:14}}>
                                    <Text>구입한 상품명</Text>
                                    <Text>이용 날짜</Text>
                                    <Text style={{marginTop:'5%'}}>가격</Text>
                                </Box>    
                            </Box>

                            <Box marginTop='5%' marginLeft='3%' marginRight='3%' borderWidth={1}></Box>

                            <Box style={{marginBottom:'5%', marginTop:'5%', justifyContent: 'space-around', flexDirection:'row'}}>
                                <Button style={{ fontSize:14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} ><Text>리뷰쓰기</Text></Button>
                                <Button style={{ fontSize:14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} ><Text>환불신청</Text></Button>
                            </Box>
                        </Box>
                    </Box>
                    
                    <Box style={{ backgroundColor:'white', marginTop:'5%', borderWidth:1, paddingLeft:'3%', paddingRight:'3%' }}>
                        <HStack space={1} marginRight={'3%'} justifyContent={'space-between'}>
                            <Text>2021.11.13</Text>
                            <TouchableOpacity onPress={order_list_detail}>
                                <Box style={{justifyContent:'center'}}>
                                    <HStack>
                                        <Text fontSize={14} color={'#4f8bc2'} justifyContent={'center'}>주문 상세보기</Text>
                                        <IconA name="right" size={14} justifyContent={'center'}></IconA>
                                    </HStack>
                                </Box>
                            </TouchableOpacity>
                        </HStack>
                        
                        <Box style={{ marginTop: '3%', }}>
                            <Text style={{fontSize:16, fontWeight:'bold'}}>구입한 상품명</Text>
                            <Box style={{flexDirection:'row', marginTop: '3%',}}>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{width:73, height:73}}
                                    alt="trans_1" />
                                <Box style={{flexDirection:'column', marginLeft:'3%', fontSize:14}}>
                                    <Text>구입한 상품명</Text>
                                    <Text>이용 날짜</Text>
                                    <Text style={{marginTop:'5%'}}>가격</Text>
                                </Box>    
                            </Box>

                            <Box marginTop='5%' marginLeft='3%' marginRight='3%' borderWidth={1}></Box>

                            <Box style={{marginBottom:'5%', marginTop:'5%', justifyContent: 'space-around', flexDirection:'row'}}>
                                <Button style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                                    <Text style={{ fontSize: 14, }}>리뷰쓰기</Text>
                                </Button>
                                <Button style={{ fontSize: 14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                                    <Text style={{ fontSize: 14, }}>환불신청</Text>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>
            </ScrollView>
        </NativeBaseProvider>
  )}
  else{
      return(
          <Loading/>
      )
  }
}