import {
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Image
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";
import {XMarkIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";
import {image185, searchMovies} from "../api/moviedb";

var {width, height} = Dimensions.get('window');

export default function SearchScreen() {
    const navigation = useNavigation();
    const [results, setResults] = React.useState([])
    const handleSearch = value=>{
        console.log('change', value)
    }

    const handleTextDebounce = (value) => {
        if (value.length > 2) searchMovies({
            query: value,
            include_adult: false,
            language: 'pt-BR',
            page: 1
        }).then(data => {
            console.log('Data', data)
            if (data && data.results) setResults(data.results)
        })
    }
    return (
        <SafeAreaView className="flex-1 bg-neutral-800 mt-3">
            <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-700 rounded-full">
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder={"Pesquisar Filmes"}
                    placeholderTextColor={"lightgray"}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-write tracking-wider"
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="rounded-full p-3 m-1 bg-neutral-500"
                >
                    <XMarkIcon size="25" color={"#fff"}/>
                </TouchableOpacity>
            </View>
            {
                results.length >0?(
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 10}}
                        className="space-y-3"
                    >
                        <Text className="text-white font-semibold ml-1">Resultados: ({results.length})</Text>
                        <View className="flex-row flex-wrap justify-between">
                            {
                                results.map((item, index) => (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => navigation.navigate('Movie', {item})}
                                    >
                                        <View className="space-y-2 mb-4">

                                            <Image className="rounded-3xl"
                                                   // source={require('../assets/images/indica.jpg')}
                                                   source={{uri: image185(item?.poster_path)}}
                                                   style={{width: width * 0.45, height: height * 0.30}}
                                            />
                                            <Text className="text-white font-semibold text-center">{
                                                item?.title.length > 15 ? item?.title.slice(0, 15) + "..." : item?.title

                                            }</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))
                            }
                        </View>
                    </ScrollView>
                ):(
                    <View className="flex-1 justify-center items-center">
                        <Image
                            source={require('../assets/images/film_mov.png')}
                            // className="h-96 w-96"
                            />
                    </View>
                )
            }

        </SafeAreaView>
    )
}