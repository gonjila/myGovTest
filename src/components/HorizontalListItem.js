import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HorizontalListItem = ({ text, iconName, to }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => alert(`pressed on ${text}!`)}>
      <View style={tw`w-32 h-40 pt-7 px-2 bg-white mx-2 rounded-xl items-center justify-start`}>
        <MaterialCommunityIcons name={iconName} size={36} style={tw``} />
        <Text style={tw`text-sm text-center`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalListItem;
