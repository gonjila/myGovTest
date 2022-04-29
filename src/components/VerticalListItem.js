import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const VerticalListItem = ({ text, iconName, to }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => alert(`pressed on ${text}!`)}>
      <View style={tw`w-11/12 h-15 px-3 rounded-lg bg-white mx-auto my-2 flex-row items-center`}>
        <MaterialCommunityIcons name={iconName} size={34} style={tw`mr-5`} />
        <Text style={tw`text-sm w-9/12`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalListItem;
