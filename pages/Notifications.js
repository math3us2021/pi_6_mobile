import React, {useEffect, useState} from "react";
import {Dimensions, Image, Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {FaceSmileIcon} from "react-native-heroicons/solid";
import {BellIcon} from "react-native-heroicons/solid";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {socket} from '../socket';
// import useWebSocket, { ReadyState } from 'react-use-websocket';


const {width, height} = Dimensions.get('window');

export default function Notifications() {
    const navigation = useNavigation();
    const [results, setResults] = React.useState(true)
    const [notifications, setNotifications] = useState([]);
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState('N/A');
    const [message, setMessage] = useState({});

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);

            socket.io.engine.on('upgrade', (transport) => {
                setTransport(transport.name);
            });

            socket.on('message', (msg) => {
                console.log(`Message from server: ${msg}`);
                const menssage = JSON.parse(msg);
                setMessage(menssage);
            });
        }

        function onDisconnect() {
            setIsConnected(false);
            setTransport('N/A');
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('message');
        };
    }, []);

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
                                <Text className="text-3xl mt-5 text-gray-border text-start font-bold tracking-wider">{message.title}</Text>
                                <Text className="text-sm mt-1 text-gray-border text-start font-bold tracking-wider">{message.releaseDate} - {message.runtime}</Text>
                                <Text className="text-sm mt-1 text-gray-border text-start font-bold tracking-wider">Genêro:{message.genreId}</Text>
                                <Text className="text-lg mt-1 text-gray-border text-start font-bold tracking-wider">Descrição: {message.overview}</Text>

                            </View>
                        </View>
                    </SafeAreaView>
                )
            }
        </View>
    );
}