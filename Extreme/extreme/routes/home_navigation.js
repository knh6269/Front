import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home_region from "../home_region";
<<<<<<< HEAD
import Home_recommend from "../Home_recommend";
import main from "../main";
=======
import Home_activity from "../home_activity";
>>>>>>> 95b00abdb39731bba6df7bd419e80e31b7eb4b74
const screens={
   Home_region:{
       screen:Home_region,
       navigationOptions:()=>({headerShown:false,})
   },
<<<<<<< HEAD
   Home_recommend:{
    screen:Home_recommend,
    navigationOptions:()=>({headerShown:false,})
},
  main:{
       screen:main,
       navigationOptions:()=>({headerShown:false,})
   }
=======
    Home_activity:{
        screen:Home_activity,
        navigationOptions:()=>({headerShown:false,})
    }
>>>>>>> 95b00abdb39731bba6df7bd419e80e31b7eb4b74
}

const trans_stack=createStackNavigator(screens);

export default createAppContainer(trans_stack);