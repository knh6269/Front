import React, { Component } from "react";
import { Image, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    StyleSheet
} from "react-native";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class User extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 150 }}>
                <View style={{ height: 100, width: 100, backgroundColor: 'gray', marginLeft: 50 }}></View>
                <Text style={{ marginLeft: 50, color: '#A0A0A0' }}>{this.props.name}</Text>
            </View>
        )
    }
}

export default function My_page() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <User name="닉네임">
                    </User>
                    <TouchableOpacity style={styles.menu}>
                        <Text>회원 정보 수정</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Text>주문 내역</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
            <View style={{ flex: 0.2, borderWidth: 0.5, marginLeft: 50 }}>
                <Text>문의</Text>
                <Text>E-mail : aaa@aaa.com</Text>
                <Text>Tel : 000-0000-0000</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 0.8
    },
    menu: {
        paddingLeft: 40,
        padding: 10
    }
});