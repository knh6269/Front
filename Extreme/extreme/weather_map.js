import React, {useState, useEffect,useRef} from 'react';
import Styled from 'styled-components/native';
import MapView , {PROVIDER_GOOGLE, AnimatedRegion, Animated} from 'react-native-maps';
import { NativeBaseProvider,Box,Text,Button,View } from 'native-base';
import {
  Dimensions, ImageStore, Touchable,} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = Styled.View`
    flex: 1;
`;
const IMAGES = {
  image1: require('./images/1.jpg'),
  image2: require('./images/2.jpg'),};
  
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


export default function AppleMap(){
  const [zooms, setzooms] = useState(5);
  
  const [locations,setlocation]=useState([
     { coordinate:{latitude:37.470407483804394,longitude: 126.95072514199354} }, //서울,경기
     { coordinate:{latitude:35.62917303057579,longitude: 127.45632936923715} }, //충북
     { coordinate:{latitude:36.671914951644425,longitude: 126.67165336847684} }, //충남
     { coordinate:{latitude:36.595861340561086,longitude: 128.57313006228776} }, //경북
     { coordinate:{latitude:35.23842192337336,longitude: 128.69241945627113} }, //경남
     { coordinate:{latitude:35.82059665884646,longitude: 127.11104959061522} }, //전북
     { coordinate:{latitude:34.81637712860163,longitude:  126.46289201208677} }, //전남 
     { coordinate:{latitude:37.854348731753554,longitude: 128.14330215878118} }, //강원
     { coordinate:{latitude:33.40153208420323,longitude: 126.53592826886285} }, //제주 
  ])
  const zooming=()=>{
    setzooms(zooms=>zooms-1);
    console.log(zooms);
  }
  const map = useRef(null)  

    return (
    <NativeBaseProvider>
         <Box 
            style={{
                width:Width,
                height:Height/12,
                marginTop:40,
                justifyContent:'center',
                alignItems:'center',
                borderWidth:3,
                marginBottom:30,
            }}>
                <Text style={{
                    textAlign:'center',
                    height:Height/19,
                    padding:10,
                    fontSize:24,
                    fontWeight:'bold',
                }}>날씨 지도1
            </Text>
            </Box>
    
    <Box style={{height:Height/2}}> 
      <Container>
        <Button onPress={zooming}><Text>dd</Text></Button>

        <MapView 
          zoomEnabled={false}
          style={{flex: 1,backgroundColor:'red'}} provider={PROVIDER_GOOGLE} 
          ref={(current)=>{map.current=current}}
          region={{
          latitude: 36.62917303057579, 
          longitude: 127.45632936923715,
          latitudeDelta:zooms,
          longitudeDelta:zooms,
          
        }}>

      
        {locations.map((locations,index)=>{
         return(
        <MapView.Marker
         key={index}
         coordinate={locations.coordinate}
        /> )
          })}
        
           </MapView>

      </Container>
    </Box>
    <Box>
      <Text >ax</Text>
    </Box>
    </NativeBaseProvider>
  );
}
