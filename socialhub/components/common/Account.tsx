import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


export default function Account() {

    const navigation = useNavigation();
    // @ts-expect-error
    const handleOnNavigate = () => navigation.navigate("Login");
  // State to track if the user is logged in
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform login actions here
    // For demonstration purposes, I'll just set loggedIn to true
    setLoggedIn(true);
  };

  return (
    <View>
      {loggedIn ? (
        // If user is logged in, display Avatar
        <Avatar
          rounded
          size="small"
          title="BP"
          onPress={() => console.log("Avatar pressed")}
          activeOpacity={0.7}
          containerStyle={{}}
          overlayContainerStyle={{ backgroundColor: "#d62246" }}
        />
      ) : (
        // If user is not logged in, display Login button
        <TouchableOpacity
        onPress={handleOnNavigate}
          style={{ backgroundColor: "#d62246", padding: 8, borderRadius: 8 }}
        >
          <Text style={{ color: "white" }}>LOGIN</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
