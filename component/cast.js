import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import {image185} from "../api/moviedb";


export default function Cast({cast, navigation}) {
    const characterName = "Matheus";
    const personName = "Matheus";

    return (
        <View className="my-6">
            <Text className="text-write text-lg mx-4 mb-5">Elenco</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {
                   cast && cast.map((person, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            className="items-center mr-4">
                            <View
                                className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image
                                    className="rounded-2xl h-24 w-20"
                                    // source={require('../assets/images/mat.jpeg')}
                                    source={{uri: image185(person?.profile_path)}}
                                />
                            </View>
                            <Text className="text-write text-xs mt-1">
                                {person?.character.length > 15 ? person?.character.slice(0, 15) + "..." : person?.character}
                            </Text>
                            <Text className="text-neutral-400 text-xs mt-1">
                                {person?.original_name.length > 15 ? person?.original_name.slice(0, 15) + "..." : person?.original_name}
                            </Text>
                        </TouchableOpacity>
                    )
                }
                )}
            </ScrollView>
        </View>
    )
}