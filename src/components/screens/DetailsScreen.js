import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Text, ImageBackground, Platform, TouchableOpacity } from 'react-native'
import { BLACK, GREEN, LIGHT_GRAY, SAMPLE_MAP, WHITE } from '../../style';
import Icon from 'react-native-vector-icons/Octicons'

export const DetailsScreen = ({navigation}) => {

    const [count, setCount] = useState("2");

    useEffect(() => {
        const timer = setTimeout(() => {
         setCount("1")
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Jobs')
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

    return (

        <View style={styles.container} >

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginHorizontal: 20, marginTop: 40 }} >
                <Text style={{ fontWeight: '600', letterSpacing: 2, fontSize: 30 }} >Job Details</Text>
                <Text style={{ fontWeight: '400', letterSpacing: 1, marginTop: 10, fontSize: 15 }} >Here you can see the details of your scheduled job</Text>
            </View>

            {
                Platform.OS === "ios" ? 
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '-60%' }} >
                <Text style={{ justifyContent: 'center', marginTop: 15, marginRight: 80, marginLeft: 20, fontWeight: 'bold', fontSize: 17 }} >{`${new Date().toDateString()}`}</Text>
                <View style={{ height: 60, alignContent: 'center', justifyContent: 'flex-end', flex: 1, flexDirection: 'column', backgroundColor: BLACK, marginLeft: 70, marginRight: 20 }} >
                    <Text style={{ color: WHITE, alignSelf: 'center', fontSize: 25 }} >{count}</Text>
                    <Text style={{ color: WHITE, alignSelf: 'center' }} >min</Text>
                </View>
            </View>
            :
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '-50%' }} >
                <Text style={{ justifyContent: 'center', marginTop: 15, marginRight: 80, marginLeft: 20, fontWeight: 'bold', fontSize: 17 }} >{`${new Date().toDateString()}`}</Text>
                <View style={{ height: 60, alignContent: 'center', justifyContent: 'flex-end', flex: 1, flexDirection: 'column', backgroundColor: BLACK, marginLeft: 70, marginRight: 20 }} >
                    <Text style={{ color: WHITE, alignSelf: 'center', fontSize: 25 }} >{count}</Text>
                    <Text style={{ color: WHITE, alignSelf: 'center' }} >min</Text>
                </View>
            </View>

            }
            <ImageBackground source={SAMPLE_MAP} style={styles.image}>
                <View style={{ position: 'absolute', left: 14, top: 30, alignContent: 'center', justifyContent: 'center', height: 110, borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)' }} >
                    {
                        count === "1" ?
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 2, justifyContent: 'center', alignItems: 'center'}} >
                                <View style={{ marginVertical: 10, marginLeft: 15, marginRight: -1, justifyContent: 'flex-start', alignItems: 'center'}} >
                                <Icon name="primitive-dot" size={20} color="#4DF468" />
                                <View style={{ height: 30, marginVertical: -5, borderWidth: 0.5, borderColor: WHITE }} ></View>
                                <Icon name="primitive-dot" size={20} color="#4DF468" />
                                </View>
                                <View style={{  justifyContent: 'center', alignItems: 'center', }} >
                                <Text style={{ fontWeight: '500', letterSpacing: 1, fontSize: 15, color: WHITE, marginTop: -5, marginBottom: 15, marginLeft: -25 }} >Oma Okoro accepted your request</Text>
                                <Text style={{ fontWeight: '500', letterSpacing: 1, fontSize: 15, color: WHITE, marginTop: 10, marginBottom: -5, marginHorizontal: 5 }} >Oma Okoro is confirming your request</Text>
                                </View>
                            </View>
                            :
                            <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}} >
                                <Icon name="primitive-dot" size={20} color="#4DF468" />
                                <Text style={{ fontWeight: '500', letterSpacing: 1,  fontSize: 15, color: WHITE, marginLeft: 5 }} >Oma Okoro is confirming your request</Text>
                            </View>
                    }
                </View>
            </ImageBackground>

            <View style={{ bottom: 120, marginTop: 5, flexDirection: 'column'}} >
                <View style={{alignSelf: 'flex-start', flexDirection: 'row'}} >
                <Icon name="primitive-dot" size={20} color="#4DF468"  style={{marginHorizontal: 15}} />
                    <Text style={{ fontWeight: '400', letterSpacing: 1, fontSize: 20, marginLeft: -5 }} > Your Location</Text>
                </View>
                    <View style={{width: '100%', borderWidth: 0.5, borderColor: LIGHT_GRAY, marginVertical: 5}} ></View>
                <View style={{ flexDirection: 'row', }} >
                    <Text style={{ fontWeight: '600', letterSpacing: 2, fontSize: 20, alignSelf: 'flex-start', marginLeft: 10, marginRight: 40, marginVertical: 10 }} >MARKET ERRAND</Text>

                    <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'flex-end',  marginLeft: 60, marginRight: 10, marginVertical: 10 }} >
                        <Text style={{ fontWeight: 'bold', letterSpacing: 1, fontSize: 15, color: "#27AC60" }} >N25/MIN</Text>
                        <Text style={{ fontWeight: '400', letterSpacing: 1, fontSize: 10, color: LIGHT_GRAY, fontStyle: 'italic' }} >01hrs - 2:30hrs</Text>
                    </View>
                </View>

                <View style={{width: '100%', borderWidth: 0.5, borderColor: LIGHT_GRAY, marginVertical: 5}} ></View>
            </View>


            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Drawer', {screen: 'Jobs', initial: false})} >
            <View>
                <Text style={styles.buttonText} >REQUESTED</Text>
            </View>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        paddingTop: 0,
    },
    image: {
        flex: 1,
        marginTop: '-55%',
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '70%',
        height: '7%',
        left: 50,
        bottom: 50,
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
});