import React, { Component,  useState } from "react";
import { Image, ScrollView, Dimensions, Picker } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
//import Icon from 'react-native-vector-icons/AntDesign';
import Home_region from "./home_region";
import Home_recommend from "./home_recommend";
import Home_activity from "./home_activity";

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";
import { themeTools } from "native-base";

// import IconM from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');


export default function Recommend() {
    const [pages, setImages] = useState([
        { id: '1', page:'<Home_activity/>' },
        { id: '2', page:'<Home_region/>'},
        { id: '3', page:'<Home_recommend/>'}
    ]);
    {activity=pages.map((item, index)=>{
        key={index}
        console.log(item.id)
        if (item.id === '1'){
            return(
                <Home_activity/>
            )
        }
        else if (item.id === '2'){
            return(
                <Home_region/>
            )
        }
        else if (item.id === '3'){
            return(
                <Home_recommend/>
            )
        }
    })}

    return (       
        <ScrollView>            
                        <Carousel
                            onSnapToItem={index => onSelect(index)}
                            layout='default'
                            data={pages}
                            sliderWidth={width}
                            itemWidth={width}
                            inactiveSlideScale={1} //슬라이드들 크기 같게
                            inactiveSlideOpacity={1} //슬라이드 투명도
                            activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                            contentContainerCustomStyle={{ overflow: 'hidden', width: width}} //마지막 7은 원소의 개수
                            renderItem={(item) => activity}
                        />

        </ScrollView >
    );

}
