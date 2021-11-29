import React, { useState, useEffect } from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    flex,
    FlatList,
    Button
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { backgroundColor } from 'styled-system';
import { parse } from 'react-native-svg';

var window_width = Dimensions.get('window').width;
var window_height = Dimensions.get('window').height;

export default function search({ navigation }) {

    let [data, setData] = useState();

    let zz=async()=>{
        let value = "스카이다이빙"
        const response = await fetch(`https://extreme-kor.herokuapp.com/activity/search?keyword=${value}`);
        const json = await response.json();
        setData(json.data);  
    }     
    useEffect(() => {
        zz();
      }, []);

    return (    
        <NativeBaseProvider>
            <Box style={{backgroundColor:'white', flexDirection: 'row', paddingTop: '5%', paddingLeft:'5%'}}>
                <TouchableOpacity>
                    <IconM name="navigate-before" size={25} style={{}}></IconM>
                </TouchableOpacity>
                <Text marginLeft={'3%'} fontSize={20}>123의 검색 결과</Text>
            </Box>
            <ScrollView>
                <Box>
                    <Box style={{ backgroundColor:'white', marginTop: '3%', paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', borderWidth:1}}>
                        <Box style={{flexDirection:'row', marginTop:'3%'}}>
                            <Box style={{flexDirection:'row',}}>
                                <Box style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{borderRadius:10, marginLeft:'3%', width:70, height:70}}
                                    alt="trans_1" />
                                </Box>
                            </Box>
                        
                            <Box style={{height:70, flexDirection:'column', marginLeft:'5%', justifyContent:'space-between'}}>
                                <Text style={{fontSize:14}}>상품 이름11</Text>
                                <Text style={{ fontSize: 14 }}>가격</Text>
                                <Text style={{fontSize:14}}>주소</Text>           
                            </Box>
                                        
                            <Box style={{height:70, flexDirection:'column', marginLeft:'20%', justifyContent:'space-between'}}>
                                {/* <Text style={{fontSize:14}}>{data.data[0].activity_name}</Text> */}
                                <Text style={{ fontSize: 14 }}>가격</Text>
                                <Text style={{fontSize:14}}>주소</Text>           
                            </Box>
                        </Box>
                    </Box>

                    <Box style={{ backgroundColor:'white', marginTop: '3%', paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', borderWidth:1}}>
                        <Box style={{flexDirection:'row', marginTop:'3%'}}>
                            <Box style={{flexDirection:'row',}}>
                                <Box style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{borderRadius:10, marginLeft:'3%', width:70, height:70}}
                                    alt="trans_1" />
                                </Box>
                            </Box>
                        
                            <Box style={{height:70, flexDirection:'column', marginLeft:'5%', justifyContent:'space-between'}}>
                                <Text style={{fontSize:14}}>상품 이름</Text>
                                <Text style={{ fontSize: 14 }}>가격</Text>
                                <Text style={{fontSize:14}}>주소</Text>           
                            </Box>
                                        
                            <Box style={{height:70, flexDirection:'column', marginLeft:'20%', justifyContent:'space-between'}}>
                                <Text style={{fontSize:14}}>상품 이름</Text>
                                <Text style={{ fontSize: 14 }}>가격</Text>
                                <Text style={{fontSize:14}}>주소</Text>           
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}
