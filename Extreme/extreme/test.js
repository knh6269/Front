<<<<<<< HEAD
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
=======
import Carousel, { Pagination } from 'react-native-snap-carousel';

import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native';
const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;
const IMAGES = {
  image1: require('./images/1.jpg'),
  image2: require('./images/2.jpg'),
  image3: require('./images/그림7.png'),
  image4: require('./images/1.jpg'),
  image5: require('./images/1.jpg'),
  image6: require('./images/1.jpg'),
  image7: require('./images/1.jpg')
};
const App = () => {
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
    { id: '6', image: IMAGES.image6 },
    { id: '7', image: IMAGES.image7 }
  ]);

  return (
    
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>

      {/* Title JSX Remains same */}
      {/* Carousel View */}
      <View style={{ marginTop: 20 }}>
        <Carousel
          layout='default'
          data={images}
          sliderWidth={width}
          itemWidth={width/3}
          inactiveSlideScale={1} //슬라이드들 크기 같게
          inactiveSlideOpacity={1} //슬라이드 투명도
          activeSlideAlignment={'start'} //슬라이드 맨앞에서 시작
          contentContainerCustomStyle={{overflow: 'hidden', width: width/3 * (7)}} //마지막 7은 원소의 개수
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'column', width: '100%', height: '50%', borderWidth:0.5}}>
                <Image
                  key={index}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode='contain'
                  source={item.image}
                />
                <Text style={{ color: 'red' }}>sss{item.id}</Text>
            </View>
          )}
        />
      </View>
      
     
    </View>
    
  );
};
export default App;
>>>>>>> 3932e14d16f34a5bd194e36b8ccb78c6deb2a7ae
