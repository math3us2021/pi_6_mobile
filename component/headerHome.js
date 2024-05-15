import {View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {BellIcon} from "react-native-heroicons/solid";
import {UserIcon, HomeIcon, FilmIcon} from "react-native-heroicons/outline";

export function HeaderHome() {

    const navigation = useNavigation();
    const [name, setName] = useState('Usuário')

    return (
        <View className="flex-col justify-center items-between mx-4 mt-5 mb-5">
            <View className="flex-row justify-between ">
                <View className="flex-col">
                    <Text className="text-sm text-gray ">Bem-Vindo: {name}!</Text>
                    <Text className="text-lg font-bold text-whit">Que tal um filme hoje?</Text>
                </View>
                <View className="flex-row">
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}
                                          className="bg-blue w-10 h-10 flex-col justify-center items-center rounded-full"
                        >
                            <BellIcon size="32" color={"#ffffff"}/>
                        </TouchableOpacity>
                    </View>
                    <View className="ml-4">
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                          className="bg-blue w-10 h-10 flex-col justify-center items-center rounded-full">
                            <UserIcon size="28" color={"#ffffff"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


