import React from 'react'
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
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

<<<<<<< HEAD
export default function home_region({ navigation }) {

        const test=()=>{
            navigation.navigate('test');
        }
=======
const activitys = [{name: '구룡', price: 15000, star: 4.5, image: require('./images/1.jpg') },
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
    
>>>>>>> a0c512932341f95133fe3103356fc5f4e36bedae

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
        const pressHandler7 = () => {
            navigation.navigate('login')
        }
        const pressHandler8=()=>{
            navigation.navigate('register_user')
        }
        const pressHandler9=()=>{
            navigation.navigate('register_company')
        }
        const pressHandler10 = () => {
            navigation.navigate('weather_map')
        }
        const pressHandler11 = () => {
            navigation.navigate('order_list_detail')
        }
        const pressHandler12 = () => {
                navigation.navigate('activity_detail')
        }
        const pressHandler13 = () => {
                navigation.navigate('order_list')
        }
        const pressHandler14 = () => {
                navigation.navigate('purchase')
        }
        const pressHandler15 = () => {
                navigation.navigate('reservation_calender')
        }
        const pressHandler16 = () => {
                navigation.navigate('review')
        }
        const pressHandler17 = () => {
                navigation.navigate('user_info')
            }
    
    return (
        <NativeBaseProvider>
            <Box marginTop={10}>
            <HStack>
            <TouchableOpacity onPress={pressHandler}>
                <HStack>
                    <Box width={24}  borderWidth={1}>
                    <Text width={16}fontSize={24} marginLeft={5} marginTop={2} style={{fontWeight:'bold', textAlign:'center'}} >경기</Text>
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
                <TouchableOpacity onPress={pressHandler7}>
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
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler8}>
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
        
            <FlatList 
                            data={activitys}
                            renderItem={renderActivity}
                            keyExtractor={(activity)=>activity.name}
                            numColumns={2}/>
            
        </NativeBaseProvider>
    )
}