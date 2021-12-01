import React, {useEffect, useState} from 'react';
import { useWindowDimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {
    Dimensions, FlatList
} from "react-native"

import {
  NativeBaseProvider,
  Box,
  HStack,
  Text,
  Image,
  View,
  flex
} from 'native-base';
const Width = Dimensions.get('window').width;


import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

export default function search_activity_list({route, navigation}) {
    const [state, setState] = useState(navigation.state.params.search);
    const [data, setData] = useState()     
  
    let load = async () => {
        console.log("로딩")
        let response1 = await fetch(`https://extreme-kor.herokuapp.com/activity/search?keyword=${state}`);
        const json = await response1.json();
        if (json.success) {
          setData(json.data)
          console.log(json.data)
        }
      
    }

    useEffect(() => {
        load();
    }, [])

    const renderActivity = ({ item }) => (
        <TouchableOpacity onPress={()=>navigation.navigate('activity_detail', {activity_id:item.id})}>
            <Box style={{ height:100, marginBottom:'3%', backgroundColor:'white', borderWidth:1, flexDirection: 'row', alignItems:'center', justifyContent: 'space-around',}}>
                <Image
                    style={{ width: 60, height: 60,}}
                    source={{ uri: item.Activity_images[0].image_url }}  
                />
                <Box style={{flexDirection: 'column', }}>
                    <Text style={{ color: 'black', fontSize:20 }}>액티비티 명</Text>
                    <Text style={{ color: 'black', fontSize:20 }}>별점</Text>
                    <Text style={{ color: 'black', fontSize:20 }}>가격</Text>
                </Box>
                <Box style={{flexDirection: 'column', }}>
                    <Text style={{ color: 'black', fontSize:18 }}>{item.activity_name}</Text>
                    <Text style={{ color: 'black', fontSize:18 }}>별점</Text>
                    <Text style={{ color: 'black', fontSize:18 }}>{item.activity_price}</Text>
                </Box>
            </Box>
        </TouchableOpacity>
    )

    return (
        <NativeBaseProvider>
            <Box style={{ backgroundColor: 'white', flexDirection: 'row', paddingTop: '5%', paddingBottom:'5%', paddingLeft: '5%', height: '10%', alignContent: 'center', alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <IconM name="navigate-before" size={25} style={{}}></IconM>
                </TouchableOpacity>
                <Text marginLeft={'3%'} fontSize={20}>{state}의 검색 결과</Text>
            </Box>
            <ScrollView>
                <Box style={{width:Width, paddingTop:'3%', paddingLeft:'3%', paddingRight:'3%'}}>
                    <FlatList
                        data={data}
                        renderItem={renderActivity}
                        keyExtractor={(Activity) => Activity.activity_name}
                        extraData={state}
                        alt={"Dd"}
                        numColumns={1} />
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}