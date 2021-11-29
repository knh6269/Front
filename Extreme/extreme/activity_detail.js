import React, { Component, useState } from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    flex,
    Button,  
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, StyleSheet} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import IconM from 'react-native-vector-icons/MaterialIcons';

var window_width = Dimensions.get('window').width;
var window_height = Dimensions.get('window').height;

import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import { flexDirection } from 'styled-system';


export default function Order_list_detail({navigation}) {
    const pressHandler=()=>{
        navigation.navigate('home_region');
    }
    
    const IMAGES = {
        image1: require('./images/1.jpg'),
        image2: require('./images/2.jpg'),
        image3: require('./images/그림7.png'),
        image4: require('./images/1.jpg'),
        image5: require('./images/1.jpg'),
        image6: require('./images/1.jpg'),
        image7: require('./images/1.jpg')
    };

    const [images, setImages] = useState([
        { id: '1', image: IMAGES.image1, activity_name: '구룡스포츠1' },
        { id: '2', image: IMAGES.image2, activity_name: '구룡스포츠2' },
        { id: '3', image: IMAGES.image3, activity_name: '구룡스포츠3' },
        { id: '4', image: IMAGES.image4, activity_name: '구룡스포츠1' },
        { id: '5', image: IMAGES.image5, activity_name: '구룡스포츠5' },
        { id: '6', image: IMAGES.image6, activity_name: '구룡스포츠4' },
        { id: '7', image: IMAGES.image7, activity_name: '구룡스포츠8' }
    ]);
    
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <Box>
                        <Carousel
                            layout='default'
                            data={images}
                            sliderWidth={window_width}
                            itemWidth={window_width}
                            inactiveSlideScale={1} //슬라이드들 크기 같게
                            inactiveSlideOpacity={1} //슬라이드 투명도
                            activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                            contentContainerCustomStyle={{ overflow: 'hidden' }} //마지막 7은 원소의 개수
                            renderItem={({ item, index }) => (
                                <View>
                                    <View style={{width: '100%', height: window_width,}}> 
                                        <Image
                                                key={index}
                                                style={{ width: '100%', height: '100%', borderRadius:10 }}
                                                resizeMode='contain'
                                            source={item.image}
                                            alt="profile"
                                        />
                                    </View>
                                </View>
                            )}
                        />      
                    </Box>
                        
                    <Box style={{backgroundColor:'white'}}>
                        <Box style={{paddingTop:'3%', marginLeft:'3%', marginRight:'3%', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>액티비티명</Text>
                            <Text>123</Text>
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
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>90,000원</Text>
                            <Text style={{ marignTop:'3%', fontWeight: 'bold', fontSize: 16 }}>상품 정보</Text>
                        </Box>

                        <Box marginTop='5%' marginLeft='3%' marginRight='3%' borderWidth={0.5}></Box>

                        <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'40%', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#acacac'}}>업체명</Text>
                            <Text>하모닉스</Text>
                        </Box>

                        <Box style={{marginLeft:'3%', marginRight:'40%', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#acacac'}}>주소</Text>
                            <Text>하모닉스</Text>
                        </Box>

                        <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'40%', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#acacac'}}>이용 가능 시간</Text>
                            <Text>하모닉스</Text>
                        </Box>
                    </Box>

                    <Box marginTop='3%'></Box>

                    <Box style={{ paddingTop:'5%', paddingBottom:'5%', backgroundColor: 'white' }}>
                        <Box style={{marginLeft: '5%', marignRight:'5%',}}>
                            <Text style={{ marignTop:'3%', fontWeight: 'bold', fontSize: 16 }}>고객 정보</Text>
                        </Box>

                        <Box marginTop='5%' marginLeft='5%' marginRight='5%' borderWidth={0.5}></Box>

                        <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'40%', flexDirection:'row', }}>
                            <Image
                                source={{
                                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                }}
                                style={{width:40, height:40, borderRadius:50}}
                                alt="trans_1" />
                            <Box style={{marginLeft:'3%'}}>
                                <Text style={{fontSize:12}}>하모닉스</Text>
                                <Box style={{flexDirection:'row'}}>
                                    <Text>123</Text>
                                    <Text style={{marginLeft:'3%', fontSize:10, color:'#898989'}}>2021.11.28</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{ marginTop: '3%', marginLeft: '3%', marignRight: '3%' }}>
                            <Text>후기 날려 날려~</Text>
                        </Box>

                        <Box marginTop='5%' marginLeft='5%' marginRight='5%' borderWidth={0.5}></Box>

                        <Box style={{marginTop:'3%', marginLeft:'3%', marginRight:'40%', flexDirection:'row', }}>
                            <Image
                                source={{
                                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                }}
                                style={{width:40, height:40, borderRadius:50}}
                                alt="trans_1" />
                            <Box style={{marginLeft:'3%'}}>
                                <Text style={{fontSize:12}}>하모닉스</Text>
                                <Box style={{flexDirection:'row'}}>
                                    <Text>123</Text>
                                    <Text style={{marginLeft:'3%', fontSize:10, color:'#898989'}}>2021.11.28</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{ marginTop: '3%', marginLeft: '3%', marignRight: '3%' }}>
                            <Text>후기 날려 날려~</Text>
                        </Box>
                    </Box>
                </Box>
            </ScrollView >

            <Box style={{ paddingLeft:'3%', paddingRight:'3%', height: '15%', borderWidth: 1, backgroundColor:'white', paddingBottom:'3%', paddingTop:'3%', justifyContent: 'space-around', flexDirection:'row'}}>
                <Button style={{ borderRadius:20, width: '45%', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                    <Text style={{ fontSize: 20, fontWeight:'bold'}}>리뷰쓰기</Text>
                </Button>
                <Button style={{ borderRadius:20, width: '45%', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                    <Text style={{ fontSize: 20, fontWeight:'bold'}}>환불신청</Text>
                </Button>
            </Box>
        </NativeBaseProvider>
    );

}
