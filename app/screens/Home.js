import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { color } from "react-native-reanimated";

export default function Home() {
    return (
    <ScrollView style={{ flex: 1, backgroundColor: "#80CED6" }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.banner}
          source={require("../assets/img/climapp_banner.png")}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}> Home Page</Text>
      </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    banner: {
      height: 200,
      flex: 1,
    },
    titulo: {
      fontWeight: "bold",
      fontSize: 24,
      marginVertical: 10,
      textAlign: "center",
      color: "#002973"
    },
    contenedor: {
      marginHorizontal: 10,
    },
    presentar: {
      width: 330,
      height: 250,
      marginRight: 10,
    },
    foot:{
        width:'100%',
        height:250,
        marginVertical:5
    }
  });