import React,{ useState,useEffect} from 'react'
import { Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Button,
    Image,
    View,
    VStack
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput,} from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function review({ navigation }) {
const [review_write,setRev]=useState();
const [star,setStar]=useState();

const Handler1=()=>{
  setStar(1);
  console.log(star);
}
const Handler2=()=>{
    setStar(2);
  }
const Handler3=()=>{
setStar(3);
}
const Handler4=()=>{
setStar(4);
}
const Handler5=()=>{    
setStar(5);
}
const [starValue,setStartValue]=useState([
    {text:1,handler:Handler1},
    {text:2,handler:Handler2},
    {text:3,handler:Handler3},
    {text:4,handler:Handler4},
    {text:5,handler:Handler5}
]);
  let submit=async()=>{
    let me=(await AsyncStorage.getItem('user_id'));
    let activity_id=(await AsyncStorage.getItem('activity_id'));
    const sample={
        content:review_write,
        star:star,
        user_id:me,
        activity_id:activity_id
    };

    const response=await fetch("https://extreme-kor.herokuapp.com/review",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(sample)
    })
    
    const json=await response.json();
    console.log(json);
    if(json.success){
        navigation.navigate('activity_detail');
    }
  }
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box marginTop={'5%'}>
                    <Text textAlign={'center'} fontSize={20} >리뷰 작성</Text>
                </Box>
                <Box marrginTop={50}>
                    <View>
                        <TextInput onChangeText={text=>setRev(text)} style={{ height: Height / 2, borderWidth: 3, borderRadius: 8, alignItems: 'center', justifyContent: 'center', }} />
                    </View>
                    <View>
                    <HStack>
                        <Text>별점</Text>
                        <HStack style={{width:Width}}>
                            {starValue.map((starValue,index)=>{
                                return(
                                <Button key={index} style={{width:Width/6}} onPress={starValue.handler}><Text>{starValue.text}</Text></Button>)
                            })}
                        </HStack>
                    </HStack>   
                    </View>
                </Box>
                    <Button onPress={submit}><Text>등록</Text></Button>
                
            </ScrollView>
        </NativeBaseProvider>
  )
}