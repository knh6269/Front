import React, {useState, Component, useEffect } from "react";
import { Dimensions, FlatList, Alert} from "react-native"

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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Loading from "./test";
// import { ControlledPropUpdatedSelectedItem } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";

export default function cart({navigation}){
  //액비티티 이름 :data[0].Activity.activity_name  
// 업체 이름: data[0].Activity.Company.company_name
// 이미지 경로: data[0].Activity.Activity_images[0].image_url

  let [cart,setCart]=useState()
  let [checkindex,setCheckIndex]=useState()

  var send_index=[]

  let zz=async()=>{
    let me=(await AsyncStorage.getItem('user_id'));
    const response = await fetch(`https://extreme-kor.herokuapp.com/cart?id=${me}`);
    const json = await response.json();
    setCart(json.data);
    for (i=0;i<json.data.length;i++){
      send_index.push(i)
    }
    console.log(send_index)
    setCheckIndex(send_index)
}     
useEffect(() => {
  zz();
}, []);



  const checkbox_data=(index)=>{
    console.log("체크")
    console.log(send_index)
    if(checkindex.includes(index)){
      setCheckIndex(checkindex.filter((element)=>element!==index))
    }
    else{
      setCheckIndex(element=> [...element, index])
    }
  }
  const go_purchase=()=>{
    setCheckIndex(checkindex.sort())
    console.log(checkindex)

    let send_purchase=[]
    for (i=0;i<checkindex.length;i++){
      send_purchase.push(cart[checkindex[i]])
      console.log("ddld"+send_purchase)
    }
    if (send_purchase.length==0){
      Alert.alert( "","구매하실 상품을 선택해주세요",[{text:"확인"}])
    }
    else{
      console.log(send_purchase)
      navigation.navigate('purchase', {purchase_Data:send_purchase})
    }
  }
  const go_purchase2=(index)=>{
    console.log(cart[index])
    navigation.navigate('purchase', {purchase_Data:[cart[index]]})
  }


  const renderActivity = ({ item, index }) => (
    <Box style={{ backgroundColor:'white', marginTop: '3%', paddingTop:'5%', paddingBottom:'5%', paddingLeft:'5%', paddingRight:'5%', borderWidth:1}}>
    <Box style={{flexDirection:'row-reverse',}}>
      <IconA marginLeft={'5%'} name="close" size={25}></IconA>
    </Box>
    <Box style={{flexDirection:'row', marginTop:'3%'}}>
      <Box style={{flexDirection:'row',}}>
          <Box style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <Checkbox borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} defaultIsChecked={true} onPress={()=>checkbox_data(index)}></Checkbox>
            <Image
              source={{
                  uri: item.Activity.Activity_images[0].image_url
              }}
              style={{borderRadius:10, marginLeft:'3%', width:70, height:70}}
              alt="trans_1" />
          </Box>
      </Box>
      
      <Box style={{height:70, flexDirection:'column', marginLeft:'5%', justifyContent:'space-between'}}>
        <Text style={{fontSize:14}}>{item.Activity.activity_name}</Text>
        <Text style={{fontSize:14}}>{item.payment}원</Text>
      </Box>

      <Box style={{height:70, flexDirection:'column', marginLeft:'20%', justifyContent:'space-between'}}>
        <Text style={{fontSize:14}}>{item.Activity_time.date}</Text>
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
            <Text style={{fontWeight:'bold', marginLeft:'3%'}} >{item.payment}원</Text>
        </Box>
      </HStack>
    </Box>

    <Box style={{marginBottom:'5%', marginTop:'5%', justifyContent: 'space-around', flexDirection:'row'}}>
      <Button style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }} >
        <Text style={{ fontSize: 14, }}>날짜변경</Text>
      </Button>
      <Button style={{ fontSize: 14, width: 100, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}  onPress={()=>go_purchase2(index)}>
          <Text style={{ fontSize: 14, }}>바로구매</Text>
      </Button>
    </Box>

  </Box>
    )

  return (
    <NativeBaseProvider>
      <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingBottom:'5%', paddingLeft: '5%', height: '10%', alignContent: 'center', alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
          <IconM name="navigate-before" size={25} style={{}}></IconM>
        </TouchableOpacity>
          <Image
              source={require('./images/cart-outline.png')}
              style={{width: 40, height: 40, }}
              alt="trans_1"
          />
        <Text marginLeft={'3%'} fontSize={20}>장바구니</Text>
      </Box>

      <FlatList
        data={cart}
        renderItem={renderActivity}
        keyExtractor={(Activity) => Activity.activity_name}
        extraData={cart}
        alt={"Dd"}
        numColumns={1} />
   
      <Box style={{backgroundColor:'white', paddingTop:'3%', paddingBottom:'3%', paddingLeft:'5%', paddingRight:'5%',}}>
        <Button style={{backgroundColor:'#4f8bc2', }} onPress={go_purchase}>
          <Text style={{fontSize:20, color:'white'}}>구매하기</Text>
        </Button>
      </Box>
          
    </NativeBaseProvider>
  )}





