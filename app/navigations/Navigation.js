import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import City from "../screens/City";
import Home from "../screens/Home";
import Aboutus from "../screens/Aboutus";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="search" component={Search} options={{ title: "Search"}}/>
                <Tab.Screen name="home" component={Home} options={{ title: "Home"}}/>
                <Tab.Screen name="city" component={City} options={{ title: "City"}}/>
                <Tab.Screen name="aboutus" component={Aboutus} options={{ title: "About us"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}