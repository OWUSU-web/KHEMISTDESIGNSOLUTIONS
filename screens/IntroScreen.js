// IntroScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

// Import your background image and logo from assets
import BackgroundImage from '../assets/h.jpg'; // Adjust the path as per your project structure
import LogoImage from '../assets/d.png'; // Adjust the path as per your project structure

const IntroScreen = ({ navigation }) => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
          KHEMIST SOFTWARE DEV. SERVICES.
        </Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.bottomButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 60, // Adjust the top position as needed
    alignItems: 'center',
  },
  logo: {
    width: 280, // Increase the width of the logo
    height: 280, // Increase the height of the logo
    resizeMode: 'contain', // Ensure the logo fits within its dimensions
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 21.5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', // Change text color to black
  },
  bottom: {
    position: 'stretch', // Positioning the bottom view absolutely
    bottom: 50, // Adjust the bottom position to move it higher or lower
    alignSelf: 'stretch', // Stretch the width to fit parent
    marginHorizontal: 30,
  },
  bottomButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IntroScreen;
