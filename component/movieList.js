import React from "react";
import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    Touchable,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {image185} from "../api/moviedb";

var {width, height} = Dimensions.get('window');

export default function MovieList({title, data}) {
    let movieName = "Movie Name Teste de um nome de filme muito grande para testar o limite de caracteres que o nome do filme pode ter.";
    const navigation = useNavigation();
    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-write text-xl">{title}</Text>
                <TouchableOpacity>
                    <Text style={{color: 'orange'}} className="text-lg">See All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {data.map((item, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => navigation.navigate('Movie', item)}
                        >
                            <View className="space-y-1 mr-4">
                                <Image
                                    // source={require('../assets/images/sex.jpg')}
                                    source={{uri: image185(item.poster_path)}}
                                    style={{width: width * 0.33, height: height * 0.22}}
                                    className="rounded-3xl"
                                />
                                <Text className="text-neutral-300 ml-1">
                                    {item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
        </View>
    )
}