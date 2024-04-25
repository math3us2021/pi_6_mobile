import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from "react-native";


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
                                    source={require('../assets/images/mat.jpeg')}
                                />
                            </View>
                            <Text className="text-write text-xs mt-1">
                                {characterName.length > 15 ? characterName.slice(0, 15) + "..." : characterName}
                            </Text>
                            <Text className="text-neutral-400 text-xs mt-1">
                                {characterName.length > 15 ? characterName.slice(0, 15) + "..." : characterName}
                            </Text>
                        </TouchableOpacity>
                    )
                }
                )}
            </ScrollView>
        </View>
    )
}