import React, {useState, Component, useEffect } from "react";
import { BackHandler, Image, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    StyleSheet
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { VStack, NativeBaseProvider } from "native-base";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class User extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 150 }}>
                <View style={{ height: 100, width: 100, backgroundColor: 'gray', marginLeft: 50 }}></View>
                <Text style={{ marginLeft: 50, color: '#A0A0A0' }}>{this.props.name}</Text>
            </View>
        )
    }
}

export default function My_page({navigation}) {
    let [data,setData]=useState()
    
 
    let zz=async()=>{
        let me=(await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/user/data/${me}`);
        const json = await response.json();
        setData(json);
    }     
    const ww=()=>{
    navigation.navigate('user_info');
    }
    useEffect(() => {
        zz();
      }, [data]);
      
    {if(data){
    return (
        <NativeBaseProvider>
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                <VStack>
                  <Image 
                     source={{uri:data.data.profile_image}}
                     style={{width:100,height:100}}
/>
                  <Text>닉네임: {data.data.nickname}</Text>
                  <Text>전화번호: {data.data.phone_number}</Text>
                  <Text>이메일: {data.data.email}</Text>
                  <Text>생년월일: {data.data.birthday}</Text>
                </VStack>
                    <TouchableOpacity  style={styles.menu} onPress={ww}>
                        <Text>회원 정보 수정</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Text>주문 내역</Text>
                    </TouchableOpacity>
                
                </View>
            </ScrollView >
            <View style={{ flex: 0.2, borderWidth: 0.5, marginLeft: 50 }}>
                <Text >문의</Text>
                <Text>E-mail : aaa@aaa.com</Text>
                <Text>Tel : 000-0000-0000</Text>
            </View>
        </View>
        </NativeBaseProvider>
    );}
    else 
       return(
           <View><Text>dd</Text></View>
       )}

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 0.8
    },
    menu: {
        paddingLeft: 40,
        padding: 10
    }
});