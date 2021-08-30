import React, {useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const SpinnerScreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('CompletedScreens')
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#7cffcb"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});