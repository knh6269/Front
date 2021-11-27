import React, { useState, useEffect } from 'react';
import {
    Dimensions, FlatList, StyleSheet
} from "react-native";
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    View
} from 'native-base';
import { TouchableOpacity, ScrollView } from "react-native";
import { colorStyle } from 'styled-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;



export default function home_region({ navigation }) {
    const [state, setState] = useState('경기도');
    const [data, setData] = useState()
    

    const activitys =
        [{ name: '구룡', price: 15000, star: 4.5, image: require('./images/1.jpg') },
        { name: '12', price: 15300, star: 3.5, image: require('./images/2.jpg') },
        { name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
        { name: '12', price: 153200, star: 3.5, image: require('./images/2.jpg') },
        { name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
        { name: '12', price: 15300, star: 3.5, image: require('./images/2.jpg') },
        { name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
        { name: '12', price: 15300, star: 3.5, image: require('./images/2.jpg') },
        { name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
        { name: '12', price: 15300, star: 3.5, image: require('./images/2.jpg') },
        { name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
        { name: '122', price: 153040, star: 3.15, image: require('./images/1.jpg') }];

     
  
    let location = '강원도'
    let load = async () => {
        let response1 = await fetch(`https://extreme-kor.herokuapp.com/activity/location/${location}`);
        const json = await response1.json();
        if (json.success) {
            setData(json.data)
          
         
        }
      
    }
    useEffect(() => {
        load();
    }, [])


    const pressHandler = () => {
        location = '경기도'
        setState(location);
        console.log(`지역:${location}`);
        load()
       
    }
    const pressHandler2 = () => {
        location = '강원도'
        setState(location);
        console.log(`지역:${location}`);
        load()
    }
    const pressHandler3 = () => {
        location = '충청북도'
        console.log(location);
        load()
    }
    const pressHandler4 = () => {
        location = '충청남도'
        load()
    }
    const pressHandler5 = () => {
        location = '경상북도'
        load()
    }
    const pressHandler6 = () => {
        location = '경상남도'
        load()
    }
    const pressHandler7 = () => {
        location = '전라북도'
        load()
    }
    const pressHandler8 = () => {
        location = '전라남도'
        load()
    }
    const pressHandler9 = () => {
        location = '제주도'
        load()
    }

    const [region, setregion] = useState([
        { location: "경기", handler: pressHandler },
        { location: "강원", handler: pressHandler2 },
        { location: "충북", handler: pressHandler3 },
    ])
    const [region1, setregion1] = useState([
        { location: "충남", handler: pressHandler4 },
        { location: "경북", handler: pressHandler5 },
        { location: "경남", handler: pressHandler6 },
    ])
    const [region2, setregion2] = useState([
        { location: "전북", handler: pressHandler7 },
        { location: "전남", handler: pressHandler8 },
        { location: "제주", handler: pressHandler9 },
    ])

    const renderActivity = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', width: Width / 2 }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: item.Activity_images[0].image_url }}
                />
                <View>
                    
                    <Text style={{ color: 'red' }}>{item.activity_name}</Text>
                    <Text style={{ color: 'red' }}>{item.activity_price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

   
    return (
        <NativeBaseProvider >
            <Box style={{ marginLeft: 12 }} >
                <Box >
                    <HStack>
                        {region.map((region) => {
                            return (
                                <TouchableOpacity onPress={region.handler} >
                                    <Box width={32} borderWidth={1} >
                                        <Text width={24} fontSize={24} marginLeft={5} marginTop={2} style={{ fontWeight: 'bold', textAlign: 'center' }} >{region.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                            )
                        })}
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        {region1.map((region1) => {
                            return (
                                <TouchableOpacity onPress={region1.handler} >
                                    <Box width={32} borderWidth={1} >
                                        <Text width={24} fontSize={24} marginLeft={5} marginTop={2} style={{ fontWeight: 'bold', textAlign: 'center' }} >{region1.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                            )
                        })}
                    </HStack>
                </Box>
                <Box >
                    <HStack>
                        {region2.map((region2) => {
                            return (
                                <TouchableOpacity onPress={region2.handler} >
                                    <Box width={32} borderWidth={1} >
                                        <Text width={24} fontSize={24} marginLeft={5} marginTop={2} style={{ fontWeight: 'bold', textAlign: 'center' }} >{region2.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                            )
                        })}
                    </HStack>
                </Box>

            </Box>
            <FlatList
                data={data}
                renderItem={renderActivity}
                keyExtractor={(Activity) => Activity.activity_name}
                extraData={state}
                alt={"Dd"}
                numColumns={2} />

        </NativeBaseProvider>
    )
}
        