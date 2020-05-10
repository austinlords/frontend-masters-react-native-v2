import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const textColor =
    parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1
      ? 'black'
      : 'white';
  return (
    <View style={[styles.box, { backgroundColor: colorHex }]}>
      <Text
        style={{ fontWeight: 'bold', color: textColor }}
      >{`${colorName} ${colorHex}`}</Text>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    marginVertical: 5,
    marginHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
