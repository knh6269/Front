import React from 'react'
import {Dimensions, } from "react-native"
import{
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    Image,
    View,
}from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";

import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function home_recommend({ navigation }) {

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box marginTop={50} marginLeft={'5%'} marginRight={'5%'}>
                    <HStack justifyContent={'space-between'}>
                        <Text>지역별 여행지</Text>
                        {/* <TouchableOpacity>
                            <Text>지역 선택</Text>
                        </TouchableOpacity> */}
                        
                    </HStack>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}




// export default class Recommend extends Component {
//     render() {
//         return (
//             <ScrollView>
//                 <View style={styles.container}>
//                     <View style={styles.category}>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
//                             <Text>지역별 여행지</Text>
//                             <TouchableOpacity
//                                 onPress={() => this.morehot(this.state.more)}
//                             >
//                                 <Text>지역 선택</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={styles.activity}>
//                             <Activity name="액티비티 이름111" />
//                             <Activity name="액티비티 이름" />
//                             <Activity name="액티비티 이름" />
//                         </View>
//                         <Text>내 주변 여행지</Text>
//                         <View style={styles.activity}>
//                             <Activity name="액티비티 이름" />
//                             <Activity name="액티비티 이름" />
//                             <Activity name="액티비티 이름" />
//                         </View>
//                         <Text>예약지 주변 여행지</Text>
//                         <View style={styles.activity}>
//                             <Activity name="액티비티 이름" />
//                             <Activity name="액티비티 이름" />
//                             <Activity name="액티비티 이름" />
//                         </View>
//                     </View>
//                 </View>
//             </ScrollView >
//         );

//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 50
//     },
//     category: {
//         backgroundColor: 'white',
//         flexDirection: 'column',
//     },
//     activity: {
//         height: 200,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderTopWidth: 0.5,
//         borderColor: '#A0A0A0',
//     }
// });
