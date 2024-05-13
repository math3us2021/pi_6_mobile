import {
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    Pressable, TouchableOpacity,
} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import FooterLogin from "../component/footerLogin";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";

var {width, height} = Dimensions.get('window');

export default function LoginScreen() {
    const navigation = useNavigation();
    const [text, setText] = React.useState('');

    function handleButtonPress() {
        navigation.navigate('Home');
    }

    return (
        <View className="flex-1 bg-black  bg-neut-900"
              style={{width, height}}
        >
            <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
                <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1"
                                  style={{backgroundColor: '#2165de'}}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
            </SafeAreaView>
            <View className="flex-col mt-20 justify-center items-center">
                <Image
                    source={require('../assets/images/img.png')}
                    style={{width: 250, height: 240, resizeMode: 'contain'}}
                />
            </View>
            <View className="mx-6 mb-3 flex-col justify-center items-start">
                <Text className="text-whit text-start mt-5 font-bold tracking-wider mb-1">*E-mail</Text>
                <TextInput
                    placeholder={"Usuário"}
                    placeholderTextColor={"lightgray"}
                    className="bg-neut-800 border mt-1 border-gray-border text-whit text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <Text className="text-whit text-start mt-5 font-bold tracking-wider mb-1">*Senha</Text>

                <TextInput
                    placeholder={"Senha"}
                    placeholderTextColor={"lightgray"}
                    className="bg-neut-800 border border-gray-border mt-1 text-whit text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </View>
            <View className="mx-6 mt-10 flex-col justify-center items-center">
                <View className="mt-5 w-full bg-yellow rounded-lg flex-col justify-center items-center">
                    <Pressable
                        className="bg-yellow w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                        onPress={handleButtonPress}
                    >
                        <Text className="text-lg ">Entrar</Text>
                    </Pressable>
                </View>

                <View
                    className="border border-yellow text-gray-900 mt-5 w-full bg-neutral-800 rounded-lg flex-col justify-center items-center">
                    <Pressable
                        className="w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                        onPress={() => navigation.navigate('User')}
                    >
                        <Text className="text-lg text-whit">Criar uma conta</Text>

                    </Pressable>
                </View>
            </View>
            {/*<View className="mt-16 w-full rounded-lg flex-col justify-center items-center">*/}
            {/*    <Pressable*/}
            {/*        className="bg-yellow w-3/4 h-10 flex-col justify-center items-center rounded-lg"*/}
            {/*        onPress={handleButtonPress}*/}
            {/*    >*/}
            {/*        <Text className="text-lg">Entrar</Text>*/}
            {/*    </Pressable>*/}
            {/*</View>*/}

            {/*<View*/}
            {/*    className="border border-yellow text-gray-900 mt-5 w-full bg-neutral-800 rounded-lg flex-col justify-center items-center">*/}
            {/*    <Pressable*/}
            {/*        className="w-1/2 h-10 flex-col justify-center items-center rounded-lg"*/}
            {/*        onPress={() => navigation.navigate('User')}*/}
            {/*    >*/}
            {/*        <Text className="text-lg text-whit">Criar uma conta</Text>*/}
            {/*    </Pressable>*/}
            {/*</View>*/}
        </View>
    )
}