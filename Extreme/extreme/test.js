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


export default function test({ navigation }) {
  
  return (
    <NativeBaseProvider>
     <Image
            source={{
              uri:'https://extreme-cbnu.s3.ap-northeast-2.amazonaws.com/profile_images/1637415856452_user_test.JPG'
            }}  
            style={{marginTop:20, width: 300, height:300, }}
            alt='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          /> 
      <Text>ss</Text>
      </NativeBaseProvider>
  )
}