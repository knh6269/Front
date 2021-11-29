import React from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Button
} from 'native-base';
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

export default function activity_detail({ navigation }) {
    
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
            <Box style={{backgroundColor:'white', flexDirection: 'row', paddingTop: '5%', paddingLeft:'5%', borderWidth:0.5}}>
                <TouchableOpacity>
                    <IconM name="navigate-before" size={25} style={{}}></IconM>
                </TouchableOpacity>
                <Text marginLeft={'3%'} fontSize={20}>주문 내역 (상세)</Text>
            </Box>
            <Box style={{ backgroundColor:'white', borderWidth:1, paddingLeft:'3%', paddingRight:'3%', paddingTop:'3%' }}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>구입한 상품명</Text>
                <Box style={{flexDirection:'row', marginTop: '3%',}}>
                    <Image
                        source={{
                            uri: 'https://wallpaperaccess.com/full/317501.jpg',
                        }}
                        style={{width:73, height:73}}
                        alt="trans_1" />
                    <Box style={{ flexDirection: 'column', marginLeft: '3%', }}>
                        <Box style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{fontSize:14, fontWeight:'bold'}}>80,000원</Text>
                            <Text style={{fontSize:18, fontWeight:'bold', marginLeft:'50%'}}>D-31</Text>
                        </Box>
                        <Box style={{flexDirection:'row', marginTop:'5%', }}>
                            <Text style={{fontSize: 14}}>사용 일시 : </Text>
                            <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'3%'}}>2021.11.28</Text>
                        </Box>
                        <Box style={{flexDirection:'row', marginTop:'3%', }}>
                            <Text style={{fontSize: 14}}>예상 날씨 : </Text>
                            <Text style={{fontSize:18, color:'#4f8bc2', fontWeight:'bold', marginLeft:'3%'}}>맑음</Text>
                        </Box>
                    </Box>    
                </Box>

                <Box marginTop='5%' marginLeft='3%' marginRight='3%' borderWidth={0.5}></Box>

                <Box style={{marginBottom:'5%'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>결제 정보</Text>
                    <Box style={{ flexDirection: 'row', marginTop:'3%'}}>
                        <Text style={{width:'20%', color:'#898989'}}>예약자 명</Text>
                        <Text style={{marginLeft:'10%'}}>정연휘</Text>
                    </Box>
                    <Box style={{ flexDirection: 'row', }}>
                        <Text style={{width:'20%', color:'#898989'}}>휴대폰 번호</Text>
                        <Text style={{marginLeft:'10%'}}>010-1234-5678</Text>
                    </Box>
                    <Box style={{ flexDirection: 'row', }}>
                        <Text style={{width:'20%', color:'#898989'}}>할인 금액</Text>
                        <Text style={{marginLeft:'10%'}}>10,000원</Text>
                    </Box>
                    <Box style={{ flexDirection: 'row', }}>
                        <Text style={{width:'20%', color:'#898989'}}>결제 금액</Text>
                        <Text style={{marginLeft:'10%'}}>80,000원</Text>
                    </Box>
                    <Box style={{ flexDirection: 'row', }}>
                        <Text style={{width:'20%', color:'#898989'}}>결제 수단</Text>
                        <Text style={{marginLeft:'10%'}}>카드(일시불)</Text>
                    </Box>
                </Box>
            </Box>
            <Box style={{backgroundColor:'white', paddingTop:'5%', paddingBottom:'5%', justifyContent: 'space-around', flexDirection:'row', borderWidth:0.5}}>
                <Button style={{ width: 150, height: 50, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white', borderRadius:10}} >
                    <Text style={{ fontSize: 20, fontWeight:'bold'}}>취소 요청</Text>
                </Button>
                <Button style={{ width: 150, height: 50, borderWidth: 1, justifyContent: 'center', backgroundColor: '#4f8bc2', borderRadius:10 }} >
                    <Text style={{ fontSize: 20, fontWeight:'bold'}}>홈으로</Text>
                </Button>
            </Box>
        </NativeBaseProvider>
    )
}