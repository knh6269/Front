import { TabRouter } from "@react-navigation/routers";
import React, { Component, useState } from "react";
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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
export default function login() {
    const [id, onChangeTextID] = React.useState("")
    const [password, onChangeTextPW] = React.useState("")
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.input}>
                    <Icon name="user" size={24}></Icon>
                    <TextInput
                        placeholder={'아이디'}
                        onChangeText={(text) => onChangeTextID(text)}
                        value={id}
                    />
                </View>
                <View style={styles.input}>
                    <Icon name="lock" size={24}></Icon>
                    <TextInput
                        placeholder={'비밀번호'}
                        onChangeText={(text) => onChangeTextPW(text)}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={{ borderWidth: 1, width: 150, alignItems: 'center' }}
                onPress={() => {console.log({id, password})}}>
                    <Text>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ textDecorationLine: 'underline' }}>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ textDecorationLine: 'underline' }}>ID/PW 찾기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flexDirection: 'row',
        height: 30,
        width: 150,
        borderColor: 'gray',
        borderWidth: 1
    }
});
