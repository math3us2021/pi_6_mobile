import {Dimensions, Image, Text, Touchable, TouchableWithoutFeedback, View} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from "@react-navigation/native";
import {image500} from "../api/moviedb";
import React from "react";

var {width, height} = Dimensions.get('window');

export default function TrendingMovies({data, title = true}) {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie', item)
    }
    return (
        <View className="mb-8">
            {title && (
                <View className="mx-4 flex-row justify-between items-center">
                    <Text className="text-write text-xl text-whit">Populares</Text>
                </View>
            )}
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
                // source={require('../assets/images/hash.png')}
                source={{uri: image500(item.poster_path)}}
                style={{width: width * 0.60, height: height * 0.40}}
                className="rounded-lg"
            />
        </TouchableWithoutFeedback>
    )
}
//
// const MovieCard = ({item, handleClick}) => {
//     if (!item || !item.poster_path) {
//         return (
//             <TouchableWithoutFeedback onPress={() => handleClick(item)}>
//                 <Image
//                     source={require('../assets/images/logo.png')}
//                     style={{width: width * 0.60, height: height * 0.40}}
//                     className="rounded-lg"
//                 />
//             </TouchableWithoutFeedback>
//         )
//     }
//     return (
//         <TouchableWithoutFeedback onPress={() => handleClick(item)}>
//             <Image
//                 source={{uri: image500(item.poster_path)}}
//                 style={{width: width * 0.60, height: height * 0.40}}
//                 className="rounded-lg"
//             />
//         </TouchableWithoutFeedback>
//     )
// }