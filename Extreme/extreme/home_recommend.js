import React, { Component,  useState } from "react";
import { Image, ScrollView, Dimensions, Picker } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
//import Icon from 'react-native-vector-icons/AntDesign';

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
const { width } = Dimensions.get('window');
// const [selectedLanguage, setSelectedLanguage] = useState();

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

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <View style={{marginTop:16}}> 
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{marginLeft : 17, fontSize:20}}>지역별 여행지</Text>
                            <Picker selectedValue={selectedValue}
                                    style={{ height: 30, width: 130 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="지역선택" value="select" />
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
                    
                        <View style={styles.activity}>
                            <TouchableOpacity>
                                <IconM name="navigate-before" size={25} style={{ marginTop: '100%', flex: 1, }}></IconM>
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
                                    <View style={{ width: '80%', height: '100%', }}>
                                        <Image
                                            key={index}
                                            style={{ width: '100%', height: '60%', borderRadius:50 }}
                                            resizeMode='contain'
                                            source={item.image}
                                        />
                                        <Text style={{ marginTop:'5%', textAlign:'center', color: 'black' }}>{item.activity_name}</Text>
                                    </View>

                                )}
                            />

                            <TouchableOpacity>
                                <IconM name="navigate-next" size={25} style={{ marginTop: '100%', flex: 1, }}></IconM>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Box marginTop='5%' marginLeft='5%' marginRight='5%' borderWidth={1}></Box>

                    <View style={{marginTop:16}}> 
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{marginLeft : 17, fontSize:20}}>내 주변 여행지</Text>
                        </View>
                    
                        <View style={styles.activity}>
                            <TouchableOpacity>
                                <IconM name="navigate-before" size={25} style={{ marginTop: '100%', flex: 1, }}></IconM>
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
                                    <View style={{ width: '80%', height: '100%', }}>
                                        <Image
                                            key={index}
                                            style={{ width: '100%', height: '60%', borderRadius:50 }}
                                            resizeMode='contain'
                                            source={item.image}
                                        />
                                        <Text style={{ marginTop:'5%', textAlign:'center', color: 'black' }}>{item.activity_name}</Text>
                                    </View>

                                )}
                            />

                            <TouchableOpacity>
                                <IconM name="navigate-next" size={25} style={{ marginTop: '100%', flex: 1, }}></IconM>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Box marginTop='5%' marginLeft='5%' marginRight='5%' borderWidth={1}></Box>

                    <View style={{marginTop:16}}> 
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{marginLeft : 17, fontSize:20}}>예약지 주변 여행지</Text>
                        </View>
                    
                        <View style={styles.activity}>
                            <TouchableOpacity>
                                <IconM name="navigate-before" size={25} style={{ marginTop: '100%', flex: 1, }}></IconM>
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
                                    <View style={{ width: '80%', height: '100%', }}>
                                        <Image
                                            key={index}
                                            style={{ width: '100%', height: '60%', borderRadius:50 }}
                                            resizeMode='contain'
                                            source={item.image}
                                        />
                                        <Text style={{ marginTop:'5%', textAlign:'center', color: 'black' }}>{item.activity_name}</Text>
                                    </View>

                                )}
                            />

                            <TouchableOpacity>
                                <IconM name="navigate-next" size={25} style={{ marginTop: '100%', flex: 1, }}></IconM>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Box>
            </ScrollView >
        </NativeBaseProvider>
    );

}

const styles = StyleSheet.create({
    activity: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:8
    }
});