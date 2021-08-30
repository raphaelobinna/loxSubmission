import React from 'react';

import {View, Text} from 'react-native'
import { GlassBoardLayout } from '../layouts/GlassBoardLayout';

export const NotificationScreens = ({navigation}) => {

    return(

       <GlassBoardLayout navigation={navigation} >
           <View>
               <Text>
                   NotificationScreens
               </Text>
           </View>
       </GlassBoardLayout>

    )

}