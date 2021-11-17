import React, { Component, useState } from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View
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
  
  const [search, onChangeTextSearch] = React.useState("")

  return (
    <NativeBaseProvider>
      <ScrollView>
        {/* 검색바 */}
        <Box marginTop={'10%'}>
          <HStack space={3}>
            <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{width: 50, height: 50, }}
                    alt="trans_1"
                />
            <View style={{flexDirection: 'row', height: 30, width: '80%',borderColor: 'gray', borderWidth: 1}}>
              <IconF name="search" size={24}></IconF>
                    <TextInput
                        placeholder={'어디로 여행가세요?'}
                        onChangeText={(text) => onChangeTextSearch(text)}
                        value={search}
                    />
              {/* <TextInput style={{ marginLeft: '5%', width:Width-Width/4, height: Height / 20, borderWidth: 3, borderRadius: 8, alignItems: 'center', justifyContent: 'center', }} /> */}
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
      </ScrollView>
    </NativeBaseProvider>
  )
}