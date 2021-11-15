import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecentlySearched from "../screens/RecentlySearched";

const Stack = createStackNavigator();

export default function RecentlySearchedStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="searched-citys"
                component={RecentlySearched}
                options={{title:"Last searched"}}
            />
        </Stack.Navigator>
    )
}