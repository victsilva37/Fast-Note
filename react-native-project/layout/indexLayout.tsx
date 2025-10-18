import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import { stylesLayout } from './stylesLayout';
import ListaNotas from '@/components/Inicio/ListaNotas/indexListaNotas';
import FormNota from '@/components/CrearNota/FormNota/indexFormNota';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NotasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaNotas"
        component={ListaNotas}
        options={{
          headerTitle: () => (
              <Image
              source={require('@/assets/images/icon.png')}
              style={stylesLayout.imgLogo}
            />
          ),
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#32C1E9' },
        }}
      />
      <Stack.Screen
        name="FormNota"
        component={FormNota}
        options={{
          title: 'Nota',
          headerTintColor: '#fff', // color de la flecha
          headerBackTitle: '', // <-- reemplazo compatible
          headerStyle: { backgroundColor: '#32C1E9' },
          headerTitle: () => (
            <Image
              source={require('@/assets/images/icon.png')}
              style={stylesLayout.imgLogo}
            />
          ),
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // evita header doble
        tabBarStyle: { backgroundColor: '#32C1E9' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#D5D2F0',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={NotasStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
