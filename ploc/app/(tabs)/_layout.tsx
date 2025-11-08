import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderTopWidth: 1,
          borderTopColor: 'rgba(229, 231, 235, 0.5)',
          paddingBottom: 8,
          paddingTop: 8,
          height: 80,
          position: 'absolute',
        },
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="explore"
        options={{
          title: 'List',
          tabBarIcon: ({ color }) => <Ionicons name="list" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <Ionicons name="map" size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              backgroundColor: '#FF0000',
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 4,
              borderColor: 'white',
              marginBottom: 30,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
            }}>
              <Ionicons 
                name="camera" 
                size={32} 
                color="white"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              backgroundColor: focused ? '#000' : '#ccc',
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Ionicons 
                name="person" 
                size={24} 
                color="white"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
