import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { color } from 'react-native-reanimated';

type Props = {};
// var test = "신청 가능한 activity 확인"
var ex = "이용 가능한 Activity는 다음과 같다"

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      buttoncolor: "blue",
      test: "확인"
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  _updateCount() {
    this.setState({ buttoncolor: "green", test:"확인됨"});
    ex = "123123123"
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    return (
      <View marginTop={'10%'}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
        <View>
          <Button
            color={this.state.buttoncolor}
            title={this.state.test}
            width={'5%'}
            onPress={this._updateCount.bind(this)} />
          <Text>{startDate}</Text>
          
        </View>
        
        <View>
          <Text>{ex}</Text>
        </View>
      </View>
    );
  }
}