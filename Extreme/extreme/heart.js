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

import IconA from 'react-native-vector-icons/AntDesign';

export default function heart({navigation}){
        const pressHandler=()=>{
            navigation.navigate('각 페이지로 이동');
        }
    
    return (
        <NativeBaseProvider>
            <Box marginTop={30} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
                <HStack>
                    <IconA name="shoppingcart" size={45} style={{flex:1,}}></IconA>
                    <Text fontSize={30} style={{fontWeight:'bold',}} >장바구니</Text>
                </HStack>
            </Box>  
            <ScrollView>
                <Box marginTop={30} marginLeft={'10%'}>
                    <HStack space={5}>
                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                    </HStack>
                </Box>

                <Box marginTop={30} marginLeft={'10%'}>
                    <HStack space={5}>
                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                    </HStack>
                </Box>

                <Box marginTop={30} marginLeft={'10%'}>
                    <HStack space={5}>
                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                    </HStack>
                </Box>

                <Box marginTop={30} marginLeft={'10%'}>
                    <HStack space={5}>
                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                    </HStack>
                </Box>

                <Box marginTop={30} marginLeft={'10%'}>
                    <HStack space={5}>
                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandler}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                    }}
                                    style={{ width: '50%', height:100, }}
                                    alt="trans_1"
                                
                                />
                            </HStack>
                            <Box width={'50%'}>
                                <Text fontSize={10} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >image</Text>
                            </Box>
                        </TouchableOpacity>

                    </HStack>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}