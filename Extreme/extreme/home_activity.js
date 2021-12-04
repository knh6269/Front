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

  const [activityData, setactivityData] = useState();
  const [activityData2, setactivityData2] = useState();
  const [activityData3, setactivityData3] = useState();
  const [length, setLength] = useState();

  let acti
  let acti2

  const getActivity = async () => {
     try {
      const response = await fetch(`https://extreme-kor.herokuapp.com/activities`);
       const json = await response.json();
       console.log(json)
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
      <ScrollView >
        <Box paddingLeft='10%' paddingRight='10%' backgroundColor='white'>
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
        <Box paddingTop={5} paddingLeft={'5%'}  backgroundColor='white' >
          <Text fontSize={20} marginBottom={'3%'}>추천 액티비티</Text>
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
                            style={{ width: '90%', height: '70%', borderRadius:10 }}
                            resizeMode='stretch'
                        source={{uri:item.Activity_images[0].image_url}}
                        alt="profile"
                      />
                      <View style={{marginTop:'3%', flexDirection:'row',}}>
                        <Box style={{width:28, height:20, backgroundColor:'#2CE0BC', borderRadius:5, alignItems:'center', }}>
                          <Text style={{ color: 'white', fontSize:10 }}>추천</Text>
                          </Box>
                          <Text style={{ marginLeft : '2%', fontSoze:10, width: '75%'}}>{item.activity_name}</Text>
                      </View>
                      </TouchableOpacity>
                  </View>
                )}
              />      
            </View>        
        </Box>
        <Box paddingTop={5} paddingLeft={'5%'}  backgroundColor='white' >
          <Text fontSize={20} marginBottom={'3%'}>인기 액티비티</Text>
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
                            style={{ width: '90%', height: '70%', borderRadius:10 }}
                            resizeMode='stretch'
                            source={{uri:item.Activity_images[0].image_url}}
                            alt="profile"
                      />
                      <View style={{marginTop:'3%', flexDirection:'row',}}>
                        <Box style={{width:28, height:20, backgroundColor:'#2CE0BC', borderRadius:5, alignItems:'center', }}>
                          <Text style={{ color: 'white', fontSize:10 }}>인기</Text>
                          </Box>
                          <Text style={{ marginLeft : '2%', fontSoze:10, width: '75%'}}>{item.activity_name}</Text>
                      </View>
                      </TouchableOpacity>
                  </View>
                )}
              />      
            </View>        
        </Box>
        <Box paddingTop={5} paddingLeft={'5%'}  backgroundColor='white' >
          <Text fontSize={20} marginBottom={'3%'}>최신 액티비티</Text>
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
                            style={{ width: '90%', height: '70%', borderRadius:10 }}
                            resizeMode='stretch'
                            source={{uri:item.Activity_images[0].image_url}}
                            alt="profile"
                      />
                      <View style={{marginTop:'3%', flexDirection:'row',}}>
                        <Box style={{width:28, height:20, backgroundColor:'#13C7A3', borderRadius:5, alignItems:'center', }}>
                          <Text style={{ color: 'white', fontSize:10 }}>최신</Text>
                          </Box>
                          <Text style={{ marginLeft : '2%', fontSoze:10, width: '75%'}}>{item.activity_name}</Text>
                      </View>
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