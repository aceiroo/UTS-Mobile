import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#2d3030",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 120,
    paddingRight: 120
  },buttonR: {
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "#2d3030",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 116,
    paddingRight: 116
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
  },forgot: {
    flexDirection: "row",
  }
});
 

const SignInScreen = ({onSignIn, navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{fontWeight: "bold", fontSize: 30, paddingBottom: 20}}>Sign in</Text>

        <TextInput style={styles.textUser} placeholder="Username/Email"/>
        <TextInput style={styles.textPass} placeholder="Password" secureTextEntry={true}/>

        <View>
          <TouchableOpacity style={styles.button} onPress={onSignIn}>
            <Text style={{color: "white"}}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={styles.buttonR} onPress={() => navigation.navigate('Sign Up')}>
              <Text style={{color: "white"}}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.forgot}>
         <Text style={{paddingTop: 10}}>Forgot your password?</Text>
         <Text style={{paddingTop: 10}} onPress={() => navigation.navigate('Password Forget')}> Click here</Text> 
        </View>

      
    </View>


  );
};
 
export default SignInScreen