import React, {useState, Component, useEffect } from "react";
import {
    Dimensions, FlatList} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Button
}from 'native-base';
import { TouchableOpacity,ScrollView } from "react-native";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from "./test";
export default function heart({navigation}){
        const pressHandler=()=>{
            navigation.navigate('각 페이지로 이동');
        }

    //액티비티 이름: data[0].Activity.activity_name
    //업체 이름: data[0].Activity.Company.company_name
    //이미지 경로: data[0].Activity.Activity_images[0].image_url
    const [data, setData] = useState(); //연휘야 여기 담겨있어~

    const get_heart = async () => {
        
        let me = (await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/hearts?id=${me}`);
        const json = await response.json();
        console.log(json)
        setData(json.data);
    }
    useEffect(() => {
        get_heart();
    }, []);

  
    const renderActivity = ({ item }) => (
        <Box style={{borderColor:'#898989', borderWidth:0.5, backgroundColor:'white', width:Width/2, padding : '3%'}}>
            <Box style={{marginBottom:'3%'}}>
                <IconA name="close" size={25} style={{marginLeft:'5%'}}></IconA>
            </Box>
            <TouchableOpacity onPress={()=>navigation.navigate('activity_detail', {activity_id:item.id})}>
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
            <FlatList
                data={data}
                renderItem={renderActivity}
                keyExtractor={(Activity) => Activity.activity_name}
                extraData={data}
                alt={"Dd"}
                numColumns={2} />

        </NativeBaseProvider>
    )}
    else{
        return(<Loading/>)
    }
}