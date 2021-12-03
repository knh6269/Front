import React, { useState, Component, useEffect } from "react";
import { Dimensions, FlatList, Alert } from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    VStack,
    Button,
} from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";
import Under from "./under";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from "./test";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function order_list({ navigation }) {
    let getdate = new Date();
    const [order_list, setOrderList] = useState();
    const [datestatus, setDatestatus] = useState();

    const review = () => {
        navigation.navigate('review');
    }

    let dateob = []
    let datepossible = []
    const get_order_list = async () => {
        let me = (await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/reservation/orderlist?id=${me}`);
        const json = await response.json();
        if (json.success) {
            setOrderList(json.data);
            console.log(json.data)
            for (let i = 0; i < json.data.length; i++) {
                let date = { year: Number(json.data[i].Activity_time.date.slice(0, 4)), month: Number(json.data[i].Activity_time.date.slice(4, 6)), day: Number(json.data[i].Activity_time.date.slice(6, 8)) }
                dateob.push(date)
            }
            console.log(getdate.getDay(), getdate.getFullYear(), getdate.getMonth())
            // for (let i = 0; i < json.data.length; i++) {
            //     if (getdate.getFullYear() >= dateob[i].year && getdate.getMonth() >= dateob[i].month && getdate.getDay() >= dateob[i].day) {
            //         datepossible.push(1)
            //     }
            //     else {
            //         datepossible.push(0)
            //     }
            // }
            for (let i = 0; i < json.data.length; i++) {
                if (2021 >= dateob[i].year &&12>= dateob[i].month && 3 >= dateob[i].day) {
                    datepossible.push(1)
                }
                else {
                    datepossible.push(0)
                }
            }

            setDatestatus(datepossible)
            console.log(datepossible)

        }
    }
    useEffect(() => {
        get_order_list();
    }, []);

    const renderActivity = ({ item, index }) => (
        <Box>
            <Box style={{ backgroundColor: 'white', marginTop: '5%', borderWidth: 1, paddingLeft: '3%', paddingRight: '3%' }}>
                <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#c4c4c4', fontSize: 14, fontWeight: 'bold' }}>{item.Activity_time.date}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('order_list_detail', { orderListData: item })}>
                        <Box style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                            <Text fontSize={14} style={{ color: '#4f8bc2', justifyContent: 'center', textAlign: 'center' }}>주문 상세보기</Text>
                            <IconA name="right" size={14} color={'#4f8bc2'} style={{ justifyContent: 'center', textAlign: 'center' }}></IconA>
                        </Box>
                    </TouchableOpacity>
                </Box>

                <Box style={{ marginTop: '3%', }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.Activity.activity_name}</Text>
                    <Box style={{ flexDirection: 'row', marginTop: '3%', }}>
                        <Image
                            source={{
                                uri: item.Activity.Activity_images[0].image_url
                            }}
                            style={{ width: 100, height: 100 }}
                            alt="trans_1" />
                        <Box style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: '3%', }}>
                            <Text style={{ fontSize: 14 }}>{item.Activity.activity_name}</Text>
                            <Text style={{ fontSize: 14 }}>{item.payment}원</Text>
                            <Text style={{ fontSize: 14 }}>{item.Activity.activity_price}원</Text>
                            <Text style={{ fontSize: 14 }}>{item.people}인</Text>
                        </Box>
                    </Box>

                    <Box marginTop='5%' marginLeft='3%' marginRight='3%' borderWidth={1}></Box>

                    {datestatus[index] === 1 &&
                        <Box style={{ marginBottom: '5%', marginTop: '5%', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Button style={{ fontSize: 14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} onPress={() => navigation.navigate('review', { review_activity_id: item.Activity.id })} ><Text>리뷰쓰기</Text></Button>
                            <Button style={{ fontSize: 14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'darkgray' }} onPress={() => Alert.alert("", "중복된 아이디입니다.", [{ text: "확인" }])}><Text>예약취소</Text></Button>
                        </Box>
                    }
                    {datestatus[index] === 0 &&
                        <Box style={{ marginBottom: '5%', marginTop: '5%', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Button style={{ fontSize: 14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'darkgray' }} onPress={() => Alert.alert("", "완료된 상품입니다.", [{ text: "확인" }])} ><Text>리뷰쓰기</Text></Button>
                            <Button style={{ fontSize: 14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} onPress={() => Alert.alert("", "중복된 아이디입니다.", [{ text: "확인" }])}><Text>예약취소</Text></Button>
                        </Box>
                    }

                </Box>
            </Box>
        </Box>
    )

    if (order_list && datestatus) {
        return (
            <NativeBaseProvider>
                <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingBottom: '5%', paddingLeft: '5%', height: '10%', alignContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IconM name="navigate-before" size={25} style={{}}></IconM>
                    </TouchableOpacity>
                    <Text marginLeft={'3%'} fontSize={20}>주문 내역</Text>
                </Box>

            <ScrollView>
                <FlatList
                    data={order_list}
                    renderItem={renderActivity}
                    keyExtractor={(Activity) => Activity.activity_name}
                    extraData={order_list}
                    alt={"Dd"}
                    numColumns={1} />
            </ScrollView>
            <View style={{ width: Width, height: '11%', }}>
                <Under navigation={navigation}></Under>
            </View>
        </NativeBaseProvider>
  )}
  else{
      return(
          <Loading/>
      )
  }
}