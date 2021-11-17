import React from 'react'
import {
    Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Button,
}from 'native-base';
import { TouchableOpacity,ScrollView } from "react-native";
import { useState } from 'react/cjs/react.development';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;



export default function test({navigation}){
    const [a,b]=useState([
        {animal:'b', id:1},
        {animal:'bi',id:2},
        {animal:'bir', id:3},
        {animal:'bird', id:4}
    ]);
   
    return (
        <NativeBaseProvider>
            {a.map((a,index)=> <Box><Button key={index}>{a.animal}{a.id}</Button></Box>)}
           
            <Box><Button>b</Button></Box>
            <Box><Button >c</Button></Box>
            <Box><Button >d</Button></Box>

        
        </NativeBaseProvider>
    )
}