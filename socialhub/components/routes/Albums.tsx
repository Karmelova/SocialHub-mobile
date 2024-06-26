import { ActivityIndicator, View } from "react-native";
import NavbarTop from "../common/NavbarTop";
import { useGetAlbums } from "../../api/albums/useGetAlbums";
import { useGetUsers } from "../../api/users/useGetUsers";
import Card from "../common/Card";
import { ScrollView } from "react-native-gesture-handler";

export default function Albums() {
  const albums = useGetAlbums();
  const users = useGetUsers();



  if (!albums || !users) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View>
      <NavbarTop />
      <ScrollView style={{marginBottom:70}}>
        {albums.map((album) => {
          const user = users.find((user) => user.id === album.userId);
          if (!user) {
            return null;
          }
          return (
            <Card
              id={album.id}
              title={album.title}
              type="album"
              userId={album.userId.toString()}
              name={user.name}
              userName={user.username}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
