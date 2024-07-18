import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const SignupScreen = ({ navigation = null }) => {
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Example flag icons or images for countries
  const countryFlags = {
    USA: '🇺🇸',
    Canada: '🇨🇦',
    UK: '🇬🇧',
    Germany: '🇩🇪',
    France: '🇫🇷',
    Australia: '🇦🇺',
    Japan: '🇯🇵',
    India: '🇮🇳',
    Brazil: '🇧🇷',
    China: '🇨🇳',
    Russia: '🇷🇺',
    'South Africa': '🇿🇦',
    Mexico: '🇲🇽',
    Spain: '🇪🇸',
    Italy: '🇮🇹',
    Netherlands: '🇳🇱',
    Switzerland: '🇨🇭',
    Sweden: '🇸🇪',
    Norway: '🇳🇴',
    // Add more country flags as needed
  };

  // Array of countries sorted alphabetically
  const countries = [
    { label: 'Select Country', value: '' },
    { label: `Australia ${countryFlags.Australia}`, value: 'Australia' },
    { label: `Brazil ${countryFlags.Brazil}`, value: 'Brazil' },
    { label: `Canada ${countryFlags.Canada}`, value: 'Canada' },
    { label: `China ${countryFlags.China}`, value: 'China' },
    { label: `France ${countryFlags.France}`, value: 'France' },
    { label: `Germany ${countryFlags.Germany}`, value: 'Germany' },
    { label: `India ${countryFlags.India}`, value: 'India' },
    { label: `Italy ${countryFlags.Italy}`, value: 'Italy' },
    { label: `Japan ${countryFlags.Japan}`, value: 'Japan' },
    { label: `Mexico ${countryFlags.Mexico}`, value: 'Mexico' },
    { label: `Netherlands ${countryFlags.Netherlands}`, value: 'Netherlands' },
    { label: `Norway ${countryFlags.Norway}`, value: 'Norway' },
    { label: `Russia ${countryFlags.Russia}`, value: 'Russia' },
    { label: `South Africa ${countryFlags['South Africa']}`, value: 'South Africa' },
    { label: `Spain ${countryFlags.Spain}`, value: 'Spain' },
    { label: `Sweden ${countryFlags.Sweden}`, value: 'Sweden' },
    { label: `Switzerland ${countryFlags.Switzerland}`, value: 'Switzerland' },
    { label: `UK ${countryFlags.UK}`, value: 'UK' },
    { label: `USA ${countryFlags.USA}`, value: 'USA' },
    // Add more countries here as needed
  ].sort((a, b) => a.label.localeCompare(b.label)); // Sort alphabetically by label

  const handleSignup = () => {
    // Perform validation checks
    if (!firstName || !username || !dateOfBirth || !country || !email || !password || !confirmPassword) {
      Alert.alert('Validation Error', 'Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match.');
      return;
    }

    // Assuming signup logic (API call, authentication) is successful
    // Example: Navigate to a success screen or display a success message
    Alert.alert('Signup Successful', 'You have successfully signed up.');

    // Clear form fields after successful signup
    setFirstName('');
    setUsername('');
    setDateOfBirth('');
    setCountry('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateOfBirth(date.toDateString());
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        style={[styles.input, styles.boldText]}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Username"
        style={[styles.input, styles.boldText]}
        value={username}
        onChangeText={setUsername}
      />
      <View style={[styles.input, styles.dateInputContainer]}>
        <TextInput
          placeholder="Date of Birth"
          style={[styles.dateInput, styles.boldText]}
          value={dateOfBirth}
          editable={false}
          onTouchStart={showDatePicker} // Open calendar on touch
        />
        <TouchableOpacity style={styles.calendarIcon} onPress={showDatePicker}>
          <Icon name="calendar" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={[styles.input, styles.boldText, styles.pickerContainer]}>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
        >
          {countries.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
      <TextInput
        placeholder="Email"
        style={[styles.input, styles.boldText]}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input, styles.boldText]}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={[styles.input, styles.boldText]}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Signup</Text>
      </TouchableOpacity>
      <Text style={styles.orText}><Text style={styles.boldText}>OR continue with</Text></Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.google]}>
          <Icon name="google" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.apple]}>
          <Icon name="apple" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.linkedin]}>
          <Icon name="linkedin" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.instagram]}>
          <Icon name="instagram" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
          <Icon name="facebook" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        headerTextIOS="Pick a Date"
        cancelTextIOS="Cancel"
        confirmTextIOS="Confirm"
        datePickerModeAndroid="calendar"
        display="compact"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateInput: {
    flex: 1,
  },
  calendarIcon: {
    paddingHorizontal: 10,
  },
  pickerContainer: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  signupButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  signupButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  google: {
    backgroundColor: '#DB4437',
  },
  apple: {
    backgroundColor: '#000000',
  },
  linkedin: {
    backgroundColor: '#0E76A8',
  },
  instagram: {
    backgroundColor: '#E4405F',
  },
  facebook: {
    backgroundColor: '#4267B2',
  },
  link: {
    color: 'blue',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default SignupScreen;
