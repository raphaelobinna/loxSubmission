import React from 'react';

import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { BLACK, WHITE } from '../../style';

export default function CompletedScreens ({navigation}){

    return(

        <View style={styles.container} >
            <Icon name="checkbox-marked-circle-outline" size={200} color="#99dfa5" />

            <Text style={styles.searchText} >Search Completed</Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Drawer', {screen: 'Details', initial: false})} >
            <View >
                <Text style={styles.buttonText} >PROCEED</Text>
            </View>
            </TouchableOpacity>
           
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    searchText: {
        marginVertical: 15,
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: '600',
        letterSpacing: 3
    },
    buttonContainer: {
        width: '60%',
        height: '7%',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: BLACK
    },
    buttonText: {
        color: WHITE,
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '600',
        letterSpacing: 1
    }

})