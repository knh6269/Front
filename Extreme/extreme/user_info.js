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
    Button
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function user_info({ navigation }) {
    let [data,setData]=useState();
    const [nic, setnic] = useState();
    const [password, setpw] = useState();
 
    let zz=async()=>{
        let me=(await AsyncStorage.getItem('user_id'));
        const response = await fetch(`https://extreme-kor.herokuapp.com/user/data/${me}`);
        const json = await response.json();
        setData(json);
    }     

    let modify = async()=>{
        let me=(await AsyncStorage.getItem('user_id'));
        const sample={
            user_id:me,
            password:password,
            nickname:nic
        }
        if(password==null){
            let pw = data.data.password
            setpw(pw)
        }

        const response= await fetch('https://extreme-kor.herokuapp.com/user/modify', {
            method:'POST',
            headers:{
            'Content-Type':'application/json',
        },
            body:JSON.stringify(sample)
        })
        const json=await response.json();       
        console.log(json);

    }

    useEffect(() => {
        zz();
      }, []);
      
    {if(data!=null){

    return (
        <NativeBaseProvider>
            <ScrollView style={{backgroundColor:'white'}}>
                <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingBottom:'5%', paddingLeft: '5%', height: '10%', alignContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <IconM name="navigate-before" size={25} style={{}}></IconM>
                    </TouchableOpacity>
                    <Text marginLeft={'3%'} fontSize={20}>내 정보 수정</Text>
                </Box>
                    
                <Box style={{borderWidth:1, marginTop:'3%', flexDirection: 'column', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    <Image
                        source={{ uri: data.data.profile_image }}
                        style={{ width: 100, height: 100, borderRadius: 50 }} />
                    <Text style={{fontSize:18, fontWeight:'bold', marginTop:'3%'}}>{data.data.name}</Text>
                    <Text style={{fontSize:16, marginTop:'3%'}}>{data.data.phone_number}</Text>

                </Box>

                <Box marginTop='5%' marginLeft='5%' marginRight='5%' borderWidth={0.5} color={'#acacac'}></Box>

                <Box style={{ marginLeft: '5%', marginTop: '3%', flexDirection: 'column', }}>
                    <Box style={{flexDirection:'row', marginTop:'3%'}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>닉네임</Text>
                        <TextInput style={{ width: '50%', marginLeft:'3%' }}borderWidth={0.5} placeholder={data.data.nickname} defaultValue={data.data.nickname} onChangeText={nickname=>setnic(nickname)}/>
                    </Box>
                    <Box style={{flexDirection:'row', marginTop:'3%', flexDirection:'row'}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>비밀번호 수정</Text>
                        <TextInput style={{ marginLeft:'3%', width: '50%' }} borderWidth={0.5} placeholder={'수정할 비밀번호를 입력하세요'} onChangeText={(text) => setpw(text)}></TextInput>
                    </Box>
                </Box>

                <Box style={{ marginTop: '10%', flexDirection: 'column', justifyContent:'space-around' }}>
                    <Box style={{ marginLeft: '3%', flexDirection: 'row' }}>
                        <Text style={{fontSize:18, }}>부가 정보</Text>
                    </Box>
                    <Box style={{ marginLeft : '3%', flexDirection : 'row'}}>
                        <Text style={{fontSize:16,}}>생년 월일</Text>
                        <Text style={{marginLeft:'3%', fontSize:14}}>{data.data.birthday}</Text>
                    </Box>
                    <Box style={{ marginLeft : '3%', flexDirection : 'row'}}>
                        <Text style={{fontSize:16,}}>이메일</Text>
                        <Text style={{marginLeft:'3%', fontSize:14}}>{data.data.email}</Text>
                    </Box>
                </Box>

                <Box style={{ marginTop:'10%', paddingLeft:'3%', paddingRight:'3%', height: '15%', borderWidth: 1, backgroundColor:'white', paddingBottom:'3%', paddingTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                    <Button style={{ borderRadius:20, width: '45%', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                        <Text style={{ fontSize: 20, fontWeight:'bold'}}>취소하기</Text>
                    </Button>
                    <Button style={{ borderRadius:20, width: '45%', borderWidth: 1, justifyContent: 'center', backgroundColor: '#4f8bc2' }} onPress={modify} >
                        <Text style={{ fontSize: 20, fontWeight:'bold'}}>수정완료</Text>
                    </Button>
                </Box>
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