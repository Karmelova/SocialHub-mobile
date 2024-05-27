import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, Image, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import NavbarTop from "../common/NavbarTop";

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = await Promise.all([
          fetch("https://images.pexels.com/photos/2029596/pexels-photo-2029596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1").then(res => res.url),
          fetch("https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1").then(res => res.url),
          fetch("https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1").then(res => res.url),
          fetch("https://images.pexels.com/photos/4406642/pexels-photo-4406642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1").then(res => res.url)
        ]);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.outerContainer}>
      <NavbarTop />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to SocialHub</Text>
          <Text style={styles.subtitle}>Connect, share, and discover with SocialHub.</Text>

          <Image source={{ uri: images[0] }} style={styles.image} />

          <Text style={styles.sectionTitle}>Share Your Moments</Text>
          <Text style={styles.text}>
            Capture and share your favorite moments with friends and family. Upload photos, create albums, and tell your story.
          </Text>

          <Image source={{ uri: images[1] }} style={styles.image} />

          <Text style={styles.sectionTitle}>Discover New Connections</Text>
          <Text style={styles.text}>
            Explore profiles, make new friends, and expand your social network. Connect with people who share your interests.
          </Text>

          <Image source={{ uri: images[2] }} style={styles.image} />

          <Text style={styles.sectionTitle}>Stay Updated</Text>
          <Text style={styles.text}>
            Follow your friends and favorite creators to stay updated on their latest posts and activities.
          </Text>

          <Image source={{ uri: images[3] }} style={styles.image} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#666",
    textAlign: "center",
  },
  image: {
    width: Dimensions.get("window").width - 32,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
