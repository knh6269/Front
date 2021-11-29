import React ,{useEffect}from 'react'
import {
    Dimensions, ImagePickerIOS, Alert
} from "react-native"
import {
    NativeBaseProvider,
    Box,
    View,
    HStack,
    Text,
    VStack,
    Image,
    Button,
} from 'native-base';

import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function register_user({ navigation }) {

    const select_bank = () => {
        navigation.navigate('select_bank');
    }

    const [id, setid] = React.useState('');
    const [password, setpw] = React.useState('');
    const [passwordconfirm, setpwc] = React.useState('');
    const [name, setname] = React.useState('');
    const [nic, setnic] = React.useState('');
    const [tel, settel] = React.useState('');
    const [email, setemail] = React.useState('');
    const [birth, setbirth] = React.useState('');
    const [account, setaccount] = React.useState('');
    const fd = new FormData();
    let id_state = false

    let upload = async()=>{
        console.log(fd);
        const response= fetch('https://extreme-kor.herokuapp.com/user', {
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

    const submitBtn = () => {
        if(id==''){
            Alert.alert( "","아이디를 입력해주세요",[{text:"확인"}])
        }
        else if(id_state==false){
            Alert.alert( "","아이디 중복확인을 해주세요",[{text:"확인"}])
        }

        else if(password==''){
            Alert.alert( "","비밀번호를 입력해주세요",[{text:"확인"}])
        }
        else if(name==''){
            Alert.alert( "","이름을 입력해주세요",[{text:"확인"}])
        }
        else if(nic==''){
            Alert.alert( "","닉네임을 입력해주세요",[{text:"확인"}])
        }
        else if(tel==''){
            Alert.alert( "","전화번호를 입력해주세요",[{text:"확인"}])
        }
        else if(email==''){
            Alert.alert( "","이메일을 입력해주세요",[{text:"확인"}])
        }
        else if(birth==''){
            Alert.alert( "","생년월일을 입력해주세요",[{text:"확인"}])
        }
        else if(account==''){
            Alert.alert( "","환불계좌를 입력해주세요",[{text:"확인"}])
        }
        else{

        fd.append("password", password)
        fd.append("nickname", nic)
        fd.append("name", name)
        fd.append("phone_number", tel)
        fd.append("birthday", birth)
        fd.append("email", email)
        fd.append("user_id", id)
        fd.append("profile_image", {uri:selectedImage.localUri, type:'image/jpeg', name:'photo.jpg'})
        console.log(fd);
        upload();}

    }
    
const cancel=()=>{
    sample=1;
}
    const same = async() => {
        const response = await fetch(`https://extreme-kor.herokuapp.com/user/check_id/${id}`);
        const json = await response.json();
        console.log(json)

        if (json.success) {
            console.log('사용 가능한 아이디입니다.');
            id_state = true
        }
        else {
            console.log('중복된 아이디입니다.');
        }
    }
    //이미지 불러오기
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
        return (
            <NativeBaseProvider>
                <Box
                    style={{
                        width: Width,
                        height: Height / 12,
                        marginTop: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 3,
                        marginBottom: 30,
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        height: Height / 19,
                        padding: 10,
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>사용자 회원가입
                    </Text>
                </Box>
                <Box
                    style={{
                        width: Width,
                        alignItems: 'center',

                    }}>
                    <Box style={{ height: 400 }}>
                        <ScrollView>
                            <Box
                                style={{
                                    width: Width - 40,
                                    backgroundColor: 'white',
                                    paddingBottom: 100,
                                    height: 850,
                                }} >
                                <VStack space={1}>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>프로필 이미지</Text>
                                    <TouchableOpacity onPress={openImagePickerAsync}>
                                        <Text>Pick a photo</Text>
                                    </TouchableOpacity>

                                    <Image
                                        source={{ uri: selectedImage.localUri }}
                                        style={{ width: 80, height: 80 }}
                                        onPress={console.log(`11${selectedImage.localUri}`)}
                                    />
                                    <Text>{ selectedImage.localUri}</Text>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>아이디 입력</Text>
                                    <HStack space={5} style={{ alignItems: 'center' }}>
                                        <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setid(text)} value={id}></TextInput>
                                        <Button style={{ backgroundColor: '#ced4da', width: 100, height: 30, alignItems: 'center', paddingBottom: 2 }} onPress={same}><Text style={{ fontSize: 16, height: 30 }}>중복확인</Text></Button>
                                    </HStack>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>비밀번호 입력</Text>
                                    <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setpw(text)} value={password}></TextInput>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>비밀번호 확인</Text>
                                    <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }}  onChangeText={(text) => setpwc(text) }  value={passwordconfirm}></TextInput>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }} >이름</Text>
                                    <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setname(text)} value={name}></TextInput>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>닉네임</Text>
                                    <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setnic(text)} value={nic}></TextInput>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>전화번호</Text>
                                    <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => settel(text)} value={tel}></TextInput>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }} >이메일</Text>
                                    <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setemail(text)} value={email}></TextInput>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>생년월일</Text>
                                    <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setbirth(text)} value={birth}></TextInput>
                                    <Text style={{ marginLeft: 10, padding: 8, borderBottomWidth: 1, width: Width - Width / 2 }}>환불계좌</Text>
                                    <TextInput style={{ marginLeft: 10, width: Width / 2, height: 32, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setaccount(text)} value={account}></TextInput>
                                </VStack>
                            </Box>
                        </ScrollView>
                    </Box>
                    <Box>
                        <HStack space={20} marginTop={10}>
                            <Button style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} onPress={submitBtn}><Text>확인</Text></Button>
                            <Button style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} onPress={cancel}><Text>취소</Text></Button>
                        </HStack>
                    </Box>
                </Box>
            </NativeBaseProvider>
        );
    }

    return (
        <NativeBaseProvider>
            <Box style={{flexDirection: 'row', marginTop:50}}>
                <TouchableOpacity>
                    <IconM name="navigate-before" size={25} style={{ }}></IconM>
                </TouchableOpacity>
                <Text style={{fontSize: 20,}}>회원가입</Text>
            </Box>

            <Box marginTop={14} borderWidth={1}></Box>

            <ScrollView>
                <Box>
                    <Box style={{marginTop:'3%', textAlign:'center', alignItems:'center'}}>
                        <TouchableOpacity onPress={openImagePickerAsync}>
                            <Box style={{ width: 80, height: 80, borderWidth: 1, borderRadius:50}}></Box>
                        </TouchableOpacity>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="아이디를 입력하세요" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '70%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setid(text)} value={id}></TextInput>
                            <Button style={{ backgroundColor: '#ced4da', width: 100, height: 40, alignItems: 'center', paddingBottom: 2 }} onPress={same}><Text style={{ fontSize: 16, height: 30 }}>중복확인</Text></Button>
                        </HStack>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="패스워드" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '90%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setpw(text)} value={password}></TextInput>
                            <IconA name="lock" size={25} style={{ }}></IconA>
                        </HStack>
                    </Box>
                    
                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="패스워드 확인" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '90%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setpwc(text)} value={passwordconfirm}></TextInput>
                            <IconA name="lock" size={25} style={{ }}></IconA>
                        </HStack>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <Text>공백 없이 영문, 숫자만 입력이 가능합니다. (최소 8자리)</Text>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="이름을 입력해주세요" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setname(text)} value={name}></TextInput>
                        </HStack>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="닉네임을 입력해주세요" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setnic(text)} value={nic}></TextInput>
                        </HStack>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="연락처를 입력해주세요" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => settel(text)} value={tel}></TextInput>
                        </HStack>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="이메일을 입력해주세요" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setemail(text)} value={email}></TextInput>
                        </HStack>
                    </Box>

                    <Box>
                        <Button>이메일 수신 동의</Button>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="생년월일을 입력해주세요 (ex.211116)" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setbirth(text)} value={birth}></TextInput>
                        </HStack>
                    </Box>

                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'3%'}}>
                        <HStack space={5} style={{ alignItems: 'center' }}>
                            <TextInput placeholder="환불계좌를 입력하세요" style={{ paddingLeft : '3%', placeholderTextColor: 'black', width: '70%', height: 40, borderWidth: 1, borderRadius: 4, }} onChangeText={(text) => setaccount(text)} value={account}></TextInput>
                            <TouchableOpacity onPress={select_bank}>
                                <Button style={{ backgroundColor: '#ced4da', width: 100, height: 40, alignItems: 'center', paddingBottom: 2 }} onPress={same}><Text style={{ fontSize: 16, height: 30 }}>은행 선택</Text></Button>
                            </TouchableOpacity>
                        </HStack>
                    </Box>
                </Box>

                <Box style={{marginTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                        <Button style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} onPress={submitBtn}><Text>확인</Text></Button>
                        <Button style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} onPress={cancel}><Text>취소</Text></Button>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}