import * as React from 'react';
import { useWindowDimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
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

export default function Top({ navigation }) {

  const [search, onChangeTextSearch] = React.useState("");
  
  return (
    <NativeBaseProvider>
      <Box>
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
      </Box>
    </NativeBaseProvider >
  )
}