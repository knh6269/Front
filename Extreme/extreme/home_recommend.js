import React, { Component,  useState, useEffect } from "react";
import { Image, ScrollView, Dimensions, } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {Picker} from '@react-native-picker/picker';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from "react-native";

import {
    NativeBaseProvider,
    Box,
} from "native-base";

import IconM from 'react-native-vector-icons/MaterialIcons';
import Loading from "./test";
const width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const IMAGES = {
    image1: require('./images/1.jpg'),
    image2: require('./images/2.jpg'),
    image3: require('./images/그림7.png'),
    image4: require('./images/1.jpg'),
    image5: require('./images/1.jpg'),
    image6: require('./images/1.jpg'),
    image7: require('./images/1.jpg')
  };


export default function Recommend() {
    const [travelData, settravelData] = useState();

    const [images, setImages] = useState([
        { id: '1', image: IMAGES.image1, activity_name: '구룡스포츠' },
        { id: '2', image: IMAGES.image2, activity_name: '구룡스포츠' },
        { id: '3', image: IMAGES.image3, activity_name: '구룡스포츠' },
        { id: '4', image: IMAGES.image4, activity_name: '구룡스포츠' },
        { id: '5', image: IMAGES.image5, activity_name: '구룡스포츠' },
        { id: '6', image: IMAGES.image6, activity_name: '구룡스포츠' },
        { id: '7', image: IMAGES.image7, activity_name: '구룡스포츠' }
    ]);
    const [selectedValue, setSelectedValue] = useState("select");
    const getTravel= async () => {
        try {
         const response = await fetch(`https://extreme-kor.herokuapp.com/travel?location=경기도`);
            const json = await response.json();
            if (json.success) {
               settravelData(json.data);
               console.log(json.data)
            }
       } catch (error) {
         console.error(error);
       }
     }
     
     useEffect(() => {
       getTravel();
     }, []);
   
   
    
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box style={{marginLeft:'3%', marginRight:'3%'}}>
                    <View style={{marginTop:'5%'}}> 
                        <View style={{ height:Height/15, flexDirection: 'row', justifyContent: 'space-between', alignContent:'center', alignItems:'center' }}>
                            <Text style={{fontSize:20}}>지역별 여행지</Text>
                            <Picker selectedValue={selectedValue}
                                style={{  width: 130, color:'blue'}}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="select" value="select" />
                                <Picker.Item label="경기" value="경기" />
                                <Picker.Item label="강원" value="강원" />
                                <Picker.Item label="충북" value="충북" />
                                <Picker.Item label="충남" value="충남" />
                                <Picker.Item label="경북" value="경북" />
                                <Picker.Item label="경남" value="경남" />
                                <Picker.Item label="전북" value="전북" />
                                <Picker.Item label="전남" value="전남" />
                                <Picker.Item label="제주" value="제주" />
                            </Picker>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}>
                        <TouchableOpacity>
                            <IconM name="navigate-before" size={25}></IconM>
                        </TouchableOpacity>
                    
                        <Carousel
                            layout='default'
                            data={travelData}
                            sliderWidth={width}
                            itemWidth={width / 3}
                            inactiveSlideScale={1} //슬라이드들 크기 같게
                            inactiveSlideOpacity={1} //슬라이드 투명도
                            activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                            contentContainerCustomStyle={{ overflow: 'hidden', width: width / 3 * (7) }} //마지막 7은 원소의 개수
                            renderItem={({ item, index }) => (
                                <View>
                                    <TouchableOpacity style={{width: '100%', height: 150,}}>
                                    <Image
                                        key={item.travel_name}
                                        style={{ width: '90%', height: '85%', borderRadius:10 }}
                                        resizeMode='contain'
                                        source={{uri:item.Travel_images[0].image_url}}
                                        alt="profile"
                                />
                                    <Text>{item.travel_name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />

                        <TouchableOpacity>
                            <IconM name="navigate-next" size={25}></IconM>
                        </TouchableOpacity>
                    </View>

                    <Box marginTop='5%' marginLeft='5%' marginRight='5%' borderWidth={0.5} color={'#acacac'}></Box>

                    <Text style={{fontSize:20, marginTop:'3%'}}>내 주변 여행지</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <TouchableOpacity>
                            <IconM name="navigate-before" size={25}></IconM>
                        </TouchableOpacity>
                    
                        <Carousel
                            layout='default'
                            data={images}
                            sliderWidth={width}
                            itemWidth={width / 3}
                            inactiveSlideScale={1} //슬라이드들 크기 같게
                            inactiveSlideOpacity={1} //슬라이드 투명도
                            activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                            contentContainerCustomStyle={{ overflow: 'hidden', width: width / 3 * (7) }} //마지막 7은 원소의 개수
                            renderItem={({ item, index }) => (
                                <View>
                                    <TouchableOpacity style={{width: '100%', height: 150,}}  onPress={()=>navigation.navigate('activity_detail', {activity_id:item.id})}>
                                    <Image
                                            key={item.activity_name}
                                            style={{ width: '90%', height: '85%', borderRadius:10 }}
                                            resizeMode='contain'
                                            source={item.image}
                                        alt="profile"
                                    />
                                    <Text>{item.activity_name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />

                        <TouchableOpacity>
                            <IconM name="navigate-next" size={25}></IconM>
                        </TouchableOpacity>
                    </View>

                    <Box marginTop='5%' marginLeft='5%' marginRight='5%' borderWidth={0.5} color={'#acacac'}></Box>

                    <Text style={{fontSize:20, marginTop:'3%'}}>예약지 주변 여행지</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <TouchableOpacity>
                            <IconM name="navigate-before" size={25}></IconM>
                        </TouchableOpacity>
                    
                        <Carousel
                            layout='default'
                            data={images}
                            sliderWidth={width}
                            itemWidth={width / 3}
                            inactiveSlideScale={1} //슬라이드들 크기 같게
                            inactiveSlideOpacity={1} //슬라이드 투명도
                            activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                            contentContainerCustomStyle={{ overflow: 'hidden', width: width / 3 * (7) }} //마지막 7은 원소의 개수
                            renderItem={({ item, index }) => (
                                <View>
                                    <TouchableOpacity style={{width: '100%', height: 150,}}  onPress={()=>navigation.navigate('activity_detail', {activity_id:item.id})}>
                                    <Image
                                            key={item.activity_name}
                                            style={{ width: '90%', height: '85%', borderRadius:10 }}
                                            resizeMode='contain'
                                            source={item.image}
                                        alt="profile"
                                    />
                                    <Text>{item.activity_name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />

                        <TouchableOpacity>
                            <IconM name="navigate-next" size={25}></IconM>
                        </TouchableOpacity>
                    </View>

                </Box>
            </ScrollView >
        </NativeBaseProvider>
    );}
  



const styles = StyleSheet.create({
    activity: {
        height: 120,
        
        marginTop:8
    }
});