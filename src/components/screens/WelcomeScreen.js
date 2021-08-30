import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, CheckBox } from 'react-native'
import { BLACK, GRAY, LIGHT_GRAY, WHITE } from '../../style';
import { GlassBoardLayout } from '../layouts/GlassBoardLayout';

export const WelcomeScreen = ({ navigation }) => {
    const [radioButton, setRadioButton] = useState('value1')
    return (

        < >
            <ScrollView style={styles.section}>
               
                <View  style={styles.pageTitle} >
                    <Text style={styles.pageTitleText} >WELCOME</Text>
                </View>

                <View style={styles.radioSection} >
                <TouchableOpacity onPress={() => { }} style={styles.radioSelectedButton}>
                        <View style={styles.radioSelectedButtonIcon} />
                    </TouchableOpacity>
                    {
                        [1,2,3,4].map((n)=> (
                            <TouchableOpacity onPress={() =>  {}} style={styles.radioButton} key={n} >
                            <View style={styles.radioButtonIcon} />
                        </TouchableOpacity>
                        ))
                    }
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Drawer', {screen: 'Account', initial: false})} style={styles.bottomColumnOne} >
                    <Text style={styles.buttonTextOne} >SIGN UP</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Drawer', {screen: 'Home', initial: false})} style={styles.bottomColumn} >
                    <Text style={styles.buttonText} >LOG IN</Text>
                </TouchableOpacity>
            </ScrollView>

        </>

    )

}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        flexDirection: 'column'
    },
    sectionTop: {
        flex: 3
    },
    sectionBottom: {
        flex: 6
    },
    buttonText: {
        color: GRAY,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        alignSelf: 'center'
    },
    buttonTextOne: {
        color: WHITE,
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    radioSection: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        marginLeft: '5%',
        marginRight: '10%',
        marginTop: '30%'
    },
    radioButton: {
        height: 10,
        width: 10,
        backgroundColor: LIGHT_GRAY,
        borderRadius: 5,
        marginHorizontal: 9,
        borderWidth: 1,
        borderColor: LIGHT_GRAY,
        alignItems: "center",
        justifyContent: "center"
      },
      radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: LIGHT_GRAY
      },
      radioSelectedButton: {
        height: 10,
        width: 10,
        backgroundColor: GRAY,
        borderRadius: 5,
        marginHorizontal: 9,
        borderWidth: 1,
        borderColor: GRAY,
        alignItems: "center",
        justifyContent: "center"
      },
      radioSelectedButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: GRAY
      },
      pageTitle: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        marginLeft: '5%',
        marginRight: '10%',
        marginTop: '70%'
      },
      pageTitleText: {
        color: BLACK,
        fontSize: 50,
        letterSpacing: 1,
        fontWeight: 'bold',
        fontStyle: 'normal',
        alignSelf: 'center'
      },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    imageCard: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: '25%'
    },
    image: {
        alignSelf: "center",
        width: 120,
        height: 120,
    },
    textCard: {
        paddingLeft: "9%",
        paddingRight: "9%",
        marginBottom: "9%"
    },
    buttonIcon: {
        alignSelf: 'center',
        paddingRight: 6
    },
    topColumn: {
        flex: 2,
        flexDirection: 'column',
        marginTop: -25,
    },
    topItem: {
        marginBottom: '3%',
    },
    midwayColumn: {
        flex: 2,
        flexDirection: 'column',
    },
    midwayItem: {
        marginBottom: '3%',
        marginTop: '3%',
    },
    bottomColumn: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        height: 55,
        borderColor: BLACK,
        borderWidth: 2,
        alignContent: 'center',
        justifyContent: 'space-around',
        marginLeft: '5%',
        marginRight: '10%',
        marginTop: '5%',
        backgroundColor: WHITE

    },
    bottomColumnOne: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        height: 55,
        borderColor: BLACK,
        borderWidth: 2,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'space-around',
        marginLeft: '5%',
        marginRight: '10%',
        marginTop: '5%',
        backgroundColor: BLACK

    },
    bottomItem: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    footer: {
        flexDirection: 'row',
    },
    footerIcon: {
        alignSelf: 'center',
        paddingRight: 6
    },
    icon: {
        alignSelf: 'center',
    }
});