import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutUs from "../screens/AboutUs";

const Stack = createStackNavigator();

export default function AboutUsStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="aboutus"
                component={AboutUs}
                options={{title:"About Us"}}
            />
        </Stack.Navigator>
    )
}