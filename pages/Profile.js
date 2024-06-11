import React, {useEffect, useState} from "react";
import {Dimensions, Image, Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {Menu} from "../component/menu";
import {FaceSmileIcon} from "react-native-heroicons/solid";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {LinearGradient} from "expo-linear-gradient";


const {width, height} = Dimensions.get('window');

export default function Profile() {
    const navigation = useNavigation();
    const [results, setResults] = React.useState(true)


    useEffect(() => {

    }, []);


    return (
        <View className="flex-1 bg-neut-800">
            <View className="w-full bg-neut-900">
                <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
                    <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1"
                                      style={{backgroundColor: '#2165de'}}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>
                </SafeAreaView>
                <View className="flex-row justify-center items-center bg-neut-900">
                    <Image
                        source={require('../assets/images/indica.jpg')}
                        style={{width, height: height * 0.15}}
                    />
                    <LinearGradient colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                    style={{
                                        width, height: height * 0.18,
                                    }}
                                    start={{x: 0.5, y: 0}}
                                    end={{x: 0.5, y: 1}}
                                    className={"absolute bottom-0"}
                    />
                </View>
            </View>
            {/*<SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">*/}
            {/*    <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1"*/}
            {/*                      style={{backgroundColor: '#2165de'}}>*/}
            {/*        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>*/}
            {/*    </TouchableOpacity>*/}
            {/*</SafeAreaView>*/}
            <View className="absolute flex-col mt-4 justify-center items-center w-full rounded-lg">
                <Text className="text-3xl text-whit text-center font-bold tracking-wider">Configurações</Text>
            </View>

            <SafeAreaView className="mb-3 justify-center items-center" style={{width, height}}>
                <View
                    className="border border-neut-800 text-gray-900 mt-8 w-full h-16 bg-neut-800 rounded-lg flex-col justify-center items-center">

                    <Text className="text-lg  text-whit">Configuração</Text>
                    <Text className="text-lg  text-whit">.</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}