import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useGetUser } from '../../api/users/useGetUser';
import { useNavigation } from '@react-navigation/native';

interface StringAvatarProps {
  userId: string;
  name: string;
}

function StringAvatar(props: StringAvatarProps) {
  const { userId } = props;
  const user = useGetUser(userId);
  const navigation = useNavigation();

  const initials = user ? user.name.split(' ').map(word => word.charAt(0)).join('') : 'NA';

  const handleAvatarPress = () => {
    //@ts-expect-error
    navigation.navigate('UserProfile', { userId });
  };

  return (
    <View>
      <Avatar
        rounded
        size="small"
        title={initials}
        onPress={handleAvatarPress}
        activeOpacity={0.7}
        containerStyle={{}}
        overlayContainerStyle={{ backgroundColor: '#d62246' }}
      />
    </View>
  );
}

export default StringAvatar;
