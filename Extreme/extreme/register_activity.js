import React, { Component, useState } from 'react'
import { Dimensions, } from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    View,
    Button,
    flex
} from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';


export default function register_activity() {
    // useEffect(() => {

    //   }, []);

    const [name, onChangeTextName] = React.useState("")
    const [number, onChangeTextNumber] = React.useState("")
    const [p_name, onChangeTextPName] = React.useState("")
    const [price, onChangeTextPrice] = React.useState("")
    const [location, onChangeTextLocation] = React.useState("")
    const [address, onChangeTextAddress] = React.useState("")
    const fd = new FormData();

    //이미지 불러오기
    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        console.log(pickerResult)

        setSelectedImage({ localUri: pickerResult.uri });

    };
    let upload = async () => {
        console.log(fd);
        const response = fetch('https://extreme-kor.herokuapp.com/activity', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: fd
        }).then(response => {
            console.log(JSON.stringify(response))
        }).catch(err => {
            console.log(err)
        })
    }

    const submitBtn = async () => {
        // if(p_name==''){
        //     Alert.alert( "","액티비티 이름을 입력해주세요",[{text:"확인"}])
        // }
        // else if(price==''){
        //     Alert.alert( "","1인 기준 가격을 입력해주세요",[{text:"확인"}])
        // }
        // else if(location==''){
        //     Alert.alert( "","지역을 입력해주세요",[{text:"확인"}])
        // }
        // else if(address==''){
        //     Alert.alert( "","주소를 입력해주세요",[{text:"확인"}])
        // }
        let me = (await AsyncStorage.getItem('user_id'));

        fd.append("activity_category", '서핑')
        fd.append("activity_name", p_name)
        let price1 = Number(price)
        fd.append("activity_price", price1)
        fd.append("location", location)
        fd.append("address", address)
        fd.append("company_id", me)
        fd.append("activity_images", [{ uri: selectedImage.localUri, type: 'image/jpeg', name: 'photo.jpg' }])
        console.log(fd);
        upload();

    }

    if (selectedImage !== null) {

        return (
            <NativeBaseProvider>
                <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingLeft: '5%', borderWidth: 0.5 }}>
                    <TouchableOpacity>
                        <IconM name="navigate-before" size={25} style={{}}></IconM>
                    </TouchableOpacity>
                    <Text marginLeft={'3%'} fontSize={20}>액티비티 등록</Text>
                </Box>

                <ScrollView>
                    <Box style={{ backgroundColor: 'white', paddingLeft: '3%', paddingRight: '3%' }}>
                        <Box style={{ paddingTop: '5%', color: '#797979', fontSize: 14 }}>
                            <Text>(주의) 사업자 등록증 정보와 동일한 내용을 입력하여 주십시오.</Text>
                        </Box>
                        <Box>
                            <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput placeholder="상호/법인명" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                            </Box>
                        </Box>

                        <Box>
                            <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput placeholder="사업자등록번호" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '60%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                                <Button style={{ marginLeft: '5%', backgroundColor: '#ced4da', width: 100, height: 40, alignItems: 'center', paddingBottom: 2 }}>
                                    <Text style={{ fontSize: 17, height: 30 }}>중복확인</Text>
                                </Button>
                            </Box>
                        </Box>

                        <Box>
                            <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>사업자 등록증 이미지</Text>
                            <TouchableOpacity onPress={openImagePickerAsync}>
                                <Text>Pick a photo</Text>
                            </TouchableOpacity>

                            <Image
                                source={{ uri: selectedImage.localUri }}
                                style={{ width: 80, height: 80 }}
                                onPress={console.log(`11${selectedImage.localUri}`)}
                            />
                        </Box>

                        <Box>
                            <HStack>
                                <IconE name="dot-single" size={20}></IconE>
                                <IconE name="dot-single" size={20}></IconE>
                                <IconE name="dot-single" size={20}></IconE>
                            </HStack>
                        </Box>

                        <Box>
                            <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput placeholder="상품명" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => onChangeTextPName(text)}
                                    value={p_name}></TextInput>
                            </Box>
                        </Box>

                        <Box>
                            <TouchableOpacity>
                                <Box style={{ paddingLeft: '3%', paddingRight: '3%', justifyContent: 'space-between', marginTop: '3%', flexDirection: 'row', alignItems: 'center', borderWidth: 0.5, paddingTop: '3%', paddingBottom: '3%' }}>
                                    <Text>카테고리</Text>
                                    <IconE name="chevron-small-right" size={20}></IconE>
                                </Box>
                            </TouchableOpacity>
                        </Box>

                        <Box>
                            <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <TextInput placeholder="가격을 입력해주세요" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => onChangeTextPrice(text)}
                                    value={price}>
                                    <Text>원 기준 (1인 기준)</Text>
                                </TextInput>
                            </Box>
                        </Box>
                        <Box marginTop={'2%'} >
                            <HStack space={2}>
                                <IconE name="dot-single" size={20}></IconE>
                                <Text>위치</Text>
                                <TextInput
                                    borderBottomWidth={1}
                                    placeholder={'지역을 입력하세요.'}
                                    onChangeText={(text) => onChangeTextLocation(text)}
                                    value={location}
                                />
                            </HStack>
                        </Box>


                        <Box>
                            <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput placeholder="장소를 입력해주세요" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => onChangeTextAddress(text)}
                                    value={address}></TextInput>
                            </Box>
                        </Box>

                        <Box>
                            <Box style={{ marginTop: '3%', }}>
                                <Text>고객이 이용 가능한 날짜를 선택해주세요.</Text>
                                <Button style={{ marginTop: '3%', borderRadius: 10, width: '100%', height: 60, borderWidth: 0.5, justifyContent: 'center', backgroundColor: 'white' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>날짜 및 시간 선택</Text>
                                </Button>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center', }}>
                                <TextInput maxLength={100} placeholder="상품을 설명해주세요" style={{ height: '20%', paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                            </Box>
                        </Box>
                        <Button style={{ marginBottom: '3%', marginTop: '3%', borderRadius: 10, width: '100%', height: 60, borderWidth: 0.5, justifyContent: 'center', backgroundColor: '#4f8bc2' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>등록 완료</Text>
                        </Button>


                        <Box>
                            <TouchableOpacity>
                                <Text textAlign={'center'} fontSize={20} marginTop={5} borderWidth={1} alignItems={'center'} justifyContent={'center'} onPress={submitBtn}>등록 완료</Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </ScrollView>
            </NativeBaseProvider>
        );
    }
    return (
        <NativeBaseProvider>
            <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingLeft: '5%', borderWidth: 0.5 }}>
                <TouchableOpacity>
                    <IconM name="navigate-before" size={25} style={{}}></IconM>
                </TouchableOpacity>
                <Text marginLeft={'3%'} fontSize={20}>액티비티 등록</Text>
            </Box>

            <ScrollView>
                <Box style={{ backgroundColor: 'white', paddingLeft: '3%', paddingRight: '3%' }}>
                    <Box style={{ paddingTop: '5%', color: '#797979', fontSize: 14 }}>
                        <Text>(주의) 사업자 등록증 정보와 동일한 내용을 입력하여 주십시오.</Text>
                    </Box>
                    <Box>
                        <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput placeholder="상호/법인명" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                        </Box>
                    </Box>

                    <Box>
                        <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput placeholder="사업자등록번호" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '60%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                            <Button style={{ marginLeft: '5%', backgroundColor: '#ced4da', width: 100, height: 40, alignItems: 'center', paddingBottom: 2 }}>
                                <Text style={{ fontSize: 17, height: 30 }}>중복확인</Text>
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>사업자 등록증 이미지</Text>
                        <TouchableOpacity onPress={openImagePickerAsync}>
                            <Text>Pick a photo</Text>
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
                        <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput placeholder="상품명" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => onChangeTextPName(text)}
                                value={p_name}></TextInput>
                        </Box>
                    </Box>

                    <Box>
                        <TouchableOpacity>
                            <Box style={{ paddingLeft: '3%', paddingRight: '3%', justifyContent: 'space-between', marginTop: '3%', flexDirection: 'row', alignItems: 'center', borderWidth: 0.5, paddingTop: '3%', paddingBottom: '3%' }}>
                                <Text>카테고리</Text>
                                <IconE name="chevron-small-right" size={20}></IconE>
                            </Box>
                        </TouchableOpacity>
                    </Box>

                    <Box>
                        <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <TextInput placeholder="가격을 입력해주세요" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => onChangeTextPrice(text)}
                                value={price}>
                                <Text>원 기준 (1인 기준)</Text>
                            </TextInput>
                        </Box>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>위치</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'지역을 입력하세요.'}
                                onChangeText={(text) => onChangeTextLocation(text)}
                                value={location}
                            />
                        </HStack>
                    </Box>


                    <Box>
                        <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput placeholder="장소를 입력해주세요" style={{ paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => onChangeTextAddress(text)}
                                value={address}></TextInput>
                        </Box>
                    </Box>

                    <Box>
                        <Box style={{ marginTop: '3%', }}>
                            <Text>고객이 이용 가능한 날짜를 선택해주세요.</Text>
                            <Button style={{ marginTop: '3%', borderRadius: 10, width: '100%', height: 60, borderWidth: 0.5, justifyContent: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>날짜 및 시간 선택</Text>
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        <Box style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center', }}>
                            <TextInput maxLength={100} placeholder="상품을 설명해주세요" style={{ height: '20%', paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                        </Box>
                    </Box>
                    <Button style={{ marginBottom: '3%', marginTop: '3%', borderRadius: 10, width: '100%', height: 60, borderWidth: 0.5, justifyContent: 'center', backgroundColor: '#4f8bc2' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>등록 완료</Text>
                    </Button>


                    <Box>
                        <TouchableOpacity>
                            <Text textAlign={'center'} fontSize={20} marginTop={5} borderWidth={1} alignItems={'center'} justifyContent={'center'} onPress={submitBtn}>등록 완료</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}
