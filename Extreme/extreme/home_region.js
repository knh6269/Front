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

export default function home_region({navigation}){
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
        // const pressHandler7 = () => {
        //     navigation.navigate('weather_map')
        // }
    
    return (
        <NativeBaseProvider>
            <Box marginTop={10}>
            <HStack>
            <TouchableOpacity onPress={pressHandler}>
                <HStack>
                    <Box width={24}  borderWidth={1}>
                    <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >경기1</Text>
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
                {/* <TouchableOpacity onPress={pressHandler7}> */}
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
                {/* </TouchableOpacity> */}
                <TouchableOpacity>
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
                    <HStack  style={{ width:80,textAlign:"center"}}><Text fontSize={14}>구룡 레포츠111111</Text></HStack>
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