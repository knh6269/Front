import React from 'react'
import {Dimensions,} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
    VStack
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function review({ navigation }) {
    const review=()=>{
            navigation.navigate('review');
    }
    
    const order_list_detail=()=>{
            navigation.navigate('order_list_detail');
    }

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box marginTop={'5%'}>
                    <Text textAlign={'center'} fontSize={20}>리뷰 작성</Text>
                </Box>
                <Box marrginTop={50}>
                    <View>
                        <TextInput style={{ height: Height / 2, borderWidth: 3, borderRadius: 8, alignItems: 'center', justifyContent: 'center', }} />
                    </View>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
  )
}