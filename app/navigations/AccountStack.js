import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function AccountStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="citys"
            component={Account}
            options={{title:"Login"}}
            />
        </Stack.Navigator>
    )
}