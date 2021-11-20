import * as React from 'react';
import { useWindowDimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Home_region from "./home_region";
import Home_recommend from "./home_recommend";
import Home_activity from "./home_activity";
import {
  NativeBaseProvider,
  Box,
  HStack,
  Text,
  Image,
  View,
  flex
} from 'native-base';
import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';

export default function Home({ navigation }) {
  const layout = useWindowDimensions();

  const [search, onChangeTextSearch] = React.useState("")

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'activity', title: 'Activity 종류' },
    { key: 'region', title: '지역별 Activity 종류' },
    { key: 'recommend', title: '여행지 추천' },
  ]);
  const cart = () => {
    navigation.navigate('cart');
  }
  const heart = () => {
    navigation.navigate('heart');
  }
  const map = () => {
    navigation.navigate('weather_map');
  }
  const my_page = () => {
    navigation.navigate('my_page');
  }
  const register_activity = () => {
    navigation.navigate('register_activity');
  }
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
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
            source={require('./images/logo.png')}
            style={{ width: 100, height: 60, }}
            alt="trans_1"
          />
        </View>
        <View style={{ flexDirection: 'row', width: '65%', borderColor: 'gray', borderWidth: 1, alignItems: 'center' }}>
          <IconF name="search" size={20}></IconF>
          <TextInput
            placeholder={'어디로!! 여행가세요?'}
            onChangeText={(text) => onChangeTextSearch(text)}
            value={search}
            fontSize={20}
          />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />

      <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-between' }}>
        <TouchableOpacity key={routes[3]} onPress={renderScene}>
          <IconA name="shoppingcart" size={40} style={{ flex: 1, }}></IconA>
        </TouchableOpacity>
        <TouchableOpacity onPress={heart}>
          <IconA name="heart" size={40} style={{ flex: 1, }}></IconA>
        </TouchableOpacity>
        <TouchableOpacity onPress={register_activity}>
          <IconA name="home" size={40} style={{ flex: 1, }}></IconA>
        </TouchableOpacity>
        <TouchableOpacity onPress={map}>
          <IconF name="map-pin" size={40} style={{ flex: 1, }}></IconF>
        </TouchableOpacity>
        <TouchableOpacity onPress={my_page}>
          <IconA name="user" size={40} style={{ flex: 1, }}></IconA>
        </TouchableOpacity>
      </View>


    </NativeBaseProvider>
  );
}