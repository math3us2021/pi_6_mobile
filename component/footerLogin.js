import React from 'react';
import {ScrollView, Text, ImageBackground, View, Image, Dimensions, Pressable} from "react-native";
import {image185} from "../api/moviedb";

const {width, height} = Dimensions.get('window');

export default function FooterLogin({order}) {
    return (
        <View className="w-full justify-center items-center">
            <View className="flex-row w-1/2">
                <Pressable
                    className={`mr-1  mb-3 h-3 flex-col justify-center items-center rounded-lg 
                    ${order === 1 ? 'w-1/2 bg-yellow' : 'w-1/4 bg-whit'}`}></Pressable>

                <Pressable
                    className={`mr-1  mb-3 h-3 flex-col justify-center items-center rounded-lg 
                    ${order === 2 ? 'w-1/2 bg-yellow' : 'w-1/4 bg-whit'}`}></Pressable>
                <Pressable
                    className={`mr-1  h-3 flex-col justify-center items-center rounded-lg 
                    ${order === 3 ? 'w-1/2 bg-yellow' : 'w-1/4 bg-whit'}`}></Pressable>
            </View>
        </View>

    )
}