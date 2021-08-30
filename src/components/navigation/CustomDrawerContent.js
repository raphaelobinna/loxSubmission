import * as React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity, Platform} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {VECTOR_ONE, GRAY, LIGHT_GRAY, LIGHT_ORANGE, WHITE} from '../../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomDrawerContent = (props) => {

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imageBackground}>
        <View style={styles.article}>
            <View style={styles.text}>
                <Text style={styles.userNameText}>Settings</Text>
            </View>
          {/* <View style={styles.alignSelfStart}>
              <React.Fragment>
                <Text style={styles.userNameText}>{'Obinna'}</Text>
                <Text style={styles.userNameText}>{'Raphael'}</Text>
                <Text style={styles.userCountryText}>{'Nigeria'}</Text>
              </React.Fragment>
          </View> */}
        </View>
      </View>
      <DrawerItemList 
        {...props} 
        activeTintColor={WHITE}
        activeBackgroundColor={LIGHT_GRAY} 
      />
     {
       Platform.OS === "ios" ?
       <TouchableOpacity style={{left: 20, top: 150}} onPress={() => props.navigation.navigate('Welcome')} >
       <Text style={{ color: '#FF2020', fontSize: 20 }} >Log Out</Text>
     </TouchableOpacity>
     : 
     <TouchableOpacity style={{left: 20, top: -30}} onPress={() => props.navigation.navigate('Welcome')} >
     <Text style={{ color: '#FF2020', fontSize: 20 }} >Log Out</Text>
   </TouchableOpacity>
     }
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 100,
    alignSelf: "center",
    opacity: 1,
  },
  article:{
    flexDirection:'row',
    alignSelf:'center'
  },
  alignSelfStart:{
    alignSelf:'flex-start'
  },
  text: {
    marginTop: '20%',
    marginLeft: '-40%'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 150 / 2,
  },
  paddingLeftRight10:{
    paddingLeft:10,
    paddingRight:10,
  },
  userNameText:{
    fontFamily:"Nunito_600SemiBold",
    fontWeight: '500',
    fontSize: 26,
    color: GRAY,
  },
  userCountryText:{
    fontFamily:"Nunito_400Regular",
    fontSize: 13,
    color: GRAY,
  }
});