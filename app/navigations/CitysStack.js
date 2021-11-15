import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import City from "../screens/City";

const Stack = createStackNavigator();

export default function CitysStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="citys"
                component={City}
                options={{title:"Citys"}}
            />
        </Stack.Navigator>
    )
}