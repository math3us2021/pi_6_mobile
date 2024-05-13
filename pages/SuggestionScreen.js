import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Button,
    Pressable,
    StyleSheet
} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {LinearGradient} from "expo-linear-gradient";
import Cast from "../component/cast";
import RNPickerSelect from 'react-native-picker-select';
import {GenderMovie} from "../component/gender";

var {width, height} = Dimensions.get('window');

export default function SuggestionScreen() {

    const {params: item} = useRoute();
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const navigation = useNavigation();
    useEffect(() => {
    }, [item]);


    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            className="flex-1 bg-neut-900">
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
                        style={{width, height: height * 0.10}}
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
            <Text className="text-3xl text-white text-center font-bold tracking-wider mb-5"> Formulário para
                sugestão</Text>
            <View className="mx-4 mb-3 flex-col justify-center items-center">
                <TextInput
                    placeholder={"Usuário"}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TextInput
                    placeholder={"Senha"}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50  mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <Pressable
                    className="bg-gray-50  border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        placeholder={{
                            label: 'Selecione ...',
                            value: null,
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            {label: 'Football', value: 'football'},
                            {label: 'Baseball', value: 'baseball'},
                            {label: 'Hockey', value: 'hockey'},
                        ]}
                    />
                </Pressable>

                <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TextInput
                    placeholder={"Fone"}
                    placeholderTextColor={"lightgray"}
                    className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </View>


            <View className="mt-5 flex-col justify-center items-center">
                <Pressable
                    className="bg-orange-400 w-1/2 h-10 flex-col justify-center items-center rounded-lg"
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text className="text-lg">Gerar</Text>
                </Pressable>
            </View>

        </ScrollView>

    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 20,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'write',
        paddingRight: 30
    },
    inputAndroid: {
        marginRight: 30,
        // fontSize: 20,
        // paddingHorizontal: 10,
        // paddingVertical: 8,
        // borderWidth: 2,
        // borderColor: 'purple',
        // borderRadius: 8,
        // color: 'write',
        // paddingRight: 30
    }
});