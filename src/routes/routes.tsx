import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from '@react-navigation/native-stack';

import { RootStackParams } from '../types';
import Home from '../views/Home';

const Stack = createStackNavigation();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" components={Home}/>
                <Stack.Screen name="Details" components={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};