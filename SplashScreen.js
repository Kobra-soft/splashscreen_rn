import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        console.log('SplashScreen mounted');
        setTimeout(() => {
          console.log('Timeout reached, navigating to MainScreen');
          navigation.replace('MainScreen');
        }, 2750);
      }, []);

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require('./airbnb-logo-black.json')}
        autoPlay
        speed={0.5}
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    /* backgroundColor: '#00ffaf', */
    /* backgroundColor: '#a200ff', */
  },
  animation: {
    width: 400,
    height: 400,
  },
});

export default SplashScreen;