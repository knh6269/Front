import React, {useState, Component, useEffect } from "react";
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

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function heart({navigation}){
        const pressHandler=()=>{
            navigation.navigate('각 페이지로 이동');
        }

        //액티비티 이름: data[0].Activity.activity_name
        //업체 이름: data[0].Activity.Company.company_name
        //이미지 경로: data[0].Activity.Activity_images[0].image_url
        const [data,setData]=useState(); //연휘야 여기 담겨있어~

        const get_heart=async()=>{
        
            let me=(await AsyncStorage.getItem('user_id'));
            const response = await fetch(`https://extreme-kor.herokuapp.com/hearts?id=daeun`);
            const json = await response.json();
            setData(json.data);
        }
        useEffect(() => {
            get_heart();
          }, []);

        const dd=()=>{
            console.log(data[0].Activity.activity_name)
        }
    return (
        <NativeBaseProvider >
            <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingBottom:'5%', paddingLeft: '5%', height: '10%', alignContent: 'center', alignItems:'center'}}>
                <TouchableOpacity>
                    <IconM name="navigate-before" size={25} style={{}}></IconM>
                </TouchableOpacity>
                <Image
                    source={require('./images/cards-heart-outline.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text marginLeft={'3%'} fontSize={20}>찜</Text>
            </Box>
            <ScrollView>
                <Box>
                    <Box style={{backgroundColor:'white', justifyContent:'space-around', flexDirection: 'row',paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', }}>
                        <Box>
                            <TouchableOpacity onPress={dd}>
                                <Image
                                    source={require('./images/1.jpg')}
                                    style={{ width:100, height:100}}
                                    alt="trans_1"
                                    resizeMode='contain'/>
                                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </TouchableOpacity>
                        </Box>
                        <Box>
                            <TouchableOpacity onPress={pressHandler}>
                                <Image
                                    source={require('./images/1.jpg')}
                                    style={{ width:100, height:100}}
                                    alt="trans_1"
                                    resizeMode='contain'/>
                                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>

                    <Box  style={{backgroundColor:'white', justifyContent:'space-around', flexDirection: 'row',paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', }}>
                        <Box>
                            <TouchableOpacity onPress={pressHandler}>
                                <Image
                                    source={require('./images/1.jpg')}
                                    style={{ width:100, height:100}}
                                    alt="trans_1"
                                    resizeMode='contain'/>
                                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </TouchableOpacity>
                        </Box>
                        <Box>
                            <TouchableOpacity onPress={pressHandler}>
                                <Image
                                    source={require('./images/1.jpg')}
                                    style={{ width:100, height:100}}
                                    alt="trans_1"
                                    resizeMode='contain'/>
                                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>

                    <Box style={{backgroundColor:'white', justifyContent:'space-around', flexDirection: 'row',paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%',}}>
                        <Box>
                            <TouchableOpacity onPress={pressHandler}>
                                <Image
                                    source={require('./images/1.jpg')}
                                    style={{ width:100, height:100}}
                                    alt="trans_1"
                                    resizeMode='contain'/>
                                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </TouchableOpacity>
                        </Box>
                        <Box>
                            <TouchableOpacity onPress={pressHandler}>
                                <Image
                                    source={require('./images/1.jpg')}
                                    style={{ width:100, height:100}}
                                    alt="trans_1"
                                    resizeMode='contain'/>
                                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>

                    <Box style={{backgroundColor:'white', justifyContent:'space-around', flexDirection: 'row',paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', }}>
                        <Box>
                            <TouchableOpacity onPress={pressHandler}>
                                <Image
                                    source={require('./images/1.jpg')}
                                    style={{ width:100, height:100}}
                                    alt="trans_1"
                                    resizeMode='contain'/>
                                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </TouchableOpacity>
                        </Box>
                        <Box >
                            <TouchableOpacity onPress={pressHandler}>
                                <Image
                                    source={require('./images/1.jpg')}
                                    style={{ width:100, height:100}}
                                    alt="trans_1"
                                    resizeMode='contain'/>
                                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}