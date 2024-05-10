import {Dimensions, ScrollView, Text, TouchableOpacity, View, Image, TextInput, Button, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {LinearGradient} from "expo-linear-gradient";
import {GenderMovie} from "../component/gender";
import axios from 'axios';


var {width, height} = Dimensions.get('window');

export default function UserScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState([])

    const {params: item} = useRoute();
    const navigation = useNavigation();
    useEffect(() => {
    }, [item]);

    const handleSelectedGenres = (selectedGenres) => {
        console.log("Gêneros selecionados:", selectedGenres);
        setGender(selectedGenres)
    };

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
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 text-lg border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TextInput
                    placeholder={"Senha"}
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 text-lg mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <TextInput
                    placeholder={"Email"}
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 text-lg border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TextInput
                    placeholder={"Fone"}
                    value={phone}
                    onChangeText={setPhone}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 text-lg mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </View>
            <GenderMovie  onSelectGenres={handleSelectedGenres}/>
            <View  className="mt-5 flex-col justify-center items-center">
                <Pressable
                    className="bg-orange-400 w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text className="text-lg">Cadastrar</Text>
                </Pressable>
            </View>

        </ScrollView>

    )
}