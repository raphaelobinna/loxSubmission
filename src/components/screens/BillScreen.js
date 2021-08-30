import React, { useState } from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { BLACK, WHITE } from '../../style';

export const BillScreen = ({navigation}) => {

    const [, set] = useState();

        return (

            <View style={styles.container} >

<View  style={styles.upperContainer} >
                <Text style={{fontSize: 25, fontWeight: 'bold', letterSpacing: 1, marginLeft: 25, color: WHITE, alignSelf: 'center'}} >Total Amount: N1500</Text>
            </View>

<TouchableOpacity onPress={() => navigation.navigate('Drawer', {screen: 'Home', initial: false})} style={styles.lowerContainer}  >
                <Text style={{fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: WHITE}} >Close</Text>
            </TouchableOpacity>

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

      upperContainer: {
        backgroundColor: '#FC0000',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '75%',
        height: '13%',
        marginHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    
    lowerContainer: {
       
        backgroundColor: BLACK,
        flexDirection: 'row',
        alignSelf: 'center',
        width: '60%',
        height: '8%',
        marginVertical: 80,
        marginHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
    }

})