import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Linking } from "react-native";
import { Avatar, Divider, Tab } from "react-native-elements";
import { useGetUser } from "../../api/users/useGetUser";
import NavbarTop from "../common/NavbarTop";
import StringAvatar from "../common/StringAvatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserAlbums from "./UserAlbums";
import UserPosts from "./UserPosts";

export default function UserProfile({ route }) {
  const { userId } = route.params;
  const user = useGetUser(userId);
  const [userData, setUserData] = useState(null);

  const [value, setValue] = useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (user && user.id) {
      setUserData(user);
    }
  }, [user]);

  if (user && user.id) {
    return (
      <View>
        <NavbarTop />
        <ScrollView>
          <View style={styles.container}>
            <StringAvatar userId={userId} name={user.name} color="#d62246" size="xlarge" />
            <View style={styles.centered}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.username}>@{user.username}</Text>
            </View>

            <View>
              {user.email && (
                <View style={styles.infoContainer}>
                  <MaterialCommunityIcons name="email" color="black" size={26} />
                  <Text style={styles.infoText}>{user.email}</Text>
                </View>
              )}

              {user.address?.city && (
                <View style={styles.infoContainer}>
                  <MaterialCommunityIcons name="map-marker" color="black" size={26} />
                  <Text style={styles.infoText}>{user.address.zipcode}/{user.address.city}</Text>
                </View>
              )}

              {user.company?.name && (
                <View style={styles.infoContainer}>
                  <MaterialCommunityIcons name="city-variant" color="black" size={26} />
                  <Text style={styles.infoText}>{user.company.name}</Text>
                </View>
              )}

              {user.website && (
                <View style={styles.infoContainer}>
                  <MaterialCommunityIcons name="search-web" color="black" size={26} />
                  <TouchableOpacity onPress={() => Linking.openURL("https://www." + user.website)}>
                    <Text style={styles.websiteText}>{user.website}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <Divider />
          <Tab
            value={value}
            onChange={handleChange}
            indicatorStyle={styles.tabIndicator}
          >
            <Tab.Item
              title="POSTS"
              onPress={() => handleChange(0)}
              titleStyle={value === 0 ? styles.activeTabTitle : styles.inactiveTabTitle}
            />
            <Tab.Item
              title="ALBUMS"
              onPress={() => handleChange(1)}
              titleStyle={value === 1 ? styles.activeTabTitle : styles.inactiveTabTitle}
            />
          </Tab>
          <Divider />
          <View style={styles.tabContent}>
            {value === 0 && <UserPosts userId={userId} userName={user.name} name={user.name} />}  
            {value === 1 && <UserAlbums userId={userId} userName={user.name} name={user.name}/>}  
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <Text>There is no such user</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    color: "black",
    gap: 10,
    margin: 10,
  },
  centered: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    fontSize: 18,
    marginBottom: 10,
  },
  tabIndicator: {
    backgroundColor: "blue",
  },
  tabContent: {
    marginTop: 5,
  },
  activeTabTitle: {
    color: "#d62246",
  },
  inactiveTabTitle: {
    color: "black",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 5,
  },
  websiteText: {
    fontSize: 16,
    marginLeft: 5,
    color: "black",
  },
});

