import React, {useState, Component, useEffect } from "react";
import {
    Dimensions, FlatList, Alert} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Button,
    View
}from 'native-base';
import { TouchableOpacity,ScrollView } from "react-native";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from "./test";
import Under from "./under";

export default function heart({navigation}){
        const pressHandler=()=>{
            navigation.navigate('각 페이지로 이동');
        }
    const [data, setData] = useState(); //연휘야 여기 담겨있어~
    const [userID, setUserID] = useState(); //연휘야 여기 담겨있어~


    const get_heart = async () => {
        let me = (await AsyncStorage.getItem('user_id'));
        setUserID(me)
        const response = await fetch(`https://extreme-kor.herokuapp.com/hearts?id=${me}`);
        const json = await response.json();
        console.log(json)
        setData(json.data);
        console.log(json.data)
    }
    useEffect(() => {
        get_heart();
    }, []);

    const delete_item = async(activity_id)=>{
        const sample={
            user_id:userID,
            activity_id : activity_id
        }
        console.log(userID)

        const response= await fetch('https://extreme-kor.herokuapp.com/heart/del', {
            method:'POST',
            headers:{
            'Content-Type':'application/json',
        },
            body:JSON.stringify(sample)
        })
        console.log(sample)
        const json=await response.json();       
        console.log(json);
        get_heart();
    }
    const delete_heart=(activity_id)=>{
        Alert.alert( "","정말 삭제하시겠습니까?",[{text:"네", onPress:()=>delete_item(activity_id)},{text:"아니요"}])
    
      }
    
    const renderActivity = ({ item }) => (
        <Box style={{borderColor:'#898989', borderWidth:0.5, backgroundColor:'white', width:Width/2, padding : '3%'}}>
            <Box style={{marginBottom:'3%'}}>
            <TouchableOpacity onPress={()=>delete_heart(item.activity_id)}>
                <IconA name="close" size={25} style={{marginLeft:'5%'}}></IconA>
                </TouchableOpacity>
            </Box>
            <TouchableOpacity onPress={()=>navigation.navigate('activity_detail', {activity_id:item.activity_id})}>
                <Image
                    source={{
                        uri: item.Activity.Activity_images[0].image_url
                    }}
                    style={{ height:Height/6}}
                    alt="trans_1"
                    resizeMode='stretch'/>
                <Text fontSize={18} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >{item.Activity.activity_name}</Text>
            </TouchableOpacity>
        </Box>
        )

        const dd=()=>{
            console.log(data[0].Activity.activity_name)
        }
    if(data){
    return (
        <NativeBaseProvider >

            <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingBottom:'5%', paddingLeft: '5%', height: '10%', alignContent: 'center', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <IconM name="navigate-before" size={25} style={{}}></IconM>
                </TouchableOpacity>
                <Image
                    source={require('./images/cards-heart-outline.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text marginLeft={'3%'} fontSize={20}>찜</Text>
            </Box>
            <ScrollView>
            <FlatList
                data={data}
                renderItem={renderActivity}
                keyExtractor={(Activity) => Activity.activity_name}
                extraData={data}
                alt={"Dd"}
                numColumns={2} />
            </ScrollView>
            <View style={{ width: Width, height: '11%', }}>
          <Under navigation={navigation}></Under>
        </View>
        </NativeBaseProvider>
    )}
    else{
        return(<Loading/>)
    }
}