import * as React from 'react';
import { useWindowDimensions, TouchableOpacity, ScrollView, TextInput, Dimensions, SafeAreaView} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Home_region from "./home_region";
import Home_recommend from "./home_recommend";
import Home_activity from "./home_activity";
import Under from "./under";
import Top from "./top";
import {
  NativeBaseProvider,
  Box,
  HStack,
  Text,
  Image,
  View,
  flex,
} from 'native-base';
import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'activity', title: 'Activity 종류' },
    { key: 'region', title: '지역별 Activity' },
    { key: 'recommend', title: '여행지 추천' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'activity':
        return <Home_activity navigation={navigation} />
      case 'region':
        return <Home_region navigation={navigation} />
      case 'recommend':
        return <Home_recommend navigation={navigation} />
      case 'recommend1':
        return <Home_recommend navigation={navigation} />

      default:
        return null;
    }
  };

  return (
    <NativeBaseProvider>
      <Box>
        <View style={{ height: '12%',}}>
          <Top navigation={navigation}></Top>
        </View>

        <View style={{ height: '78%', }}>        
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            
          />
        </View>
  
        <View style={{ width: layout.width, height: '11%', }}>
          <Under navigation={navigation}></Under>
        </View>
      </Box>
    </NativeBaseProvider>
  );
}