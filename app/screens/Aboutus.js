import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { color } from "react-native-reanimated";

export default function Aboutus() {
  return (
    <ScrollView stayle={{ flex: 1, backgroundColor: "#6ED4C8" }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.banner}
          source={require("../assets/img/climapp_banner.png")}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}> About Us</Text>
        <ScrollView horizontal>
          <View>
            <Image
              style={styles.presentar}
              source={require("../assets/img/santiago_martinez.png")}
            />
          </View>
          <View>
            <Image
              style={styles.presentar}
              source={require("../assets/img/iara_olivera.png")}
            />
          </View>
          <View>
            <Image
              style={styles.presentar}
              source={require("../assets/img/gaston_figueredo.png")}
            />
          </View>
          <View>
            <Image
              style={styles.presentar}
              source={require("../assets/img/cristian_sanhueza.png")}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}> About Application</Text>
        <View>
          <Image
            style={styles.foot}
            source={require("../assets/img/gpl.png")}
          />
        </View>
        <View>
          <Image
            style={styles.foot}
            source={require("../assets/img/fin.png")}
          />
        </View>
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
