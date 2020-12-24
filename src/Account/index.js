import React from 'react';
import react from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as firebase from 'firebase';

const Account = () => {

const [email,setEmail] = react.useState('');
const [username ,setUsername] = react.useState('');
const [number ,setNumber] = react.useState('');

const db = firebase.firestore();
const UsersR = db.collection('Users').doc(firebase.auth().currentUser.uid);

UsersR.get().then((res) => {
  setEmail(res.data().email);
  setUsername(res.data().username);
  setNumber(res.data().number);
  setImage(res.data().profileImage);
})



  return (
    <View style={styles.container}>
        <Image
          style={styles.imageProfile}
          source={require('./profile.png')}
      />
      <Text style={styles.textProfile}>Account Details</Text>
      <Text style={styles.textEmail}>Email</Text>
      <Text style={styles.textEmail2}>{email}</Text>
      <Text style={styles.textUser}>Username</Text>
      <Text style={styles.textUser2}>{username}</Text>
      <Text style={styles.textNumber}>Number</Text>
      <Text style={styles.textNumber2}>{number}</Text>
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
    //marginLeft: -160 
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
    //marginLeft: -120 
  },textUser2:{
    fontSize: 16,
    //marginLeft: -148
  },textMale: {
    marginLeft: -95 
  },textNumber: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    //marginLeft: -139 
  },textNumber2: {
    fontSize: 16,
    //marginLeft: -105 
  }
});
 
export default Account;