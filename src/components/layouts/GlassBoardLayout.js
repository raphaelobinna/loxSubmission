import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import { GRAY } from '../../style';
import { HeaderLeft } from '../header/HeaderLeft';

export const GlassBoardLayout = ({navigation, children, style}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {fontFamily:"Nunito_700Bold", fontSize: 17, color: GRAY},
      headerLeft: () => ( <HeaderLeft type={'default'} navigation={navigation}/> )
    });
  }, [navigation]);

  style = style ?? {};

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={[styles.container, style.container]}>
          {children}
        </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

// PropTypes
GlassBoardLayout.propTypes = {
  navigation: PropTypes.object.isRequired,
  style: PropTypes.object,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft:0,
    marginRight:0,
    marginTop:0,
    paddingTop:0,
  }
});