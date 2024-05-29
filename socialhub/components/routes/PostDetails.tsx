import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useGetUser } from "../../api/users/useGetUser";
import { useGetPost } from "../../api/posts/useGetPost";
import { useGetCommentsByPostId } from "../../api/comments/useGetCommentsByPostId";
import Card from "../common/Card";
import NavbarTop from "../common/NavbarTop";

const CommentItem = ({ name, email, body }) => (
  <View style={styles.commentItem}>
    <Text style={styles.commentEmail}>{email}</Text>
    <Text style={styles.commentName}>{name}</Text>
    <Text style={styles.commentBody}>{body}</Text>
  </View>
);

export default function PostDetails({ route }) {
  const { id } = route.params;
  const post = useGetPost(Number(id));
  const userId = post?.userId?.toString();
  const user = useGetUser(userId || "");
  const comments = useGetCommentsByPostId(id || "");
  const navigation = useNavigation();

  if (!post || !user) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  const renderCommentItem = ({ item }) => (
    <CommentItem name={item.name} email={item.email} body={item.body} />
  );

  return (
    <View>
      <NavbarTop />
      <Card
        type="post"
        id={post.id}
        userId={post.userId.toString()}
        userName={user.username}
        name={user.name}
        title={post.title}
        description={post.body}
      />
      <View style={styles.commentsContainer}>
        <Text style={styles.commentsTitle}>Comment section:</Text>

        <FlatList
          data={comments}
          renderItem={renderCommentItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
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
    backgroundColor: "#fff",
  },
  commentsContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    maxHeight:490,
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  commentItem: {
    padding: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  commentName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  commentEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  commentBody: {
    fontSize: 14,
  },
});
