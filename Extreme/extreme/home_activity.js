import React, { useState, useEffect } from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
  flex,
  FlatList
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { backgroundColor } from 'styled-system';

var window_width = Dimensions.get('window').width;
var window_height = Dimensions.get('window').height;
    
console.log("window_width:" + window_width);
console.log("window_height:" + window_height);

export default function home_activity({ navigation }) {
  // const suffing = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const suffing = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const rafting = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const paragliding = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const bungee_jumping = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const water_leisure = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const ski = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const snowboard = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const sky_diving = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  // const zip_wire = () => {
  //   navigation.navigate('각 페이지로 이동');
  // }
  const cart = () => {
    navigation.navigate('cart');
  }
  const heart = () => {
    navigation.navigate('heart');
  }
  const map = () => {
    navigation.navigate('weather_map');
  }
  const my_page = () => {
    navigation.navigate('my_page');
  }
  const register_activity = () => {
    navigation.navigate('register_activity');
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

  const [activityData, setactivityData] = useState([]);

  const getActivity = async () => {
     try {
      const response = await fetch(`https://extreme-kor.herokuapp.com/activity`);
       const json = await response.json();
       setactivityData(json.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getActivity();
  }, [activityData]);
  
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box marginLeft='10%' marginRight='10%'>
          <View marginTop={5} display='flex' alignItems='center' flexDirection='row' justifyContent='space-between'>
              <TouchableOpacity>
              <View justifyContent="center" alignItems="center" width={100} height={100} >
                <Image
                    source={require('./images/surfing.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>서핑</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View justifyContent="center" alignItems="center" width={100} height={100}> 
                <Image
                    source={require('./images/rafting.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>래프팅</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/paragliding.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>패러글라이딩</Text>
                </View>
              </TouchableOpacity>
          </View>

          <View display='flex' alignItems='center' flexDirection='row' justifyContent='space-between'>
              <TouchableOpacity>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/ski.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>스키</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/water_leisure.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>수상레저</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/jumping.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>번지점프</Text>
                </View>
              </TouchableOpacity>
          </View>

          <View display='flex' alignItems='center' flexDirection='row' justifyContent='space-between'>
              <TouchableOpacity>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/snowboarding.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>스노보드</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/sky_diving.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>스카이 다이빙</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/zip_wire.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>짚와이어</Text>
                </View>
              </TouchableOpacity>
          </View>
        </Box>

        <Box marginLeft='5%' marginRight='5%' borderWidth={1}></Box>

        <Box marginTop={5} marginLeft={'5%'}>
          <Text fontSize={20}>추천 액티비티</Text>
            <Carousel
              layout='default'
              data={images}
              sliderWidth={window_width}
              itemWidth={window_width / 3}
              inactiveSlideScale={1} //슬라이드들 크기 같게
              inactiveSlideOpacity={1} //슬라이드 투명도
              activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
              contentContainerCustomStyle={{ overflow: 'hidden', width: window_width / 3 * (7) }} //마지막 7은 원소의 개수
              renderItem={({ item, index }) => (
                <View>
                  <View style={{ flexDirection: 'column', width: '100%', height: 150, borderWidth: 0.5 }}> 
                    <Image
                          key={index}
                          style={{ width: '100%', height: '100%' }}
                          resizeMode='contain'
                          source={item.image}
                  />
                  <HStack>
                    <Text style={{ textAlign : 'center', color: 'white', backgroundColor:'#4f8bc2' }}>추천</Text>
                    <Text style={{ color: 'red' }}>{item.activity_name}</Text>
                  </HStack>
                  </View>
                  </View>
              )}
            />              
        </Box>

        <Box marginTop={5} marginLeft={'5%'}>
          <Text fontSize={20}>인기 액티비티</Text>
            <Carousel
              layout='default'
              data={images}
              sliderWidth={window_width}
              itemWidth={window_width / 3}
              inactiveSlideScale={1} //슬라이드들 크기 같게
              inactiveSlideOpacity={1} //슬라이드 투명도
              activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
              contentContainerCustomStyle={{ overflow: 'hidden', width: window_width / 3 * (7) }} //마지막 7은 원소의 개수
              renderItem={({ item, index }) => (
                  <View style={{ flexDirection: 'column', width: '100%', height: 150, borderWidth: 0.5 }}> 
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
        </Box>

        <Box marginTop={5} marginLeft={'5%'}>
          <Text fontSize={20}>최신 액티비티</Text>
            <Carousel
              layout='default'
              data={images}
              sliderWidth={window_width}
              itemWidth={window_width / 3}
              inactiveSlideScale={1} //슬라이드들 크기 같게
              inactiveSlideOpacity={1} //슬라이드 투명도
              activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
              contentContainerCustomStyle={{ overflow: 'hidden', width: window_width / 3 * (7) }} //마지막 7은 원소의 개수
              renderItem={({ item, index }) => (
                  <View style={{ flexDirection: 'column', width: '100%', height: 150, borderWidth: 0.5 }}> 
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
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  )
}