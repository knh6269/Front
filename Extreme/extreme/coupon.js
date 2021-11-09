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
}from 'native-base';
import { TouchableOpacity,ScrollView } from "react-native";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function coupon({navigation}){
        const pressHandler=()=>{
            navigation.navigate('home_activity');
        }
       
    return (
        <NativeBaseProvider>
            <Box 
            style={{
                width:Width,
                height:64,
                marginTop:40,
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Text style={{
                    textAlign:'center',
                    height:40,
                    padding:10,
                    fontSize:24,
                    fontWeight:'bold',
                   
                }}>쿠폰
            </Text>
            </Box>
        </NativeBaseProvider>
    )
}