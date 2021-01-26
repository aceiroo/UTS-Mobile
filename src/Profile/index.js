import React, { useState } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import 'firebase/firestore';
import react from 'react';

const Profile = () => {


const [name,setName] = react.useState('');
const [age ,setAge] = react.useState('');
const [occupation ,setOccupation] = react.useState('');
const [image ,setImage] = react.useState('');
const [image2, setImage2] = react.useState('null');

const db = firebase.firestore();
const UsersR = db.collection('Users').doc(firebase.auth().currentUser.uid);

const updateProfile = () => {
  UsersR.get().then((res) => {
    setName(res.data().name);
    setAge(res.data().age);
    setOccupation(res.data().occupation);
    setImage(res.data().profileImage);
  })
}

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage2(result.uri);

    }

  };

const handlesave = () => {
        firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).set({
            profileImage : image2
        },{merge : true});
        console.log("last");
};

const deleteimage = () => {
    db.collection('Users').doc(firebase.auth().currentUser.uid).update({
      profileImage : firebase.firestore.FieldValue.delete()
    });
}


handlesave();
updateProfile();

 
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          style={styles.imageProfile}
          source={{uri:image}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={() => {pickImage()}} >
          <Image
              style={styles.imageEdit}
              source={require('./edit.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { deleteimage()}} >
          <Image
              style={styles.imageDelete}
              source={require('./trash.png')}
          />
        </TouchableOpacity>
      </View>


     {/*<TouchableOpacity style={styles.button} onPress={() => { pickImage()}} >
        <Text style={{ color: "white" }}>Change photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { deleteimage()}} >
        <Text style={{ color: "white" }}>Delete</Text>
  </TouchableOpacity>*/}

      <Text style={styles.textProfile}>Profile</Text>
      <Text style={styles.textName}>Name</Text>
      <Text style={styles.textName1}>{name}</Text>
      <Text style={styles.textAge}>Age</Text>
      <Text style={styles.textAge1}>{age}</Text>
      <Text style={styles.textOccupation}>Occupation</Text>
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
    marginTop: -90,
    borderRadius: 80,
    width: 120,
    height: 120,
  },button: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#2d3030",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10
  },textName: {
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 20,
  },textName1: {
    fontSize: 16,
  },textProfile: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 30
  },textAge:{
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },textAge1: {
    fontSize: 16,
  },textOccupation: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },textStudent: {
    fontSize: 16,
  },imageEdit: {
    width: 25,
    height: 25,
    marginRight: 8
  },imageDelete: {
    width: 25,
    height: 25
  }
});


export default Profile;