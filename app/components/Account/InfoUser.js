import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as firebase from 'firebase';
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from 'expo-image-picker';


export default function InfoUser(props) {
    const {
        userInfo: { uid, photoURL, displayName, email },
        toastRef,
        setLoading,
        setLoadingText,
    } = props;

    const changeAvatar = async () => {
        const resultPermission = await MediaLibrary.requestPermissionsAsync();
        if (resultPermission.status === 'denied') {
            toastRef.current.show('Es necesario aceptar los permisos de la galeria');
        }else{
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });
            if(result.cancelled){
                toastRef.current.show('Has cerrado la galeria sin seleccionar ninguna imagen');
            }else {
                uploadImage(result.uri).then(() => {
                    updatePhotoUrl();
                }).catch(() => {
                    toastRef.current.show('Error al actualizar la imagen de perfil');
                });
            };
        };
    };

    const uploadImage = async (uri) => {
        setLoadingText('Actualizando avatar...');
        setLoading(true);
        
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(`avatar/${uid}`);
        return ref.put(blob);
    };

    const updatePhotoUrl = () => {
        firebase
            .storage()
            .ref(`avatar/${uid}`)
            .getDownloadURL()
            .then(async (result) => {
                const update = {
                    photoURL: result
                };
                await firebase.auth().currentUser.updateProfile(update);
                //await firebase.auth().currentUser.reload();
                setLoading(false);
        })
        .catch(() => {
            toastRef.current.show('Error al actualizar la imagen de perfil');
            setLoading(false);
        });
    };

    return (
        <View style={styles.viewUserInfo} >
            <Avatar
                rounded
                size='large'
                showEditButton
                onEditPress={changeAvatar}
                containerStyle={styles.userInfoAvatar}
                source={photoURL ? {uri: photoURL} : require('../../assets/img/avatar-default.jpg')}
            />
            <View>
                <Text style={styles.displayName}>
                    {displayName ? displayName : 'Anónimo'}
                </Text>
                <Text>
                    {email ? email : 'Social Login'}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewUserInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        paddingTop: 30,
        paddingBottom: 30,
    },
    userInfoAvatar: {
        marginRight: 20,
    },
    displayName: {
        fontWeight: 'bold',
        paddingBottom: 10,
    }
});