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
        tabBarActiveTintColor: '#666666',
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
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: focused ? '#f3f4f6' : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Ionicons 
                name="home-outline" 
                size={24} 
                color={focused ? '#333333' : '#888888'}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              backgroundColor: '#333333',
              width: 80,
              height: 80,
              borderRadius: 40,
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
                size={40} 
                color="white"
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: focused ? '#f3f4f6' : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Ionicons 
                name="person-outline" 
                size={24} 
                color={focused ? '#333333' : '#888888'}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}