import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(0,0,0,0.5)", // półprzezroczyste tło
    padding: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.3)", // półprzezroczyste tło dla pól tekstowych
    width: "100%",
    marginBottom: 10,
    padding: 15,
    borderRadius: 5,
    color: "white",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)", // półprzezroczyste tło dla przycisku
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Register;
