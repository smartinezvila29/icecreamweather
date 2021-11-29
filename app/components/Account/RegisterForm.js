import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button} from 'react-native-elements';
import { validateEmail } from '../../utils/Validations';
import Loading from '../Loading';
import { size, isEmpty } from 'lodash';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function RegisterForm(props) {
    const { toastRef } = props;
    const [showPass, setShowPass] = useState(false);
    const [showRepeatPass, setShowRepeatPass] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const onSubmit = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)) {
            toastRef.current.show('Todos los campos son obligatorios');
        }else if (!validateEmail(formData.email)) {
            toastRef.current.show('El email no es correcto');
        }else if (formData.password !== formData.repeatPassword) {
            toastRef.current.show('Las contraseñas tienen que ser iguales');
        }else if (size(formData.password) < 6) {
            toastRef.current.show('La contaseña tiene que tener al menos 6 caracteres');
        }else {
            setLoading(true);
            firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(() => {
                setLoading(false);
                navigation.navigate('accounts');
            })
            .catch(() => {
                setLoading(false);
                toastRef.current.show('El email ya está en uso')
            });
        }
    };

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text})
    };

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo electrónico'
                containerStyle={styles.inputForm}
                onChange={e => onChange(e, 'email')}
                rightIcon={
                    <Icon
                        type='material-community'
                        name='at'
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder='Constraseña'
                containerStyle={styles.inputForm}
                onChange={(e) => onChange(e, 'password')}
                password={true}
                secureTextEntry={showPass ? false : true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showPass ? 'eye-off-outline' : 'eye-outline'}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPass(!showPass)}
                    />
                }
            />
            <Input
                placeholder='Repetir contraseña'
                containerStyle={styles.inputForm}
                onChange={(e) => onChange(e, 'repeatPassword')}
                password={true}
                secureTextEntry={showRepeatPass ? false : true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showRepeatPass ? 'eye-off-outline' : 'eye-outline'}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowRepeatPass(!showRepeatPass)}
                    />
                }
            />
            <Button
                title='Unirse'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} text='Creando cuenta'/>
        </View>
    );
};

function defaultFormValue(){
    return {
        email: '',
        password: '',
        repeatPassword: '',
    };
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    inputForm: {
        width: '100%',
        marginTop: 20,
    },
    btnContainerRegister: {
        marginTop: 20,
        width: '95%',
    },
    btnRegister: {
        backgroundColor: '#00a680',
    },
    iconRight: {
        color: '#c1c1c1',
    }
});