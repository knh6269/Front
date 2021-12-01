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
import { parse } from 'react-native-svg';

var window_width = Dimensions.get('window').width;
var window_height = Dimensions.get('window').height;
    
export default function home_activity({ navigation , route}) {
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
  const [activityData, setactivityData] = useState();
  const [activityData2, setactivityData2] = useState();
  const [activityData3, setactivityData3] = useState();
  const [length, setLength] = useState();

  let acti
  let acti2
  let newest_activity;
  let recommend_activity;
  // const move=type=>{
  //   navigation.navigate('activity_list', {name:type})
  //   console.log(type)
  // }
  const getActivity = async () => {
     try {
      const response = await fetch(`https://extreme-kor.herokuapp.com/activities`);
       const json = await response.json();
       acti=json.data.slice()
       acti2=json.data.slice()
       acti3=json.data.slice()
       setactivityData(acti);
       acti2.sort((a, b)=> (a.activity_name > b.activity_name ? 1:-1))
       setactivityData2(acti2)
       acti3.sort((a, b)=> (a.activity_category > b.activity_category ? 1:-1))
       setactivityData3(acti3)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getActivity();
  }, []);
  
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box marginLeft='10%' marginRight='10%'>
          <View display='flex' alignItems='center' flexDirection='row' justifyContent='space-between'>
              <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'서핑'})}>
              <View justifyContent="center" alignItems="center" width={100} height={100} >
                <Image
                    source={require('./images/surfing.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>서핑</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'래프팅'})}>
                <View justifyContent="center" alignItems="center" width={100} height={100}> 
                <Image
                    source={require('./images/rafting.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>래프팅</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'패러글라이딩'})}>
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
          <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'스키'})}>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/ski.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>스키</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'수상레저'})}>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/water_leisure.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>수상레저</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'번지점프'})}>
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
          <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'스노보드'})}>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/snowboarding.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>스노보드</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'스카이다이빙'})}>
                <View justifyContent="center" alignItems="center" width={100} height={100}>
                <Image
                    source={require('./images/sky_diving.png')}
                    style={{width: 40, height: 40, }}
                    alt="trans_1"
                />
                <Text fontSize={16} textAlign='center'>스카이 다이빙</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('activity_list', {type:'짚와이어'})}>
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
        <Box marginLeft='5%' marginRight='5%' borderWidth={0.5}></Box>
        <Box marginTop={5} marginLeft={'5%'} >
          <Text fontSize={20}>추천 액티비티</Text>
            <View>
              <Carousel
                layout='default'
                data={activityData}
                sliderWidth={window_width}
                itemWidth={window_width / 3}
                inactiveSlideScale={1} //슬라이드들 크기 같게
                inactiveSlideOpacity={1} //슬라이드 투명도
                activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                // contentContainerCustomStyle={{ overflow: 'hidden', width: window_width / data.length}} //마지막 7은 원소의 개수
                renderItem={({ item}) => (
                  <View>
                    <TouchableOpacity style={{width: '100%', height: 150,}}  onPress={()=>navigation.navigate('activity_detail', {activity_id:item.id})}>
                      <Image
                            key={item.activity_name}
                            style={{ width: '90%', height: '85%', borderRadius:10 }}
                            resizeMode='contain'
                        source={{uri:item.Activity_images[0].image_url}}
                        alt="profile"
                      />
                      <HStack>
                          <Text style={{ textAlign : 'center', color: 'white', backgroundColor:'#4f8bc2' }}>추천</Text>
                          <Text>{item.activity_name}</Text>
                      </HStack>
                      </TouchableOpacity>
                  </View>
                )}
              />      
            </View>        
        </Box>
        <Box marginTop={5} marginLeft={'5%'} >
          <Text fontSize={20}>인기 액티비티</Text>
            <View>
              <Carousel
                layout='default'
                data={activityData2}
                sliderWidth={window_width}
                itemWidth={window_width / 3}
                inactiveSlideScale={1} //슬라이드들 크기 같게
                inactiveSlideOpacity={1} //슬라이드 투명도
                activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                // contentContainerCustomStyle={{ overflow: 'hidden', width: window_width / 3 * (7) }} //마지막 7은 원소의 개수
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity style={{width: '100%', height: 150,}}  onPress={()=>navigation.navigate('activity_detail', {activity_id:item.id})}>
                      <Image
                            key={item.activity_name}
                            style={{ width: '90%', height: '85%', borderRadius:10 }}
                            resizeMode='contain'
                            source={{uri:item.Activity_images[0].image_url}}
                            alt="profile"
                      />
                      <HStack>
                          <Text style={{ textAlign : 'center', color: 'white', backgroundColor:'#4f8bc2' }}>인기</Text>
                          <Text>{item.activity_name}</Text>
                      </HStack>
                      </TouchableOpacity>
                  </View>
                )}
              />      
            </View>        
        </Box>
        <Box marginTop={5} marginLeft={'5%'} >
          <Text fontSize={20}>최신 액티비티</Text>
            <View>
              <Carousel
                layout='default'
                data={activityData3}
                sliderWidth={window_width}
                itemWidth={window_width / 3}
                inactiveSlideScale={1} //슬라이드들 크기 같게
                inactiveSlideOpacity={1} //슬라이드 투명도
                activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
                // contentContainerCustomStyle={{ overflow: 'hidden', width: window_width / 3 * (7) }} //마지막 7은 원소의 개수
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity style={{width: '100%', height: 150,}}  onPress={()=>navigation.navigate('activity_detail', {activity_id:item.id})}>
                      <Image
                            key={item.activity_name}
                            style={{ width: '90%', height: '85%', borderRadius:10 }}
                            resizeMode='contain'
                            source={{uri:item.Activity_images[0].image_url}}
                            alt="profile"
                      />
                      <HStack>
                          <Text style={{ textAlign : 'center', color: 'white', backgroundColor:'#ff3e3e' }}>최신</Text>
                          <Text>{item.activity_name}</Text>
                      </HStack>
                      </TouchableOpacity>
                  </View>
                )}
              />      
            </View>        
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  )
}