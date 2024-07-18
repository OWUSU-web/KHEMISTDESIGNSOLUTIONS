import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const username = route.params?.username; // Assuming username is passed via navigation params

  return (
    <View style={styles.container}>
      {/* Navigation Arrow */}
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={() => navigation.goBack()} // Example for going back
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* Profile Dashboard Icon */}
        <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('ProfileDashboard')}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
        </TouchableOpacity>

        {/* Hi, Username with Navigation */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.headerText}>Hi, {username}</Text>
        </TouchableOpacity>
      </View>

      {/* Dashboard Text */}
      <Text style={styles.dashboardText}>What would you like to learn today?</Text>
      
      {/* Dashboard Placeholder */}
      <View style={styles.dashboard}>
        <Text style={styles.dashboardItemText}>Courses</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  arrowContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    marginTop: 80, // Adjusted marginTop to lower the header section
    paddingRight: 20,
  },
  profileIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4, // Adjusted marginTop to align with the profile icon
  },
  dashboardText: {
    fontSize: 18,
    marginTop: 20,
  },
  dashboard: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
