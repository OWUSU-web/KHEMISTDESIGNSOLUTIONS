import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import IntroScreen from './screens/IntroScreen'; // Import IntroScreen
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const Stack = createStackNavigator();

const BackArrow = ({ navigation }) => (
  <Ionicons
    name="arrow-back"
    size={24}
    color="black"
    style={{ marginLeft: 10 }}
    onPress={() => navigation.goBack()}
  />
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Home"
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerLeft: () => <BackArrow navigation={navigation} />,
            headerTitle: '', // Remove header title if needed
          })}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={({ navigation }) => ({
            headerLeft: () => <BackArrow navigation={navigation} />,
            headerTitle: '', // Remove header title if needed
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}