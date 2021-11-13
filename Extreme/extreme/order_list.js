import React from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    VStack
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function order_list({ navigation }) {
    const review=()=>{
            navigation.navigate('review');
    }
    
    const order_list_detail=()=>{
            navigation.navigate('order_list_detail');
    }


    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box marginTop={'5%'}>
                    <Text textAlign={'center'} fontSize={20}>주문 내역</Text>
                </Box>
                    
                <Box  borderWidth={1} alignItems={'flex-end'} >
                    <HStack space={1} marginRight={'5%'}>
                        <TouchableOpacity onPress={order_list_detail}>
                            <Text fontSize={10}>주문 상세보기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={order_list_detail}>
                            <IconA name="right" size={10}></IconA>
                        </TouchableOpacity>
                        </HStack>
                </Box>

                <Box marginTop={'5%'} marginLeft={'5%'}>
                    <HStack>
                        <Image
                            source={{
                                uri: 'https://wallpaperaccess.com/full/317501.jpg',
                            }}
                            style={{ marginLeft:'5%', width:150, height:110}}
                            alt="trans_1" />
                        <VStack space={5}>
                            <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >상품명입니다</Text>
                            <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >이용 날짜</Text>
                            <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >가격</Text>
                        </VStack>
                        <VStack space={10}>
                            <TouchableOpacity>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >환불</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={review}>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >리뷰 쓰기</Text>
                            </TouchableOpacity>
                        </VStack>      
                    </HStack>
                </Box>
                
                <Box marginTop={'5%'} borderWidth={1} alignItems={'flex-end'} >
                        <HStack space={1} marginRight={'5%'}>
                            <TouchableOpacity onPress={order_list_detail}>
                                <Text fontSize={10}>주문 상세보기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={order_list_detail}>
                                <IconA name="right" size={10}></IconA>
                            </TouchableOpacity>
                        </HStack>
                </Box>

                <Box marginTop={'5%'} marginLeft={'5%'}>
                    <HStack>
                        <Image
                            source={{
                                uri: 'https://wallpaperaccess.com/full/317501.jpg',
                            }}
                            style={{ marginLeft:'5%', width:150, height:110}}
                            alt="trans_1" />
                        <VStack space={5}>
                            <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >상품명입니다</Text>
                            <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >이용 날짜</Text>
                            <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >가격</Text>
                        </VStack>
                        <VStack space={10}>
                            <TouchableOpacity>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >환불</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={review}>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >리뷰 쓰기</Text>
                            </TouchableOpacity>
                        </VStack>      
                    </HStack>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
  )
}