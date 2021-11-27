import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import home_region from "../home_region";
import home_recommend from "../home_recommend";
import home_activity from "../home_activity";
import coupon from "../coupon";
import heart from "../heart";
import my_page from "../my_page";
import cart from "../cart";
import register_user from "../register_user";
import login from "../login";
import order_list_detail from "../order_list_detail";
import register_company  from "../register_company";
import weather_map from "../weather_map";
import activity_detail from "../activity_detail";
import order_list from "../order_list";
import purchase from "../purchase";
import reservation_calender from "../reservation_calender";
import review from "../review";
import user_info from "../user_info";
import home from "../home";
import register_activity from "../register_activity";
import top from "../top";
import under from "../under";
import select_bank from "../select_bank";
import test from "../test";

const screens = {

    home:{
    screen:home,
    navigationOptions: () => ({ headerShown: false, })
    },

    cart: {
        screen: cart,
        navigationOptions: () => ({ headerShown: false, })
    },
    heart: {
        screen: heart,
        navigationOptions: () => ({ headerShown: false, })
    },

      

    order_list_detail: {
        screen: order_list_detail,
        navigationOptions: () => ({ headerShown: false, })
    },

    order_list: {
        screen: order_list,
        navigationOptions: () => ({ headerShown: false, })
    },

            my_page: {
        screen: my_page,
        navigationOptions: () => ({ headerShown: false, })
    },
    
        register_user:{
    screen:register_user,
    navigationOptions: () => ({ headerShown: false, })
    },

    select_bank: {
        screen:select_bank,
        navigationOptions: () => ({ headerShown: false, })
    },

    home_recommend: {
        screen: home_recommend,
        navigationOptions: () => ({ headerShown: false, })
    },

    home_region: {
    screen: home_region,
    navigationOptions: () => ({ headerShown: false, })
    },
    
    login: {
        screen: login,
        navigationOptions: () => ({ headerShown: false, })
    },    
   
    weather_map:{
        screen:weather_map,
        navigationOptions: () => ({ headerShown: false, })
    },
  
    register_activity: {
        screen: register_activity,
        navigationOptions: () => ({ headerShown: false, })
    },
    review: {
        screen: review,
        navigationOptions: () => ({ headerShown: false, })
    },
    reservation_calender: {
        screen: reservation_calender,
        navigationOptions: () => ({ headerShown: false, })
    },
    
    coupon: {
        screen: coupon,
        navigationOptions: () => ({ headerShown: false, })
    },
    register_company:{
        screen:register_company,
        navigationOptions: () => ({ headerShown: false, })
    },
    activity_detail: {
        screen: activity_detail,
        navigationOptions: () => ({ headerShown: false, })
    },
   
    user_info: {
        screen: user_info,
        navigationOptions: () => ({ headerShown: false, })
    },

    purchase: {
        screen: purchase,
        navigationOptions: () => ({ headerShown: false, })
    },
    
    weather_map:{
        screen:weather_map,
        navigationOptions: () => ({ headerShown: false, })
    },
    
    home_activity: {
        screen: home_activity,
        navigationOptions: () => ({ headerShown: false, })
    }, 
    top: {
        screen: top,
        navigationOptions: () => ({ headerShown: false, })
    },
    under: {
        screen: under,
        navigationOptions: () => ({ headerShown: false, })
    },
  
   
   
   
   
    
   
    test:{
        screen:test,
        navigationOptions: () => ({ headerShown: false, })
    },
    

}
export const trans_stack = createStackNavigator(screens);

export default createAppContainer(trans_stack);