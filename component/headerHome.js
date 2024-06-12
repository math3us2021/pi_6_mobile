import {View, Text, TouchableOpacity, Button} from "react-native";
import React, {useState, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {BellIcon} from "react-native-heroicons/solid";
import {UserIcon} from "react-native-heroicons/outline";
import {socket} from '../socket';
import Toast from 'react-native-toast-message';
import { useMessage } from '../context/MessageContext';

export function HeaderHome({user}) {
    const { message, setMessage, notifications, setNotifications } = useMessage();

    const navigation = useNavigation();

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            socket.on('message', (msg) => {
                console.log(`Message from server: ${msg}`);
                const parsedMessage = JSON.parse(msg);
                setMessage(parsedMessage);
                setNotifications(true);
                showCustomNotification();
            });
        }

        function onDisconnect() {

        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('message');
        };
    }, []);

    const showCustomNotification = () => {
        Toast.show({
            type: 'info',
            text1: 'Novo Filme!',
            position: 'top',
            visibilityTime: 3000,
            autoHide: true,
            topOffset: 30,
            containerStyle: {
                width: 300, // Largura
                height: 200, // Altura
                borderRadius: 10, // Borda arredondada
                backgroundColor: '#d8b72c', // Cor de fundo
            },
            text1Style: {
                fontSize: 20, // Tamanho da fonte
            },
            onShow: () => {
            },
            onHide: () => {
            },
            onPress: () => {
            }
        });
    };

    return (
        <View className="flex-col justify-center items-between mx-4 mt-5 mb-5">
            <View className="flex-row justify-between ">
                <View className="flex-col">
                    <Text className="text-sm text-gray ">Bem-Vindo: {user.name}!</Text>
                    <Text className="text-lg font-bold text-whit">Que tal um filme hoje?</Text>
                </View>
                <View className="flex-row">
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}
                                          className={` w-10 h-10 flex-col justify-center
                                           items-center rounded-full ${notifications ? 'bg-yellow' : 'bg-blue'}`}>
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


