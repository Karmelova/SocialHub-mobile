import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useGetUser } from '../../api/users/useGetUser';
interface StringAvatarProps {
  userId: string;
}

function StringAvatar(props: StringAvatarProps) {
  const { userId } = props;
  const user = useGetUser(userId);
  const [title, setTitle] = useState<string>('NA');

  useEffect(() => {
    if (user) {
      const initials = user.name
        .split(' ')
        .map(word => word.charAt(0))
        .join('');
      setTitle(initials);
    }
  }, [user]);

  return (
    <View>
      <Avatar
        rounded
        size="small"
        title={title}
        onPress={() => console.log('Avatar pressed')}
        activeOpacity={0.7}
        containerStyle={{}}
        overlayContainerStyle={{ backgroundColor: '#d62246' }}
      />
    </View>
  );
}

export default StringAvatar;
