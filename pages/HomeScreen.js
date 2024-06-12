import React, {useEffect, useState} from "react";
import {Dimensions, Image, Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import TrendingMovies from "../component/trendingMovies";
import MovieList from "../component/movieList";
import {useRoute} from "@react-navigation/native";
import {
    featchTopRatedMovies,
    featchTopRatedMovies1,
    featchTrendingMovies,
    featchUpcomingMovies
} from "../api/moviedb";
import {Loading} from "../component/loading";
import {Menu} from "../component/menu";
import {HeaderHome} from "../component/headerHome";
import { useUser } from '../context/UserContext';

var {width, height} = Dimensions.get('window');


export default function HomeScreen() {
    const route = useRoute();
    const { user } = useUser();

    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [toRated, setToRated] = useState([])
    const [movieSug, setMovieSug] = useState([])
    const [loading, setLoading] = useState(true)
    const [titleGender, setTitleGender] = useState('')
    const [titleGen, setTitleGen] = useState([])


    const genres = [
        {"id": 28, "name": "Ação"},
        {"id": 35, "name": "Comédia"},
        {"id": 18, "name": "Drama"},
        {"id": 12, "name": "Aventura"},
        {"id": 878, "name": "Ficção"},
        {"id": 10749, "name": "Romance"},
    ];

    useEffect(() => {
        const genders = user.favoriteGenres.split(',').map(item => item.trim());
        setTitleGen(genders);
        const selectedGenres = genres.filter(genre => genders.includes(genre.name));
        const genreIDs = selectedGenres.map(genre => genre.id);
        const genreIDString = genreIDs.join(',');
        setTitleGender(`Filmes de ${user.favoriteGenres}`)
        getTrendMovies().then();
        getUpcomingMovies().then();
        getTopRoteMoviesTotal(genreIDString).then();
        getTopRoteMovies1(genreIDs).then();
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
    const getTopRoteMoviesTotal = async (genreIDs) => {
        const data = await featchTopRatedMovies(genreIDs)
        if (data && data.results) setToRated(data.results)
    }

    const getTopRoteMovies1 = async (genreIDs) => {
        for (const item of genreIDs) {
            const data = await featchTopRatedMovies1(item)
            if (data && data.results) {
                setMovieSug(data.results)
            }
        }
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
                <HeaderHome user={user}/>
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
                        <MovieList title={titleGender} data={toRated}/>
                        <View className="flex-col justify-center items-center mx-2">
                            <Image
                                source={require('../assets/images/hbo.png')}
                                style={{width: width, height: 250, padding: 1,}}
                            />
                        </View>
                        <MovieList title="Próximos lançamentos" data={upcoming}/>
                        <View className="flex-col justify-center items-center mx-2">
                            <Image
                                source={require('../assets/images/netflix.jpg')}
                                style={{width: width, height: 250, padding: 1,}}
                            />
                        </View>
                    </ScrollView>
                )
            }
            {
                movieSug.length > 0 && (
                    <Menu onSelect={'Home'} sugestionMovies={movieSug}/>
                )
            }
        </View>
    );
}