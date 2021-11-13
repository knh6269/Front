import React from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
} from 'native-base';
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';

export default function activity_detail({navigation}){
    const heart=()=>{
        navigation.navigate('heart');
    }
    const cart=()=>{
        navigation.navigate('cart');
    }
    const purchase=()=>{
        navigation.navigate('purchase');
    }
    
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box marginTop={50} marginLeft={'5%'} marginRight={'5%'}>
                    <Image
                                source={{
                                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                }}
                                style={{width:500, height:300 }}
                        alt="trans_1" />
                </Box>

                <Box marginTop={'3%'} marginLeft={'5%'} marginRight={'5%'}>
                    <Text fontSize={20} borderWidth={1} textAlign={'center'}>상품명</Text>
                </Box>

                <Box marginTop={'3%'} marginLeft={'5%'} marginRight={'5%'}>
                    <Text fontSize={20} borderWidth={1} textAlign={'center'}>★★★★★</Text>
                </Box>

                <Box marginTop={'3%'} marginLeft={'5%'} marginRight={'5%'}>
                    <TouchableOpacity>
                        <Text fontSize={20} borderWidth={1} textAlign={'center'}>이용 가능한 날짜 확인</Text>
                    </TouchableOpacity>
                </Box>

                <Box marginTop={'3%'} marginLeft={'5%'} marginRight={'5%'}>
                    <Text fontSize={20} borderWidth={1} textAlign={'center'}>가격</Text>
                </Box>

                <Box marginTop={'3%'} marginLeft={'5%'} marginRight={'5%'} flexDirection={'row'} justifyContent={'space-between'}>
                    <HStack space='50'>
                        <TouchableOpacity onPress={heart}>
                            <Text fontSize={20} borderWidth={1} textAlign={'center'}>찜</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={cart}>
                            <Text fontSize={20} borderWidth={1} textAlign={'center'}>장바구니</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={purchase}>
                            <Text fontSize={20} borderWidth={1} textAlign={'center'}>바로구매</Text>
                        </TouchableOpacity>
                    </HStack>
                </Box>

                <Box borderWidth={1} marginTop={'3%'} marginLeft={'5%'} marginRight={'5%'}>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                </Box>

                <Box borderWidth={1} marginTop={'3%'} marginLeft={'5%'} marginRight={'5%'}>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                    <Text>12312312312313321</Text>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}