import React from 'react'
import {
    Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
}from 'native-base';
import { TouchableOpacity,ScrollView } from "react-native";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function home_region({ navigation }) {

        const test=()=>{
            navigation.navigate('test');
        }

        const pressHandler=()=>{
            navigation.navigate('home_activity');
        }
        const pressHandler2=()=>{
            navigation.navigate('home_recommend');
        }
        const pressHandler3 = () => {
            navigation.navigate('my_page')
        }
        const pressHandler4 = () => {
                navigation.navigate('coupon')
        }
        const pressHandler5 = () => {
                navigation.navigate('heart')
        }
        const pressHandler6 = () => {
                navigation.navigate('cart')
        }
        const pressHandler7 = () => {
            navigation.navigate('login')
        }
        const pressHandler8=()=>{
            navigation.navigate('register_user')
        }
        const pressHandler9=()=>{
            navigation.navigate('register_company')
        }
        const pressHandler10 = () => {
            navigation.navigate('weather_map')
        }
        const pressHandler11 = () => {
            navigation.navigate('order_list_detail')
        }
        const pressHandler12 = () => {
                navigation.navigate('activity_detail')
        }
        const pressHandler13 = () => {
                navigation.navigate('order_list')
        }
        const pressHandler14 = () => {
                navigation.navigate('purchase')
        }
        const pressHandler15 = () => {
                navigation.navigate('reservation_calender')
        }
        const pressHandler16 = () => {
                navigation.navigate('review')
        }
        const pressHandler17 = () => {
                navigation.navigate('user_info')
            }
    
    return (
        <NativeBaseProvider>
            <Box marginTop={10}>
            <HStack>
            <TouchableOpacity onPress={pressHandler}>
                <HStack>
                    <Box width={24}  borderWidth={1}>
                    <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >경기</Text>
                    </Box>
               
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{ width: 120, height:60, }}
                    alt="trans_1"
                   
                    />
                </HStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler2}>
                <HStack>
                <Box width={24}  borderWidth={1}>
                <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >강원</Text>
                </Box>
               
                    <Image
                        source={{
                            uri: 'https://wallpaperaccess.com/full/317501.jpg',
                        }}
                        style={{ width: 120, height:60, }}
                        alt="trans_1"
                       
                        />
                </HStack>
            </TouchableOpacity>

            </HStack>
            <HStack>
            <TouchableOpacity onPress={pressHandler3}>
                <HStack>
                <Box width={24}  borderWidth={1}>
                <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >충북</Text>
                </Box>
               
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{ width: 120, height:60, }}
                    alt="trans_1"
                    
                    />
                </HStack>
             </TouchableOpacity>  
             <TouchableOpacity onPress={pressHandler4}> 
                <HStack>
                <Box width={24}  borderWidth={1}>
                <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >충남</Text>
                </Box>
                    <Image
                        source={{
                            uri: 'https://wallpaperaccess.com/full/317501.jpg',
                        }}
                        style={{ width: 120, height:60, }}
                        alt="trans_1"
                      
                        />
                </HStack>
                </TouchableOpacity>
            </HStack>
            <HStack>
                <TouchableOpacity onPress={pressHandler5}>
                <HStack>
                <Box width={24}  borderWidth={1}>
                <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >경북</Text>
                </Box>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{ width: 120, height:60, }}
                    alt="trans_1"
                   
                    />
                </HStack>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler6}>
                    <HStack>
                    <Box width={24}  borderWidth={1}>
                    <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >경남</Text>
                    </Box>
                        <Image
                            source={{
                                uri: 'https://wallpaperaccess.com/full/317501.jpg',
                            }}
                            style={{ width: 120, height:60, }}
                            alt="trans_1"
                            
                            />
                    </HStack>
                </TouchableOpacity>
            </HStack>
            <HStack>
                <TouchableOpacity onPress={pressHandler7}>
                <HStack>
                <Box width={24}  borderWidth={1}>
                <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >전북</Text>
                </Box>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    style={{ width: 120, height:60, }}
                    alt="trans_1"
                   
                    />
                </HStack>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler8}>
                    <HStack>
                    <Box width={24}  borderWidth={1}>
                    <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >전남</Text>
                    </Box>
                        <Image
                            source={{
                                uri: 'https://wallpaperaccess.com/full/317501.jpg',
                            }}
                            style={{ width: 120, height:60, }}
                            alt="trans_1"
                            
                            />
                    </HStack>
                </TouchableOpacity>
            </HStack>
            </Box>
        
            <ScrollView>
                <HStack>
               <Box style={{
                   marginLeft:6,
                   textAlign:'center',
                   width:Width/2-20,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
               <TouchableOpacity onPress={pressHandler9}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠1</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
                </TouchableOpacity>
               </Box>
               <Box style={{
                 marginLeft:6,
                   textAlign:'center',
                   width:Width/2,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
            <TouchableOpacity onPress={pressHandler10}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠2</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
            </TouchableOpacity>
            </Box>
            </HStack>
            <HStack>
               <Box style={{
                   marginLeft:6,
                   textAlign:'center',
                   width:Width/2-20,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
               <TouchableOpacity onPress={pressHandler11}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠3</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
                </TouchableOpacity>
               </Box>
               <Box style={{
                 marginLeft:6,
                   textAlign:'center',
                   width:Width/2,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
            <TouchableOpacity onPress={pressHandler12}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠4</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
            </TouchableOpacity>
            </Box>
            </HStack>
            <HStack>
               <Box style={{
                   marginLeft:6,
                   textAlign:'center',
                   width:Width/2-20,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
               <TouchableOpacity onPress={pressHandler13}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠5</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
                </TouchableOpacity>
               </Box>
               <Box style={{
                 marginLeft:6,
                   textAlign:'center',
                   width:Width/2,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
            <TouchableOpacity onPress={pressHandler14}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠6</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
            </TouchableOpacity>
            </Box>
            </HStack>
            <HStack>
               <Box style={{
                   marginLeft:6,
                   textAlign:'center',
                   width:Width/2-20,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
               <TouchableOpacity onPress={pressHandler15}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠7</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
                </TouchableOpacity>
               </Box>
               <Box style={{
                 marginLeft:6,
                   textAlign:'center',
                   width:Width/2,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
            <TouchableOpacity onPress={pressHandler16}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠8</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
            </TouchableOpacity>

            </Box>
            </HStack>
            <HStack>
               <Box style={{
                   marginLeft:6,
                   textAlign:'center',
                   width:Width/2-20,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
               <TouchableOpacity onPress={pressHandler17}>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠9</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
                </TouchableOpacity>
               </Box>
               <Box style={{
                 marginLeft:6,
                   textAlign:'center',
                   width:Width/2,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
            <TouchableOpacity>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠10</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
            </TouchableOpacity>
            
            </Box>
            </HStack>
            <HStack>
               <Box style={{
                   marginLeft:6,
                   textAlign:'center',
                   width:Width/2-20,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
               <TouchableOpacity>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
                </TouchableOpacity>
               </Box>
               <Box style={{
                 marginLeft:6,
                   textAlign:'center',
                   width:Width/2,
                   heigth:200,
                   borderWidth:1,
                   marginTop:10,
               }}>
            <TouchableOpacity>
               <HStack>
               <Image
                source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                style={{ margin:10, width: 90, height:90, }}
                alt="trans_1"
                />
                <VStack marginTop={2} space={4}>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>평점</Text></HStack>
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>16000</Text></HStack>
                </VStack>
                
                </HStack>
            </TouchableOpacity>
            
            </Box>
            </HStack>
            </ScrollView>
            
        </NativeBaseProvider>
    )
}