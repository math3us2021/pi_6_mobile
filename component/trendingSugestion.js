import {Dimensions, Image, Text, Touchable, TouchableWithoutFeedback, View} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from "@react-navigation/native";
import {image500} from "../api/moviedb";
import React from "react";
import {sugestiondb} from "../api/sugestiondb";

var {width, height} = Dimensions.get('window');

export default function TrendingSugestion({data}) {
    const navigation = useNavigation();
    const handleClick = (item) => {
        sugestiondb(item.id).then((response) => {
            navigation.navigate('Result', {sugestion: response})
        }).catch(err => {
            alert('Não foi possível encontrar o filme na base de recomendações');
        })
    }

    return (
        <View className="mb-8">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-write text-xl text-whit">Populares</Text>
            </View>
            <Carousel
                data={data}
                renderItem={({item}) => <MovieCard item={item} handleClick={handleClick}/>}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                loop={true}
                slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>
    );
}

const MovieCard = ({item, handleClick}) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
                source={{uri: image500(item.poster_path)}}
                style={{width: width * 0.60, height: height * 0.40}}
                className="rounded-lg"
            />
        </TouchableWithoutFeedback>
    )
}