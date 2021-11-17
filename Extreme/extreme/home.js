import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Home_region from "./home_region";
import Home_recommend from "./home_recommend";
import Home_activity from "./home_activity";

export default function TabViewExample({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'activity', title: 'Activity 종류' },
    { key: 'region', title: '지역별 Activity 종류' },
    { key: 'recommend', title: '여행지 추천' },
  ]);
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'activity':
        return <Home_activity navigation={navigation}/>
      case 'region':
        return <Home_region navigation={navigation}/>
        case 'recommend':
          return <Home_recommend navigation={navigation}/>
    
      default:
        return null;
    }
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
