import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable,
} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {LinearGradient} from "expo-linear-gradient";
import {Menu} from "../component/menu";
import TrendingMovies from "../component/trendingMovies";

var {width, height} = Dimensions.get('window');

export default function ResultScreen() {
    const route = useRoute();
    const sugestion = route.params.sugestion;
    console.log('Sugestion', sugestion)
    // const {params: item} = useRoute();
    // const [movie, setMovie] = useState([]);

    const navigation = useNavigation();
    // useEffect(() => {
    //     setMovie(sugestion);
    //     // console.log('Sugestion', sugestion)
    // }, [sugestion]);


    const goBack = () => {
        navigation.goBack();
        // setMovie([]);
    }

    return (
        <SafeAreaView className="flex-1 bg-neut-800">
            <ScrollView
                contentContainerStyle={{paddingBottom: 20}}
                className="flex-1 bg-neut-900">
                <View className="w-full">
                    <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
                        <TouchableOpacity onPress={goBack} className="rounded-xl p-1"
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
                <Text className="text-3xl text-yellow text-center font-bold tracking-wider"> Recomendações</Text>
                <Text className="text-2xl text-gray text-center font-bold tracking-wider mb-20"> Filmes para se Divertir</Text>
                <TrendingMovies data={sugestion} title={false}/>
            </ScrollView>
            <Menu onSelect={'Suggestion'}/>
        </SafeAreaView>
    )
}
