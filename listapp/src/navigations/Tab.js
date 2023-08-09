import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Codi, Home } from '../screens/TabScreen';
import { Weather } from '../screens/WeatherScreen';
import { Fontisto,Ionicons } from '@expo/vector-icons'

const TabIcon = ({name, color}) => {
    return <Fontisto name={name} size={35} color={color} />;
}

const TabIcon3 = ({name, color}) => {
    return <Ionicons name={name} size={35} color={color} />;
}

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {height:70},
                headerShown:false,
                tabBarShowLabel:false,
            }}
        >
            <Tab.Screen name='Weather' component={Weather} options={{tabBarIcon:props =>TabIcon({...props, name:'day-cloudy' })}} />
            <Tab.Screen name='Home' component={Home} options={{tabBarIcon:props =>TabIcon3({...props, name:'home' })}} />
            <Tab.Screen name='Codi' component={Codi} options={{tabBarIcon:props =>TabIcon3({...props, name:'shirt-outline' })}} />
        </Tab.Navigator>
    );
};

export default TabNavigation;

/* src/navigations/Tab.js */

//headershown:false로 상단의 weather 제거