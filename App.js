import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashScreen'; // Import your custom splash screen component
import MainScreen from './MainScreen'; // Import your main screen component
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const App = () => {

  const [loaded, error] = useFonts({
    "Cereal-light":require("./assets/fonts/AirbnbCereal_W_Lt.otf"),
    "Cereal":require("./assets/fonts/AirbnbCereal_W_Bk.otf"),
    "Cereal-medium":require("./assets/fonts/AirbnbCereal_W_Md.otf"),
    "Cereal-bold":require("./assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Cereal-extra-bold":require("./assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Cereal-black":require("./assets/fonts/AirbnbCereal_W_Blk.otf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" >
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, headerTitle: "" }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: true, headerTitle: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
