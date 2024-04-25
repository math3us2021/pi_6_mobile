import {View, Text, TouchableOpacity, Image, Dimensions, TextInput, Button} from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";

var {width, height} = Dimensions.get('window');

export default function LoginScreen() {
    const navigation = useNavigation();
    const [text, setText] = React.useState('');

    function handleButtonPress() {
        navigation.navigate('Home');
    }

    return (
            <View className="flex-1 bg-neutral-900">
                <View className="flex-row justify-center items-center">
                    <Image
                        source={require('../assets/images/indica.jpg')}
                        style={{width, height: height * 0.55}}
                    />
                    <LinearGradient colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                    style={{
                                        width, height: height * 0.40,
                                    }}
                                    start={{x: 0.5, y: 0}}
                                    end={{x: 0.5, y: 1}}
                                    className={"absolute bottom-0"}
                    />
                </View>
                <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                        // onChangeText={handleInputChange}
                        value={text}
                        placeholder="Digite algo..."
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                        // onChangeText={handleInputChange}
                        value={text}
                        placeholder="Digite algo..."
                    />
                    <Button
                        title="Exibir texto"
                        onPress={handleButtonPress}
                    />
                </View>
            </View>
    )
}