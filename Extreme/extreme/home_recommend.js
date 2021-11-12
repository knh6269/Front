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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 30, width: 30, backgroundColor: 'gray' }}></View>
                <Text style={{ marginTop: 5, color: '#A0A0A0' }}>{this.props.name}</Text>
            </View>
        )
    }
}
export default function Recommend(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.category}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>지역별 여행지</Text>
                            <TouchableOpacity>
                                <Text>지역 선택</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.activity}>
                            <Activity name="액티비티 이름" />
                            <Activity name="액티비티 이름" />
                            <Activity name="액티비티 이름" />
                        </View>
                        <Text>내 주변 여행지</Text>
                        <View style={styles.activity}>
                            <Activity name="액티비티 이름" />
                            <Activity name="액티비티 이름" />
                            <Activity name="액티비티 이름" />
                        </View>
                        <Text>예약지 주변 여행지</Text>
                        <View style={styles.activity}>
                            <Activity name="액티비티 이름" />
                            <Activity name="액티비티 이름" />
                            <Activity name="액티비티 이름" />
                        </View>
                    </View>
                </View>
            </ScrollView >
        );

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    },
    category: {
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    activity: {
        height: 200,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderColor: '#A0A0A0',
    }
});