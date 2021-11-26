import { TabRouter } from "@react-navigation/routers";
import React, { Component, useState } from "react";
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";


class Activity extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 30, width: 30, backgroundColor: 'gray' }}></View>
                <Text style={{ marginTop: 5, color: '#A0A0A0' }}>{this.props.name}</Text>
            </View>
        )
    }
}

export default function login({navigation}) {

    const [id, onChangeTextID] = React.useState("")
    const [password, onChangeTextPW] = React.useState("")
    
    let login_information={
        "user_id":id,
        "password":password
    }

    let login_detail=async()=>{
        console.log("로그인중.....")
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
        navigation.navigate('my_page');
    }
       
     await AsyncStorage.setItem('user_id',id,()=>{
         console.log('유저 id 저장')
     });
     await AsyncStorage.setItem('password',password,()=>{
        console.log('유저 password 저장')
    });
    }
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.input}>
                    <Icon name="user" size={24}></Icon>
                    <TextInput
                        placeholder={'아이디'}
                        onChangeText={(text) => onChangeTextID(text)}
                        value={id}
                    />
                </View>
                <View style={styles.input}>
                    <Icon name="lock" size={24}></Icon>
                    <TextInput
                        placeholder={'비밀번호'}
                        onChangeText={(text) => onChangeTextPW(text)}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={{ borderWidth: 1, width: 150, alignItems: 'center' }}
                onPress={login_detail}>
                    <Text>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={{ textDecorationLine: 'underline' }}>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ textDecorationLine: 'underline' }}>ID/PW 찾기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
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
