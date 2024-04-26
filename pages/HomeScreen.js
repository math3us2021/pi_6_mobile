import React, { useState} from "react";
import {ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from "../component/trendingMovies";
import MovieList from "../component/movieList";
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();

    const [trending, setTrending] = useState([1,2,3])
    const [upcoming, setUpcoming] = useState([1,2,3,])
    const [toRated, setToRated] = useState([1,2,3])

    return (
        <View className="flex-1 mt-2 bg-neutral-800">
        <SafeAreaView className="mb-3">
            <StatusBar style="light" />
            <View className="flex-row justify-between items-center mx-4">
                <Bars3CenterLeftIcon size="30" strokeWidth={2} color={"#fff"} />
                <Text className="text-3xl font-bold text-neutral-100">Movies</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color={"#fff"} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
            >
            {/*    Trending Movies Carrosel */}
                <TrendingMovies data={trending} />

                <MovieList  title="Próximos lançamentos" data={upcoming}/>

                <MovieList  title="Mais Votados" data={upcoming}/>
            </ScrollView>

        </View>
    );
}