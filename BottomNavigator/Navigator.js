import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from '../components/Home';
import { createAppContainer } from 'react-navigation';
import ImageRotate from '../components/imageRotate';



const BottomTabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon name='home' size={20} color={focused ? '#FFF' : '#DACE91'} />,
        }
    },
    Image: {
        screen: ImageRotate,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon name='add-a-photo' size={20} color={focused ? '#FFF' : '#DACE91'} />,
        }
    }
})

const AppContainer = createAppContainer(BottomTabNavigator);

export default AppContainer