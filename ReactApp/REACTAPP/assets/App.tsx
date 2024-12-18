import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Correct import
import { StackNavigationProp } from '@react-navigation/stack';


// Define types for navigation
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

const App = () => {
  // Use navigation hook with the type defined
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>(); // Correct type for navigation

  return (
    <View style={styles.container}>
      {/* Top Section with Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/pics/icon.png')}  // Corrected path to the image
          style={styles.image}
        />
      </View>

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
    backgroundColor: '#F0C8E3',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  imageContainer: {
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  paragraph: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#E64CAD',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 10,
    borderColor: '#3498DB',
    borderWidth: 1,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
