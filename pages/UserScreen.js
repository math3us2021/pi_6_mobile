import {Dimensions, ScrollView, Text, TouchableOpacity, View, Image, TextInput, Button, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {LinearGradient} from "expo-linear-gradient";
import Cast from "../component/cast";

var {width, height} = Dimensions.get('window');

export default function UserScreen() {
    let movieName = "Sedução Sex Shop Filme.";

    const {params: item} = useRoute();
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const navigation = useNavigation();
    useEffect(() => {
    }, [item]);

    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            className="flex-1 bg-neutral-900">
            <View className="w-full">
                <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
                    <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1"
                                      style={{backgroundColor: 'orange'}}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>
                </SafeAreaView>
                <View className="flex-row justify-center items-center">
                    <Image
                        source={require('../assets/images/indica.jpg')}
                        style={{width, height: height * 0.24}}
                    />
                    <LinearGradient colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                    style={{
                                        width, height: height * 0.40,
                                    }}
                                    start={{x: 0.5, y: 0}}
                                    end={{x: 0.5, y: 1}}
                                    className={"absolute bottom-0"}
                    />
                </View>
            </View>
            <Text className="text-3xl text-white text-center font-bold tracking-wider mb-5">Cadastro Usuário</Text>
            <View className="mx-4 mb-3 flex-col justify-center items-center">
                <TextInput
                    placeholder={"Usuário"}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TextInput
                    placeholder={"Senha"}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TextInput
                    placeholder={"Fone"}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </View>
            <View  className="mt-5 w-1/2 bg-orange-400 rounded-lg">
                <Button
                    title={"Cadastrar"}
                    color={"#FF8C19"}
                    onPress={() => navigation.navigate('Home')}
                    // className="w-1/2 bg-orange-400 rounded-lg"
                />
            </View>

        </ScrollView>

    )
}