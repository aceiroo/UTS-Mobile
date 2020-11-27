import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
 

 
const Profile = () => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.imageProfile}
          source={require('./profile.png')}
      />
      <Text style={styles.textProfile}>Profile</Text>
      <Text style={styles.textName}>Name</Text>
      <Text style={styles.textName1}>Audie Devanugraha</Text>
      <Text style={styles.textGender}>Gender</Text>
      <Text style={styles.textMale}>Male</Text>
      <Text style={styles.textOccupation}>Ocupation</Text>
      <Text style={styles.textStudent}>Student</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },imageProfile: {
    marginTop: -100,
    width: 85,
    height: 85,
  },textName: {
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 20,
    marginLeft: -82 
  },textName1: {
    fontSize: 16,
  },textProfile: {
    fontWeight: "bold",
    fontSize: 30
  },textGender:{
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
    marginLeft: -78 
  },textMale: {
    fontSize: 16,
    marginLeft: -105 
  },textOccupation: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
    marginLeft: -53 
  },textStudent: {
    fontSize: 16,
    marginLeft: -87 
  }
});


export default Profile;