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
    starValue[0].status = "star";
    starValue[1].status = "staro";
    starValue[2].status = "staro";
    starValue[3].status = "staro";
    starValue[4].status = "staro";
  console.log(star);
}
const Handler2=()=>{
    setStar(2);
    starValue[0].status = "star";
    starValue[1].status = "star";
    starValue[2].status = "staro";
    starValue[3].status = "staro";
    starValue[4].status = "staro";
  }
const Handler3=()=>{
    setStar(3);
    starValue[0].status = "star";
    starValue[1].status = "star";
    starValue[2].status = "star";
    starValue[3].status = "staro";
    starValue[4].status = "staro";
}
const Handler4=()=>{
    setStar(4);
    starValue[0].status = "star";
    starValue[1].status = "star";
    starValue[2].status = "star";
    starValue[3].status = "star";
    starValue[4].status = "staro";
}
const Handler5=()=>{    
    setStar(5);
    starValue[0].status = "star";
    starValue[1].status = "star";
    starValue[2].status = "star";
    starValue[3].status = "star";
    starValue[4].status = "star";
}
const [starValue,setStartValue]=useState([
    {text:1,handler:Handler1,status:"staro"},
    {text:2,handler:Handler2,status:"staro"},
    {text:3,handler:Handler3,status:"staro"},
    {text:4,handler:Handler4,status:"staro"},
    {text:5,handler:Handler5,status:"staro"}
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
                <Box style={{backgroundColor:'white'}}>
                    <Box style={{marginLeft:'3%', marginTop:'5%', flexDirection:'row'}}>
                        <IconA name="close" size={25} style={{ }}></IconA>
                        <Text textAlign={'center'} fontSize={20} marginLeft={'3%'} >리뷰 작성</Text>
                    </Box>

                    <Box style={{borderWidth:0.5, margin:'3%', backgroundColor:'#f1f1f1'}}>
                        <Text style={{fontSize:14, textAlign:'center'}}>작성해 주시는 후기는 우리 모두에게 큰 힘이 됩니다.</Text>
                        <Text style={{fontSize:14, textAlign:'center'}}>보다 더 나은 Extreme을 선보이도록 하겠습니다.</Text>
                    </Box>

                    <Box style={{margin : '3%'}}>
                        <Box>
                            <TextInput placeholder='제품 후기를 남겨주세요.' onChangeText={text=>setRev(text)} style={{ padding:'5%', height: Height / 3, borderWidth: 3, alignItems: 'center', justifyContent: 'center', }} />
                        </Box>

                        <Box>
                            <Text style={{fontSize:16, paddingLeft:'5%', paddingRight:'5%', marginTop:'5%', marginBottom:'3%'}}>별점</Text>
                        </Box>
                        
                        <Box style={{height:Height/3, backgroundColor:'#eeeeee', borderWidth:0.5, borderColor:'#eeeeee', flexDirection:'row', height: Height / 6, justifyContent:'center', alignItems:'center'}}>
                            <HStack space={5}>
                                {starValue.map((starValue,index)=>{
                                    return (
                                        <Box style={{ flexDirection: 'column' }}>
                                            <TouchableOpacity onPress={starValue.handler}>
                                                 <IconA name={starValue.status} size={30} style={{}}></IconA>      
                                            </TouchableOpacity>
                                        </Box>                                    
                                    )})}
                            </HStack>
                        </Box>   
                    </Box>    
                </Box>  
            </ScrollView>
            <Box style={{ marginTop: '3%', }}>
                <Button style={{ backgroundColor: '#4f8bc2', }} onPress={submit}>
                    <Text style={{color:'black'}}>확인</Text>
                </Button>
            </Box>
        </NativeBaseProvider>
  )
}