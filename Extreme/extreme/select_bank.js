import React, { Component, useEffect, useState } from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    flex,
    Button,
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconM from 'react-native-vector-icons/MaterialIcons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';

export default function select_bank({navigation}) {
    const [name, onChangeTextName] =useState("")
    const [number, onChangeTextNumber] =useState("")
    const [bank , setBank] = useState();
    
    const dd=()=>{
        console.log(bank)
    }
    return (
        <NativeBaseProvider>
            <Box style={{flexDirection: 'row', marginTop:50}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <IconM name="navigate-before" size={25} style={{ }}></IconM>
                </TouchableOpacity>
            </Box>

            <Box marginTop={14} borderWidth={1}></Box>

            <ScrollView>
                <Box style={{ marginLeft: '3%', marginRight:'3%'}}>
                    <Box>
                        <Text style={{marginTop:'5%', fontWeight:'bold', fontSize:17}}>연결한 은행을 선택해주세요.</Text>
                    </Box>

                    <Box>
                        <Text style={{marginTop:'5%', fontSize:14}}>은행 선택 (1개 선택)</Text>
                    </Box>

                    <Box style={{marginTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                        <Button onPress={()=>{setBank('NH농협')}}style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>NH농협</Text>
                        </Button>
                        <Button onPress={()=>{setBank('신한')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>신한</Text>
                        </Button>
                        <Button onPress={()=>{setBank('KB국민')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>KB국민</Text>
                        </Button>
                    </Box>

                    <Box style={{marginTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                        <Button onPress={()=>{setBank('우리')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>우리</Text>
                        </Button>
                        <Button onPress={()=>{setBank('하나')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>하나</Text>
                        </Button>
                        <Button onPress={()=>{setBank('기업')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>기업</Text>
                        </Button>

                    </Box>

                    <Box style={{marginTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                        <Button onPress={()=>{setBank('새마을')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>새마을</Text>
                        </Button>
                        <Button onPress={()=>{setBank('신협')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>신협</Text>
                        </Button>
                        <Button onPress={()=>{setBank('대구')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>대구</Text>
                        </Button>
                    </Box>

                    <Box style={{marginTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                        <Button onPress={()=>{setBank('부산')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>부산</Text>
                        </Button>
                        <Button onPress={()=>{setBank('경남')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>경남</Text>
                        </Button>
                        <Button onPress={()=>{setBank('광주')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>광주</Text>
                        </Button>
                    </Box>

                    <Box style={{marginTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                        <Button onPress={()=>{setBank('SC제일')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>SC제일</Text>
                        </Button>
                        <Button onPress={()=>{setBank('수협')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>수협</Text>
                        </Button>
                        <Button onPress={()=>{setBank('전북')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>전북</Text>
                        </Button>
                    </Box>

                    <Box style={{marginTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                        <Button onPress={()=>{setBank('씨티')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>씨티</Text>
                        </Button>
                        <Button onPress={()=>{setBank('제주')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>제주</Text>
                        </Button>
                        <Button onPress={()=>{setBank('우체국')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>우체국</Text>
                        </Button>
                    </Box>

                    <Box style={{marginTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                        <Button onPress={()=>{setBank('KDB산업')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>KDB산업</Text>
                        </Button>
                        <Button onPress={()=>{setBank('카카오뱅크')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>카카오뱅크</Text>
                        </Button>
                        <Button onPress={()=>{setBank('K뱅크')}} style={{ backgroundColor:'white', borderWidth: 1, justifyContent: 'center', width: 100, height: 40 }}>
                            <Text style={{color:'black'}}>K뱅크</Text>
                        </Button>
                    </Box>

                    <Box style={{ marginTop: '3%', }}>
                        <Button onPress={()=>{navigation.navigate('register_user', {bank:bank})}}style={{backgroundColor:'#4f8bc2'}}>
                            <Text style={{color:'black'}}>확인</Text>
                        </Button>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}
