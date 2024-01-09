import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import Home from './src/views/Home';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
     <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(7,26,93,255)',
  },
});

export default App;
