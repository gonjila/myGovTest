import { StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

const Screen4 = ({ route }) => {
  const serchedData = [
    "პარკირების ჯარიმები",
    "საქართველოს იუსტიციის სამინისტრო",
    "ძებნა მოვალეთა რეესტრში",
  ];

  return (
    <View style={tw`px-6 bg-gray-100 flex-1`}>
      <Text style={tw`font-medium mb-6 mt-2`}>ძებნის ისტორია</Text>
      <FlatList
        data={serchedData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={tw`mb-5 flex-row justify-between`}>
            <Text style={tw`text-xs`}>{item}</Text>
            <Ionicons name="close" size={14} color={"#BDBDBD"} />
          </View>
        )}
      />
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({});
