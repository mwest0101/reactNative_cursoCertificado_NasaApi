import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
// import Home from './src/views/Home';
import Routes from './src/Routes';
/*
Tiempo de video realizado
/*
4:16:47

*/
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
     <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(7,26,93,255)',
    
  },
});

export default App;
