import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingLeft: 120,
    paddingRight: 120
  }
});
 
const PasswordChangeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={{marginBottom: 5, fontWeight: "bold"}}>Enter your current password</Text>
        <TextInput style={styles.textUser} secureTextEntry={true}/>
        <Text style={{marginTop: 17, fontWeight: "bold"}}>Enter your new password</Text>
        <TextInput style={styles.textPass} secureTextEntry={true}/>
        <Text style={{marginTop: 17, fontWeight: "bold"}}>Confirm your password</Text>
        <TextInput style={styles.textPass}secureTextEntry={true}/>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}> 
          <Text style={{color: "white"}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
export default PasswordChangeScreen;