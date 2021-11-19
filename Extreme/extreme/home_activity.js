import React, { Component, useState } from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    flex
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

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
  
  
  const [search, onChangeTextSearch] = React.useState("")

  return (
    <NativeBaseProvider>
      <ScrollView>
        {/* 검색바 */}
        <Box marginTop='3%'>
          <HStack space={3}>
            <View>
            <Image
                    source={require('./images/logo.png')}
                    style={{ width: 100, height: 60, }}
                    alt="trans_1"
                />
            </View>
            <View style={{  flexDirection: 'row', width: '65%', borderColor: 'gray', borderWidth: 1, alignItems: 'center' }}>
              <IconF name="search" size={20}></IconF>
              <TextInput
                  placeholder={'어디로!! 여행가세요?'}
                  onChangeText={(text) => onChangeTextSearch(text)}
                  value={search}
                  fontSize={20}
              />
            </View>
          </HStack>
        </Box>

        {/* 액티비티 종류 아이콘 */}
        <Box marginLeft={'10%'}>
          <Box marginTop={5}>
            <HStack space={10}>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
            </HStack>
          </Box>

          <Box marginTop={5}>
            <HStack space={10}>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
            </HStack>
          </Box>

          <Box marginTop={5}>
            <HStack space={10}>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
            </HStack>
          </Box>
        </Box>

        {/* 추천 액티비티 */}
        <Box marginTop={5} marginLeft={'5%'}>
          <Text>추천 액티비티</Text>
          <Box marginTop={5}>
            <HStack space={10}>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconM name="navigate-next" size={25} style={{marginTop: 30, flex: 1, }}></IconM>
              </TouchableOpacity>
            </HStack>
          </Box>
          <TouchableOpacity>
            <Text textAlign={'center'} fontSize={20} marginRight={'5%'} marginTop={5} borderWidth={1} alignItems={'center'} justifyContent={'center'}>더보기</Text>
          </TouchableOpacity>
        </Box>

        {/* 인기 액티비티 */}
        <Box marginTop={5} marginLeft={'5%'}>
          <Text>인기 액티비티</Text>
          <Box marginTop={5}>
            <HStack space={10}>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconM name="navigate-next" size={25} style={{marginTop: 30, flex: 1, }}></IconM>
              </TouchableOpacity>
            </HStack>
          </Box>
          <TouchableOpacity>
            <Text textAlign={'center'} fontSize={20} marginRight={'5%'} marginTop={5} borderWidth={1} alignItems={'center'} justifyContent={'center'}>더보기</Text>
          </TouchableOpacity>
        </Box>

        {/* 최신 액티비티 */}
        <Box marginTop={5} marginLeft={'5%'}>
          <Text>최신 액티비티</Text>
          <Box marginTop={5}>
            <HStack space={10}>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 80, height: 90, }}
                    alt="trans_1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconM name="navigate-next" size={25} style={{marginTop: 30, flex: 1, }}></IconM>
              </TouchableOpacity>
            </HStack>
          </Box>
          <TouchableOpacity>
            <Text textAlign={'center'} fontSize={20} marginRight={'5%'} marginTop={5} borderWidth={1} alignItems={'center'} justifyContent={'center'}>더보기</Text>
          </TouchableOpacity>
        </Box>

        <Box marginTop={'5%'} alignItems='center' >
          <HStack space={10}>
            <TouchableOpacity onPress={cart}>
              <IconA name="shoppingcart" size={40} style={{flex: 1, }}></IconA>
            </TouchableOpacity>
            <TouchableOpacity onPress={heart}>
              <IconA name="heart" size={40} style={{flex: 1, }}></IconA>
            </TouchableOpacity>
            <TouchableOpacity onPress={register_activity}>
              <IconA name="home" size={40} style={{flex: 1, }}></IconA>
            </TouchableOpacity>
            <TouchableOpacity onPress={map}>
              <IconF name="map-pin" size={40} style={{flex: 1, }}></IconF>
            </TouchableOpacity>
            <TouchableOpacity onPress={my_page}>
              <IconA name="user" size={40} style={{flex: 1, }}></IconA>
            </TouchableOpacity>
          </HStack>

        </Box>
      </ScrollView>
    </NativeBaseProvider>
  )
}