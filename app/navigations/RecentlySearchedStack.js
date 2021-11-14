import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecentlyCitys from "../screens/RecentlyCitys";

const Stack = createStackNavigator();

export default function RecentlySearchedStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="searched-citys"
            component={RecentlyCitys}
            options={{title:"Last searched"}}
            />
        </Stack.Navigator>
    )
}