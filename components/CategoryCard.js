import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Image } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image
        style={tw`h-20 rounded w-20 `}
        source={{
          uri: imgUrl,
        }}
      />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`} >{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
