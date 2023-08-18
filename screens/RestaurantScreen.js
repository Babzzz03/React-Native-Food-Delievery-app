import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import tw from "twrnc";
import { TouchableOpacity } from "react-native-web";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
const RestaurantScreen = () => {
    const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  return (
    <ScrollView>
      <View style={tw`relative`}>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          style={tw`w-full h-56 bg-gray-300 p-4`}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View  style={tw`bg-white`}>
        <View style={tw`px-4 pt-4`}>
            <Text style={tw`text-3xl font-bold`}>{title}</Text>
            <View style={tw`flex-row space-x-2 my-1`}>

            </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
