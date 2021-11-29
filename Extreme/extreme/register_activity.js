import React, { Component, useState } from 'react'
import { Dimensions, } from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    flex
} from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconI from 'react-native-vector-icons/Ionicons';
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
    let upload = async()=>{
        console.log(fd);
        const response= fetch('https://extreme-kor.herokuapp.com/activity', {
            method:'POST',
            headers:{
            'Content-Type':'multipart/form-data',
        },
            body:fd
        }).then(response=>{
                console.log(JSON.stringify(response))
            }).catch(err=>{console.log(err)
            })
            }

    const submitBtn = async() => {
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
        let price1=Number(price)
        fd.append("activity_price", price1)
        fd.append("location", location)
        fd.append("address", address)
        fd.append("company_id", me)
        fd.append("activity_images", [{uri:selectedImage.localUri, type:'image/jpeg', name:'photo.jpg'}])
        console.log(fd);
        upload();

    }

    if (selectedImage !== null) {

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <Box marginTop={'5%'}>
                        <HStack>
                            <IconI name="md-shield-checkmark-outline" size={20}></IconI>
                            <Text>사업자 등록증 정보와 동일한 내용을 입력하여 주십시오.</Text>
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>상호/법인명</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'상호/법인명을 입력하세요.'}
                                onChangeText={(text) => onChangeTextName(text)}
                                value={name}
                            />
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>사업자등록번호</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'사업자등록번호를 입력하세요.'}
                                onChangeText={(text) => onChangeTextNumber(text)}
                                value={number}
                            />
                        </HStack>
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
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>상품명</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'상품명을 입력하세요.'}
                                onChangeText={(text) => onChangeTextPName(text)}
                                value={p_name}
                            />
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>카테고리</Text>
                            <IconE name="chevron-small-right" size={20}></IconE>
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>가격</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'가격을 입력하세요.'}
                                onChangeText={(text) => onChangeTextPrice(text)}
                                value={price}
                            />
                            <Text>(1인 기준)</Text>
                        </HStack>
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
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>위치</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'정확한 위치를 입력하세요.'}
                                onChangeText={(text) => onChangeTextAddress(text)}
                                value={address}
                            />
                        </HStack>
                    </Box>

                    <Box>
                        <Text>고객이 이용 가능한 날짜를 선택해주세요.</Text>
                        <Text>달력</Text>
                    </Box>
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
return(
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <Box marginTop={'5%'}>
                        <HStack>
                            <IconI name="md-shield-checkmark-outline" size={20}></IconI>
                            <Text>사업자 등록증 정보와 동일한 내용을 입력하여 주십시오.</Text>
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>상호/법인명</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'상호/법인명을 입력하세요.'}
                                onChangeText={(text) => onChangeTextName(text)}
                                value={name}
                            />
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>사업자등록번호</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'사업자등록번호를 입력하세요.'}
                                onChangeText={(text) => onChangeTextNumber(text)}
                                value={number}
                            />
                        </HStack>
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
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>상품명</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'상품명을 입력하세요.'}
                                onChangeText={(text) => onChangeTextPName(text)}
                                value={p_name}
                            />
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>카테고리</Text>
                            <IconE name="chevron-small-right" size={20}></IconE>
                        </HStack>
                    </Box>
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>가격</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'가격을 입력하세요.'}
                                onChangeText={(text) => onChangeTextPrice(text)}
                                value={price}
                            />
                            <Text>(1인 기준)</Text>
                        </HStack>
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
                    <Box marginTop={'2%'} >
                        <HStack space={2}>
                            <IconE name="dot-single" size={20}></IconE>
                            <Text>위치</Text>
                            <TextInput
                                borderBottomWidth={1}
                                placeholder={'정확한 위치를 입력하세요.'}
                                onChangeText={(text) => onChangeTextAddress(text)}
                                value={address}
                            />
                        </HStack>
                    </Box>

                    <Box>
                        <Text>고객이 이용 가능한 날짜를 선택해주세요.</Text>
                        <Text>달력</Text>
                    </Box>
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
