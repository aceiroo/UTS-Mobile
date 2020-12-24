import react from 'react';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, button: {
    marginTop: 10
  }, textUser: {
    marginTop: 5,
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 10,
    width: 286,
    padding: 8
  }, textPass: {
    marginTop: 5,
    borderColor: "#777",
    borderWidth: 1,
    width: 286,
    borderRadius: 10,
    padding: 8
  }, button: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#2d3030",
    borderRadius: 10,
    padding: 10,
  }
});


const SignUpScreen = ({ onSignUp }) => {
  const [email, setEmail] = react.useState('');
  const [password, setPassword] = react.useState('');
  const [name, setName] = react.useState('');
  const [age, setAge] = react.useState('');
  const [occupation, setOccupation] = react.useState('');
  const [username, setUsername] = react.useState('');
  const [number, setNumber] = react.useState('');

  const onSignUpPressed = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid)
          .set({
            name: name,
            email: email,
            age: age,
            username: username,
            occupation: occupation,
            number: number,
          }).catch(err => {
            console.log(err);
          })
      }).catch((err) => {
        alert(err);
      })
  }


  return (

    <ScrollView  >


      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 30, paddingBottom: 20 }}>Sign Up</Text>
        <Text style={{ marginBottom: 5, fontWeight: "bold" }}>Enter your email</Text>
        <TextInput style={styles.textUser}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={{ marginTop: 17, marginBottom: 5, fontWeight: "bold" }}>Enter your password</Text>
        <TextInput style={styles.textPass} secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={{ marginBottom: 5, marginTop: 17, fontWeight: "bold" }}>Enter your name</Text>
        <TextInput style={styles.textUser}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={{ marginBottom: 5, marginTop: 17, fontWeight: "bold" }}>Enter your username</Text>
        <TextInput style={styles.textUser}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Text style={{ marginBottom: 5, marginTop: 17, fontWeight: "bold" }}>Enter your phone number</Text>
        <TextInput style={styles.textUser}
          value={number}
          onChangeText={(text) => setNumber(text)}
        />

        <Text style={{ marginBottom: 5, marginTop: 17, fontWeight: "bold" }}>Enter your age</Text>
        <TextInput style={styles.textUser}
          value={age}
          onChangeText={(text) => setAge(text)}
        />

        <Text style={{ marginTop: 17, marginBottom: 5, fontWeight: "bold" }}>Enter your occupation</Text>
        <TextInput style={styles.textPass}
          value={occupation}
          onChangeText={(text) => setOccupation(text)}
        />

        <TouchableOpacity style={styles.button} onPress={onSignUpPressed}>
          <Text style={{ color: "white" }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>


  );
};

export default SignUpScreen