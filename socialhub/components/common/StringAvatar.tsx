import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useGetUser } from '../../api/users/useGetUser';
import { useNavigation } from '@react-navigation/native';

interface StringAvatarProps {
  userId: string;
}

function StringAvatar(props: StringAvatarProps) {
  const { userId } = props;
  const user = useGetUser(userId);
  const [title, setTitle] = useState<string>('NA');
  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
      const initials = user.name
        .split(' ')
        .map(word => word.charAt(0))
        .join('');
      setTitle(initials);
    }
  }, [user]);

  const handleAvatarPress = () => {
    //@ts-expect-error
    navigation.navigate('UserProfile', { userId });
  };

  return (
    <View>
      <Avatar
        rounded
        size="small"
        title={title}
        onPress={handleAvatarPress}
        activeOpacity={0.7}
        containerStyle={{}}
        overlayContainerStyle={{ backgroundColor: '#d62246' }}
      />
    </View>
  );
}

export default StringAvatar;
