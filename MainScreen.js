import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";

const MainScreen = () => {

  const [loaded, error] = useFonts({
    "Cereal-light":require("./assets/fonts/AirbnbCereal_W_Lt.otf"),
    "Cereal":require("./assets/fonts/AirbnbCereal_W_Bk.otf"),
    "Cereal-medium":require("./assets/fonts/AirbnbCereal_W_Md.otf"),
    "Cereal-bold":require("./assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Cereal-extra-bold":require("./assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Cereal-black":require("./assets/fonts/AirbnbCereal_W_Blk.otf"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Airbnb</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    /* backgroundColor: '#00ffaf', */
    /* backgroundColor: '#a200ff', */
  },
  welcome: {
    fontFamily: 'Cereal-extra-bold',
    fontSize:34,
    marginTop: 32,
    paddingLeft: 0,

  },
})

export default MainScreen