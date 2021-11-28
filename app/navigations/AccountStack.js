import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login"
import Register from "../screens/Account/Register"

const Stack = createStackNavigator();

export default function AccountStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            style={styles.banner}
            source={require("../assets/img/climapp_banner.png")}
            name="citys"
            component={Account}
            options={{title:"Login"}}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{title:"Login"}}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{ title: "Registro" }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
        banner: {
        height: 200,
        flex: 1,
        backgroundColor: "#80CED6"
        }
    });