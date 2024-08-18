import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NotificationScreen from './src/screens/NotificationScreen';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#157cdb',
          tabBarInactiveTintColor: '#262626'
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({color})=>(
              <MaterialIcons name="home" size={26} color={color}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Notification" 
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Thông Báo',
            tabBarIcon: ({color})=>(
              <MaterialIcons name="notifications" size={26} color={color}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({color})=>(
              <MaterialIcons name="person" size={26} color={color}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
