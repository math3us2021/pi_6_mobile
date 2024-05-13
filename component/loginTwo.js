import React from 'react';
import {ScrollView, Text, ImageBackground, View, Image, Dimensions, Pressable} from "react-native";
import {image185} from "../api/moviedb";
import FooterLogin from "./footerLogin";
import {LinearGradient} from "expo-linear-gradient";

const {width, height} = Dimensions.get('window');

export default function LoginTwo() {
    return (
        <ImageBackground
            width={width}
            height={height}
            source={require('../assets/images/casal.jpg')}
            className="justify-center flex-1"
            resizeMode="cover"
        >
            <LinearGradient colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                            style={{
                                width, height: height * 0.60,
                            }}
                            start={{x: 0.5, y: 0}}
                            end={{x: 0.5, y: 1}}
                            className={"absolute bottom-0"}
            />
            <View className="w-full flex-col justify-center items-center"
                  style={{width, height}}
            >
                <View className="items-start">
                    <Text className="text-4xl text-whit">Explore o universo</Text>
                    <Text className="text-4xl text-whit">dos filmes sob</Text>
                    <Text className="text-4xl text-whit">medida para você</Text>
                </View>
            </View>
            <FooterLogin order={2}/>
        </ImageBackground>
    )
}