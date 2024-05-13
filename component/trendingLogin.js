import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';
import LoginOne from "./loginOne";
import LoginTwo from "./loginTwo";
import LoginScreen from "../pages/LoginScreen";
import LoginThree from "./loginThree";

const { width, height } = Dimensions.get('window');

// const InformationScreen = () => {
//     return (
//         <View style={styles.screen}>
//             <Text>Informações da tela 1</Text>
//         </View>
//     );
// };
//
// const InformationScreen2 = () => {
//     return (
//         <View style={styles.screen}>
//             <Text>Informações da tela 2</Text>
//         </View>
//     );
// };

// const LoginScreen = () => {
//     const navigation = useNavigation();
//
//     const handleLoginPress = () => {
//         // Navegar para a tela de login
//         navigation.navigate('Login');
//     };
//
//     return (
//         <View style={styles.screen}>
//             <TouchableOpacity onPress={handleLoginPress}>
//                 <Text>Tela de Login</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

const TrendingLogin = () => {
    const navigation = useNavigation();

    const handleClick = (item) => {
        navigation.navigate('Movie', item);
    };

    const renderMovieCard = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleClick(item)}>
                <Image
                    source={{ uri: image500(item.poster_path) }}
                    style={{ width: width * 0.6, height: height * 0.4, borderRadius: 10 }}
                />
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView horizontal pagingEnabled>
            <LoginOne />
            <LoginTwo />
            <LoginThree />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
    },
});

export default TrendingLogin;