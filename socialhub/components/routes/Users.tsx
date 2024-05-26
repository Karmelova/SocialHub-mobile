import React from "react";
import { useGetUsers } from "../../api/users/useGetUsers";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../common/Card";
import NavbarTop from "../common/NavbarTop";

export default function Users() {
  const users = useGetUsers();
  const navigation = useNavigation();

  if (!users) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }


  const renderItem = ({ item }) => (
    <Card
    type="user"
    id={item.id}
    userId={item.id.toString()}
    userName={item.username}
    name={item.name}
    >
    </Card>
  );

  return (
    <View>
      <NavbarTop />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
