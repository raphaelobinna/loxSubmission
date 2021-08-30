import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { BLACK, BLUE, FACEBOOK_COLOR, GRAY, LIGHT_GRAY, WHITE } from '../../style';
import { GlassBoardLayout } from '../layouts/GlassBoardLayout';

export const HomeScreens = ({navigation}) => {

    return(

       <>
           <View style={styles.container} >
               <View style={styles.upperComponent} >
                    <View style={styles.upperWriteup} >
                        <Text style={styles.pageTitleText} >A simplier way to live</Text>
                        <Text style={styles.pageWrite} > Get a service from us today and live better </Text>
                        <TouchableOpacity style={styles.upperButton} onPress={() => navigation.navigate('Spinner')}>
                            <Text style={styles.upperButtonText} >Get a Service</Text>
                        </TouchableOpacity>
                    </View>
               </View>
                
               <View style={styles.lowerComponent} >
                   <Text style={styles.categoryText} >CATEGORIES</Text>
                  <View style={styles.serviceComponent} >
                        <TouchableOpacity onPress={() => navigation.navigate('Spinner')} >
                            <View style={styles.serviceContainer} >
                                <Icon name="hand-heart" size={25}/>
                                <Text style={{ marginBottom: -25, marginTop: 5, fontWeight: '500', fontFamily: 'Arial', fontSize: 20 }} >service</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Spinner')} >
                            <View style={styles.serviceContainer} >
                            <Icon name="hand-heart" size={25}/>
                                <Text style={{ marginBottom: -25, marginTop: 5, fontWeight: '500', fontFamily: 'Arial', fontSize: 20 }} >service</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Spinner')} >
                            <View style={styles.serviceContainer} >
                            <Icon name="hand-heart" size={25}/>
                                <Text style={{ marginBottom: -25, marginTop: 5, fontWeight: '500', fontFamily: 'Arial', fontSize: 20 }} >service</Text>
                            </View>
                        </TouchableOpacity>
                   </View>
                   <View style={styles.serviceComponent} >
                        <TouchableOpacity onPress={() => navigation.navigate('Spinner')} >
                            <View style={styles.serviceContainer} >
                            <Icon name="hand-heart" size={25}/>
                                <Text style={{ marginBottom: -25, marginTop: 5, fontWeight: '500', fontFamily: 'Arial', fontSize: 20 }} >service</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Spinner')} >
                            <View style={styles.serviceContainer} >
                            <Icon name="hand-heart" size={25}/>
                                <Text style={{ marginBottom: -25, marginTop: 5, fontWeight: '500', fontFamily: 'Arial', fontSize: 20 }} >service</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Spinner')} >
                            <View style={styles.serviceContainer} >
                            <Icon name="hand-heart" size={25}/>
                                <Text style={{ marginBottom: -25, marginTop: 5, fontWeight: '500', fontFamily: 'Arial', fontSize: 20 }} >service</Text>
                            </View>
                        </TouchableOpacity>
                   </View>
               </View>
           </View>
       </>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginLeft:0,
        marginRight:0,
        marginTop:0,
        paddingTop:0,
      },
    upperComponent: {
        marginTop: '-40%',
        backgroundColor: BLACK,
        textDecorationColor: WHITE,
        height: '50%',
        width: '100%'
    },
    pageTitleText: {
        color: WHITE,
        fontSize: 30,
        letterSpacing: 3,
        fontWeight: 'bold',
        fontStyle: 'normal',
        alignSelf: 'center'
      },
      pageWrite: {
        color: WHITE,
        fontSize: 15,
        letterSpacing: 2,
        fontWeight: '300',
        fontStyle: 'normal',
        alignSelf: 'center'
      },
    upperWriteup: {
        flex: 4,
        marginTop: '3%',
        marginBottom: '8%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    upperButton: {
        height: '29%',
        width: '45%',
        borderRadius: 10,
        marginTop: '12%',
        marginLeft: '-45%',
        backgroundColor: FACEBOOK_COLOR,
        alignContent: 'center',
        justifyContent: 'center'
    }, 
    upperButtonText: {
        color: WHITE,
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: 'bold',
        fontStyle: 'normal',
        alignSelf: 'center'
    },
    serviceContainer: {
        height: '70%',
        width: '80%',
        backgroundColor: WHITE,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 55,
        borderRadius: 10,
    },
    serviceComponent: {
        width: '20%',
        height: '100%',
        marginLeft: '-5%',
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lowerComponent: {
        width: '100%',
        height: '30%',
        alignSelf: 'center',
        flexDirection: 'column',
        flex: 4,
    },
    categoryText: {
        color: GRAY,
        fontSize: 20,
        marginTop: 60,
        marginBottom: 40,
        letterSpacing: 4,
        fontWeight: 'bold',
        fontStyle: 'normal',
        alignSelf: 'center'
    }
})