import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Alert} from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
} from 'native-base';
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function purchase({ navigation }) {
    const [purchaseData, setPurchaseData] = useState(navigation.state.params.purchase_Data);

    const pressHandler = () => {
        navigation.navigate('각 페이지로 이동');
    }

    useEffect(() => {
        console.log(purchaseData)

    }, []);
    const renderActivity = ({ item, index }) => (
        <Box>
        <Box>
            <Image
                source={{
                    uri: item.Activity.Activity_images[0].image_url
                }}
                style={{ marginLeft: '5%', width: '90%', height: 100 }}
                alt="trans_1" />
            <HStack space={20} marginTop={'3%'}>
                <Box marginLeft={'5%'}>
                    <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >상품명</Text>
                    <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >{item.Activity.activity_name}</Text>
                </Box>
                <Box marginLeft={'5%'}>
                    <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜</Text>
                    <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >{item.Activity_time.date}</Text>
                </Box>
                <Box marginLeft={'5%'}>
                    <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨</Text>
                    <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >해 쨍쨍</Text>
                </Box>
            </HStack>
        </Box>
    </Box>

        )
    

    return (
        <NativeBaseProvider>
            {/* 오른쪽 정렬이 안됨 flex-end 속성이 안 먹는 듯 */}
            <Box marginTop={10} flexDirection={'row'} alignItems={'flex-end'} >
                <HStack>
                    <IconA name="shoppingcart" size={45} style={{ flex: 1, }}></IconA>
                </HStack>
            </Box>

            <ScrollView>
            <FlatList
            data={purchaseData}
            renderItem={renderActivity}
            keyExtractor={(Activity) => Activity.activity_name}
            extraData={purchaseData}
            alt={"Dd"}
            numColumns={1} />

                    <Box marginLeft={'10%'} width={'40%'} marginTop={'5%'}>
                        <HStack space={116}>
                            <Text fontSize={10} style={{ fontWeight: 'bold' }} >총 결제 금액</Text>
                            <Text marginLeft={'55%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >10000원</Text>
                        </HStack>
                    </Box>

                <Box marginTop={'5%'} marginLeft={'10%'} marginRight={'10%'}>
                    <TouchableOpacity>
                        <Text fontSize={20}>쿠폰</Text>
                    </TouchableOpacity>
                    <HStack space={250} marginTop={3}>
                        <Text>사용</Text>
                        <Text>0000원</Text>
                    </HStack>
                </Box>

                <Box marginTop={'5%'} marginLeft={'10%'} marginRight={'10%'}>
                    <HStack space={200} marginTop={3}>
                        <Text>총 결제 금액</Text>
                        <Text>0000원</Text>
                    </HStack>
                </Box>

                <Box marginTop={'5%'} marginLeft={'10%'} marginRight={'10%'}>
                    <HStack space={10}>
                        <Text fontSize={20}>결제 방식</Text>
                        <TouchableOpacity>
                            <Text fontSize={20}>계좌 이체</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text fontSize={20}>무통장 입금</Text>
                        </TouchableOpacity>
                    </HStack>
                </Box>

                <Box marginLeft={'40%'}>
                    <TouchableOpacity>
                        <Text fontSize={20}>전체 구매하기</Text>
                    </TouchableOpacity>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}