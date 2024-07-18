import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example using FontAwesome, adjust as per your icon library

const LoginScreen = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);

  // Function to navigate to Home screen
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.rememberMe}>
          <Text style={styles.rememberMeText}>{rememberMe ? '✓ ' : ''}Remember Me</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.link, styles.forgotPassword]}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Don't have an account? Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.google]}>
          <Icon name="google" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.apple]}>
          <Icon name="apple" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.linkedin]}>
          <Icon name="linkedin" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.instagram]}>
          <Icon name="instagram" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
          <Icon name="facebook" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    opacity: 0.8,
  },
  rememberMeContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    color: 'black',
    marginLeft: 8,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue', // Example of custom button style
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjust as needed for spacing between icons
    width: '100%',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#4267B2', // Example background color, adjust as needed
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, // Adjust spacing between icons and links
  },
  google: {
    backgroundColor: '#DB4437',
  },
  apple: {
    backgroundColor: '#000000',
  },
  linkedin: {
    backgroundColor: '#0077B5',
  },
  instagram: {
    backgroundColor: '#E4405F',
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  link: {
    color: 'blue',
  },
  forgotPassword: {
    marginTop: 5, // Adjust spacing for Forgot Password link
  },
});

export default LoginScreen;
