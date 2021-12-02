import React, { useState, Component, useEffect } from "react";
import { Dimensions, } from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Button
} from 'native-base';
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Loading from "./test";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

export default function activity_detail({ navigation }) {
    const [orderDetail, setOrderDetail] = useState(navigation.state.params.orderListData)
    const [userInfo, setUserInfo] = useState()

    const get_user_info = async () => {
        let me = (await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/user/data/${me}`);
        const json = await response.json();
        setUserInfo(json);
        console.log(json)
    }

    useEffect(() => {
        get_user_info();
    }, []);
    {
        if (userInfo != null) {

            return (
                <NativeBaseProvider>
                    <ScrollView>
                        <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingBottom: '5%', paddingLeft: '5%', borderWidth: 0.5 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <IconM name="navigate-before" size={25} style={{}}></IconM>
                            </TouchableOpacity>
                            <Text marginLeft={'3%'} fontSize={20}>주문 내역 (상세)</Text>
                        </Box>
                        <Box style={{ backgroundColor: 'white', borderWidth: 1, paddingLeft: '3%', paddingRight: '3%', paddingTop: '3%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{orderDetail.Activity.activity_name}</Text>
                            <Box style={{ flexDirection: 'row', marginTop: '3%', }}>
                                <Image
                                    source={{
                                        uri: orderDetail.Activity.Activity_images[0].image_url
                                    }}
                                    style={{ width: 73, height: 73 }}
                                    alt="trans_1" />
                                <Box style={{ flexDirection: 'column', marginLeft: '3%', }}>
                                    <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{orderDetail.payment}원</Text>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: '50%' }}>D-31</Text>
                                    </Box>
                                    <Box style={{ flexDirection: 'row', marginTop: '5%', }}>
                                        <Text style={{ fontSize: 14 }}>사용 일시 : </Text>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: '3%' }}>{orderDetail.Activity_time.date}</Text>
                                    </Box>
                                    <Box style={{ flexDirection: 'row', marginTop: '3%', }}>
                                        <Text style={{ fontSize: 14 }}>예상 날씨 : </Text>
                                        <Text style={{ fontSize: 18, color: '#4f8bc2', fontWeight: 'bold', marginLeft: '3%' }}>맑음</Text>
                                    </Box>
                                </Box>
                            </Box>

                            <Box marginTop='5%' marginLeft='3%' marginRight='3%' borderWidth={0.5}></Box>

                            <Box style={{ marginBottom: '5%', marginTop:'5%' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>결제 정보</Text>
                                <Box style={{ flexDirection: 'row', marginTop: '3%' }}>
                                    <Text style={{ width: '20%', color: '#898989' }}>예약자 명</Text>
                                    <Text style={{ marginLeft: '10%' }}>{userInfo.data.name}</Text>
                                </Box>
                                <Box style={{ flexDirection: 'row', }}>
                                    <Text style={{ width: '20%', color: '#898989' }}>휴대폰 번호</Text>
                                    <Text style={{ marginLeft: '10%' }}>{userInfo.data.phone_number}</Text>
                                </Box>
                                <Box style={{ flexDirection: 'row', }}>
                                    <Text style={{ width: '20%', color: '#898989' }}>할인 금액</Text>
                                    <Text style={{ marginLeft: '10%' }}>10,000원</Text>
                                </Box>
                                <Box style={{ flexDirection: 'row', }}>
                                    <Text style={{ width: '20%', color: '#898989' }}>결제 금액</Text>
                                    <Text style={{ marginLeft: '10%' }}>{orderDetail.payment}</Text>
                                </Box>
                                <Box style={{ flexDirection: 'row', }}>
                                    <Text style={{ width: '20%', color: '#898989' }}>결제 수단</Text>
                                    <Text style={{ marginLeft: '10%' }}>카드(일시불)</Text>
                                </Box>
                            </Box>
                        </Box>
                    </ScrollView>
                    <Box style={{ backgroundColor: 'white', paddingTop: '5%', paddingBottom: '5%', justifyContent: 'space-around', flexDirection: 'row', borderWidth: 0.5 }}>
                        <Button style={{ width: 150, height: 50, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white', borderRadius: 10 }} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>취소 요청</Text>
                        </Button>
                        <Button style={{ width: 150, height: 50, borderWidth: 1, justifyContent: 'center', backgroundColor: '#4f8bc2', borderRadius: 10 }} onPress={() => navigation.goBack()}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>확인</Text>
                        </Button>
                    </Box>
                </NativeBaseProvider>
                
            )
        }
        else
            return (
                <Loading />
            )
    }

}