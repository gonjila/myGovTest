import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

const Questions = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={tw`absolute bottom-24 right-4 items-end`}>
      <View style={show ? tw`w-60 h-24 px-5 py-4 bg-black justify-around` : { display: "none" }}>
        <Pressable onPress={() => alert("Questions")}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="help-circle-outline" size={16} color="white" />
            <Text style={tw`text-xs text-white ml-2`}>ხშირად დასმული კითხვები</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => alert("Instruction")}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="alert-circle-outline" size={16} color="white" />
            <Text style={tw`text-xs text-white ml-2`}>ინსტრუქცია</Text>
          </View>
        </Pressable>
      </View>

      <Pressable
        style={tw`w-12 h-12 bg-black rounded-full mt-3 justify-center items-center`}
        // onPressIn={() => setShow((prev) => !prev)}
        onPress={() => setShow((prev) => !prev)}
      >
        <Ionicons name="help" size={32} color="white" />
      </Pressable>
    </View>
  );
};

export default Questions;
