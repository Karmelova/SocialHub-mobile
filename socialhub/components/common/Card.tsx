import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import StringAvatar from "./StringAvatar";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardProps {
  type: "post" | "album" | "photo" | "user";
  key: number;
  userId: string;
  userName: string;
  name: string;
  title?: string;
  description?: string;
  image?: string;
  onPress?: () => void;
}

function Card({
  type,
  title,
  description,
  image,
  onPress,
  userId,
  userName,
  name,
}: CardProps) {
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const onPressDelete = () => {
    setIsHidden(true);
    console.log("Card hidden");
  };

  useEffect(() => {
    const fetchLoggedInUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        setLoggedInUserId(userId);
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      }
    };

    fetchLoggedInUserId();
  }, []);

  return (
    <>
      {!isHidden && (
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <StringAvatar
                userId={userId}
                name={userName}
                color="lightgray"
                size="small"
              />
              <View style={{ flexGrow: 1 }}>
                <Text>{name}</Text>
                <Text>@{userName}</Text>
              </View>
              {type === "user" && (
                <TouchableOpacity style={{ alignSelf: "center" }}>
                  <Text style={styles.actionButton}>VIEW PROFILE</Text>
                </TouchableOpacity>
              )}
            </View>

            {type !== "user" && (
              <View>
                <View style={styles.cardContent}>
                  {image && (
                    <Image source={{ uri: image }} style={styles.image} />
                  )}
                  <Text style={styles.title}>{title}</Text>
                  {description && (
                    <Text style={styles.description}>{description}</Text>
                  )}
                </View>
                <View style={styles.cardActions}>
                  {type === "post" && (
                    <TouchableOpacity>
                      <Text style={styles.actionButton}>COMMENTS</Text>
                    </TouchableOpacity>
                  )}
                  {type === "album" && (
                    <TouchableOpacity>
                      <Text style={styles.actionButton}>VIEW PHOTOS</Text>
                    </TouchableOpacity>
                  )}
                  {loggedInUserId === userId && type !== "user" && (
                    <TouchableOpacity onPress={onPressDelete}>
                      <Text style={styles.deleteButton}>DELETE</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  hidden: {
    height: 0,
    overflow: "hidden",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "lightgray",
    borderWidth: 1,
    overflow: "hidden",
    padding: 10,
  },
  cardHeader: {
    flexDirection: "row",
    gap: 10,
  },
  cardContent: {
    padding: 5,
  },
  cardActions: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 5,
    fontSize: 16,
    color: "#666",
  },
  actionButton: {
    borderRadius: 50,
    padding: 6,
    color: "black",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "center",
  },
  deleteButton: {
    borderRadius: 50,
    padding: 6,
    color: "red",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
    textAlign: "center",
  },
});

export default Card;