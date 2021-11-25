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
import * as ImagePicker from 'expo-image-picker';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function register_company({navigation}){
 const [c_id,setid]=React.useState('');
 const [c_password,setpw]=React.useState('');
 const [c_name,setname]=React.useState('');
 const [c_nic,setnic]=React.useState('');
 const [c_tel,settel]=React.useState('');
 const [c_address,setadd]=React.useState('');
 const [c_activity,setact]=React.useState('');
 const [c_accountname,setaccountname]=React.useState('');
 const [c_account,setaccount]=React.useState('');
 const fd = new FormData();

 let sample='nakhyeon';

 let upload = async()=>{
    console.log(fd);
    const response= fetch('https://extreme-kor.herokuapp.com/company', {
        method:'POST',
        headers:{
        'Content-Type':'multipart/form-data',
    },
        body:fd
    }).then(response=>{
            console.log(JSON.stringify(response))
        }).catch(err=>{console.log(err)
        })
        }

 const submitBtn=()=>{
    console.log({c_id,c_password}); 
    fd.append("company_id", c_id)
    fd.append("password", c_password)
    fd.append("company_name", c_name)
    fd.append("company_manager", c_nic)
    fd.append("company_contact", c_tel)
    fd.append("company_address", c_address)
    fd.append("activity_category", c_activity)
    fd.append("bank_name", id)
    fd.append("account_number", c_account)
    fd.append("account_image", {uri:selectedImage.localUri, type:'image/jpeg', name:'photo.jpg'})
    console.log(fd);
    upload();

  }

  const cancel=()=>{
    navigation.navigate('home_region');
  }

  const same=()=>{
    if(c_id==sample){
        console.log('중복된 아이디입니다.');
    }
    else{
        console.log('사용 가능한 아이디입니다.');
    }
  }

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();

      if (pickerResult.cancelled === true) {
          return;
      }
      console.log(pickerResult)

      setSelectedImage({ localUri: pickerResult.uri });

  };
  
    if (selectedImage !== null) {

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
                }}>업체 회원가입
            </Text>
            </Box>
            <Box
            style={{
                width:Width,
                alignItems:'center',
               
            }}>
                <Box style={{height:800}}>
                <ScrollView>
                <Box
                style={{
                    width:Width-40,
                   backgroundColor:'white',
                    paddingBottom:200,
                    height:800,
                }}>
                <VStack space={1} style={{height:800}}>
                <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>통장사본 이미지</Text>
                                <TouchableOpacity onPress={openImagePickerAsync}>
                                    <Text>Pick a photo</Text>
                                </TouchableOpacity>

                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>아이디 입력</Text>
                    <HStack space={5} style={{alignItems:'center'}}>
                        <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}} onChangeText={(text)=>setid(text)} value={c_id}></TextInput>
                    <Button style={{backgroundColor:'#ced4da', width:100, height:30,alignItems:'center',paddingBottom:2}}onPress={same}><Text style={{fontSize:16 ,height:30}}>중복확인</Text></Button>
                    </HStack>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>비밀번호 입력</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setpw(text)} value={c_password}></TextInput>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>비밀번호 확인</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>업체명</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setname(text)} value={c_name}></TextInput>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>대표 이름</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setnic(text)} value={c_nic}></TextInput>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>업체 전화번호</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>settel(text)} value={c_tel}></TextInput>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>업체 주소</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setadd(text)} value={c_address}></TextInput>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>액티비티 종류</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setact(text)} value={c_activity}></TextInput>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>은행 이름</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setaccountname(text)} value={c_accountname}></TextInput>
                    <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>계좌번호</Text>
                    <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setaccount(text)} value={c_account}></TextInput>
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
    );
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
                        }}>업체 회원가입
                    </Text>
                    </Box>
                    <Box
                    style={{
                        width:Width,
                        alignItems:'center',
                       
                    }}>
                        <Box style={{height:500}}>
                        <ScrollView>
                        <Box
                        style={{
                            width:Width-40,
                           backgroundColor:'white',
                            paddingBottom:200,
                            height:800,
                        }}>
                        <VStack space={1} style={{height:1000}}>
                        <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>통장사본 이미지</Text>
                                        <TouchableOpacity onPress={openImagePickerAsync}>
                                            <Text>Pick a photo</Text>
                                        </TouchableOpacity>
        
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>아이디 입력</Text>
                            <HStack space={5} style={{alignItems:'center'}}>
                                <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}} onChangeText={(text)=>setid(text)} value={c_id}></TextInput>
                            <Button style={{backgroundColor:'#ced4da', width:100, height:30,alignItems:'center',paddingBottom:2}}onPress={same}><Text style={{fontSize:16 ,height:30}}>중복확인</Text></Button>
                            </HStack>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>비밀번호 입력</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setpw(text)} value={c_password}></TextInput>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>비밀번호 확인</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}></TextInput>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>업체명</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setname(text)} value={c_name}></TextInput>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>대표 이름</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setnic(text)} value={c_nic}></TextInput>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>업체 전화번호</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>settel(text)} value={c_tel}></TextInput>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>업체 주소</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setadd(text)} value={c_address}></TextInput>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>액티비티 종류</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setact(text)} value={c_activity}></TextInput>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>은행 이름</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setaccountname(text)} value={c_accountname}></TextInput>
                            <Text style={{marginLeft:10,padding:8,borderBottomWidth:1,width:Width-Width/2}}>계좌번호</Text>
                            <TextInput style={{marginLeft:10,width:Width/2,height:32,borderWidth:1,borderRadius:4,}}onChangeText={(text)=>setaccount(text)} value={c_account}></TextInput>
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
            );
        
}