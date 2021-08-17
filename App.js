import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Saludito from './Danielcp';

const App= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.letra}>Hola Mundo</Text>
      <TextInput style={styles.input}/>
      <Saludito/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letra:{
    color: '#000',
    fontSize: "40px",
    fontWeight: "100%",
  },
  input:{
    height:"100px",
    width:"50%",
    border:"2px solid #000000"
  },
});

export default App;
