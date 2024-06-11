import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable, TouchableWithoutFeedback, TextInput,
} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon, XMarkIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {LinearGradient} from "expo-linear-gradient";
import {Menu} from "../component/menu";
import TrendingMovies from "../component/trendingMovies";
import TrendingSugestion from "../component/trendingSugestion";
import {image185, searchMovies} from "../api/moviedb";
import {sugestiondb} from "../api/sugestiondb";

var {width, height} = Dimensions.get('window');

export default function SuggestionScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const movieParams = route.params.sugestion;
    const [movie, setMovie] = React.useState(movieParams);
    const [resultsSearch, setResultsSearch] = React.useState([])


    const handleClick = (item) => {
        sugestiondb(item.id).then((response) => {
            navigation.navigate('Result', {sugestion: response})
        }).catch(err => {
            alert('Não foi possível encontrar o filme na base de recomendações');
        })
    }

    const handleTextDebounce = (value) => {
        // setLoading(true)
        if (value.length > 2) searchMovies({
            query: value,
            include_adult: false,
            language: 'pt-BR',
            page: 1
        }).then(data => {
            if (data && data.results) setResultsSearch(data.results)
            // setLoading(false)
        })
    }

    return (
        <SafeAreaView className="flex-1 bg-neut-800">
            <ScrollView
                contentContainerStyle={{paddingBottom: 20}}
                className="flex-1 bg-neut-900">
                <View className="w-full">
                    <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
                        <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1"
                                          style={{backgroundColor: '#2165de'}}>
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
                                            width, height: height * 0.18,
                                        }}
                                        start={{x: 0.5, y: 0}}
                                        end={{x: 0.5, y: 1}}
                                        className={"absolute bottom-0"}
                        />
                    </View>
                </View>
                <Text className="text-3xl text-whit text-center font-bold tracking-wider mb-1"> Escolha um filme
                    referência</Text>
                <View
                    className="mx-4 mb-3 mt-5 flex-row justify-between items-center border border-gray-border rounded-full">
                    <TextInput
                        onChangeText={handleTextDebounce}
                        placeholder={"Pesquisar Filmes"}
                        placeholderTextColor={"#fff"}
                        className="pb-1 pl-6 flex-1 text-base font-semibold text-whit tracking-wider"
                    />
                    <TouchableOpacity
                        onPress={() => setResultsSearch([])}
                        className="rounded-full p-3 m-1 bg-neutral-500"
                    >
                        <XMarkIcon size="25" color={"#fff"}/>
                    </TouchableOpacity>
                </View>
                {
                    resultsSearch.length > 0 && (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{paddingHorizontal: 10}}
                            className="space-y-3"
                        >
                            <Text className="text-whit font-semibold ml-1">Resultados: ({resultsSearch.length})</Text>
                            <View className="flex-row flex-wrap justify-between">
                                {
                                    resultsSearch.map((item, index) => (
                                        <TouchableWithoutFeedback
                                            key={index}
                                            onPress={() => handleClick(item)}
                                        >
                                            <View className="space-y-2 mb-4">

                                                <Image className="rounded-3xl"
                                                    // source={require('../assets/images/indica.jpg')}
                                                       source={{uri: image185(item?.poster_path)}}
                                                       style={{width: width * 0.45, height: height * 0.30}}
                                                />
                                                <Text className="text-whit font-semibold text-center">{
                                                    item?.title.length > 15 ? item?.title.slice(0, 15) + "..." : item?.title

                                                }</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    )
                }
                <TrendingSugestion data={movie}/>
            </ScrollView>
            <Menu onSelect={'Suggestion'}/>
        </SafeAreaView>
    )
}