import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function ChangeEmailForm(props) {
    const { email, setShowModal, toastRef, setReloadUserInfo } = props; // destructuring
    const [formData, setFormData] = useState(defaultValue());
    const [showPassword, setShowPassword] = useState(false);    // show password or not

    const onChange = (e, type) => {     // e: event, type: type of input (email or password) 
        setFormData({
            ...formData,
            [type]: e.nativeEvent.text
        });
    };

    const onSubmit = () => {    // submit form
        console.log('Formulario enviado');
    };
    return (
        <View style={styles.view}>
            <Input
                placeholder="Email"
                containerStyle={styles.input}
                defaultValue={email || ''}
                rightIcon={{
                    type: 'material-community',
                    name: 'at',
                    color: '#c2c2c2',
                }}
                onChange={(e) => onChange(e, 'email')}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showPassword ? false : true} //si es true es password, si es false es text
                rightIcon={{
                    type: 'material-community',
                    name: showPassword ? 'eye-off-outline' : 'eye-outline', //si es true es password, si es false es text
                    color: '#c2c2c2',
                    onPress: () => setShowPassword(!showPassword)  //si es true es password, si es false es text
                }}
                onChange={(e) => onChange(e, 'password')}
            />
            <Button
                title="Cambiar email"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
            />
        </View>
    );
};

function defaultValue() {
    return {
        email: '',
        password: '',
    };
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        marginBottom: 10,
    },
    btnContainer: {
        marginTop: 20,
        width: '95%',
    },
    btn: {
        backgroundColor: '#00a680',
    },
});