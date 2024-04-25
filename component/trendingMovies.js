import {Dimensions, Image, Text, Touchable, TouchableWithoutFeedback, View} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from "@react-navigation/native";

var {width, height } = Dimensions.get('window');

export default function TrendingMovies({data}) {
    const navigation = useNavigation();
    const handleClick = (item)=> {
        navigation.navigate('Movie', item)
    }
    return (
        <View className="mb-8">
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={data}
                renderItem={({item})=> <MovieCard item={item} handleClick={handleClick} />}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width*0.62}
                loop={true}
                slideStyle={{ display: 'flex', alignItems: 'center'}}
            />
        </View>
    );
}

const MovieCard = ({item, handleClick})=> {
    return (
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
            <Image
                source={require('../assets/images/hash.png')}
                style={{width: width*0.60, height: height*0.40}}
                className="rounded-lg"
            />
        </TouchableWithoutFeedback>
    )
}