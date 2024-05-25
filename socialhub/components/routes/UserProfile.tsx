// UserProfile.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGetUser } from '../../api/users/useGetUser';
import NavbarTop from '../common/NavbarTop';

function UserProfile({ route }) {
  const { userId } = route.params;
  const user = useGetUser(userId);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  return (
    <View>
        <NavbarTop></NavbarTop>
        
      {userData ? (
        <>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.email}>{userData.email}</Text>
          <Text style={styles.bio}>{userData.bio}</Text>
        </>
      ) : (
        <Text style={styles.error}>User not found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default UserProfile;
