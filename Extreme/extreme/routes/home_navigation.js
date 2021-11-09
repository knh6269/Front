import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home_region from "../home_region";
import Home_recommend from "../Home_recommend";
import Home_activity from "../home_activity";
const screens={
   Home_region:{
       screen:Home_region,
       navigationOptions:()=>({headerShown:false,})
   },
   Home_recommend:{
    screen:Home_recommend,
    navigationOptions:()=>({headerShown:false,})
},
    Home_activity:{
        screen:Home_activity,
        navigationOptions:()=>({headerShown:false,})
    }
}

const trans_stack=createStackNavigator(screens);

export default createAppContainer(trans_stack);