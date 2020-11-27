import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {SafeAreaView, View,StyleSheet ,Text, Button, Image} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -150
    },imageHome: {
      width: 85,
      height: 85,
    }
  });
   
  const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageHome}
          source={require('./home.png')}
      />
        <Text style={{fontWeight: "bold", fontSize: 30}}>Home</Text>

      </View>
    );
  };
   
  export default HomeScreen;