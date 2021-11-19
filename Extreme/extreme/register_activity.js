import React, { Component, useState } from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    flex
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';

export default function register_activity() {

    const [name, onChangeTextName] = React.useState("")

    const [number, onChangeTextNumber] = React.useState("")

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <Box marginTop={'5%'}>
                        <HStack>
                            <IconI name="md-shield-checkmark-outline" size={20}></IconI>
                            <Text>사업자 등록증 정보와 동일한 내용을 입력하여 주십시오.</Text>
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>상호/법인명</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'상호/법인명을 입력하세요.'}
                                onChangeText={(text) => onChangeTextName(text)}
                                value={name}
                            />
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>사업자등록번호</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'사업자등록번호를 입력하세요.'}
                                onChangeText={(text) => onChangeTextNumber(text)}
                                value={number}
                            />
                        </HStack>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}
