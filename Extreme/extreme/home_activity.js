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
 
class Inputs extends Component {
  state = {
    search: "",
  };
 
  handleSearch = text => {
    this.setState({ search: text });
  };
 
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.topmenu}>
            <Text>Top</Text>
          </View>

          <View style={styles.searchcontainer}>
            <TextInput
              style={styles.search}
              underlineColorAndroid="transparent"
              placeholder="Search"
              placeholderTextColor="black"
              autoCapitalize="none"
              onChangeText={ (text) => searchData(text)}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.search(this.state.search)}>
              <Text style={styles.submitButtonText}>질문</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => this.cart(this.state.cart)}>
              <Text style={styles.cartButtonText}>장바구니</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainactivitycontainer}>
            <View style={styles.mainactivitycontainer1}>
              <Image style={styles.mainactivityimages1}
                scale="cover"
                source={require('./images/1.jpg')}
                
              />
              <Image style={styles.mainactivityimages1}
                resizeMode="cover"
                source={require('./images/1.jpg')}
              />

              <Image style={styles.mainactivityimages1}
                resizeMode="cover"
                source={require('./images/1.jpg')}
              />
            </View>

            <View style={styles.mainactivitycontainer1}>
              <Image style={styles.mainactivityimages2}
                scale="cover"
                source={require('./images/1.jpg')}
                
              />
              <Image style={styles.mainactivityimages2}
                resizeMode="cover"
                source={require('./images/1.jpg')}
              />

              <Image style={styles.mainactivityimages2}
                resizeMode="cover"
                source={require('./images/1.jpg')}
              />
            </View>

            <View style={styles.mainactivitycontainer1}>
              <Image style={styles.mainactivityimages3}
                scale="cover"
                source={require('./images/1.jpg')}
                
              />
              <Image style={styles.mainactivityimages3}
                resizeMode="cover"
                source={require('./images/1.jpg')}
              />

              <Image style={styles.mainactivityimages3}
                resizeMode="cover"
                source={require('./images/1.jpg')}
              />
            </View>
          </View>
          
          <Text style={styles.activitydtext}>추천 액티비티</Text>
          <View style={styles.recommendactivitycontainer}>
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.nextimages}
              source={require('./images/1.jpg')}
            />
          </View>
          <TouchableOpacity
            style={styles.morerecommendButton}
            onPress={() => this.morerecommend(this.state.more)}
          >
            <Text style={styles.moreText}>더보기</Text>
          </TouchableOpacity>

          <Text style={styles.activitydtext}>인기 액티비티</Text>
          <View style={styles.hotactivitycontainer}>
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.nextimages}
              source={require('./images/1.jpg')}
            />
          </View>
          <TouchableOpacity
            style={styles.morerhotButton}
            onPress={() => this.morehot(this.state.more)}
          >
            <Text style={styles.moreText}>더보기</Text>
          </TouchableOpacity>

          <Text style={styles.activitydtext}>최신 액티비티</Text>
          <View style={styles.newactivitycontainer}>
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.activityimages}
              resizeMode="cover"
              source={require('./images/1.jpg')}
            />
            <Image style={styles.nextimages}
              source={require('./images/1.jpg')}
            />
          </View>
          <TouchableOpacity
            style={styles.morernewButton}
            onPress={() => this.morenew(this.state.more)}
          >
            <Text style={styles.moreText}>더보기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );

  }
}
 
export default Inputs;

const searchData = async(text) => {

  try {
    const res = await fetch('실행할 함수', {
      method: "POST",
      body: JSON.stringify({
        "keyword": text
      })
    });
    const resJson = await res.json();
    const newResJson = resJson
    SVGMetadataElement(newResJson.products)
  } catch (e) {
    console.log("패치에 실패")
    }
}
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },

  searchcontainer: {
    flexDirection: 'row',
    flex: 1
  },

  search: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    width : '70%',
    borderRadius: 20
  },

  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    flex: 1,
    width : '30%'
  },

  submitButtonText: {
    color: "white"
  },

  moreText: {
    alignItems:'center',
    justifyContent: 'center',
    textAlign : 'center'
  },

  nextimages: {
    marginTop: "40%",
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20
  },

  morerecommendButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },

  morerhotButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },

  morernewButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },

  mainactivitycontainer: {
    backgroundColor: "green",
    flexDirection:'column'
  },

  mainactivitycontainer1: {
    flexDirection:'row'
  },

  mainactivitycontainer2: {
    flexDirection:'row'
  },

  mainactivitycontainer3: {
    flexDirection:'row'
  },

  recommendactivitycontainer: {
    backgroundColor: "blue",
    flexDirection: 'row'
  },

  hotactivitycontainer: {
    backgroundColor: "green",
    flexDirection: 'row'
  },

  newactivitycontainer: {
    backgroundColor: "green",
    flexDirection: 'row'
  },

  activitydtext: {
    marginTop : 30,
    justifyContent: 'center',
    fontSize: 20,
    marginBottom : 10
  },

  mainactivityimages1: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    margin : 10
  },

  mainactivityimages2: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    margin : 10
  },

  mainactivityimages3: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    margin : 10
  },
  
  activityimages: {
    height: 350,
    flex: 1,
    justifyContent: 'center'
  }
});