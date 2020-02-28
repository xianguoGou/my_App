import * as React from 'react';
import {View, Text} from 'react-native';

// react-navigation 导航组件
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// antd 组件
import {Button, SearchBar} from 'antd-mobile-rn';
import {Icon} from '@ant-design/react-native';

// 自定义 Hello组件
import {Hello} from './app/components/Hello';

// 首页
import HomeScreen from './app/pages/HomeScreen'
// 看点
import ViewScreen from './app/pages/ViewScreen'
// 消息
import MessageScreen from './app/pages/MessageScreen'
// 我的
import MineScreen from './app/pages/MineScreen'

// 详情
import DetailsScreen from './app/pages/DetailsScreen'

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const ViewStack = createStackNavigator();
function ViewStackScreen() {
  return (
    <ViewStack.Navigator>
      <ViewStack.Screen name="View" component={ViewScreen} />
      <ViewStack.Screen name="Details" component={DetailsScreen} />
    </ViewStack.Navigator>
  );
}

const MessageStack = createStackNavigator();
function MessageStackScreen() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name="Message" component={MessageScreen} />
    </MessageStack.Navigator>
  );
}

const MineStack = createStackNavigator();
function MineStackScreen() {
  return (
    <MineStack.Navigator>
      <MineStack.Screen name="Mine" component={MineScreen} />
    </MineStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'View') {
              iconName = 'dribbble';
            } else if (route.name === 'Message') {
              iconName = 'message';
            } else {
              iconName = 'user';
            }
            return <Icon name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarLabel: '首页' }} />
        <Tab.Screen name="View" component={ViewStackScreen} options={{ tabBarLabel: '看点' }} />
        <Tab.Screen name="Message" component={MessageStackScreen} options={{ tabBarLabel: '消息' }} />
        <Tab.Screen name="Mine" component={MineStackScreen} options={{ tabBarLabel: '我的' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
