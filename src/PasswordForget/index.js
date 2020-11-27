import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
    alignItems: 'center',
    justifyContent: 'center',
  },textUser: {
    marginTop: 5,
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 91,
    maxWidth: 286,
    paddingRight: 91,
    padding: 8
  }, textPass: {
    marginTop: 5,
    borderColor: "#777",
    borderWidth: 1,
    maxWidth: 286,
    borderRadius: 10,
    paddingLeft: 110,
    paddingRight: 110,
    padding: 8
  },button:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#2d3030",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 120,
    paddingRight: 120
  }
});
 
const PasswordForgetScreen = ({onSignIn,navigation}) => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={{marginBottom: 5, fontWeight: "bold"}}>Enter your email</Text>
        <TextInput style={styles.textUser} />
        <Text style={{marginTop: 17, fontWeight: "bold"}}>Enter your new password</Text>
        <TextInput style={styles.textPass} secureTextEntry={true}/>
        <Text style={{marginTop: 17, fontWeight: "bold"}}>Confirm your password</Text>
        <TextInput style={styles.textPass}secureTextEntry={true}/>

        <TouchableOpacity style={styles.button} onPress={onSignIn} >
          <Text style={{color: "white"}}>Confirm</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
 
export default PasswordForgetScreen;