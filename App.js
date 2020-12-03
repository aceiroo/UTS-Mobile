import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer, getFocusedRouteNameFromRoute, DrawerActions,} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View, Button,} from 'react-native';
import SignInScreen from './src/SignIn'
import SignUpScreen from './src/SignUp'
import PasswordForgetScreen from './src/PasswordForget'
import PasswordChangeScreen from './src/PasswordChange'
import HomeScreen from './src/Home'
import ProfileScreen from './src/Profile';
import AccountScreen from './src/Account';
import * as firebase from 'firebase';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem, } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();
 
const Tab = createBottomTabNavigator();
 
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
};
 
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => firebase.auth().signOut()} />
    </DrawerContentScrollView>
  );
}

const firebaseConfig = {
    apiKey: "AIzaSyClnjk9sRaPvnAxr6I2JslVUQYjuoqfPtw",
    authDomain: "reactfirebase-6de9b.firebaseapp.com",
    projectId: "reactfirebase-6de9b",
    storageBucket: "reactfirebase-6de9b.appspot.com",
    messagingSenderId: "915141414645",
    appId: "1:915141414645:web:b34443b22a77266785ffbc",
    measurementId: "G-JCE1HS9RG9"
}

const HomeDrawer = ({onSignOut}) => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} onSignOut={onSignOut} />} >
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen
        name="Change Password"
        component={PasswordChangeScreen}
      />
      
      
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();
 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isAuthenticatedReady, setIsAuthenticatedReady] = React.useState(false);
  const Hshown = 
  isAuthenticated ? ( false ) : ( true );

  const handleSignIn = () => {
 
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
 
    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
 
    setIsAuthenticated(true);
  };

  const onAuthStateChanged = (user) => {
    setIsAuthenticatedReady(true);
    setIsAuthenticated(!!user);
  }
  if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig);}
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //firebase.initializeApp(firebaseConfig);



  return (
    <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerShown: Hshown
      }}
    >
      {isAuthenticated ? (
       <RootStack.Screen name="Home">
       {(props) => (
         <HomeDrawer {...props} onSignOut={handleSignOut} />
       )}
     </RootStack.Screen>
      ) : (
        <>
          <RootStack.Screen name="Sign In">
            {(props) => (
              <SignInScreen {...props} onSignIn={handleSignIn} />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="Sign Up">
            {(props) => (
              <SignUpScreen {...props} onSignUp={handleSignUp} />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="Password Forget">
              
            {(props) => (
              <PasswordForgetScreen {...props} onSignIn={handleSignIn}/>
            )}
          </RootStack.Screen>
        </>
      )}
    </RootStack.Navigator>
  </NavigationContainer>
  );
};
 
export default App;
   