import {View, Text, Pressable} from "react-native";
import React, {useState} from "react";


export function GenderMovie({ onSelectGenres }) {
    const [selectedSuggestions, setSelectedSuggestions] = useState([]);
    const suggestions = [
        {id: 1, name: "Ação"},
        {id: 2, name: "Comédia"},
        {id: 3, name: "Drama"},
    ];
    const suggestions1 = [
        {id:4, name: "Aventura"},
        {id:5, name: "Ficção"},
        {id:6, name: "Romance"},
    ];

    const includeSuggestions = (itemName) => {
        if (selectedSuggestions.includes(itemName)) {
            setSelectedSuggestions(selectedSuggestions.filter(item => item !== itemName));
        } else {
            if (selectedSuggestions.length < 3) {
                setSelectedSuggestions([...selectedSuggestions, itemName]);
            }
        }
    }

    React.useEffect(() => {
        onSelectGenres(selectedSuggestions);
    }, [selectedSuggestions, onSelectGenres]);

    return (
        <View className="mt-5 flex flex-col w-full justify-center items-center">
            {/*<Text className="text-lg">Escolha até 3 generos principais</Text>*/}
            <Text className="text-lg">ESCOLHA 3 GÊNEROS PRINCIPAIS</Text>

            <View className="mt-5 flex flex-row w-full justify-center items-center">
                {
                    suggestions.map((item, index) => (
                        <Pressable
                            key={index}
                            className={`w-1/4 border border-gray-300 text-gray-900 items-center rounded-lg ${selectedSuggestions.includes(item.name) ? 'bg-orange-300' : 'bg-gray-50'}`}
                            // className="bg-gray-50 w-1/4 border border-gray-300 text-gray-900 items-center rounded-lg "
                            onPress={() => includeSuggestions(item.name)}
                        >
                            <Text className="text-lg">{item.name}</Text>
                        </Pressable>
                    ))
                }
            </View>
            <View className="mt-5 flex flex-row w-full justify-center items-center">
                {
                    suggestions1.map((item, index) => (
                        <Pressable
                            key={index}
                            className={`w-1/4 border border-gray-300 text-gray-900 items-center rounded-lg ${selectedSuggestions.includes(item.name) ? 'bg-orange-300' : 'bg-gray-50'}`}

                            // className="bg-gray-50 w-1/4 border border-gray-300 text-gray-900 items-center rounded-lg "
                            onPress={() => includeSuggestions(item.name)}
                        >
                            <Text className="text-lg">{item.name}</Text>
                        </Pressable>
                    ))
                }
            </View>
        </View>

    )
}


