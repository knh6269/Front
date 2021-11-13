import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { NativeBaseProvider,Box,Text } from 'native-base';
import {
  Dimensions,} from "react-native";

const Container = Styled.View`
    flex: 1;
`;
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
let des="낙현이집";
const AppleMap = () => {
 
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
                }}>날씨 지도
            </Text>
            </Box>
    
    <Box style={{height:Height/2}}> 
      <Container>
        <MapView style={{flex: 1,backgroundColor:'red'}} provider={PROVIDER_GOOGLE} 
          initialRegion={{
            latitude: 36.62917303057579, 
            longitude: 127.45632936923715,
            latitudeDelta: 3,
            longitudeDelta: 3,
            
          }} >
             <MapView.Marker
            coordinate={{latitude:36.62917303057579, 
            longitude: 127.45632936923715}}
            image={require('./images/그림7.png')}
            title={"청주"}
            description={des}
         />
         
         <MapView.Marker
            coordinate={{latitude:35.5, 
            longitude: 127.45632936923715}}
            image={require('./images/그림8.png')}
            title={"청주"}
            description={des}
         />
          </MapView>
      </Container>
    </Box>
    <Box>
      <Text>ax</Text>
    </Box>
    </NativeBaseProvider>
  );
};

export default AppleMap;