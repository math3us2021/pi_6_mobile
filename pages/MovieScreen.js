import {Dimensions, ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {LinearGradient} from "expo-linear-gradient";
import Cast from "../component/cast";
import {featchMovieCredits, featchMovieDetails, image185, image500} from "../api/moviedb";
import {Loading} from "../component/loading";

var {width, height} = Dimensions.get('window');

export default function MovieScreen() {
    let movieName = "Sedução Sex Shop Filme.";

    const {params: item} = useRoute();
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [cast, setCast] = useState([])
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation();

    useEffect(() => {
        // console.log('Movie Details', item.id)
        getMovieDetails(item.id)
        getMovieCredits(item.id)
    }, [item]);

    const getMovieDetails = async id => {
        const data = await featchMovieDetails(id);
        if (data) setMovie(data)
        setLoading(false)
    }

    const getMovieCredits = async id => {
        const data = await featchMovieCredits(id);
        if (data && data.cast) setCast(data.cast)
    }
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
                    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                        <HeartIcon size="35" color={isFavorite ? "red" : "white"}/>
                    </TouchableOpacity>
                </SafeAreaView>

                {
                    loading? (
                        <Loading  />
                    ): (
                        <View className="flex-row justify-center items-center">
                            <Image
                                // source={require('../assets/images/sex.jpg')}
                                source={{uri: image500(movie?.poster_path || '../assets/images/indica.jpg')}}
                                style={{width, height: height * 0.55}}
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
                    )
                }

            </View>
            <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
                {/*Title*/}
                <Text className="text-3xl text-whit text-center font-bold tracking-wider">{
                    movie?.title
                }</Text>
                {/*Status*/}
                {
                    movie?.id ? (
                        <Text
                            className="text-gray-border font-semibold text-base text-center">{movie?.status} * {movie?.release_date.split('-')[0]} * {movie?.runtime} min</Text>
                    ) : null
                }
                {/*    Genero*/}
                <View className="flex-row justify-center mx-4 space-x-2">
                        {
                            movie?.genres?.map((item, index) => {
                                return (
                                    <Text key={index} className="text-gray-border font-semibold text-base text-center">
                                        {item.name}
                                        {index < movie.genres.length - 1 ? ', ' : ''}
                                    </Text>
                                )
                            })
                        }

                </View>
                <Text className="text-whit mx-4 tracking-wide">
                    {
                        movie?.overview
                    }
                </Text>
            </View>
            <Cast navigation={navigation} cast={cast}/>

        </ScrollView>

    )
}