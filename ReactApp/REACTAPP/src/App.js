import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define types for navigation
type RootStackParamList = {
  Home: undefined; // Home screen
  Register: undefined; // Register screen
};

const App = () => {
  // Use navigation hook with the type defined
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={styles.container}>
      {/* Middle Section with Heading and Paragraph */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Get things done with Todo</Text>
        <Text style={styles.paragraph}>
          Hello, how are you? Welcome! Let's get it done. Welcome to my vlog.
        </Text>
      </View>

      {/* Bottom Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')} // Navigate to Register screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0C8E3', // Light pink background
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Black color for heading
  },
  paragraph: {
    fontSize: 14,
    color: '#555', // Dark grey for paragraph
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#E64CAD', // Button pink
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 10,
    borderColor: '#3498DB',
    borderWidth: 1,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
