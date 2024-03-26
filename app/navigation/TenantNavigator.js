import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TenantListScreen from '../screens/tenants/TenantListScreen';
import TenantScreen from '../screens/tenants/TenantScreen';

const Stack = createStackNavigator();

function TenantNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="TenantList" component={TenantListScreen} />
      <Stack.Screen name="TenantDetails" component={TenantScreen} />
    </Stack.Navigator>
  );
}

export default TenantNavigator;