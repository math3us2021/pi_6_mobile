import {View, Text, Dimensions, TextInput, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";
import {XMarkIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";

var {width, height} = Dimensions.get('window');

export default function SearchScreen() {
    const navigation = useNavigation();


    return(
        <SafeAreaView className="flex-1 bg-neutral-800 mt-3">
            <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-700 rounded-full">
                <TextInput
                    placeholder={"Pesquisar Filmes"}
                    placeholderTextColor={"lightgray"}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-write tracking-wider"
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="rounded-full p-3 m-1 bg-neutral-500"
                >
                    <XMarkIcon size="25" color={"#fff"} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        )
}