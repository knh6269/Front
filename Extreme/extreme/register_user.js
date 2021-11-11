import React from 'react'
import {
    Dimensions} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Button,
}from 'native-base';
import { TouchableOpacity,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function register_user({navigation}){
 const [id,setid]=React.useState('');
 const [password,setpw]=React.useState('');
 const [name,setname]=React.useState('');
 const [nic,setnic]=React.useState('');
 const [tel,settel]=React.useState('');
 const [email,setemail]=React.useState('');
 const [birth,setbirth]=React.useState('');
 const [account,setaccount]=React.useState('');
 let sample='nakhyeon';
 
 const submitBtn=()=>{
    console.log(`아이디: ${id}\n비밀번호:${password}`);
  }

  const cancel=()=>{
    navigation.navigate('home_region');
  }
  
  const same=()=>{
    if(id==sample){
        console.log('중복된 아이디입니다.');
    }
    else{
        console.log('사용 가능한 아이디입니다.');
    }
  }
    return(
        <NativeBaseProvider>
              <Box 
            style={{
                width:Width,
                height:Height/12,
                marginTop:40,
                justifyContent:'center',
                alignItems:'center',
                borderWidth:3,
                marginBottom:30,
            }}>
                <Text style={{
                    textAlign:'center',
                    height:Height/19,
                    padding:10,
                    fontSize:24,
                    fontWeight:'bold',
                }}>사용자 회원가입
            </Text>
            </Box>
            <Box
            style={{
                width:Width,
                alignItems:'center',
               
            }}>
                <Box style={{height:450}}>
                <ScrollView>
                <Box
                style={{
                    width:Width-40,
                   backgroundColor:'white',
                    paddingBottom:100,
                    height:850,
                }}>
                <VStack space={1}>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>프로필 이미지</Text>
                <Box style={{marginLeft:10,width:80,height:80,borderWidth:1}}></Box>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>아이디 입력</Text>
                <HStack space={5} style={{alignItems:'center'}}>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}} onChangeText={(text)=>setid(text)} value={id}></TextInput>
                <Button style={{backgroundColor:'#ced4da', width:100, height:30,alignItems:'center',paddingBottom:2}}onPress={same}><Text style={{fontSize:16 ,height:30}}>중복확인</Text></Button>
                </HStack>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>비밀번호 입력</Text>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setpw(text)} value={password}></TextInput>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>비밀번호 확인</Text>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}onChangeText={(text)=>setname(text)} value={name}>이름</Text>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}onChangeText={(text)=>setnic(text)} value={nic}>닉네임</Text>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}onChangeText={(text)=>settel(text)} value={tel}>전화번호</Text>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}onChangeText={(text)=>setemail(text)} value={email}>이메일</Text>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}onChangeText={(text)=>setbirth(text)} value={birth}>생년월일</Text>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}onChangeText={(text)=>setaccount(text)} value={account}>환불계좌</Text>
                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                </VStack>
                </Box>
                </ScrollView>
                </Box>
                <Box>
                  <HStack space={20} marginTop={10}>
                     <Button style={{width:100, height:40,borderWidth:1,justifyContent:'center',backgroundColor:'white'}} onPress={submitBtn}><Text>확인</Text></Button>  
                     <Button style={{width:100, height:40,borderWidth:1,justifyContent:'center',backgroundColor:'white'}} onPress={cancel}><Text>취소</Text></Button>  
                  </HStack>   
                </Box>
                </Box>
        </NativeBaseProvider>
    )
}