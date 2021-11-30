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
    Button
} from 'native-base';
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

export default function cart({navigation}){
  const pressHandler=()=>{
    navigation.navigate('각 페이지로 이동');
  }
  
  const [groupValue, setGroupValue] = React.useState([
    "all",
  ])

  return (
    <NativeBaseProvider>
      <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingBottom:'5%', paddingLeft: '5%', height: '10%', alignContent: 'center', alignItems:'center'}}>
        <TouchableOpacity>
          <IconM name="navigate-before" size={25} style={{}}></IconM>
        </TouchableOpacity>
          <Image
              source={require('./images/cart-outline.png')}
              style={{width: 40, height: 40, }}
              alt="trans_1"
          />
        <Text marginLeft={'3%'} fontSize={20}>장바구니</Text>
      </Box>

      <ScrollView>
        <Box style={{}}>
          <Box style={{backgroundColor:'white', justifyContent:'space-between', flexDirection: 'row',paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', borderWidth:1}}>
            <Box style={{flexDirection: 'row', justifyContent:'center'}}>
              <Checkbox.Group
                    colorScheme="green"
                    defaultValue={groupValue}
                    accessibilityLabel="pick an item"
                    onChange={(values) => {
                      setGroupValue(values || [])
                    }}
                >
                <Checkbox borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} value="all" my="1"></Checkbox>
                </Checkbox.Group>
              <Text style={{marginLeft:'3%', fontSize:16}}>전체선택</Text>
            </Box>
            <Box>
              <Button style={{borderColor:'red', backgroundColor:'white'}}>
                <Text style={{fontSize:14}}>선택 삭제</Text>
              </Button>
            </Box>
          </Box>

          <Box style={{ backgroundColor:'white', marginTop: '3%', paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', borderWidth:1}}>
            <Box style={{flexDirection:'row-reverse',}}>
              <IconA marginLeft={'5%'} name="close" size={25}></IconA>
            </Box>
            <Box style={{flexDirection:'row', marginTop:'3%'}}>
              <Box style={{flexDirection:'row',}}>
                <Checkbox.Group
                    colorScheme="green"
                    defaultValue={groupValue}
                    accessibilityLabel="pick an item"
                    onChange={(values) => {
                      setGroupValue(values || [])
                    }}
                >
                  <Box style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                    <Checkbox borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} value="Photography" my="1"></Checkbox>
                    <Image
                      source={{
                          uri: 'https://wallpaperaccess.com/full/317501.jpg',
                      }}
                      style={{borderRadius:10, marginLeft:'3%', width:70, height:70}}
                      alt="trans_1" />
                  </Box>
                </Checkbox.Group>
              </Box>
              
              <Box style={{height:70, flexDirection:'column', marginLeft:'5%', justifyContent:'space-between'}}>
                <Text style={{fontSize:14}}>상품 이름</Text>
                <Text style={{fontSize:14}}>가격</Text>
              </Box>

              <Box style={{height:70, flexDirection:'column', marginLeft:'20%', justifyContent:'space-between'}}>
                <Text style={{fontSize:14}}>2021.11.28</Text>
                <Image
                  source={{
                      uri: 'https://wallpaperaccess.com/full/317502.jpg',
                  }}
                  style={{borderRadius:10, marginLeft:'3%', width:40, height:40}}
                  alt="trans_1" />
              </Box>
            </Box>

            <Box marginTop='5%' borderWidth={0.5}></Box>

            <Box>
              <HStack marginLeft={'5%'} marginTop={'5%'}>
                <Box marginLeft={'5%'} flexDirection={'row'}>
                    <Text style={{fontWeight:'bold'}} >총 결제 금액</Text>
                    <Text style={{fontWeight:'bold', marginLeft:'3%'}} >10000원</Text>
                </Box>
              </HStack>
            </Box>

            <Box style={{marginBottom:'5%', marginTop:'5%', justifyContent: 'space-around', flexDirection:'row'}}>
              <Button style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                <Text style={{ fontSize: 14, }}>날짜변경</Text>
              </Button>
              <Button style={{ fontSize: 14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                  <Text style={{ fontSize: 14, }}>바로구매</Text>
              </Button>
            </Box>

          </Box>

          <Box style={{ backgroundColor:'white', marginTop: '3%', paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', borderWidth:1}}>
            <Box style={{flexDirection:'row-reverse',}}>
              <IconA marginLeft={'5%'} name="close" size={25}></IconA>
            </Box>
            <Box style={{flexDirection:'row', marginTop:'3%'}}>
              <Box style={{flexDirection:'row',}}>
                <Checkbox.Group
                    colorScheme="green"
                    defaultValue={groupValue}
                    accessibilityLabel="pick an item"
                    onChange={(values) => {
                      setGroupValue(values || [])
                    }}
                >
                  <Box style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                    <Checkbox borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} value="Photography" my="1"></Checkbox>
                    <Image
                      source={{
                          uri: 'https://wallpaperaccess.com/full/317501.jpg',
                      }}
                      style={{borderRadius:10, marginLeft:'3%', width:70, height:70}}
                      alt="trans_1" />
                  </Box>
                </Checkbox.Group>
              </Box>
              
              <Box style={{height:70, flexDirection:'column', marginLeft:'5%', justifyContent:'space-between'}}>
                <Text style={{fontSize:14}}>상품 이름</Text>
                <Text style={{fontSize:14}}>가격</Text>
              </Box>

              <Box style={{height:70, flexDirection:'column', marginLeft:'20%', justifyContent:'space-between'}}>
                <Text style={{fontSize:14}}>2021.11.28</Text>
                <Image
                  source={{
                      uri: 'https://wallpaperaccess.com/full/317502.jpg',
                  }}
                  style={{borderRadius:10, marginLeft:'3%', width:40, height:40}}
                  alt="trans_1" />
              </Box>
            </Box>

            <Box marginTop='5%' borderWidth={0.5}></Box>

            <Box>
              <HStack marginLeft={'5%'} marginTop={'5%'}>
                <Box marginLeft={'5%'} flexDirection={'row'}>
                    <Text style={{fontWeight:'bold'}} >총 결제 금액</Text>
                    <Text style={{fontWeight:'bold', marginLeft:'3%'}} >10000원</Text>
                </Box>
              </HStack>
            </Box>

            <Box style={{marginBottom:'5%', marginTop:'5%', justifyContent: 'space-around', flexDirection:'row'}}>
              <Button style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                <Text style={{ fontSize: 14, }}>날짜변경</Text>
              </Button>
              <Button style={{ fontSize: 14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
                  <Text style={{ fontSize: 14, }}>바로구매</Text>
              </Button>
            </Box>
          </Box>
        </Box>
      </ScrollView>
                  
      <Box style={{backgroundColor:'white', paddingTop:'3%', paddingBottom:'3%', paddingLeft:'5%', paddingRight:'5%',}}>
        <Button style={{backgroundColor:'#4f8bc2', }}>
          <Text style={{fontSize:20, color:'white'}}>구매하기</Text>
        </Button>
      </Box>
          
    </NativeBaseProvider>
  )
}




