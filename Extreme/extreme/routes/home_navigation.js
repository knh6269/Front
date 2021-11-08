import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home_region from "../home_region";
import main from "../main";
const screens={
   Home_region:{
       screen:Home_region,
       navigationOptions:()=>({headerShown:false,})
   },
  main:{
       screen:main,
       navigationOptions:()=>({headerShown:false,})
   }
}

const trans_stack=createStackNavigator(screens);

export default createAppContainer(trans_stack);