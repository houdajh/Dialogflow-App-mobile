import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import imagename from './assets/images/logo.png';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      

        <Text ></Text>
        <Image
        style={{
            resizeMode: "contain",
            height: 200,
            width: 200
          }}
        source = { imagename }
      />
      <Text style={[styles.bigBlue, styles.red]}>
        {"\n"}Test your product!{"\n"}
        </Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate('Scann your Product CPU')
          }
          title="         Scanner          "
          color="#052d2d"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={[styles.bigBlue, styles.red]}>
        {"\n"}Chatbot{"\n"}
        </Text>
        <Button
          title="          MR.BOT          "
          color="#076b6c"
          onPress={() =>
            this.props.navigation.navigate('Chatbot')
          }
        />
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    color: 'darkslategrey',
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

// ...

export default HomeScreen;