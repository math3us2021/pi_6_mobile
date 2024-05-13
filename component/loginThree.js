import React from 'react';
import {ScrollView, Text, ImageBackground, View, Image, Dimensions, TextInput, Pressable} from "react-native";
import {image185} from "../api/moviedb";
import FooterLogin from "./footerLogin";
import {useNavigation} from "@react-navigation/native";
import {FilmIcon} from "react-native-heroicons/solid";
import {BellIcon} from "react-native-heroicons/solid";
import {FaceSmileIcon} from "react-native-heroicons/solid";

const {width, height} = Dimensions.get('window');

export default function LoginThree() {
    const navigation = useNavigation();
    const [text, setText] = React.useState('');

    function handleButtonPress() {
        navigation.navigate('Login');
    }

    return (
        <View className="flex-1 justify-between bg-neut-900"
              style={{width, height}}>
            <View className="flex-col justify-center items-center">
                <Image
                    source={require('../assets/images/img.png')}
                    style={{width: 250, height: 240, resizeMode: 'contain'}}
                />
            </View>
            <View className="mx-6 mb-3 flex-col justify-center items-center">
                <View
                    className="border border-neut-800 text-gray-900 mt-8 w-full h-16 bg-neut-800 rounded-lg flex-col justify-center items-center">
                    <FilmIcon size="35" color="yellow" style={{position: 'absolute', top: -20}}/>
                    <Text className="text-lg  text-whit">Indicação de filmes personalizados.</Text>
                </View>

                <View
                    className="border border-neut-800 text-gray-900 mt-8 w-full h-30 bg-neut-800 rounded-lg flex-col justify-center items-center">
                    <BellIcon size="35" color="yellow" style={{position: 'absolute', top: -28}}/>
                    <Text className="text-lg  text-whit">Seja o primeiro a ser avisado</Text>
                    <Text className="text-lg  text-whit">sobre novos filmes.</Text>
                </View>

                <View
                    className="border border-neut-800 text-gray-900 mt-8 w-full h-16 bg-neut-800 rounded-lg flex-col justify-center items-center">
                    <FaceSmileIcon size="35" color="yellow" style={{position: 'absolute', top: -28}}/>
                    <Text className="text-lg  text-whit">Fique por dentro de todas as</Text>
                    <Text className="text-lg  text-whit">informações dos filmes.</Text>
                </View>
            </View>
            <View className="mx-6 flex-col justify-center items-center">
                <View className="mt-5 w-full bg-yellow rounded-lg flex-col justify-center items-center">
                    <Pressable
                        className="bg-yellow w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                        onPress={() => navigation.navigate('User')}
                    >
                        <Text className="text-lg ">Criar uma conta</Text>
                    </Pressable>
                </View>

                <View
                    className="border border-yellow text-gray-900 mt-5 w-full bg-neutral-800 rounded-lg flex-col justify-center items-center">
                    <Pressable
                        onPress={handleButtonPress}
                        className="w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                    >
                        <Text className="text-lg text-whit">Entrar</Text>

                    </Pressable>
                </View>
            </View>
            <View className="flex-col mt-5 justify-center items-center">
                <FooterLogin order={3}/>
            </View>
        </View>
    )
}