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
import { TouchableOpacity,ScrollView,TextInput } from "react-native";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';

export default function register_activity() {

    const [name, onChangeTextName] = React.useState("")

    const [number, onChangeTextNumber] = React.useState("")

    return (
        <NativeBaseProvider>
            <Box style={{backgroundColor:'white', flexDirection: 'row', paddingTop: '5%', paddingLeft:'5%', borderWidth:0.5}}>
                <TouchableOpacity>
                    <IconM name="navigate-before" size={25} style={{}}></IconM>
                </TouchableOpacity>
                <Text marginLeft={'3%'} fontSize={20}>액티비티 등록</Text>
            </Box>

            <ScrollView>
                <Box style={{backgroundColor:'white', paddingLeft:'3%', paddingRight:'3%'}}>
                    <Box style={{ paddingTop: '5%', color:'#797979', fontSize:14 }}>
                        <Text>(주의) 사업자 등록증 정보와 동일한 내용을 입력하여 주십시오.</Text>
                    </Box>
                    <Box>
                        <Box style={{ marginTop:'3%', flexDirection: 'row',alignItems: 'center' }}>
                            <TextInput placeholder="상호/법인명" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                        </Box>
                    </Box>

                    <Box>
                        <Box style={{ marginTop:'3%', flexDirection: 'row',alignItems: 'center' }}>
                            <TextInput placeholder="사업자등록번호" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '60%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                            <Button style={{ marginLeft:'5%', backgroundColor: '#ced4da', width: 100, height: 40, alignItems: 'center', paddingBottom: 2 }}>
                                <Text style={{ fontSize: 17, height: 30 }}>중복확인</Text>
                            </Button>
                        </Box>
                    </Box>
                
                    <Box>
                        <TouchableOpacity>
                            <Text textAlign={'center'} fontSize={20} marginTop={5} borderWidth={1} alignItems={'center'} justifyContent={'center'}>사업자등록증 첨부</Text>
                        </TouchableOpacity>
                    </Box>

                    <Box>
                        <HStack>
                            <IconE name="dot-single" size={20}></IconE>
                            <IconE name="dot-single" size={20}></IconE>
                            <IconE name="dot-single" size={20}></IconE>
                        </HStack>
                    </Box>
                    
                    <Box>
                        <Box style={{ marginTop:'3%', flexDirection: 'row',alignItems: 'center' }}>
                            <TextInput placeholder="상품명" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                        </Box>
                    </Box>

                    <Box>
                        <TouchableOpacity>
                            <Box style={{ paddingLeft:'3%', paddingRight:'3%', justifyContent:'space-between', marginTop:'3%', flexDirection: 'row',alignItems: 'center', borderWidth:0.5, paddingTop:'3%', paddingBottom:'3%'}}>
                                <Text>카테고리</Text>
                                <IconE name="chevron-small-right" size={20}></IconE>
                            </Box>
                        </TouchableOpacity>
                    </Box>

                    <Box>
                        <Box style={{ marginTop:'3%', flexDirection: 'row',alignItems: 'center', justifyContent:'space-between', }}>
                            <TextInput placeholder="가격을 입력해주세요" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}>
                                <Text>원 기준 (1인 기준)</Text>
                            </TextInput>
                        </Box>
                    </Box>


                    <Box>
                        <Box style={{ marginTop:'3%', flexDirection: 'row',alignItems: 'center' }}>
                            <TextInput placeholder="장소를 입력해주세요" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                        </Box>
                    </Box>

                    <Box>
                        <Box style={{ marginTop: '3%', }}>
                            <Text>고객이 이용 가능한 날짜를 선택해주세요.</Text>
                            <Button style={{ marginTop:'3%', borderRadius:10, width: '100%', height: 60, borderWidth: 0.5, justifyContent: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>날짜 및 시간 선택</Text>
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Box style={{ marginTop:'3%', flexDirection: 'row',alignItems: 'center',}}>
                            <TextInput maxLength={100} placeholder="상품을 설명해주세요" style={{  height:'20%', paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                        </Box>
                    </Box>
                    
                    
                    <Box>
                        <Button style={{ marginBottom:'3%', marginTop:'3%', borderRadius:10, width: '100%', height: 60, borderWidth: 0.5, justifyContent: 'center', backgroundColor: '#4f8bc2' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color:'white' }}>등록 완료</Text>
                        </Button>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}
