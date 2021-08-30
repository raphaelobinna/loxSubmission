import React, { useState, useEffect } from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { BLACK, LIGHT_GRAY, WHITE } from '../../style';
import Icon from 'react-native-vector-icons/Octicons'

export const TimerScreen = ({ navigation }) => {

    const [count, setCount] = useState("01");

    useEffect(() => {
        const timer = setTimeout(() => {
         setCount("02")
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
        const timer = setTimeout(() => {
          setCount("03")
        }, 6000); 
        return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Drawer', {screen: 'Bill', initial: false})
        }, 9000);
        return () => clearTimeout(timer);
      }, []);


        return (

            <View style={styles.container} >

            <View style={{flexDirection: 'row', marginVertical: 10}} >

            <TouchableOpacity style={styles.buttonContainerNo} onPress={() => navigation.navigate('Drawer', {screen: 'Details', initial: false})} >
            <View >
                <Text style={styles.buttonTextNo} >00</Text>
            </View>
            </TouchableOpacity>

            <View style={{flexDirection: 'column', marginHorizontal: -8, marginTop: 20}} >
            <Icon name="primitive-dot" size={20} color="#E2574C" />
            <Icon name="primitive-dot" size={20} color="#E2574C" />
            </View>

            <TouchableOpacity style={styles.buttonContainerNo} onPress={() => navigation.navigate('Drawer', {screen: 'Details', initial: false})} >
            <View >
                <Text style={styles.buttonTextNo} >{count}</Text>
            </View>
            </TouchableOpacity>

            </View>

            <View  style={styles.lowerContainer} >
                <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 25, alignSelf: 'center'}} >Amount</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', letterSpacing: 1, marginLeft: 25, color: '#27AC60', alignSelf: 'center'}} >N1500</Text>
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
        height: '50%',
        marginHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: BLACK
    },
    buttonContainerNo: {
        width: '20%',
        height: '55%',
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
        fontWeight: '800',
        letterSpacing: 1
    },

    lowerContainer: {
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        width: '60%',
        height: '10%',
        marginHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
    }

})