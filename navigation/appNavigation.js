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

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"LoginScroll"}>
                <Stack.Screen name="LoginScroll" component={TrendingLogin} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Movie" component={MovieScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Suggestion" component={SuggestionScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};