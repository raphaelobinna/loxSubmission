import React, { useState } from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { BLACK, WHITE } from '../../style';

export const JobScreen =  ({navigation}) => {

    const [, set] = useState();
        return (

            <View style={styles.container} >

            <Text style={styles.searchText} >start Job ?</Text>

            <View style={{flexDirection: 'row', marginVertical: 40}} >

            <TouchableOpacity style={styles.buttonContainerNo} onPress={() => navigation.navigate('Drawer', {screen: 'Details', initial: false})} >
            <View >
                <Text style={styles.buttonTextNo} >NO</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Drawer', {screen: 'Timer', initial: false})} >
            <View >
                <Text style={styles.buttonText} >YES</Text>
            </View>
            </TouchableOpacity>

            </View>
           
        </View>

        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    searchText: {
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: '600',
        letterSpacing: 3
    },
    buttonContainer: {
        width: '40%',
        height: '40%',
        marginHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: BLACK
    },
    buttonContainerNo: {
        width: '40%',
        height: '40%',
        borderWidth: 0.8,
        borderColor: BLACK,
        marginHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: WHITE
    },
    buttonText: {
        color: WHITE,
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '600',
        letterSpacing: 1
    },

    buttonTextNo: {
        color: BLACK,
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '600',
        letterSpacing: 1
    }

})