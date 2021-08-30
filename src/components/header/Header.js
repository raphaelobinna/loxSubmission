import React from 'react';

import {StyleSheet, View, Text, Pressable} from 'react-native'
import { BLACK, GRAY, LIGHT_GRAY, WHITE } from '../../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';

export default function Header (props){

    console.log(props)
    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerShown: true,
    //       headerTransparent: true,
    //       headerTitleStyle: {fontFamily:"Nunito_700Bold", fontSize: 17, color: GRAY},
    //       headerLeft: () => ( <HeaderLeft type={'default'} navigation={navigation}/> )
    //     });
    //   }, [navigation]);

    return(

        <View style={styles.header}  >
            <Pressable
            style={styles.icon}
                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            >
                 <Icon name='menu' size={28}  color={WHITE}  />
            </Pressable>
           
            <View>
                <Text style={styles.headerText} ></Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BLACK
    },
    headerText: {
        fontWeight: '700',
        fontSize: 15,
        letterSpacing: 1,
        color: LIGHT_GRAY
    },
    icon: {
        position: 'absolute',
        left: 16
    }
})