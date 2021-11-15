import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements/dist/icons/Icon";
import CitysStack from "./CitysStack";
import RecentlySearchedStack from "./RecentlySearchedStack";
import AccountStack from "./AccountStack";
import HomeStack from "./HomeStack";
import AboutUsStack from "./AboutUsStack";
import SearchStack from "./SearchStack";


const Tab = createBottomTabNavigator();


export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => screenOptions(route, color),
                    tabBarActiveTintColor: '#155db1',
                    tabBarInactiveTintColor: '#81c9fa',
                })}
            >
                <Tab.Screen
                    name="home"
                    component={HomeStack}
                    options={{ title: "Home"}}
                />
                <Tab.Screen
                    name="city"
                    component={CitysStack}
                    options={{ title: "City"}}
                />
                <Tab.Screen
                    name="recently"
                    component={RecentlySearchedStack}
                    options={{ title: "Last search"}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{ title: "Search"}}
                />
                <Tab.Screen
                    name="aboutus"
                    component={AboutUsStack}
                    options={{ title: "About us"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{ title: "Login"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

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
        case "city":
            iconName = "map-search-outline";
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