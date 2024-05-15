import React, {useEffect, useState} from "react";
import {Dimensions, Image, Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {Menu} from "../component/menu";
import {FaceSmileIcon} from "react-native-heroicons/solid";
import {ChevronLeftIcon} from "react-native-heroicons/outline";


const {width, height} = Dimensions.get('window');

export default function Profile() {
    const navigation = useNavigation();
    const [results, setResults] = React.useState(true)


    useEffect(() => {

    }, []);


    return (
        <View className="flex-1 bg-neut-800">
            <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
                <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1"
                                  style={{backgroundColor: '#2165de'}}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
            </SafeAreaView>
            <View className="absolute flex-col mt-4 justify-center items-center w-full rounded-lg">
                <Text className="text-3xl text-whit text-center font-bold tracking-wider">Notificações</Text>
            </View>

            <SafeAreaView className="mb-3 justify-center items-center" style={{width, height}}>
                <View
                    className="border border-neut-800 text-gray-900 mt-8 w-full h-16 bg-neut-800 rounded-lg flex-col justify-center items-center">
                    <View className="bg-yellow-light w-22 h-22 flex-col justify-center items-center rounded-full">
                        <FaceSmileIcon size="50" color="yellow"/>
                    </View>
                    <Text className="text-lg  text-whit">Você ainda não</Text>
                    <Text className="text-lg  text-whit">possui notificação.</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}