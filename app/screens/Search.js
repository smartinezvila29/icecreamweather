import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { SearchBar, ListItem, Icon } from "react-native-elements";
/* import { FireSQL } from "firesql";
import firebase from "firebase"; */

//const fireSQL = new FireSQL(firebase.firestore(), { includeId: 'id'});

export default function Search(props) {
    const { navigation } = props;
    const [search, setSearch ] = useState('')
    const [searcCity, setSearchCity ] = useState([])

    useEffect(() => {
        
    }, [search])


    return (
        <View>
            <SearchBar
                placeholder='Busca una ciudad'
                onChangeText={(e) => setSearch(e)}
                value={search}
                containerStyle={styles.searchBar}
            />
        </View>
        );
};

const styles = StyleSheet.create({
    searchBar : {
        marginBottom: 20,
    }
})