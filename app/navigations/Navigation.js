import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements/dist/icons/Icon";
import RecentlySearchedStack from "./RecentlySearchedStack";
import AccountStack from "./AccountStack";
import Home from "../screens/Home";
import Aboutus from "../screens/Aboutus";
import Search from "../screens/Search";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
                tabBarActiveTintColor: '#155db1',
                tabBarInactiveTintColor: '#81c9fa',
            })}
            >
                <Tab.Screen name="search" component={Search} options={{ title: "Search"}}/>
                <Tab.Screen name="home" component={Home} options={{ title: "Home"}}/>
                <Tab.Screen name="recently" component={RecentlySearchedStack} options={{ title: "Last search"}}/>
                <Tab.Screen name="aboutus" component={Aboutus} options={{ title: "About us"}}/>
                <Tab.Screen name="account" component={AccountStack} options={{ title: "Login"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function screenOptions(route, color)
{
    let iconName;
    switch(route.name){
        case "search":
            iconName = "magnify";
            break;
        case "home":
            iconName = "home-outline";
            break;
        case "recently":
            iconName = "history";
            break;
        case "aboutus":
            iconName = "information-outline";
            break;
        case "account":
            iconName = "account-circle";
            break;
        default:
             break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    );
}