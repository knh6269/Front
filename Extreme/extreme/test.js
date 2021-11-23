import React, { useState, useEffect } from 'react'
import {Dimensions, ActivityIndicator, FlatList,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    flex,
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const controller = new AbortController();

export default function test({ navigation }) {

  const [data, setData] = useState([]);

  const [pos,setpos]=useState([
     { a:{latitude: 37.470407483804394, longitude: 126.95072514199354 } }, //서울,경기
     { a:{latitude:35.62917303057579,longitude: 127.45632936923715} }, //충북
     { a:{latitude:36.671914951644425,longitude: 126.67165336847684} }, //충남
     { a:{latitude:36.595861340561086,longitude: 128.57313006228776} }, //경북
     { a:{latitude:35.23842192337336,longitude: 128.69241945627113} }, //경남
     { a:{latitude:35.82059665884646,longitude: 127.11104959061522} }, //전북
     { a:{latitude:34.81637712860163,longitude:  126.46289201208677} }, //전남 
     { a:{latitude:37.854348731753554,longitude: 128.14330215878118} }, //강원
     { a:{latitude:33.40153208420323,longitude: 126.53592826886285} }, //제주 
  ])

  const getWeather = async () => {
     try {
       for(let i=0; i<pos.length; i++){
        const response = await fetch(`https://extreme-kor.herokuapp.com/weathermap/${pos[i].a.latitude}/${pos[i].a.longitude}`);
        const json = await response.json();
        setData(data.concat(json));
       }
     
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWeather();
  }, [pos]);
  
  return (
    <NativeBaseProvider>
      <Box marginTop={100} onPress={console.log(data)}>
        <Text>{data.date}, {data.min}, {data.max}, {data.sky}</Text>
        <Text>gggg</Text>
        <Text>{pos[0].a.latitude}</Text>
      </Box>
    </NativeBaseProvider>
  )
}