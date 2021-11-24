import React, {useState, useEffect,useRef} from 'react';
import Styled from 'styled-components/native';
import MapView , {PROVIDER_GOOGLE, AnimatedRegion, Animated} from 'react-native-maps';
import { NativeBaseProvider,Box,Text,Button,View,VStack,HStack } from 'native-base';
import {
  Dimensions, ImageStore, Touchable} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = Styled.View`
    flex: 1;
`;
let a=0;

const IMAGES = {
  image1: require('./images/cloud.png'),
  image2: require('./images/snow.png'),
  image3: require('./images/그림7.png'),
  image4: require('./images/그림8.png'),
  image5: require('./images/partlyClear.png'),
  image6: require('./images/snowAndRaindy.png'),
};
  
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


export default function AppleMap(){
  const [zooms, setzooms] = useState(6);
  let data=[];
  let data_detail=[];

  const [locations,setlocation]=useState([
      { coordinate:{latitude:37.470407483804394,longitude: 126.95072514199354},title:"서울/경기",a:'',tem:''}, //서울,경기
      { coordinate:{latitude:35.62917303057579,longitude: 127.45632936923715} ,title:"충북",a:'',tem:''}, //충북
      { coordinate:{latitude:36.671914951644425,longitude: 126.67165336847684} ,title:"충남",a:'',tem:''}, //충남
      { coordinate:{latitude:36.595861340561086,longitude: 128.57313006228776} ,title:"경북",a:'',tem:''}, //경북
      { coordinate:{latitude:35.23842192337336,longitude: 128.69241945627113} ,title:"경남",a:'',tem:''}, //경남
      { coordinate:{latitude:35.82059665884646,longitude: 127.11104959061522} ,title:"전북",a:'',tem:''}, //전북
      { coordinate:{latitude:34.81637712860163,longitude:  126.46289201208677} ,title:"전남",a:'',tem:''}, //전남 
     { coordinate:{latitude:37.854348731753554,longitude: 128.14330215878118} ,title:"강원",a:'',tem:''}, //강원
     { coordinate:{latitude:33.40153208420323,longitude: 126.53592826886285} ,title:"제주",a:'',tem:''}, //제주 
    ])

    const [locations_detail,setlocation_detai]=useState([
      { coordinate:{latitude:37.85508128127139,longitude: 127.46492260252512},title:"가평",a:'',tem:''}, //가평
      { coordinate:{latitude:38.27504507714095,longitude: 127.44808937237825} ,title:"철원",a:'',tem:''}, //충북
      { coordinate:{latitude:37.55319174973343,longitude: 126.97134335538867} ,title:"서울",a:'',tem:''}, //충남
      { coordinate:{latitude:37.74088262067262, longitude: 128.07368358275008} ,title:"홍천",a:'',tem:''}, //경북
      { coordinate:{latitude:37.720570393933,longitude:128.85106440178023} ,title:"강릉",a:'',tem:''}, //경남
      { coordinate:{latitude:38.18031422250963, longitude:128.53596243537083} ,title:"속초",a:'',tem:''}, //전북
      { coordinate:{latitude:37.28498243846412, longitude:  129.13031644386763} ,title:"삼척",a:'',tem:''}, //전남 
     { coordinate:{latitude:36.632667667041474,longitude: 127.48622431744683} ,title:"청주",a:'',tem:''}, //강원
     { coordinate:{latitude:36.9932862768505,longitude: 128.38435661703616} ,title:"단양",a:'',tem:''}, //제주 
     { coordinate:{latitude:37.015220228464656,longitude: 127.8913451559466},title:"충주",a:'',tem:''}, //가평
     { coordinate:{latitude:36.80358053395931, longitude: 127.19480679012125} ,title:"천안",a:'',tem:''}, //충북
     { coordinate:{latitude:36.331514063670625, longitude: 126.60841154253006} ,title:"보령",a:'',tem:''}, //충남
     { coordinate:{latitude:36.743079441214576, longitude: 126.29942107248786} ,title:"태안",a:'',tem:''}, //경북
     { coordinate:{latitude:36.58380122550363, longitude:128.7301841529369} ,title:"안동",a:'',tem:''}, //경남
     { coordinate:{latitude:36.93450423332034, longitude:128.90566009830263} ,title:"봉화",a:'',tem:''}, //전북
     { coordinate:{latitude:36.09797798097938,  longitude:  129.34970993453294} ,title:"포항",a:'',tem:''}, //전남 
    { coordinate:{latitude:35.82059807314478, longitude: 129.25364254773166} ,title:"경주",a:'',tem:''}, //강원
    { coordinate:{latitude:35.120929741399145, longitude: 127.78772717651424} ,title:"하동",a:'',tem:''}, //제주 
    { coordinate:{latitude:35.27511541797146,  longitude:  128.84246968683073},title:"김해",a:'',tem:''}, //가평
     { coordinate:{latitude:35.73131766655631,  longitude: 127.89716378760254} ,title:"거창",a:'',tem:''}, //충북
     { coordinate:{latitude:35.83755199277454,  longitude: 127.12088404159516} ,title:"전주",a:'',tem:''}, //충남
     { coordinate:{latitude:35.83755199277454,  longitude: 127.12088404159516} ,title:"남원",a:'',tem:''}, //경북
     { coordinate:{latitude:35.6067644920282,  longitude: 126.89978419395443} ,title:"정읍",a:'',tem:''}, //경남
     { coordinate:{latitude:34.58170473699966,  longitude: 126.59203592820724} ,title:"해남",a:'',tem:''}, //전북
     { coordinate:{latitude:34.98771476359943,  longitude: 127.39205529202512} ,title:"순천",a:'',tem:''}, //전남 
    { coordinate:{latitude:34.76326149325128,  longitude: 127.64866527664593} ,title:"여수",a:'',tem:''}, //강원
    { coordinate:{latitude:33.50072515795647,  longitude: 126.50201124885673} ,title:"국제공항",a:'',tem:''}, //제주 
    { coordinate:{latitude:33.25399181534155, longitude:126.56624306184334} ,title:"서귀포",a:'',tem:''}, //제주 
    { coordinate:{latitude:35.872505716995946, longitude:128.60133727526704} ,title:"대구",a:'',tem:''}, //제주 
    { coordinate:{latitude:35.54588375185266, longitude:129.2503030686377} ,title:"울산",a:'',tem:''}, //제주 
    { coordinate:{latitude:35.15772097249917, longitude:126.8293473141308} ,title:"광주",a:'',tem:''}, //제주 
    { coordinate:{latitude:36.338271001544314, longitude:127.38281781920932} ,title:"대전",a:'',tem:''}, //제주 
    { coordinate:{latitude:35.16891168784421, longitude:129.04411519586463} ,title:"부산",a:'',tem:''}, //제주 
  
  ])
  const getWeather = async () => { 
    try {
        for(let i=0; i<9; i++){
        const response = await fetch(`https://extreme-kor.herokuapp.com/weathermap/${locations[i].coordinate.latitude}/${locations[i].coordinate.longitude}`);
        const json = await response.json();
        data=data.concat(json);
      }
      for(let k=0; k<33; k++){
        const response = await fetch(`https://extreme-kor.herokuapp.com/weathermap/${locations_detail[k].coordinate.latitude}/${locations_detail[k].coordinate.longitude}`);
        const json = await response.json();
        data_detail=data_detail.concat(json);
      }
      
      for(let j=0; j<9; j++){
        if(data[j].data.state=="clear"){
          locations[j].a=IMAGES.image4;
        }
        else if(data[j].data.state=="cloudy"){ 
        locations[j].a=IMAGES.image1;
          } 
        else if(data[j].data.state=="snow"){ 
          locations[j].a=IMAGES.image2;
            } 
        else if(data[j].data.state=="rainy"){ 
          locations[j].a=IMAGES.image3;
            } 
        else if(data[j].data.state=="partlyClear"){ 
          locations[j].a=IMAGES.image5;
            } 
        else if(data[j].data.state=="snowAndRainy"){ 
          locations[j].a=IMAGES.image5;
            } 

        locations[j].tem=data[j].data.tem;
        }
        for(let l=0; l<33; l++){
          if(data_detail[l].data.state=="clear"){
            locations_detail[l].a=IMAGES.image4;
  
          }
          else if(data_detail[l].data.state=="cloudy"){ 
          locations_detail[l].a=IMAGES.image1;
            } 
          else if(data_detail[l].data.state=="snow"){ 
            locations_detail[l].a=IMAGES.image2;
              } 
          else if(data_detail[l].data.state=="rainy"){ 
            locations_detail[l].a=IMAGES.image3;
              } 
          else if(data_detail[l].data.state=="partlyClear"){ 
            locations_detail[l].a=IMAGES.image5;
              } 
          else if(data[l].data.state=="snowAndRainy"){ 
            locations[l].a=IMAGES.image5;
              } 
              locations_detail[l].tem=data_detail[l].data.tem;
          }
         
     
      } 

      catch (error) {
     console.error(error);
   }
   }

 useEffect(() => {
  getWeather();
}, [data]);
 
  const zooming=()=>{
    setzooms(zooms=>5);
    console.log(zooms);
  };
  const zoomout=()=>{
    setzooms(zooms=>3);
    console.log(zooms);
  };

  const map = useRef(null) ; 

    return (
    <NativeBaseProvider onPress={getWeather}>
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
                <Text
                style={{
                    textAlign:'center',
                    height:Height/19,
                    padding:10,
                    fontSize:24,
                    fontWeight:'bold',
                }}>현재 날씨 지도
            </Text>
            </Box>
    <Box style={{height:Height/2}}  > 
      <Container>
        <HStack>
          <Button width={Width/2}onPress={zooming}><Text>전국 날씨 보기</Text></Button>
          <Button width={Width/2}onPress={zoomout}><Text>자세한 날씨보기</Text></Button>
        </HStack>
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

      
        {zooms==5&&locations.map((locations,index)=>{
         return(
          <MapView.Marker
            key={index}
            coordinate={locations.coordinate}
            image= {locations.a}
            title={locations.title}
            description={`현재온도:${locations.tem}`}
           />
         
        )
          })
        }

        {zooms==3&&locations_detail.map((locations_detail,index)=>{
         return(
          <MapView.Marker
            key={index}
            coordinate={locations_detail.coordinate}
            image= {locations_detail.a}
            title={locations_detail.title}
            description={`현재온도:${locations_detail.tem}`}
           />
         
        )
          })
        }
           </MapView>

      </Container>
    </Box>
    <Box>
      <Text >ax</Text>
    </Box>
    </NativeBaseProvider>
  );
}