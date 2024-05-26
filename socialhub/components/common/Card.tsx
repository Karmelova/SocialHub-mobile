import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import StringAvatar from "./StringAvatar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface CardProps {
  type: "post" | "album" | "photo" | "user";
  id: number;
  userId: string;
  userName: string;
  name: string;
  title?: string;
  description?: string;
  image?: string;
}

function Card({
  type,
  id,
  title,
  description,
  image,
  userId,
  userName,
  name,
}: CardProps) {
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const navigation = useNavigation();

  const onPressDelete = (type, id) => {
    switch (type) {
      case "post":
        deletePost(id);
        break;
      case "album":
        deleteAlbum(id);
        break;
      default:
        console.error("Unknown type:", type);
    }
    setIsHidden(true);
    console.log("Card hidden");
  };

  const deletePost = async (postId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      });
      console.log("post deleted");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  const deleteAlbum = async (albumId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
        method: "DELETE",
      });
      console.log("album deleted");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
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

  const navigateToPostDetails = () => {
    //@ts-expect-error
    navigation.navigate("PostDetails", { id });
  };

  const navigateToUserProfile = () => {
    //@ts-expect-error
    navigation.navigate("UserProfile", { userId });
  };

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
                <TouchableOpacity style={{ alignSelf: "center" }}  onPress={navigateToUserProfile}>
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
                    <TouchableOpacity onPress={navigateToPostDetails}>
                      <Text style={styles.actionButton}>COMMENTS</Text>
                    </TouchableOpacity>
                  )}
                  {type === "album" && (
                    <TouchableOpacity>
                      <Text style={styles.actionButton}>VIEW PHOTOS</Text>
                    </TouchableOpacity>
                  )}
                  {loggedInUserId === userId && (
                    <TouchableOpacity onPress={() => onPressDelete(type, id)}>
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
