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

// import cart from '../cart';

export default function activity_list({route, navigation}) {
    const [state, setState] = useState(navigation.state.params.type);
    const [data, setData] = useState()     
  
    let load = async () => {
        console.log("로딩")
        let response1 = await fetch(`https://extreme-kor.herokuapp.com/activity/category/${state}`);
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
        <TouchableOpacity>
            <Box style={{marginTop:'3%', borderWidth:1, flexDirection: 'row', alignItems:'center', justifyContent: 'center',}}>
                <Image
                    style={{ width: 50, height: 50,}}
                    source={{ uri: item.Activity_images[0].image_url }}  
                />
                <Box style={{flexDirection: 'column', }}>
                    <Text style={{ color: 'black' }}>{item.activity_name}</Text>
                    <Text style={{ color: 'black', marginLeft:'3%' }}>별점</Text>
                    <Text style={{ color: 'black' }}>{item.activity_price}</Text>
                </Box>
            </Box>
        </TouchableOpacity>
    )

    return (
        <NativeBaseProvider>
            <View><Text>{state}</Text></View>
            <ScrollView>
                <Box style={{Width:Width, marginTop:'5%', marginLeft:'3%', marginRight:'3%'}}>
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