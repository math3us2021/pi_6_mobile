import React from 'react';
import {ScrollView, Text,     ImageBackground, View, Image, Dimensions} from "react-native";
import {image185} from "../api/moviedb";
import FooterLogin from "./footerLogin";

const {width, height} = Dimensions.get('window');

export default function LoginOne() {
    return (
        <ImageBackground
            width={width}
            height={height}
            source={require('../assets/images/img_login.png')}
            className=" justify-center flex-1"
        >
            <View className="flex-col justify-center items-center"
                style={{ width, height}}
            >
                <Image
                    source={require('../assets/images/img.png')}
                    style={{width: 250, height: 300, resizeMode: 'contain', padding: 20}}
                />
            </View>
            <FooterLogin order={1}/>
        </ImageBackground>
    )
}