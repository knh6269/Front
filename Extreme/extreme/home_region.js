import React, { useState,useEffect } from 'react'
import {
    Dimensions, FlatList
} from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    View
} from 'native-base';
import { TouchableOpacity, ScrollView } from "react-native";
import IconA from 'react-native-vector-icons/AntDesign';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function home_region({ navigation }) {
    const [state, setState] = useState('경기도');
    const [data, setData] = useState()     
  
    let location='경기도'
    let load = async () => {
        let response1 = await fetch(`https://extreme-kor.herokuapp.com/activity/location/${location}`);
        const json = await response1.json();
        if (json.success) {
          setData(json.data)
          console.log(json.data)
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
        { location: "경기도", handler: pressHandler },
        { location: "강원도", handler: pressHandler2 },
        { location: "충청북도", handler: pressHandler3 },
    ])
    const [region1, setregion1] = useState([
        { location: "충청남도", handler: pressHandler4 },
        { location: "경상북도", handler: pressHandler5 },
        { location: "경상남도", handler: pressHandler6 },
    ])
    const [region2, setregion2] = useState([
        { location: "전라북도", handler: pressHandler7 },
        { location: "전라남도", handler: pressHandler8 },
        { location: "제주도", handler: pressHandler9 },
    ])

    const renderActivity = ({ item }) => (
        <TouchableOpacity onPress={()=>navigation.navigate('activity_detail', {activity_id:item.id})}>
            <Box style={{padding:'3%', width:Width/2, borderWidth:0.5, flexDirection: 'row', alignItems:'center',}}>
                <Box style={{ flexDirection: 'column', }}>
                    <Image
                        source={{ uri: item.Activity_images[0].image_url }}  
                        style={{ height:Height/7.5, width:Width/4.5, borderRadius:10}}
                        alt="trans_1"
                        resizeMode='stretch'/>
                </Box>
                <Box style={{flexDirection: 'column', marginLeft:'5%'}}>
                    <Text numberOfLines={1} style={{ fontSize:12, fontWeight:'bold', width:Width/4.5 }} >{item.activity_name}</Text>
                    <Box style={{flexDirection:'row', alignItems:'center' , marginTop:'20%'}}><IconA name="star" color={'#f1ec6f'} size={15} ></IconA>
                    <Text style={{ fontSize:11,}}>{item.star}</Text></Box>
                    <Text style={{ fontSize:11, }}>{item.activity_price}원</Text>
                </Box>
            </Box>
        </TouchableOpacity>
    )

   
    return (
        <NativeBaseProvider >
            <Box style={{ marginTop: '3%', justifyContent: 'center', flexDirection: 'column', alignItems:'center'}} >
                <Box>
                    <Box style={{flexDirection:'row'}}>
                        {region.map((region) => {
                            return (
                                <TouchableOpacity onPress={region.handler} >
                                    <Box style={{ borderColor:'#acacac', width: 120, borderWidth: 1, height: 50, alignItems:'center', justifyContent: 'center',}}>
                                        <Text style={{ fontSize:12, textAlign: 'center',}} >{region.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                            )
                        })}
                    </Box>
                </Box>
                <Box>
                    <Box style={{flexDirection:'row'}}>
                        {region1.map((region1) => {
                            return (
                                <TouchableOpacity onPress={region1.handler} >
                                    <Box style={{ borderColor:'#acacac', width: 120, borderWidth: 1, height: 50, alignItems:'center', justifyContent: 'center',}}>
                                        <Text style={{ fontSize:12, textAlign: 'center',}} >{region1.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                            )
                        })}
                    </Box>
                </Box>
                <Box >
                    <Box style={{flexDirection:'row'}}>
                        {region2.map((region2) => {
                            return (
                                <TouchableOpacity onPress={region2.handler} >
                                    <Box style={{ borderColor:'#acacac', width: 120, borderWidth: 1, height: 50, alignItems:'center', justifyContent: 'center',}}>
                                        <Text style={{ fontSize:12, textAlign: 'center',}} >{region2.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                            )
                        })}
                    </Box>
                </Box>
            </Box>

            <Box style={{marginTop:'3%'}}>
                <FlatList
                    data={data}
                    renderItem={renderActivity}
                    keyExtractor={(Activity) => Activity.activity_name}
                    extraData={state}
                    alt={"Dd"}
                    numColumns={2} />
            </Box>

        </NativeBaseProvider>
    )
}
        