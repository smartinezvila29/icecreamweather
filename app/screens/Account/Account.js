import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import  Loading from '../../components/Loading'
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

export default function Accounts(){
    const [login, setLogin] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            !user ? setLogin(false) : setLogin(true);
        })
    }, []);

    if(login === null) return <Loading isVisible={true} text='Cargando...'/>;

    return login ? <UserLogged/> : <UserGuest/>;
};