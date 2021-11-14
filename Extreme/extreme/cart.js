import React from 'react'
import {Dimensions,} from "react-native"
import{
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

export default function cart({navigation}){
        const pressHandler=()=>{
            navigation.navigate('각 페이지로 이동');
    }
 
    
    return (
        <NativeBaseProvider>
            {/* 오른쪽 정렬이 안됨 flex-end 속성이 안 먹는 듯 */}
            <Box marginTop={10} flexDirection={'row'} alignItems={'flex-end'} >
                <HStack>
                    <IconA name="shoppingcart" size={45} style={{flex:1,}}></IconA>
                </HStack>
            </Box>
            <ScrollView>
                <Box>
                    <Box marginLeft={'5%'}>
                        <HStack>
                          {/* 체크박스 */}
                            <Image
                                source={{
                                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                }}
                                style={{ marginLeft:'5%', width:250, height:110}}
                                alt="trans_1" />
                            <VStack>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >상품명</Text>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >상품명입니다</Text>
                                <Text marginTop={'5%'} marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜</Text>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜입니다</Text>
                                <Text marginTop={'5%'} marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨</Text>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨입니다</Text>
                            </VStack>
                        </HStack>
                    </Box>
                    <Box marginLeft={'10%'} width={'40%'} marginTop={'5%'}>
                        <HStack space={116}>
                            <Text fontSize={10} style={{fontWeight:'bold'}} >총 결제 금액</Text>
                            <Text marginLeft={'55%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >10000원</Text>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'} marginTop={'5%'} >
                        <HStack space={60}>
                            <TouchableOpacity>
                                <Text textAlign={'center'} borderWidth={1} backgroundColor={'green'} borderRadius={35} width={110} height={30}>날짜 변경</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text textAlign={'center'} borderWidth={1} backgroundColor={'green'} borderRadius={35} width={110} height={30} >바로 구매</Text>
                            </TouchableOpacity>
                        </HStack>
                    </Box>
                </Box>

                <Box marginTop={'5%'}>
                    <Box marginLeft={'5%'}>
                        <HStack>
                          {/* 체크박스 */}
                            <Image
                                source={{
                                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                }}
                                style={{ marginLeft:'5%', width:250, height:110}}
                                alt="trans_1" />
                            <VStack>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >상품명</Text>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >상품명입니다</Text>
                                <Text marginTop={'5%'} marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜</Text>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜입니다</Text>
                                <Text marginTop={'5%'} marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨</Text>
                                <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨입니다</Text>
                            </VStack>
                        </HStack>
                    </Box>
                    <Box marginLeft={'10%'} width={'40%'} marginTop={'5%'}>
                        <HStack space={116}>
                            <Text fontSize={10} style={{fontWeight:'bold'}} >총 결제 금액</Text>
                            <Text marginLeft={'55%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >10000원</Text>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'} marginTop={'5%'} >
                        <HStack space={60}>
                            <TouchableOpacity>
                                <Text textAlign={'center'} borderWidth={1} backgroundColor={'green'} borderRadius={35} width={110} height={30} >날짜 변경</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text textAlign={'center'} borderWidth={1} backgroundColor={'green'} borderRadius={35} width={110} height={30} >바로 구매</Text>
                            </TouchableOpacity>
                        </HStack>
                    </Box>
                </Box>

                <Box marginTop={'10%'}>
                    <HStack marginLeft={'5%'}>
                        <VStack marginLeft={'5%'}>
                            <Text fontSize={10} style={{fontWeight:'bold'}} >총 결제 금액</Text>
                            <Text fontSize={10} style={{fontWeight:'bold'}} >10000원</Text>
                        </VStack>
                        <Text fontSize={10} style={{ fontWeight: 'bold',}} >(2)</Text>
                        <TouchableOpacity>
                            <Text textAlign={'center'} borderWidth={1} backgroundColor={'green'} borderRadius={35} width={110} height={30} marginLeft={'45%'}>전체 구매하기</Text>
                        </TouchableOpacity>
                    </HStack>
                </Box>

            </ScrollView>
        </NativeBaseProvider>
    )
}