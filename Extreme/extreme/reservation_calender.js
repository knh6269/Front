import React, { Component, useEffect, useState } from 'react'
import { Dimensions, FlatList, Alert, DatePickerAndroid, Settings } from "react-native"
import {
  NativeBaseProvider,
  Box,
  HStack,
  Text,
  Image,
  flex,
  Button
} from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';



import IconA from 'react-native-vector-icons/AntDesign';
import Loading from './test';

export default function reservation_calender({ navigation }) {
  const [calenderdata, setCalenderData] = useState(navigation.state.params.calender_data);
  const [data, setData] = useState();
  const [outputText, setoutputText] = useState('');
  const [outputactivity, setoutputactivity] = useState('');
  const [filterdate, setFilterdate] = useState();
  const [selecttime, setSelectTime] = useState();
  const [selecthour, setSelectHour] = useState();

  const [activity_id,setActivity_id]=useState(125);
  const [people,setPeople]=useState(1);
  const [user_id,setUser_id]=useState();
  let calender = new Map();
  let timeoption = []
  const getData = async () => {
    const response = await fetch(`https://extreme-kor.herokuapp.com/activity/times?id=${calenderdata.id}`);
    const json = await response.json();
    setData(json.data);
    console.log(json.data)
    dateee = json.data
    let me=(await AsyncStorage.getItem('user_id'));
    setUser_id(me)
  }
  useEffect(() => {
    getData();
  }, [])



  const dayss = (day) => {
    let a
    setSelectTime()
    setoutputText(day.dateString)
    if (day.day < 10) {
      setoutputactivity(`${day.year}${day.month}0${day.day}`)
      a = data.filter((data) => data.date == `${day.year}${day.month}0${day.day}`)
    }
    else {
      setoutputactivity(`${day.year}${day.month}${day.day}`)
      a = data.filter((data) => data.date == `${day.year}${day.month}${day.day}`)
    }
    a.sort((a, b) => (a.hour > b.hour ? 1 : -1))
    console.log(a)
    console.log(data)
    setFilterdate(a)
  }
  const selecttimefunctino=(item, index)=>{
    setSelectTime(index)
    setSelectHour(item.hour)
  }
  

  const renderActivity = ({ item, index }) => (
    <Box style={{ flexDirection: 'row' }}>
      {item.reservation == true &&
      <Button style={{ backgroundColor: 'darkgray', margin: 10 }} onPress={()=> Alert.alert( "","이미 예약된 시간입니다.",[{text:"확인"}])}><Text>{item.hour}</Text></Button>
      }
      {(item.reservation != true&&selecttime!=index) &&
      <Button style={{ backgroundColor: 'white', margin: 10 }} onPress={()=>selecttimefunctino(item, index)}><Text>{item.hour}</Text></Button>
      }
      {selecttime==index &&
      <Button style={{ backgroundColor: 'powderblue', margin: 10 }}><Text>{item.hour}</Text></Button>
      }

    </Box>
  )

  const purchasing=()=>{
    if(selecthour)
    console.log(data)
    let payment=calenderdata.activity_price*people
    let aa={purchase_Data:{Activity:{Activity_images:[{image_url:calenderdata.Activity_images[0].image_url}], Company:{company_name:calenderdata.Company.company_name}, activity_name:calenderdata.activity_name, activity_price:calenderdata.activity_price, id:calenderdata.id}, Activity_time:{date:outputactivity, hour:selecthour}, id:data.id, payment:payment, people:people}}
    console.log(aa)
    // navigation.navigate('purchase', {purchase_Data:{Activity:{Activity_images:[], Company:{company_name:calenderdata.company.company_name}}}})
    // else Alert.alert( "","시간을 선택해주세요.",[{text:"확인"}])
  }
  
  if (data) {
    return (
      <NativeBaseProvider>  
        <Box style={{ paddingTop: 50 }}>

          {/* const setoutputText = () */}

          <Calendar
            current={Date()}
            minDate={'2021-01-01'}
            maxDate={'2022-12-31'}
            onDayPress={(day) => { dayss(day) }}
            onDayLongPress={(day) => { setoutputText(day.dateString) }}
            monthFormat={'yyyy MM dd'}
            onMonthChange={(month) => { console.log('month changed', month) }}
            hideArrows={true}
            renderArrow={(direction) => direction === "left" ? (
              <IconA name="left" size={20} color="#50cebb"></IconA>
            ) : (
              <IconA name="right" size={20} color="#50cebb"></IconA>
            )
            }
            hideExtraDays={false}
            disableMonthChange={true}
            firstDay={7}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={false}
            disableArrowRight={false}
            disableAllTouchEventsForDisabledDays={true}
          />
        </Box>
        <Box marginTop={'3%'} marginBottom={'5%'} borderWidth={0.5} borderColor={'#acacac'}>
          <Box style={{flexDirection:'row', justifyContent:'center',}}>
            <Text style={{ fontSize: 16, textAlign:'center' }}>선택된 날짜는</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:'center' }}>{outputactivity}</Text>
            <Text style={{ fontSize: 16, textAlign:'center' }}> 입니다.</Text>
          </Box>
          <Box style={{flexDirection:'row', justifyContent:'center',}}>
           <Button onPress={()=>setPeople((people)=>people+1)}><Text>+</Text></Button>
           <Text>{people}</Text>
           <Button onPress={()=>people>1?setPeople((people)=>people-1):null}><Text>-</Text></Button>
           </Box>
          <Box style={{ flexDirection: 'row' }}>
            <FlatList
              data={filterdate}
              renderItem={renderActivity}
              // keyExtractor={(Activity) => Activity.activity_name}
              extraData={data}
              alt={"Dd"}
              numColumns={5} />
          </Box>

          <Box style={{ flexDirection:'row' ,marginTop: '3%', }}>
            <Button style={{backgroundColor:'#4f8bc2'}}>
                <Text style={{color:'black'}}>장바구니</Text>
            </Button>
            <Button onPress={purchasing} style={{backgroundColor:'#4f8bc2'}}>
                <Text style={{color:'black'}}>바로구매</Text>
            </Button>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
  }
  else {
    return (<Loading />)
  }
}