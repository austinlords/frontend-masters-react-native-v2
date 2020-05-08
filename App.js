import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.heading}>
          Here are some boxes of different colors and more text!
        </Text>
        <View style={[styles.container, styles.cyan]}>
          <Text style={styles.whiteText}>Cyan #2aa198 </Text>
        </View>
        <View style={[styles.container, styles.blue]}>
          <Text style={styles.whiteText}>Blue #268bd2 </Text>
        </View>
        <View style={[styles.container, styles.magenta]}>
          <Text style={styles.whiteText}>Magenta #d33682 </Text>
        </View>
        <View style={[styles.container, styles.orange]}>
          <Text style={styles.whiteText}>Orange #cb4b16 </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  container: {
    marginVertical: 5,
    marginHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  safeArea: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
