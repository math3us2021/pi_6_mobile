import React, {useEffect} from "react";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation, useRoute} from "@react-navigation/native";
import {BellIcon, FaceSmileIcon} from "react-native-heroicons/solid";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import { useMessage } from '../context/MessageContext';

const {width, height} = Dimensions.get('window');

export default function Notifications() {
    const route = useRoute();
    // const {message, setMessage, setNotifications} = route.params;

    const navigation = useNavigation();
    const { message, setMessage, notifications, setNotifications } = useMessage();

    useEffect(() => {
        if (!message || Object.keys(message).length === 0) {
            navigation.goBack();
        }

        // return navigation.addListener('beforeRemove', (e) => {
        //     e.preventDefault();
        //     setMessage({});
        //     setNotifications(false);
        //     navigation.dispatch(e.data.action);
        // });

        return () => {
            setMessage({});
            setNotifications(false);
        };
    }, [navigation]);

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

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

            {
                isEmpty(message) ? (
                    <SafeAreaView className="mb-3 justify-center items-center"
                                  style={{width, height}}
                    >

                        <View
                            className="border border-neut-800 text-gray-900 mt-8 w-full h-16 bg-neut-800 rounded-lg flex-col justify-center items-center">
                            <View
                                className="bg-yellow-light w-22 h-22 flex-col justify-center items-center rounded-full">
                                <FaceSmileIcon size="50" color="yellow"/>
                            </View>
                            <Text className="text-lg  text-whit">Você ainda não</Text>
                            <Text className="text-lg  text-whit">possui notificação.</Text>
                        </View>
                    </SafeAreaView>
                ) : (
                    <SafeAreaView className="mb-3 justify-center items-center"
                                  style={{width, height}}
                    >
                        <View className="flex-col justify-center items-center bg-gray rounded-lg p-4">
                            <View className="flex-row justify-center items-center">
                                <View
                                    className="bg-black w-22 h-22 flex-col justify-center items-center rounded-full">
                                    <BellIcon size="40" color="yellow"/>
                                </View>
                                <Text className="text-lg text-whit text-center font-bold ml-5 tracking-wider">Lançamento
                                    de filme!</Text>
                            </View>
                            <View className="flex-col items-start justify-start">
                                <Text
                                    className="text-3xl mt-5 text-gray-border text-start font-bold tracking-wider">{message.title}</Text>
                                <Text
                                    className="text-sm mt-1 text-gray-border text-start font-bold tracking-wider">{message.releaseDate} - {message.runtime}</Text>
                                <Text
                                    className="text-sm mt-1 text-gray-border text-start font-bold tracking-wider">Genêro:{message.genreId}</Text>
                                <Text
                                    className="text-lg mt-1 text-gray-border text-start font-bold tracking-wider">Descrição: {message.overview}</Text>

                            </View>
                        </View>
                    </SafeAreaView>
                )
            }
        </View>
    );
}