import { TabRouter } from "@react-navigation/routers";
import React, { Component, useState } from "react";
import { Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";
import { NativeBaseProvider,Box,Button,VStack,HStack, } from 'native-base';
import IconA from 'react-native-vector-icons/AntDesign';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function login({navigation}) {

    const [id, onChangeTextID] = React.useState("")
    const [password, onChangeTextPW] = React.useState("")
    const register_user = () => {
        navigation.navigate('register_user');
    }
    const register_company = () => {
        navigation.navigate('register_company');
    }

    let login_information={
        "user_id":id,
        "password":password
    }

    let login_user=async()=>{
        console.log("유저로그인중.....")
       let response1= await fetch('https://extreme-kor.herokuapp.com/user/login', {
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type':"application/json",
    },
        body:JSON.stringify(login_information)
    }) 
    const json=await response1.json();
    console.log(json);
    if(json.success){
        navigation.navigate('home');
    }
       
     await AsyncStorage.setItem('user_id',id,()=>{
         console.log('유저 id 저장')
     });
     await AsyncStorage.setItem('password',password,()=>{
        console.log('유저 password 저장')
    });
    }
    let login_company=async()=>{
        console.log("업체 로그인중.....")
        let response1= await fetch(`https://extreme-kor.herokuapp.com/company?id=${id}`);
        const json=await response1.json();
        console.log(json);
    }
   
    
    
    return (
        <NativeBaseProvider>
            <Box style={{marginLeft:'3%', marginTop:'5%'}}>
                <IconA name="close" size={25} style={{marginLeft:'5%'}}></IconA>
            </Box>
            <Box style={{marginLeft:'5%', marginRight:'5%'}}>
                <Box style={{ flexDirection: 'column', justifyContent: 'center', height: Height / 3, }}>
                    <Box style={{flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:50, fontWeight:'bold', color:'#4f8bc2'}}>Extreme</Text>
                        <Text style={{fontSize:30, fontWeight:'bold'}}>을</Text>
                    </Box>
                    <Text style={{fontSize:30, fontWeight:'bold'}}>즐길 준비가 되셨나요?</Text>
                </Box>

                <Box style={{flexDirection:'row', borderColor:'#898989', borderWidth:1,height:'10%', justifyContent:'center', alignItems:'center'}}>
                    <Icon name="user" size={24}></Icon>
                    <TextInput
                        placeholderTextSize={12}
                        placeholder={'아이디'}
                        onChangeText={(text) => onChangeTextID(text)}
                        value={id}
                        maxLength={10}
                    />
                </Box>

                <Box style={{marignTop:'3%', flexDirection:'row', borderColor:'#898989', borderWidth:1,height:'10%', justifyContent:'center', alignItems:'center'}}>
                    <Icon name="lock" size={24}></Icon>
                    <TextInput
                        placeholderTextSize={12}
                        placeholder={'비밀번호'}
                        onChangeText={(text) => onChangeTextPW(text)}
                        value={password}
                        secureTextEntry={true}
                        maxLength={10}
                    />
                </Box>

                <Box style={{marginTop:'3%', flexDirection:'row', justifyContent:'center', marginBottom:'5%', justifyContent:'center', alignItems:'center'}}>
                    <Button style={{ backgroundColor: 'black' , marginRight:Width/10}} onPress={login_user}>
                        <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>유저 로그인</Text>
                    </Button>
                    <Button style={{ backgroundColor: 'black' }} onPress={login_company}>
                        <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>업체 로그인</Text>
                    </Button>
                </Box>

                <Box style={{flexDirection:'row', justifyContent:'space-around', marginBottom:'5%'}}>
                    <Button style={{backgroundColor: 'transparent',  }} onPress={register_user}>
                        <Text style={{color:'black', fontSize:14}}>사용자 회원 가입</Text>
                    </Button>
                    <Button style={{ backgroundColor: 'transparent',}} onPress={register_company}>
                        <Text style={{color:'black', fontSize:14}}>관계자 회원 가입</Text>
                    </Button>
                </Box>
            </Box>
        </NativeBaseProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flexDirection: 'row',
        height: 30,
        width: 150,
        borderColor: 'gray',
        borderWidth: 1
    }
});
