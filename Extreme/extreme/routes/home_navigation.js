import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import home_region from "../home_region";
import home_recommend from "../home_recommend";
import home_activity from "../home_activity";
import coupon from "../coupon";
import heart from "../heart";
import my_page from "../my_page";
import cart from "../cart"
import weather_map from "../weather_map"

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
    }, coupon: {
        screen: coupon,
        navigationOptions: () => ({ headerShown: false, })
    },
    heart: {
        screen: heart,
        navigationOptions: () => ({ headerShown: false, })
    },
    my_page: {
        screen: my_page,
        navigationOptions: () => ({ headerShown: false, })
    },
    cart: {
        screen: cart,
        navigationOptions: () => ({ headerShown: false, })
    },
    weather_map: {
        screen: weather_map,
        navigationOptions: () => ({ headerShown: false, })
    }
}

const trans_stack = createStackNavigator(screens);

export default createAppContainer(trans_stack);