import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { recoveredProps } from 'expo-error-recovery';

const myBackground = require('../assets/landing.jpg');

const Landing = (props) => {

        return (
            <View>
            <ImageBackground source={myBackground} style={styles.imageStyle}>
                <View style={styles.viewStyle}>
                    <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
                    <Button block={true} style={styles.buttonStyle} onPress={() => props.switchScreen('search')}>
                    <Text style={styles.buttonText}>Start Searching</Text>
                    </Button>
                </View>
            </ImageBackground>
            </View>
        )
}

export default Landing;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Platform.OS === 'android' ? 24 : 0,
    },
    imageStyle: {
      width: "100%",
      height: "100%"
    },
    viewStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleStyle: {
      fontSize: 30,
      color: 'blue',
      alignItems: 'center'
    },
    buttonStyle: {
      margin: 10,
      textDecorationColor: 'red'
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: "100"
    }
  
  });