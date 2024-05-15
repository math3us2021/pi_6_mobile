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
import {Menu} from "../component/menu";
import {HeaderHome} from "../component/headerHome";

export default function HomeScreen() {
    const navigation = useNavigation();

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
                <HeaderHome/>
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
                        <MovieList title="Próximos lançamentos" data={upcoming}/>
                    </ScrollView>
                )
            }
            <Menu onSelect={'Home'}/>

        </View>
    );
}