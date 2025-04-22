import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/profile';
import PunchClock from '../screens/punchclock';
import Leave from '../screens/leave';
import Payroll from '../screens/payroll';
import TaskManager from '../screens/taskmanager';
import Calendar from '../screens/calendar';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'PunchClock':
                iconName = 'progress-clock'; 
                break;
              case 'Payroll':
                iconName = 'currency-usd'; 
                break;
              case 'Profile':
                iconName = 'account-circle'; 
                break;
              case 'Calendar':
                iconName = 'calendar-clock'; 
                break;
              case 'Leave':
                iconName = 'account-check'; 
                break;
              case 'TaskManager':
                iconName = 'playlist-check';
                break;
              default:
                iconName = 'circle'; 
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name="PunchClock" component={PunchClock} />
        <Drawer.Screen name="Calendar" component={Calendar} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="TaskManager" component={TaskManager} />
        <Drawer.Screen name="Leave" component={Leave} />
        <Drawer.Screen name="Payroll" component={Payroll} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
