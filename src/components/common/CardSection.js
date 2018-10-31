import React, { Component } from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    // Bu içindeki bütün componentleri sola yapıştırır, full width olmalarını otomatik olarak engeller, hemen kaldıralım
    borderColor: '#ddd',
  }
};

export { CardSection };