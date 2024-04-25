import {Dimensions, ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {LinearGradient} from "expo-linear-gradient";
import Cast from "../component/cast";

var {width, height} = Dimensions.get('window');

export default function MovieScreen() {
    let movieName = "Sedução Sex Shop Filme.";

    const {params: item} = useRoute();
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [cast, setCast] = useState([1,2,3,4,5])
    const navigation = useNavigation();
    useEffect(() => {
    }, [item]);

    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            className="flex-1 bg-neutral-900">
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
                <View className="flex-row justify-center items-center">
                    <Image
                        source={require('../assets/images/sex.jpg')}
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
            </View>
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/*Title*/}
                <Text className="text-3xl text-white text-center font-bold tracking-wider">{movieName}</Text>
                {/*Status*/}
                <Text className="text-neutral-400 font-semibold text-base text-center">Release * 2021 * 1h 30m</Text>
            {/*    Genero*/}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">Ação * Suspense</Text>

                </View>
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi aperiam atque
                    consequatur, cumque deserunt doloremque doloribus ducimus ea earum eos est eum explicabo facere
                    fugiat fugit harum id impedit inventore ipsam iusto laborum laudantium magnam maxime minima modi
                    molestias mollitia natus nemo nisi nobis non nulla obcaecati officia optio pariatur perspiciatis
                    placeat porro praesentium quae quas quia quidem quisquam quo ratione recusandae rem repellendus
                    repudiandae rerum saepe sapiente sequi similique sit soluta sunt suscipit tempora tenetur totam
                    ullam unde vel velit veritatis voluptas voluptate voluptatem voluptatum.
                </Text>
            </View>
            <Cast navigation={navigation} cast={cast}/>

        </ScrollView>

    )
}