import React from "react";
import {Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
    return (
        <View className="flex-1 bg-neutral-800">
        <SafeAreaView>
            <Text>Welcome to the Home Screen!!!!</Text>
        </SafeAreaView>
        </View>
    );
}