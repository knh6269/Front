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

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const controller = new AbortController();

fetch('https://extreme-kor.herokuapp.com/weathermap/36.629/127.456', { signal: controller.signal })
  .then(response => response.json())
  .then(json => {
    if (json.success) {
      console.log(`${json.data.date}`);
      console.log(`${json.data.min}`);
      console.log(`${json.data.max}`);
      console.log(`${json.data.date}`);
    }
  })
  .catch(err => console.log('Fetch err', err));

// const ex = `${json.data.date}` ;

export default function test({ navigation }) {
  
  return (
    <NativeBaseProvider>
      <Box marginTop={100}>
        <Text>123</Text>
      </Box>
    </NativeBaseProvider>
  )
}