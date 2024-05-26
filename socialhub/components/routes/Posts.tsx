import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Card from "../common/Card";
import { useGetPosts } from "../../api/posts/useGetPosts";
import { useGetUsers } from "../../api/users/useGetUsers";
import NavbarTop from "../common/NavbarTop";
import { ScrollView } from "react-native-gesture-handler";

function Posts() {
  const posts = useGetPosts();
  const users = useGetUsers();

  if (!posts || !users) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View>
      <NavbarTop />
      <ScrollView>
        {posts.map((post) => {
          const user = users.find((user) => user.id === post.userId);
          return (
            <Card
              type="post"
              key={post.id}
              title={post.title}
              description={post.body}
              userId={user.id.toString()}
              name={user.name}
              userName={user.username}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Posts;
