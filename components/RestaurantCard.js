import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { Image } from "react-native";
import tw from "twrnc";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`bg-white mr-3 shadow`}
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        style={tw`h-64 w-64 rounded-sm`}
      />
      <View style={tw`pb-4 px-3`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center space-x-1`}>
          <StarIcon color="green" opacity={0.5} size={22} />

          <Text style={tw`text-xs text-gray-500`}>
            <Text style={tw` text-green-500`}> {rating}</Text>. {genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center space-x-1`}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500`}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
