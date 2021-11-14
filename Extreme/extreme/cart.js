import React from 'react'
import { Dimensions, } from "react-native"

import {
    Checkbox,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    NativeBaseProvider,
} from 'native-base';
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';

export default function cart({navigation}){
  const pressHandler=()=>{
    navigation.navigate('각 페이지로 이동');
  }
  
  const [groupValue, setGroupValue] = React.useState([
    "Photography",
  ])

  return (
    <NativeBaseProvider>
      {/* 오른쪽 정렬이 안됨 flex-end 속성이 안 먹는 듯 */}
      <Box marginTop={10} flexDirection={'row'} alignItems={'flex-end'} >
          <HStack>
              <IconA name="shoppingcart" size={45} style={{flex:1,}}></IconA>
          </HStack>
      </Box>

      <ScrollView>
        <Box>
            <Box marginLeft={'5%'}>
              <HStack>
                <Checkbox.Group
                  colorScheme="green"
                  defaultValue={groupValue}
                  accessibilityLabel="pick an item"
                  onChange={(values) => {
                    setGroupValue(values || [])
                  }}
                >
                  <VStack>
                      <Checkbox marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} value="Photography" my="1">Photography</Checkbox>
                      <Text marginTop={'5%'} marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜</Text>
                      <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜입니다</Text>
                      <Text marginTop={'5%'} marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨</Text>
                      <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨입니다</Text>
                  </VStack>
                </Checkbox.Group>
                <Image
                  source={{
                      uri: 'https://wallpaperaccess.com/full/317501.jpg',
                  }}
                  style={{ width:Width/2, height:Height/5}}
                  alt="trans_1" />                
              </HStack>
            </Box>

            <Box marginTop={'5%'} marginLeft={'5%'}>
              <HStack>
                <Checkbox.Group
                  colorScheme="green"
                  defaultValue={groupValue}
                  accessibilityLabel="pick an item"
                  onChange={(values) => {
                    setGroupValue(values || [])
                  }}
                >
                  <VStack>
                      <Checkbox marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} value="dd" my="2">dd</Checkbox>
                      <Text marginTop={'5%'} marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜</Text>
                      <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날짜입니다</Text>
                      <Text marginTop={'5%'} marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨</Text>
                      <Text marginLeft={'10%'} borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨입니다</Text>
                  </VStack>
                </Checkbox.Group>
                <Image
                  source={{
                      uri: 'https://wallpaperaccess.com/full/317501.jpg',
                  }}
                  style={{ width:Width/2, height:Height/5}}
                  alt="trans_1" />                
              </HStack>
            </Box>
                  
            <Box marginTop={'10%'}>
              <HStack marginLeft={'5%'}>
                <VStack marginLeft={'5%'}>
                    <Text style={{fontWeight:'bold'}} >총 결제 금액</Text>
                    <Text style={{fontWeight:'bold'}} >10000원</Text>
                </VStack>
                <Text>({groupValue.length})</Text>
                <TouchableOpacity>
                    <Text textAlign={'center'} borderWidth={1} backgroundColor={'green'} borderRadius={35} width={110} height={30} marginLeft={'45%'}>전체 구매하기</Text>
                </TouchableOpacity>
              </HStack>
            </Box>
          </Box>
        </ScrollView>
    </NativeBaseProvider>
  )
}




