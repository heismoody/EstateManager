import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PropertyScreen from '../screens/properties/PropertyScreen';
import TenantNavigator from './TenantNavigator';
import CashManagmentScreen from '../screens/cash/CashManagmentScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarLabelStyle: {fontSize: 14, fontWeight:900}, tabBarStyle: {paddingBottom: 5, paddingTop: 3}}}>
        <Tab.Screen name="Home" component={WelcomeScreen} options={{
            tabBarIcon: ({size, color}) => (<MaterialIcons name="home" size={size} color={color} />)
        }}/>
        <Tab.Screen name="Properties" component={PropertyScreen} options={{
            tabBarIcon: ({size, color}) => (<MaterialIcons name="house" size={size} color={color} />)
        }}/>
        <Tab.Screen name="Tenants" component={TenantNavigator} options={{
            tabBarIcon: ({size, color}) => (<MaterialIcons name="supervised-user-circle" size={size} color={color} />)
        }}/>
        <Tab.Screen name="Statistics" component={CashManagmentScreen} options={{
            tabBarIcon: ({size, color}) => (<Octicons name="graph" size={size} color={color} />)
        }}/>
    </Tab.Navigator>
)

export default TabNavigator;