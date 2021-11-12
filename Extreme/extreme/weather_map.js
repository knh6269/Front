import React from 'react';
import Styled from 'styled-components/native';
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps';

const Container = Styled.View`
    flex: 1;
`;

const AppleMap = () => {
  return (
    <Container>
      <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} 
         initialRegion={{
          latitude: 36.62917303057579, 
          longitude: 127.45632936923715,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} />
    </Container>
  );
};

export default AppleMap;