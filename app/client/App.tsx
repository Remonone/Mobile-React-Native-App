import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [switcher, onSwitch] = useState(false)
  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight style={switcher ? styles.fade : styles.main} onPress={() => onSwitch(true)}>
          <>
            <Text>This is my test text!</Text>
            <StatusBar style="auto" />
          </>
        </TouchableHighlight>
      </View> 
      <View style={ switcher ? styles.main : styles.fade}>
        <Text>This is main Menu!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  main: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fade: {
    zIndex: -1,
    display: 'none'
  }
});
