import * as React from 'react';
import { useWindowDimensions, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Alert } from 'react-native';
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

  const search_activity=()=>{
    let params = search
    onChangeTextSearch("")
    if(params==""){
      Alert.alert( "","검색어를 입력해주세요.",[{text:"확인"}])
      console.log('검색어 없음');

    }
    else{
      navigation.navigate('search_activity_list', { search: params })
    }

  }
  return (
    <NativeBaseProvider>
      <Box style={{ marginTop: '5%' }}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              source={require('./images/logo.png')}
              style={{ width: 100, height: 60, }}
              alt="trans_1"
            />
          </View>
          <View style={{ flexDirection: 'row', width: '65%', borderColor: 'gray', borderWidth: 1, alignItems: 'center', zIndex:-1, justifyContent:'space-around'}}>
            <TextInput
              placeholder={'어디로!! 여행가세요?'}
              onChangeText={(text) => onChangeTextSearch(text)}
              value={search}
              fontSize={20}
            />
            <TouchableOpacity onPress={search_activity}>
              <IconF name="search" size={20}></IconF>
            </TouchableOpacity>
          </View>
          

        </View>
      </Box>
    </NativeBaseProvider>
  )
}