import React, { Component } from "react";
import { Image, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";


class Activity extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>{this.props.activity_name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 130, width: 130, backgroundColor: 'gray' }}></View>
                    <View style={{marginLeft: 5}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ marginTop: 5, color: '#A0A0A0' }}>{this.props.dday}</Text>
                            <Text style={{ marginTop: 5, color: '#A0A0A0' }}>{this.props.weather}</Text>
                        </View>
                        <Text style={{ marginTop: 5, color: '#A0A0A0' }}>{this.props.date}</Text>
                        <Text style={{ marginTop: 5, color: '#A0A0A0' }}>{this.props.price1}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
class Payment extends Component {
    render() {
        return (
            <View style={{ flex: 1 ,marginTop: 30}}>
                <Text style={{ marginTop: 5, color: '#A0A0A0' }}>결제 정보</Text>
                <Text style={{ marginTop: 5, color: '#A0A0A0' }}>예약자 명 {this.props.name}</Text>
                <Text style={{ marginTop: 5, color: '#A0A0A0' }}>휴대폰 번호 {this.props.phone_number}</Text>
                <Text style={{ marginTop: 5, color: '#A0A0A0' }}>할인 금액 {this.props.discount}</Text>
                <Text style={{ marginTop: 5, color: '#A0A0A0' }}>결제 금액 {this.props.price}</Text>
                <Text style={{ marginTop: 5, color: '#A0A0A0' }}>결제 수단 {this.props.method}</Text>
            </View>
        )
    }
}
export default function Order_list_detail({navigation}) {
    const pressHandler=()=>{
        navigation.navigate('home_region');
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Activity activity_name="액티비티 명" dday="D-3" date="2021-00-00" weather="맑음" price1="11010" />
                <Payment name="다은" phone_number="010-0000-0000" discount="12" price="11111" method="카드" />
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button1} onPress={pressHandler}>
                        <Text>홈으로</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}>
                        <Text>취소 요청</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    activity: {
        height: 200,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderColor: '#A0A0A0',
    },
    button: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button1:{
        borderWidth:1
    }
});