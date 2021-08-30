import * as React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomDrawerIcon = (props) => {
    return (
        <Icon name={props.iconName} size={30} color="#FF2020" />
    )
}

const styles = StyleSheet.create({
    //
});