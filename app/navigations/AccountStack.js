import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from '../screens/Account/Account';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';

const Stack = createStackNavigator();

export default function AccountsStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='accounts'
                component={Accounts}
                options={{ title: 'Cuenta'}}
            />
            <Stack.Screen
                name='login'
                component={Login}
                options={{ title: 'Iniciar sesión'}}
            />
            <Stack.Screen
                name='register'
                component={Register}
                options={{ title: 'Registro'}}
            />
        </Stack.Navigator>
    );
}