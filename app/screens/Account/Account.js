import React, { userState, userEffect } from "react";
import { View, Text} from "react-native";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
    const [login, setLogin] = useState(null);

    userEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true);
        });
    }, []);

    if(login === null) {
        return <Text>Cargando...</Text>;
    }
    
    return login ? <UserLogged /> : <UserGuest />;
}