
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

export default function cart({navigation}){
        const pressHandler=()=>{
            navigation.navigate('각 페이지로 이동');
        }
    
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box marginTop={100} marginLeft={'10%'}>
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