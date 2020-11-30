import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View,StyleSheet ,Text, Button, Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
      alignItems: 'stretch',
      marginTop: -150,
    },imageHome: {
      width: 85,
      height: 85,
    },textUser: {
      marginTop: 5,
      borderColor: "#777",
      borderWidth: 1,
      borderRadius: 20,
      width: 286,
      padding: 7,
    },red:{
      alignItems: 'center',
      justifyContent: 'center',
    },textHeart:{
      marginTop: 90,
      fontSize: 40,
      fontWeight: "bold",
    },textRate:{
      fontSize: 60,
      fontWeight: "bold",
      color: "white",
      marginTop: 25,
      textAlign: "center"
    },textBpm:{
      fontSize: 23,
      color: "white",
      textAlign: "center",
      paddingBottom: 130
    },circle: {
      backgroundColor: "#b31212",
      borderRadius: 10,
      width: 150,
      height: 150,
      borderRadius: 100,
      marginTop: 30
    },imageRate:{
      marginTop: 20,
      width: 300,
      height: 200
    },rate:{
     
    }
  });
   
  const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.red}>
          <Text style={styles.textHeart}>Heart rate</Text>
            <View style={styles.circle}>
              <Text style={styles.textRate}>91</Text>
              <Text style={styles.textBpm}>bpm</Text>
            </View>
            <View style={styles.rate}>
              <Image style={styles.imageRate} source={require('./rate.png')}/>
            </View>
        </View>
      
      </View>
    );
  };
   
  export default HomeScreen;