import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StringAvatar from "./StringAvatar";

export default function Account() {
  const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [forceReload, setForceReload] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedUserId = await AsyncStorage.getItem('userId'); // Pobieranie userId z AsyncStorage
      if (storedEmail && storedUserId) {
        setLoggedIn(true);
        setUserId(storedUserId); // Ustawienie userId w stanie
      }
    };
    checkLoginStatus();
  }, [forceReload]);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    setLoggedIn(false);
  };

  const handleOnNavigate = () => {
    setForceReload(true); // Trigger the reload
    //@ts-expect-error
    navigation.navigate("LoginForm");
  };

  return (
    <View>
      {loggedIn ? (
        // If user is logged in, display Avatar
        <View>
           {userId && <StringAvatar userId={userId} />}
          <TouchableOpacity
            onPress={handleLogout}
            style={{ backgroundColor: "#d62246", padding: 8, borderRadius: 8, marginTop: 10 }}
          >
            <Text style={{ color: "white" }}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
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
