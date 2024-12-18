import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Get things done with Todo</Text>
        <Text style={styles.paragraph}>
          Hello, how are you? Welcome! Let's get it done. Welcome to my vlog.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register Screen</Text>
      <Text style={styles.paragraph}>This is where the registration happens.</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        placeholderTextColor="#555"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#555"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#555"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor="#555"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Login')}
        >
          Sign in
        </Text>
      </Text>
    </View>
  );
}

function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#555"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#555"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </Text>
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0C8E3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#FFF5F5',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    fontStyle: 'italic',
    color: '#000',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  button: {
    backgroundColor: '#E64CAD',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 10,
    borderColor: '#3498DB',
    borderWidth: 1,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});

export default App;
