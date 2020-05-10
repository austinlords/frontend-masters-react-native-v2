import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import ColorBox from './components/ColorBox';
import { COLORS } from './consts';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <FlatList
          data={COLORS}
          renderItem={({ item, index }) => (
            <ColorBox
              colorName={item.colorName}
              colorHex={item.hexCode}
              key={index}
            />
          )}
          keyExtractor={(item) => item.hexCode}
          ListHeaderComponent={() => (
            <Text style={styles.heading}>Solorized</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default App;
