import React from 'react';

import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { GlassBoardLayout } from '../layouts/GlassBoardLayout';
import Icon from 'react-native-vector-icons/EvilIcons'
import { BLACK, LIGHT_GRAY, WHITE, GRAY } from '../../style';

export const ProfileScreen = ({navigation}) => {

    return(

        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
       <View style={styles.container} >

        <Text style={{left: '-30%', top: '-14%', fontWeight: 'bold', fontSize: 25}} >Get Started</Text>

        <View style={{height: '15%', width: '35%', backgroundColor: '#F5F5F5', left: '-25%', top: '-10%',}} >
            <View style={{ position: 'absolute', left: 25, top: 15, alignContent: 'center', justifyContent: 'center', height: 50 }} >
                <Icon name="image" size={80} color={WHITE}/>
            </View>
        </View>

        <Text style={{alignSelf: 'flex-start', marginLeft: 20, fontWeight: '400', fontSize: 20, color: GRAY }} >Full Name</Text>

        <View style={{ alignSelf: 'flex-start', marginLeft: 20, marginTop: 5, marginBottom: 20,  justifyContent: 'center', width: '85%', height: '7%', borderWidth: 0.5, borderColor: LIGHT_GRAY, backgroundColor: '#F5F5F5'}} >
            <TextInput
                placeholder={'enter full name'}
            />
        </View>

        <View style={{alignSelf: 'flex-start', marginLeft: 20, marginBottom: 20,  justifyContent: 'center', width: '85%', height: '7%', borderWidth: 0.5, borderColor: LIGHT_GRAY, backgroundColor: '#F5F5F5'}} >
            <TextInput
                placeholder={'Date of Birth'}
            />
        </View>

        <View style={{alignSelf: 'flex-start', marginLeft: 20, marginBottom: 40,  justifyContent: 'center', width: '85%', height: '7%', borderWidth: 0.5, borderColor: LIGHT_GRAY, backgroundColor: '#F5F5F5'}} >
            <TextInput
                placeholder={'Add Debit/Credit Card'}
            />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Drawer', {screen: 'Home', initial: false})} style={styles.bottomColumnOne} >
                    <Text style={styles.buttonTextOne} >SAVE</Text>
                </TouchableOpacity>
       </View>
       </KeyboardAvoidingView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE
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
    },
    buttonTextOne: {
        color: WHITE,
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    bottomColumnOne: {
        width: '90%',
        height: 55,
        borderColor: BLACK,
        borderWidth: 2,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'space-around',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '-10%',
        backgroundColor: BLACK

    },

})