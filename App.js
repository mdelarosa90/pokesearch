import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform, ImageBackground } from 'react-native';
import Landing from './components/Landing';
import Search from './components/Search';

export default function App() {

  const [state, setState] = useState('landing');
  const switchScreen = (currentScreen) => {
    setState(currentScreen);
  }
  const renderScreen = () => {
    console.log('state:', state);
    if (state === 'landing') {
      return (
        <Landing switchScreen={switchScreen}></Landing>
      );
    } else if (state == 'search') {
      return (
        <Search></Search>
      );
    }
  }
  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },

});
