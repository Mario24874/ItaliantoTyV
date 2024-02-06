import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TraductorComponent from './TraductorComponent';
import ConjugadorComponent from './ConjugadorComponent';
import { Image } from 'react-native';


export default function App() {
  return (    
    <View style={styles.container}>
      <Image source={require('./assets/Logo_ItaliAnto.png')} style={styles.logo} />
      <Text style={styles.title}>Ciao, siamo Italianto!</Text>
      <TraductorComponent />
      <ConjugadorComponent />
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
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  title: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
