import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import FriendsScreen2 from './FriendsScreen2';

const Stack = createStackNavigator();
console.disableYellowBox = true;  //to avoid warning

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome !"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Chatbot"
            component={FriendsScreen}
          />
          <Stack.Screen
            name="Scann your Product CPU"
            component={FriendsScreen2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// ...


export default App;