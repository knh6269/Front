import React, { Component,  useState } from "react";
import { Image, ScrollView, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
//import Icon from 'react-native-vector-icons/AntDesign';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";

import IconM from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');
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
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.category}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>지역별 여행지</Text>
                        <TouchableOpacity>
                            <Text>지역 선택</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.activity}>
                        <TouchableOpacity>
                            <IconM name="navigate-before" size={25} style={{ marginTop: 80, flex: 1, }}></IconM>
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
                                <View style={{ flexDirection: 'column', width: '100%', height: '50%', borderWidth: 0.5 }}>
                                    <Image
                                        key={index}
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode='contain'
                                        source={item.image}
                                    />
                                    <Text style={{ color: 'red' }}>{item.activity_name}</Text>
                                </View>
                            )}
                        />
                        <TouchableOpacity>
                            <IconM name="navigate-next" size={25} style={{ marginTop: 80, flex: 1, }}></IconM>
                        </TouchableOpacity>
                    </View>

                    <Text>내 주변 여행지</Text>
                    <View style={styles.activity}>
                        <TouchableOpacity>
                            <IconM name="navigate-before" size={25} style={{ marginTop: 80, flex: 1, }}></IconM>
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
                                <View style={{ flexDirection: 'column', width: '100%', height: '50%', borderWidth: 0.5 }}>
                                    <Image
                                        key={index}
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode='contain'
                                        source={item.image}
                                    />
                                    <Text style={{ color: 'red' }}>{item.activity_name}</Text>
                                </View>
                            )}
                        />
                        <TouchableOpacity>
                            <IconM name="navigate-next" size={25} style={{ marginTop: 80, flex: 1, }}></IconM>
                        </TouchableOpacity>
                    </View>

                    <Text>예약지 주변 여행지</Text>
                    <View style={styles.activity}>
                        <TouchableOpacity>
                            <IconM name="navigate-before" size={25} style={{ marginTop: 80, flex: 1, }}></IconM>
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
                                <View style={{ flexDirection: 'column', width: '100%', height: '50%', borderWidth: 0.5 }}>
                                    <Image
                                        key={index}
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode='contain'
                                        source={item.image}
                                    />
                                    <Text style={{ color: 'red' }}>{item.activity_name}</Text>
                                </View>
                            )}
                        />
                        <TouchableOpacity>
                            <IconM name="navigate-next" size={25} style={{ marginTop: 80, flex: 1, }}></IconM>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView >
    );

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    },
    category: {
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    activity: {
        height: 200,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderColor: '#A0A0A0',
    }
});