import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-elements";

function StringAvatar(props) {
  const{} = props
return(
    <View>
        <Avatar
          rounded
          size="small"
          title="BP"
          onPress={() => console.log("Avatar pressed")}
          activeOpacity={0.7}
          containerStyle={{}}
          overlayContainerStyle={{ backgroundColor: "#d62246" }}
        />
    </View>
);
}
export default StringAvatar;





