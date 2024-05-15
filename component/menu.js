import {View, Text, Pressable, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {FilmIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {HomeIcon,} from "react-native-heroicons/solid";
import {useNavigation} from "@react-navigation/native";


export function Menu({onSelect}) {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="my-2">
            <View className="flex-row justify-around items-center ">
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center">
                        <HomeIcon size="30" strokeWidth={2} color={onSelect === 'Home' ? "#FED521" : "#fff"}/>
                        <Text className="text-sm text-gray text-gray ">Home</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('Suggestion')} className=" items-center">
                        <FilmIcon size="30" strokeWidth={2} color={onSelect === 'Suggestion' ? "#FED521" : "#fff"}/>
                        <Text className="text-sm text-gray text-gray ">Recomendar</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}  className="items-center ">
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color={onSelect === 'Search' ? "#FED521" : "#fff"}/>
                    </TouchableOpacity>
                    <Text className="text-sm text-gray text-gray ">Busca</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}


