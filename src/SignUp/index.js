import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
 
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
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold", fontSize: 30, paddingBottom: 20}}>Sign Up</Text>

      <View>
        <Text style={{marginBottom: 5, fontWeight: "bold"}}>Enter your email</Text>
        <TextInput style={styles.textUser} />
        <Text style={{marginTop: 17, fontWeight: "bold"}}>Enter your password</Text>
        <TextInput style={styles.textPass} secureTextEntry={true}/>

        <TouchableOpacity style={styles.button} onPress={onSignUp}>
          <Text style={{color: "white"}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
export default SignUpScreen