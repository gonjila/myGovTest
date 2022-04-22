import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";

const Screen3 = () => {
  return (
    <View style={tw`flex-1 items-center`}>
      <View style={tw` mb-6 items-center`}>
        <View style={tw`w-24 h-24 mb-3 mt-8 relative`}>
          <Image source={require("../../assets/profile_photo.png")} style={tw`w-full h-full`} />

          <Pressable
            style={tw`bg-white rounded-full absolute bottom-0 right-0 justify-center items-center`}
          >
            <Ionicons name="camera" size={16} style={tw`p-1.5`} />
          </Pressable>
        </View>

        <Text style={tw`text-sm`}>გიორგი აბრამიშვილი</Text>
      </View>

      <View style={tw`w-11/12 bg-white rounded-md`}>
        <Pressable style={[styles.section, tw`border-b border-b-gray-300`]}>
          <Ionicons name="settings" size={16} style={tw`p-1.5 mr-4`} />
          <Text style={tw`text-xs`}>პერსონალური ინფორმაცია</Text>
        </Pressable>

        <Pressable style={[styles.section, tw`border-b border-b-gray-300`]}>
          <Ionicons name="moon" size={16} style={tw`p-1.5 mr-4`} />
          <Text style={tw`text-xs`}>მუქი რეჟიმი</Text>
        </Pressable>

        <Pressable style={[styles.section, tw``]}>
          <Ionicons name="lock-closed" size={16} style={tw`p-1.5 mr-4`} />
          <Text style={tw`text-xs`}>უსაფრთხოება</Text>
        </Pressable>
      </View>

      <View style={[styles.section, tw`w-11/12 h-12 ml-0 mt-3 pl-4 bg-white rounded-md`]}>
        <Ionicons name="exit-outline" size={16} color={"red"} style={tw`p-1.5 mr-4`} />
        <Text style={tw`text-xs`}>გასვლა</Text>
      </View>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  section: { height: 42, marginLeft: 16, flexDirection: "row", alignItems: "center" },
});
