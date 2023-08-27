import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import tw from "twrnc";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import { ScrollView } from "react-native";
import FeaturedRow from "../components/FeaturedRow";
import { useNavigation } from "@react-navigation/native";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      hearderShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
*[_type == 'featured'] {
  ...,
  restaurants[]->{
    ...,
    dishes[]->
  }
}
`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <View style={[tw`bg-white pt-5`, styles.container]}>
      <View style={tw`flex-row pb-3 items-center mx-4 space-x-2  w-92% `}>
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl `}>
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />{" "}
          </Text>
        </View>
        <UserIcon size={34} color="#00CCBB" />
      </View>
      <View style={tw`flex-row items-center space-x-2 pb-2 mx-4  w-92% `}>
        <View style={tw`flex-row flex-1 space-x-2 bg-gray-200 p-3`}>
          <MagnifyingGlassIcon width={27} height={27} color="#00CCBB" />

          {/* <svg
              width={20}
              height={20}
              color="#gray"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>  */}

          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      <ScrollView
        style={tw` bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        {/* 
          <FeaturedRow
            title="Featured"
            description="Paid placement from our partners"
            featuredCategory= "featured"
          /> */}
        {/* Featured */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

        {/* Tasty Discounts */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
