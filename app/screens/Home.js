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
        <Text style={styles.titulo}>Home Page</Text>
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Bienvenido a ClimApp</Text>
        <Image
        style={styles.imageHome}
          source={require("../assets/img/clima.png")}
          />
        <Text style={styles.presentar}> Todo lo que necesitas saber del clima, en un solo sitio.</Text>
        
      </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    banner: {
      height: 200,
      flex: 1,
    },
    imageHome:{
      height: 350,
      width: 350,
    },
    titulo: {
      fontWeight: "bold",
      fontSize: 24,
      marginVertical: 10,
      textAlign: "center",
      color: "#002973",
      marginBottom: 20,
    },
    contenedor: {
      marginHorizontal: 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    presentar: {
      width: 330,
      height: 250,
      marginTop: 50,
    },
    foot:{
        width:'100%',
        height:250,
        marginVertical:5
    }
  });