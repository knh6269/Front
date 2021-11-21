import React,{useState} from 'react'
import {
    Dimensions,FlatList} from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    View
}from 'native-base';
import { TouchableOpacity,ScrollView } from "react-native";
import { colorStyle } from 'styled-system';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const activitys = 
[{name: '구룡', price: 15000, star: 4.5, image: require('./images/1.jpg') },
{  name: '12', price: 15300, star: 3.5, image: require('./images/2.jpg') },
{   name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
{   name: '12', price: 153200, star: 3.5, image: require('./images/2.jpg') },
{   name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
{  name: '12', price: 15300, star: 3.5, image: require('./images/2.jpg') },
{  name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
{  name: '12', price: 15300, star: 3.5, image: require('./images/2.jpg') },
{ name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
{   name: '12', price: 15300, star: 3.5, image: require('./images/2.jpg') },
{  name: '121', price: 153300, star: 3.15, image: require('./images/2.jpg') },
{   name: '122', price: 153040, star: 3.15, image: require('./images/1.jpg') }];

export default function home_region({navigation}){
    
    const pressHandler=()=>{
        navigation.navigate('home_activity');
    }
    const pressHandler2=()=>{
        navigation.navigate('home_recommend');
    }
    const [region,setregion]=useState([
        {location:"경기",handler:pressHandler},
        {location:"강원",handler:pressHandler2},
        {location:"충북",handler:pressHandler},
    ])
    const [region1,setregion1]=useState([
        {location:"충남",id:1},
        {location:"경북",id:2},
        {location:"경남",id:3},
    ])
    const [region2,setregion2]=useState([
        {location:"전북",id:1},
        {location:"전남",id:2},
        {location:"제주",id:3},
    ])
    const renderActivity =({item})=>(
        <View style={{ flexDirection: 'row', justifyContent: 'center', width:Width/2 }}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
        <Image
            style={{ width: 100, height: 100 }}
            source={item.image}
        />
        <View>
            <Text style={{ color: 'red' }}>{item.name}</Text>
            <Text style={{ color: 'red' }}>{item.price}</Text>
            <Text style={{ color: 'red' }}>{item.star}</Text>
        </View>
        </TouchableOpacity>
        </View>
    );
     
    
    return (
        <NativeBaseProvider >
            <Box style={{marginLeft:12}}>
                <Box >
                    <HStack>
                    { region.map((region)=>{
                        return(
                            <TouchableOpacity onPress={region.handler} >
                                    <Box width={32} borderWidth={1} >
                                    <Text width={24} fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >{region.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                        )
                    })} 
                    </HStack>
                </Box>
                <Box >
                    <HStack>
                    { region1.map((region1)=>{
                        return(
                            <TouchableOpacity >
                                    <Box width={32} borderWidth={1} >
                                    <Text width={24} fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >{region1.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                        )
                    })} 
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                    { region2.map((region2)=>{
                        return(
                            <TouchableOpacity >
                                    <Box width={32} borderWidth={1} >
                                    <Text width={24} fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >{region2.location}</Text>
                                    </Box>
                                </TouchableOpacity>
                        )
                    })} 
                    </HStack>
                </Box>
            </Box>
            <FlatList 
                            data={activitys}
                            renderItem={renderActivity}
                            keyExtractor={(activity)=>activity.name}
                            numColumns={2}/>
            
        </NativeBaseProvider>
    )
}