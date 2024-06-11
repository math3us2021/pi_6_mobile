import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../pages/HomeScreen";
import MovieScreen from "../pages/MovieScreen";
import LoginScreen from "../pages/LoginScreen";
import SearchScreen from "../pages/SearchSreen";
import UserScreen from "../pages/UserScreen";
import SuggestionScreen from "../pages/SuggestionScreen";
import TrendingLogin from "../component/trendingLogin";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import ResultScreen from "../pages/ResultScreen";
import Toast from 'react-native-toast-message';
import {MessageProvider} from "../context/MessageContext";
import {UserProvider} from "../context/UserContext";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <UserProvider>
            <MessageProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={"LoginScroll"}>
                        <Stack.Screen name="LoginScroll" component={TrendingLogin} options={{headerShown: false}}/>
                        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Movie" component={MovieScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="User" component={UserScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Suggestion" component={SuggestionScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Result" component={ResultScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false}}/>
                        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                    </Stack.Navigator>
                    <Toast/>
                </NavigationContainer>
            </MessageProvider>
        </UserProvider>
    );
};