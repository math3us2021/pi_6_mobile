import React, {useEffect, useState} from "react";
import {Image, Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import TrendingMovies from "../component/trendingMovies";
import MovieList from "../component/movieList";
import {useNavigation} from "@react-navigation/native";
import {featchTopRatedMovies, featchTrendingMovies, featchUpcomingMovies} from "../api/moviedb";
import {Loading} from "../component/loading";
import {BellIcon} from "react-native-heroicons/solid";
import {UserIcon, HomeIcon, FilmIcon} from "react-native-heroicons/outline";

export default function HomeScreen() {
    const navigation = useNavigation();

    const [name, setName] = useState('Usuário')
    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [toRated, setToRated] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTrendMovies();
        getUpcomingMovies();
        // getTopRoteMovies();

    }, []);

    const getTrendMovies = async () => {
        const data = await featchTrendingMovies();
        if (data && data.results) setTrending(data.results)
        setLoading(false)
    }
    const getUpcomingMovies = async () => {
        const data = await featchUpcomingMovies()
        if (data && data.results) setUpcoming(data.results)
    }
    const getTopRoteMovies = async () => {
        const data = await featchTopRatedMovies()
        if (data && data.results) setToRated(data.results)
    }

    return (
        <View className="flex-1 bg-neut-800">
            <SafeAreaView className="mb-3 mt-2">
                <StatusBar style="light"/>
                <View className="flex-col justify-center items-center mx-4">
                    <Image
                        source={require('../assets/images/img.png')}
                        style={{width: 250, height: 44, resizeMode: 'contain', padding: 20}}
                    />
                </View>
                <View className="flex-col justify-center items-between mx-4 mt-5 mb-5">
                    <View className="flex-row justify-between ">
                        <View className="flex-col">
                            <Text className="text-sm text-gray ">Bem-Vindo: {name}!</Text>
                            <Text className="text-lg font-bold text-whit">Que tal um filme hoje?</Text>
                        </View>
                        <View className="flex-row">
                            <View className="bg-blue w-10 h-10 flex-col justify-center items-center rounded-full">
                                <BellIcon size="32" color={"#ffffff"}/>
                            </View>
                            <View className="bg-blue ml-4 w-10 h-10 flex-col justify-center items-center rounded-full">
                                <UserIcon size="28" color={"#ffffff"}/>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 10}}
                    >
                        {trending.length > 0 && <TrendingMovies data={trending}/>}
                        <View className="mt-1 mb-2 flex-col justify-center items-center">

                            <Pressable
                                className="bg-orange-400 w-3/4 h-20 flex-col justify-center items-center rounded-lg"
                                onPress={() => navigation.navigate('Suggestion')}
                            >
                                <Text className="text-lg">Sugestão de Filme</Text>
                            </Pressable>
                        </View>
                        <MovieList title="Próximos lançamentos" data={upcoming}/>
                    </ScrollView>
                )
            }

            <SafeAreaView className="mb-3 mt-3">
                <View className="flex-row justify-around items-center mx-4">
                    <View className="flex-col items-center ">
                        <HomeIcon size="30" strokeWidth={2} color={"#FED521"}/>
                        <Text className="text-sm text-gray text-gray ">Home</Text>
                    </View>
                    <View className="flex-col items-center ">
                        <FilmIcon size="30" strokeWidth={2} color={"#fff"}/>
                        <Text className="text-sm text-gray text-gray ">Home</Text>
                    </View>
                    <View className="flex-col items-center ">
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <MagnifyingGlassIcon size="30" strokeWidth={2} color={"#fff"}/>
                        </TouchableOpacity>
                        <Text className="text-sm text-gray text-gray ">Home</Text>
                    </View>

                </View>
            </SafeAreaView>
        </View>
    );
}