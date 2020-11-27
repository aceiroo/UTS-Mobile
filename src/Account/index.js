import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
 

const Account = () => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.imageProfile}
          source={require('./profile.png')}
      />
      <Text style={styles.textProfile}>Account Details</Text>
      <Text style={styles.textEmail}>Email</Text>
      <Text style={styles.textEmail2}>audiedevanugraha@gmail.com</Text>
      <Text style={styles.textUser}>Username</Text>
      <Text style={styles.textUser2}>audie.59</Text>
      <Text style={styles.textNumber}>Number</Text>
      <Text style={styles.textNumber2}>+62818560445</Text>
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
  },textEmail: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 25,
    marginLeft: -160 
  },textEmail2: {
    marginLeft: 10,
    fontSize: 16,
  },textProfile: {
    fontWeight: "bold",
    fontSize: 20
  },textUser:{
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginLeft: -120 
  },textUser2:{
    fontSize: 16,
    marginLeft: -148
  },textMale: {
    marginLeft: -95 
  },textNumber: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginLeft: -139 
  },textNumber2: {
    fontSize: 16,
    marginLeft: -105 
  }
});
 
export default Account;