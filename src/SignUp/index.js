import react from 'react';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },button: {
    marginTop: 10
  },textUser: {
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
  },button:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#2d3030",
    borderRadius: 10,
    padding: 10,
  }
});


const SignUpScreen = ({onSignUp}) => {
  const [email,setEmail] = react.useState('');
  const [password,setPassword] = react.useState('');
 

  const onSignUpPressed = () => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{

        }).catch((err) => {
            alert(err);
        })
  }


  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold", fontSize: 30, paddingBottom: 20}}>Sign Up</Text>

      <View>
        <Text style={{marginBottom: 5, fontWeight: "bold"}}>Enter your email</Text>
        <TextInput style={styles.textUser} 
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={{marginTop: 17, fontWeight: "bold"}}>Enter your password</Text>
        <TextInput style={styles.textPass} secureTextEntry={true}
         value={password}
         onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={onSignUpPressed}>
          <Text style={{color: "white"}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
export default SignUpScreen