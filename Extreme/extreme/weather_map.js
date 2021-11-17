import React, {useState, useEffect,useRef} from 'react';
import Styled from 'styled-components/native';
import MapView , {PROVIDER_GOOGLE, AnimatedRegion, Animated} from 'react-native-maps';
import { NativeBaseProvider,Box,Text,Button } from 'native-base';
import {
  Dimensions, Touchable,} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = Styled.View`
    flex: 1;
`;
const IMAGES = {
  image1: require('./images/1.jpg'),
  image2: require('./images/2.jpg'),};
  
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
let des="낙현이집";
const AppleMap = () => {
  const [zooms, setzooms] = useState(5);
  
  const [locations,setlocation]=useState([
     { id:'1', coordinate:{latitude:35.5,longitude: 127.45632936923715},image:IMAGES.image1, title:"청주", description:{des}},
     
     
  ]);

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
          
        }} 
          // onLayout={()=>{
          //   map.current.animateCamera({
          //     zoom:4,
          //     pitch:90,
          //     altitude: 0
          //   })
          // }}
          >
         
           
         <MapView.Marker
            coordinate={{latitude:36.62917303057579, 
            longitude: 127.45632936923715}}
            image={require('./images/그림7.png')}
            title={"청주"}
            description={des}
         /> 
            
   
           </MapView>

      </Container>
    </Box>
    <Box>
      <Text >ax</Text>
    </Box>
    </NativeBaseProvider>
  );
};

export default AppleMap;