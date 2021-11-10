
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
} from 'native-base';
import { TouchableOpacity,ScrollView, StyleSheet } from "react-native";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function cart({navigation}){
        const pressHandler=()=>{
            navigation.navigate('각 페이지로 이동');
        }
    
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <Box height={100}>
                        <Image
                            source={{
                                uri: 'https://wallpaperaccess.com/full/317501.jpg',
                            }}
                            style={{ marginLeft:'40%', }}
                                alt="trans_1"
                        />
                        <Text fontSize={10} style={{fontWeight:'bold', textAlign:'center'}} >장바구니</Text>
                    </Box>
                    <Box marginLeft={'5%'}>
                        <HStack>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text}>V</Text>
                            </TouchableOpacity>
                            <Image
                                source={{
                                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                }}
                                style={{ marginLeft:'5%', width:'80%', height:30}}
                                alt="trans_1"/>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'}>
                         <HStack space={150}>
                            <Text borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >날짜</Text>
                            <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨</Text>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'}>
                         <HStack space={116}>
                            <Text borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >2021-11-11</Text>
                            <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >쨍쨍</Text>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'} width={'40%'} marginTop={'5%'}>
                        <HStack space={116}>
                            <Text borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >총 결제 금액</Text>
                            <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >10000원</Text>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'} marginTop={'5%'} >
                        <HStack space={60}>
                            <TouchableOpacity style={styles.modifydatebutton}>
                                <Text style={styles.modifydate}>날짜 변경</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.gobuybutton}>
                                <Text style={styles.gobuy}>날짜 변경</Text>
                            </TouchableOpacity>
                        </HStack>
                    </Box>
                </Box>

                <Box marginTop={'5%'}>
                    <Box marginLeft={'5%'}>
                        <HStack>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text}>V</Text>
                            </TouchableOpacity>
                            <Image
                                source={{
                                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                                }}
                                style={{ marginLeft:'5%', width:'80%', height:30}}
                                alt="trans_1"/>
                        </HStack>
                    </Box>
                    
                    <Box marginLeft={'18%'}>
                         <HStack space={150}>
                            <Text borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >날짜</Text>
                            <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >날씨</Text>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'}>
                         <HStack space={116}>
                            <Text borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >2021-11-11</Text>
                            <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >쨍쨍</Text>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'} width={'40%'} marginTop={'5%'}>
                        <HStack space={116}>
                            <Text borderWidth={1} fontSize={10} style={{fontWeight:'bold'}} >총 결제 금액</Text>
                            <Text borderWidth={1} fontSize={10} style={{ fontWeight: 'bold' }} >10000원</Text>
                        </HStack>
                    </Box>
                    <Box marginLeft={'18%'} marginTop={'5%'} >
                        <HStack space={60}>
                            <TouchableOpacity style={styles.modifydatebutton}>
                                <Text style={styles.modifydate}>날짜 변경</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.gobuybutton}>
                                <Text style={styles.gobuy}>날짜 변경</Text>
                            </TouchableOpacity>
                        </HStack>
                    </Box>
                </Box>

                <Box marginTop={'10%'}>
                    <HStack marginLeft={'5%'}>
                        <VStack>
                            <Text fontSize={10} style={{fontWeight:'bold'}} >총 결제 금액</Text>
                            <Text fontSize={10} style={{fontWeight:'bold'}} >10000원</Text>
                        </VStack>
                        <Text fontSize={10} style={{ fontWeight: 'bold' }} >(2)</Text>
                        <TouchableOpacity style={styles.buybutton}>
                            <Text style={styles.buy}>전체 구매하기</Text>
                        </TouchableOpacity>
                    </HStack>
                </Box>

            </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        marginBottom: 30,
        borderRadius: 35,
    },
    modifydatebutton: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 30,
        borderRadius: 35,
    },
    gobuybutton: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 30,
        borderRadius: 35,
    },
    buybutton: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 30,
        borderRadius: 35,
        marginLeft: 158
    }
});