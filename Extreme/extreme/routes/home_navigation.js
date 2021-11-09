import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import home_region from "../home_region";
import home_recommend from "../home_recommend";
import home_activity from "../home_activity";
const screens = {
    home_region: {
        screen: home_region,
        navigationOptions: () => ({ headerShown: false, })
    },
    home_recommend: {
        screen: home_recommend,
        navigationOptions: () => ({ headerShown: false, })
    },
    home_activity: {
        screen: home_activity,
        navigationOptions: () => ({ headerShown: false, })
    }
}

const trans_stack = createStackNavigator(screens);

export default createAppContainer(trans_stack);