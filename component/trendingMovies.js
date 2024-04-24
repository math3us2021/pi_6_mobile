import {Text, Touchable, TouchableWithoutFeedback, View} from "react-native";
import Carousel from 'react-native-snap-carousel';

export default function TrendingMovies({data}) {
    return (
        <View className="mb-8">
          <Text className="text-3xl font-bold text-neutral-100">Trending Movies</Text>
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={data}
                renderItem={({item})=> <MovieCard item={item} />}
                inactiveSlideOpacity={0.60}
                sliderWidth={600}
                itemWidth={400}
                slideStyle={{ display: 'flex', alignItems: 'center'}}
            />
        </View>
    );
}

const MovieCard = ({item})=> {
    return (
        <TouchableWithoutFeedback>
            <Text className="text-write" >Movie</Text>
        </TouchableWithoutFeedback>
    )
}