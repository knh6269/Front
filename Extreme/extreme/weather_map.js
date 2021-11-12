import React from 'react';
import Styled from 'styled-components/native';
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps';
import {} from 'react-native';
import { NativeBaseProvider,Box,Text } from 'native-base';
import {
  Dimensions,} from "react-native";

const Container = Styled.View`
    flex: 1;
`;
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const AppleMap = () => {
  return (
    <NativeBaseProvider>
    <Box style={{height:40}}><Text>내 동네 지도</Text></Box>
    <Box style={{height:Height/2}}> 
      <Container>
        <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} 
          initialRegion={{
            latitude: 36.62917303057579, 
            longitude: 127.45632936923715,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
      </Container>
    </Box>
    <Box>
      <Text>asssss</Text>
    </Box>
    </NativeBaseProvider>
  );
};

export default AppleMap;