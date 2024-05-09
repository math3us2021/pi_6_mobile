import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    Button,
    ImageBackground,
    Pressable, ScrollView
} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

var {width, height} = Dimensions.get('window');

export default function LoginScreen() {
    const navigation = useNavigation();
    const [text, setText] = React.useState('');

    function handleButtonPress() {
        navigation.navigate('Home');
    }

    return (
        <ImageBackground
            width={width}
            height={height}
            source={require('../assets/images/img_login.png')}
            className="flex-1 bg-neutral-900 justify-center"
        >

            <View className="flex-col mb-12 justify-center items-center">
                <Image
                    source={require('../assets/images/logo.png')}
                />
            </View>
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
                <View className="mt-5 w-1/2 bg-orange-400 rounded-lg flex-col justify-center items-center">
                    <Pressable
                        className="bg-orange-400 w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                        onPress={handleButtonPress}
                    >
                        <Text className="text-lg">Entrar</Text>
                    </Pressable>
                </View>
                <Pressable
                    className="text-right text-blue-500 mt-2"
                    onPress={() => navigation.navigate('User')}>
                    <Text className="text-right text-lg text-blue-500 mt-2">Cadastrar-se</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}