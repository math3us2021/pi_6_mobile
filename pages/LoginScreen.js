import {
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    Pressable,
} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import FooterLogin from "../component/footerLogin";

var {width, height} = Dimensions.get('window');

export default function LoginScreen() {
    const navigation = useNavigation();
    const [text, setText] = React.useState('');

    function handleButtonPress() {
        navigation.navigate('Home');
    }

    return (
        <View className="flex-1 bg-black justify-center bg-black"
              style={{width, height}}
        >
            <View className="flex-col justify-center items-center">
                <Image
                    source={require('../assets/images/img.png')}
                    style={{width: 250, height: 240, resizeMode: 'contain'}}
                />
            </View>
            <View className="mx-6 mb-3 flex-col justify-center items-center">
                <TextInput
                    placeholder={"Usuário"}
                    placeholderTextColor={"lightgray"}
                    className="bg-neut-800 border border-gray-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TextInput
                    placeholder={"Senha"}
                    placeholderTextColor={"lightgray"}
                    className="bg-neut-800 border border-gray-border mt-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <View className="mt-5 w-full bg-yellow rounded-lg flex-col justify-center items-center">
                    <Pressable
                        className="bg-yellow w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                        onPress={handleButtonPress}
                    >
                        <Text className="text-lg">Entrar</Text>
                    </Pressable>
                </View>

                <View
                    className="border border-yellow text-gray-900 mt-5 w-full bg-neutral-800 rounded-lg flex-col justify-center items-center">
                    <Pressable
                        className="w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                        onPress={() => navigation.navigate('User')}
                    >
                        <Text className="text-lg text-whit">Cadastrar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}