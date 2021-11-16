import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Home_region from "./home_region";
import Home_recommend from "./home_recommend";
import Home_activity from "./home_activity";

const FirstRoute = () => (
  <Home_activity/>
);

const SecondRoute = () => (
  <Home_region/>
);
const ThirdRoute = () => (
    <Home_recommend/>
  );

const renderScene = SceneMap({
    activity: FirstRoute,
    region: SecondRoute,
    recommend: ThirdRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'activity', title: 'Activity 종류' },
    { key: 'region', title: '지역별 Activity 종류' },
    { key: 'recommend', title: '여행지 추천' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
