import React from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    VStack,
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function user_info({ navigation }) {

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box marginTop={'5%'}>
                    <Text textAlign={'center'} fontSize={20}>기본 정보</Text>
                </Box>
                    
                <Box marginTop={'5%'} marginLeft={'5%'}>
                    <HStack space={5}>
                        <Image
                            source={{
                                uri: 'https://wallpaperaccess.com/full/317501.jpg',
                            }}
                            style={{ width: 120, height:150, }}
                            alt="trans_1"
                        
                        />
                        <VStack space={5}>
                            <Text>닉네임</Text>
                            <Text>이름</Text>
                            <Text>휴대폰 번호</Text>
                            <Text>계좌 정보</Text>
                        </VStack>
                    </HStack>
                </Box>

                <Box marginTop={'5%'} marginLeft={'5%'}>
                    <VStack space={5}>  
                        <Text>부가 정보</Text> 
                        <Text>생년 월일</Text>
                        <Text>이메일</Text>
                    </VStack>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
  )
}