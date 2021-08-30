import * as React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import {GRAY, WHITE} from '../../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';

export const HeaderLeft = ({type,navigation}) => {

    const iconSet = (type) => {

        if (!navigation.canGoBack()) {
            return (
                <View style={styles.card}>
                    <Pressable 
                        hitSlop={27}
                        style={styles.icon}>
                        <Icon name={'login'} size={30} color={GRAY} />
                    </Pressable>
                </View>
            )
        }

        switch (type) {
            case 'dark':
                return (
                    <View style={styles.card}>
                        <Pressable 
                            hitSlop={27}
                            style={styles.icon} 
                            onPress={ !navigation.canGoBack() ? ()=>navigation.dispatch(DrawerActions.toggleDrawer()) : ()=>navigation.goBack() }>
                            <Icon name={!navigation.canGoBack() ? 'menu' : 'arrow-left'} size={30} color={GRAY} />
                        </Pressable>
                    </View>
                )

            case 'light':  
                return (
                    <View style={styles.card}>
                        <Pressable 
                            hitSlop={27}
                            style={styles.icon} 
                            onPress={ !navigation.canGoBack() ? ()=>navigation.dispatch(DrawerActions.toggleDrawer()) : ()=>navigation.goBack() }>
                            <Icon name={!navigation.canGoBack() ? 'menu' : 'arrow-left'} size={30} color={WHITE} />
                        </Pressable>
                    </View>
                )

            default:
                return (
                    <View style={styles.card}>
                        <Pressable 
                            hitSlop={27}
                            style={styles.icon} 
                            onPress={ !navigation.canGoBack() ? ()=>navigation.dispatch(DrawerActions.toggleDrawer()) : ()=>navigation.goBack() }>
                            <Icon name={!navigation.canGoBack() ? 'menu' : 'arrow-left'} size={30} color={GRAY} />
                        </Pressable>
                    </View>
                )
        }
    }

    return (
        <React.Fragment>
            {iconSet(type)}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
    },
    icon:{
        paddingLeft:'1%',
        paddingRight:'1%',
        marginLeft:12
    }
});
