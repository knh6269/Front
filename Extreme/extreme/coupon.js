import React from 'react'
import {
    Dimensions, YellowBox,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
}from 'native-base';
import { TouchableOpacity,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function coupon({navigation}){
        const pressHandler=()=>{
            navigation.navigate('home_activity');
        }
       
    return (
        <NativeBaseProvider>
            <Box 
            style={{
                width:Width,
                height:Height/12,
                marginTop:40,
                justifyContent:'center',
                alignItems:'center',
                borderWidth:3,
            }}>
                <Text style={{
                    textAlign:'center',
                    height:Height/19,
                    padding:10,
                    fontSize:24,
                    fontWeight:'bold',
                }}>쿠폰
            </Text>
            </Box>

            <Box style={{
                width:Width,
                height:Height/6,
                borderWidth:3,
                borderTopWidth:0,
                alignItems:'center',
                justifyContent:'center',
             }}>
                
                <Box style={{
                    
                    width:Width-Width/4,
                    height:Height/20,
                    borderWidth:3,
                    borderRadius:8,
                    alignItems:'center',
                    justifyContent:'center',
                    
                }}><HStack style={{marginTop:3}} >
                    <Text style={{
                        height:30,
                        fontSize:18,
                        paddingTop:4,
                        flex:8,
                        marginLeft:Width/4+13, 
                    
                    }}>쿠폰 조회</Text>
                    <TouchableOpacity>
                    <Icon name="search" size={24} style={{flex:1,paddingRight:3,}}></Icon>
                    </TouchableOpacity>
                    </HStack>
                </Box>
                <Box style={{
                    
                    width:Width-Width/4-3,
                    height:Height/25,
                    borderWidth:3,
                    alignItems:'center',
                    justifyContent:'center',
                    
                }}>
                    <TouchableOpacity>
                    <Text style={{
                        height:30,
                        fontSize:12,
                        paddingTop:4,
                        justifyContent:'center',
                       
                    
                    }}>예시: 신규 가입쿠폰 : 1351-4549-7879-748
                    </Text>
                   </TouchableOpacity>
                   
                </Box>
            </Box>
            
        <ScrollView>
            <Box style={{
                width:Width,
                borderWidth:3,
                borderTopWidth:0,
                alignItems:'center',
                backgroundColor:'#ced4da',
                }}> 
                <Text style={{margin:5,fontWeight:'bold'}}>내 쿠폰</Text>
                
                <Box  style={{
                    width:Width-40,
                    height:Height/6,
                    borderWidth:3,
                    marginBottom:10,
                    alignContent:'center',
                    backgroundColor:'white',
                    }}>
                    <VStack style={{ height:Height/6,}}>
                        <Text style={{padding:6, fontSize:16,fontWeight:'bold',flex:1}}>쿠폰명</Text>
                        <Text style={{ marginLeft:10, fontSize:14,flex:2}}>쿠폰에 관한 내용</Text>
                        <Text style={{padding:6, fontSize:12,fontWeight:'bold',textAlign:'right',flex:1,textDecorationLine: 'underline'}}>사용하기</Text>
                    </VStack>
                </Box>
                <Box  style={{
                    width:Width-40,
                    height:Height/6,
                    borderWidth:3,
                    marginBottom:10,
                    alignContent:'center',
                    backgroundColor:'white',
                    }}>
                    <VStack style={{ height:Height/6,}}>
                        <Text style={{padding:6, fontSize:16,fontWeight:'bold',flex:1}}>쿠폰명</Text>
                        <Text style={{ marginLeft:10, fontSize:14,flex:2}}>쿠폰에 관한 내용</Text>
                        <Text style={{padding:6, fontSize:12,fontWeight:'bold',textAlign:'right',flex:1,textDecorationLine: 'underline'}}>사용하기</Text>
                    </VStack>
                </Box>
                <Box  style={{
                    width:Width-40,
                    height:Height/6,
                    borderWidth:3,
                    marginBottom:10,
                    alignContent:'center',
                    backgroundColor:'white',
                    }}>
                    <VStack style={{ height:Height/6,}}>
                        <Text style={{padding:6, fontSize:16,fontWeight:'bold',flex:1}}>쿠폰명</Text>
                        <Text style={{ marginLeft:10, fontSize:14,flex:2}}>쿠폰에 관한 내용</Text>
                        <Text style={{padding:6, fontSize:12,fontWeight:'bold',textAlign:'right',flex:1,textDecorationLine: 'underline'}}>사용하기</Text>
                    </VStack>
                </Box>
                <Box  style={{
                    width:Width-40,
                    height:Height/6,
                    borderWidth:3,
                    marginBottom:10,
                    alignContent:'center',
                    backgroundColor:'white',
                    }}>
                    <VStack style={{ height:Height/6,}}>
                        <Text style={{padding:6, fontSize:16,fontWeight:'bold',flex:1}}>쿠폰명</Text>
                        <Text style={{ marginLeft:10, fontSize:14,flex:2}}>쿠폰에 관한 내용</Text>
                        <Text style={{padding:6, fontSize:12,fontWeight:'bold',textAlign:'right',flex:1,textDecorationLine: 'underline'}}>사용하기</Text>
                    </VStack>
                </Box>
                <Box  style={{
                    width:Width-40,
                    height:Height/6,
                    borderWidth:3,
                    marginBottom:10,
                    alignContent:'center',
                    backgroundColor:'white',
                    }}>
                    <VStack style={{ height:Height/6,}}>
                        <Text style={{padding:6, fontSize:16,fontWeight:'bold',flex:1}}>쿠폰명</Text>
                        <Text style={{ marginLeft:10, fontSize:14,flex:2}}>쿠폰에 관한 내용</Text>
                        <Text style={{padding:6, fontSize:12,fontWeight:'bold',textAlign:'right',flex:1,textDecorationLine: 'underline'}}>사용하기</Text>
                    </VStack>
                </Box>
            </Box>
        </ScrollView>
            
        </NativeBaseProvider>
    )
}