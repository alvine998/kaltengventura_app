import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          height: 60,
        },
        tabBarActiveTintColor: '#0000FF',
        tabBarInactiveTintColor: '#888888',
      }}>
      {/* Add your tab screens here */}
      {/* Example: */}
      <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            // For example, you can use Ionicons or any other icon library
            return (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{color: focused ? '#0000FF' : '#888888', fontSize: 12}}>
                Home
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            // For example, you can use Ionicons or any other icon library
            return <IconFA name={'history'} size={size} color={color} />;
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{color: focused ? '#0000FF' : '#888888', fontSize: 12}}>
                Riwayat
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            // For example, you can use Ionicons or any other icon library
            return (
              <IconFA
                name={"user"}
                size={size}
                color={color}
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{color: focused ? '#0000FF' : '#888888', fontSize: 12}}>
                Profil
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
