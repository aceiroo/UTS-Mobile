import React, { useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import * as firebase from 'firebase';
import react from 'react';

const Profile = () => {

const [name,setName] = react.useState('');
const [age ,setAge] = react.useState('');
const [occupation ,setOccupation] = react.useState('');

const db = firebase.firestore();
const UsersR = db.collection('Users').doc(firebase.auth().currentUser.uid);

UsersR.get().then((res) => {
  setName(res.data().name);
  setAge(res.data().age);
  setOccupation(res.data().occupation);
})

  return (
    <View style={styles.container}>
        <Image
          style={styles.imageProfile}
          source={require('./profile.png')}
      />
      <Text style={styles.textProfile}>Profile</Text>
      <Text style={styles.textName}>Name</Text>
      <Text style={styles.textName1}>{name}</Text>
      <Text style={styles.textAge}>Age</Text>
      <Text style={styles.textAge1}>{age}</Text>
      <Text style={styles.textOccupation}>Ocupation</Text>
      <Text style={styles.textStudent}>{occupation}</Text>
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
    //marginLeft: -82 
  },textName1: {
    fontSize: 16,
    //marginLeft: -95 ,
  },textProfile: {
    fontWeight: "bold",
    fontSize: 30
  },textAge:{
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
    //marginLeft: -100 
  },textAge1: {
    fontSize: 16,
    //marginLeft: -120
  },textOccupation: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
    //marginLeft: -45 
  },textStudent: {
    fontSize: 16,
    //marginLeft: -87 
  }
});


export default Profile;