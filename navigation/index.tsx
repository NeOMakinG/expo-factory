import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}

function DrawerStack() {
    return (
        <Drawer.Navigator initialRouteName="Home" backBehavior="history">
            <Drawer.Screen name="Home" component={RootNavigator} />
            <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                    headerTitle: 'Tab One Title',
                    headerLeft: () => (
                        <TouchableOpacity
                            style={Global.burger}
                            onPress={() => {
                                navigation.dispatch(DrawerActions.openDrawer());
                            }}
                        >
                            <Ionicons size={30} color={Colors[colorScheme].text} name="ios-menu" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }): React.ReactElement {
    return (
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <DrawerStack />
        </NavigationContainer>
    );
}
