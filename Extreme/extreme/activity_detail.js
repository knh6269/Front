import React, { Component, useEffect, useState } from 'react'
import { Dimensions, } from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    flex,
    Button,
    InfoIcon,
} from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, StyleSheet } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import IconM from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

var window_width = Dimensions.get('window').width;
var window_height = Dimensions.get('window').height;

import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import { flexDirection } from 'styled-system';


export default function Order_list_detail({ navigation }) {
    let [review, setReview] = useState();
    const [info, setInfo] = useState();


    const [activity_id, setActivityID] = useState(navigation.state.params.activity_id);


    const pressHandler = () => {
        navigation.navigate('home_region');
    }

    const get_activity_info = async () => {
        console.log("로딩"+activity_id)
        try {
            const response = await fetch(`https://extreme-kor.herokuapp.com/activity?id=${activity_id}`);
            const json = await response.json();
            if (json.success) {
                console.log("로딩 성공1")
                setInfo(json.data);
                console.log("ss"+JSON.stringify(info))
            }
            else{
                console.log("실패")
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    const get_review = async () => {
        console.log("로딩"+activity_id)
        try {
            const response = await fetch(`https://extreme-kor.herokuapp.com/review?activity_id=${activity_id}`);
            const json = await response.json();
            if (json.success) {
                console.log("로딩 성공")
                setReview(json.data);
                console.log(json.data);
            }
            else{
                console.log("실패")
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        get_activity_info();
        get_review();
    }, []);
    {if(info!=null){
    return(
        <NativeBaseProvider>
            <ScrollView> 
               
                    <Box>
                        <Carousel
                            layout='default'
                            data={info.Activity_images}
                            sliderWidth={window_width}
                            itemWidth={window_width}
                            inactiveSlideScale={1} //슬라이드들 크기 같게
                            inactiveSlideOpacity={1} //슬라이드 투명도
                            activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                            contentContainerCustomStyle={{ overflow: 'hidden' }} //마지막 7은 원소의 개수
                            renderItem={({ item}) => (
                                <View>
                                    <View style={{width: '100%', height: window_width,}}> 
                                        <Image
                                                key={item.activity_name}
                                                style={{ width: '100%', height: '100%', borderRadius:10 }}
                                                resizeMode='contain'
                                                source={{uri:item.image_url}}
                                                alt="profile"
                                        />
                                    </View>
                                </View>
                            )}
                        />      
                    </Box>
                        
                    <Box style={{backgroundColor:'white'}}>
                        <Box style={{paddingTop:'3%', marginLeft:'3%', marginRight:'3%', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{info.activity_name}</Text>
                            <Text>{info.star}</Text>
                        </Box>

                        <Box style={{ marginTop:'5%', marginBottom:'5%', marginLeft:'3%', marginRight:'3%',}}>
                            <Button style={{ borderRadius:10, width: '100%', height: 60, borderWidth: 0.5, justifyContent: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>날짜 및 시간 선택</Text>
                            </Button>
                        </Box>
                    </Box>
                        
                    <Box marginTop='3%'></Box>

                    <Box style={{ paddingTop:'5%', paddingBottom:'5%', backgroundColor: 'white' }}>
                        <Box style={{marginLeft: '3%', marginRight:'3%',}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{info.activity_price}원</Text>
                            <Text style={{ marginTop:'3%', fontWeight: 'bold', fontSize: 16 }}>상품 정보</Text>
                        </Box>

                        <Box marginTop='5%' marginLeft='3%' marginRight='3%' borderWidth={0.5}></Box>

                        <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'40%', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#acacac'}}>업체명</Text>
                            <Text>{info.Company.company_name}</Text>
                        </Box>

                        <Box style={{marginLeft:'3%', marginRight:'40%', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#acacac'}}>주소</Text>
                            <Text>{info.address}</Text>
                        </Box>

                        <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'40%', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#acacac'}}>이용 가능 시간</Text>
                            <Text>하모닉스</Text>
                        </Box>
                    </Box>

                    <Box marginTop='3%'></Box>

                    <Box onPress={console.log(review)} style={{ paddingTop:'5%', paddingBottom:'5%', backgroundColor: 'white' }}>
                        <Box style={{marginLeft: '5%', marginRight:'5%',}}>
                            <Text style={{ marginTop:'3%', fontWeight: 'bold', fontSize: 16 }}>고객 리뷰</Text>
                        </Box>
                   
                        
                    </Box> 
                   
                
                   
                
                            {(review)&&review.map((review)=>{
                                return(
                                    
                                <View>
                                    <Box marginTop='5%' marginLeft='5%' marginRight='5%' borderWidth={0.5}></Box>
    
                                    <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'40%', flexDirection:'row', }}>
                                        <Image
                                            source={{
                                                uri:review.User.profile_image,
                                            }}
                                            style={{width:40, height:40, borderRadius:50}}
                                            alt="trans_1" />
                                        <Box style={{marginLeft:'3%'}}>
                                            <Text style={{fontSize:12}}>{review.User.nickname}</Text>
                                            <Box style={{flexDirection:'row'}}>
                                                <Text>{review.star}</Text>
                                                <Text style={{marginLeft:'3%', fontSize:10, color:'#898989'}}>{review.created_at}</Text>
                                            </Box>
                                        </Box>
                                    </Box>
    
                                    <Box style={{ marginTop: '3%', marginLeft: '3%', marginRight: '3%' }}>
                                        <Text>{review.content}</Text>
                                    </Box>
                                    </View>);
                                
                            })}
                            
            </ScrollView >

            <Box style={{ paddingLeft:'3%', paddingRight:'3%', height: '15%', borderWidth: 1, backgroundColor:'white', paddingBottom:'3%', paddingTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                <Button onPress={()=>navigation.navigate('review', {activity_id:info.id})} style={{ borderRadius:20, width: '45%', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                    <Text style={{ fontSize: 20, fontWeight:'bold'}}>리뷰쓰기</Text>
                </Button>
                <Button style={{ borderRadius:20, width: '45%', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                    <Text style={{ fontSize: 20, fontWeight:'bold'}}>환불신청</Text>
                </Button>
            </Box>
        </NativeBaseProvider>
    );}
    else 
    return(
      <NativeBaseProvider>
        <View><Text>dd</Text></View>
        </NativeBaseProvider>
    )}
  
 
}