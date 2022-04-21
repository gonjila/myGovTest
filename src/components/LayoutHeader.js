import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

const LayoutHeader = (navigation) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={[tw`w-full h-11 px-4 absolute bottom-0 flex-row justify-between items-center`]}>
        <TouchableOpacity onPress={() => navigation.navigate("mainScreens")}>
          <Text style={[tw`text-xl font-bold text-blue-500`]}>MY GOV</Text>
        </TouchableOpacity>

        <View style={[tw`flex-row`]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("მოძებნა")}
            style={[tw`w-8 bg-white mr-2 rounded-full justify-center items-center`]}
          >
            <Ionicons name="search" size={24} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ავტორიზაცია")}
            style={[tw`w-8 bg-white rounded-full justify-center items-center`]}
          >
            <Ionicons name="person-circle-outline" size={32} />
          </TouchableOpacity>
          <StatusBar style="dark" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LayoutHeader;

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: 85,
    backgroundColor: "#F0F0F0",
    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 1,
    position: "relative",
    justifyContent: "flex-start",
  },
});
