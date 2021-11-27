import React,{ useState,useEffect} from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    VStack,
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function user_info({ navigation }) {
    let [data,setData]=useState()
    const [nic, setnic] = React.useState('');
    const [password, setpw] = React.useState('');
 
    let zz=async()=>{
        let me=(await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/user/data/${me}`);
        const json = await response.json();
        setData(json);
        console.log(json)
    }     
    let modify = async()=>{
        let me=(await AsyncStorage.getItem('user_id'));
        console.log(data)
        if(password==''){
            let pw = data.data.password
            console.log("ss")
            setpw(pw)
        }
        console.log(me, nic, password)
        const response= fetch('https://extreme-kor.herokuapp.com/user', {
            method:'PATCH',
            headers:{
            'Content-Type':'application/json',
        },
            body:{user_id:me, nickname:nic, password:password}
        }).then(response=>{
                console.log(JSON.stringify(response))
            }).catch(err=>{console.log(err)
            })
        console.log(JSON.stringify(response));
    }
    useEffect(() => {
        zz();
      }, []);
      
    {if(data!=null){

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box marginTop={'5%'}>
                    <Text textAlign={'center'} fontSize={20}>기본 정보</Text>
                </Box>
                    
                <Box marginTop={'5%'} marginLeft={'5%'}>
                    <HStack space={5}>
                        <Image
                            source={{uri:data.data.prorile_image}}
                            style={{ width: 120, height:150, }}
                            alt="trans_1"
                        />
                        <VStack space={5}>
                            <Text>닉네임</Text>
                            <TextInput defaultValue={data.data.nickname} onChangeText={nickname=>setnic(nickname)}/>
                            <Text>비밀번호 수정</Text>
                            <TextInput onChangeText={(text) => setpw(text)}></TextInput>

                            <Text>이름</Text>
                            <Text>{data.data.name}</Text>
                            <Text>휴대폰 번호</Text>
                            <Text>{data.data.phone_number}</Text>
                            <Text>계좌 정보</Text>
                            {/* <Text>{data.data.phone_number}</Text> */}

                        </VStack>
                    </HStack>
                </Box>

                <Box marginTop={'5%'} marginLeft={'5%'}>
                    <VStack space={5}>  
                        <Text>부가 정보</Text> 
                        <Text>생년 월일</Text>
                        <Text>{data.data.birthday}</Text>

                        <Text>이메일</Text>
                        <Text>{data.data.email}</Text>

                    </VStack>
                </Box>
                <TouchableOpacity style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} onPress={modify}><Text>수정</Text></TouchableOpacity>

            </ScrollView>
        </NativeBaseProvider>
  );}
  else 
  return(
    <NativeBaseProvider>
      <View><Text>dd</Text></View>
      </NativeBaseProvider>
  )}
}