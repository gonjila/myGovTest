import { View, Text, TextInput, TouchableHighlight, Modal, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchDebtors = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [personalId, setPersonalId] = useState("");

  const data = [
    {
      მოვალე: "აბდულა",
      პირადი_ნომერი: "547621435",
      მისამართი: "ქ. თბილისი",
      რეგისტრაციის_თარიღი: "22.11.2022 11:28:31",
      აღმასრულებლის_ვინაობა: "000000001",
      სააღსრულებო_საქმის_N: "A1800000000",
    },
    {
      მოვალე: "ჯუბა",
      პირადი_ნომერი: "565445321",
      მისამართი: "ქ. თბილისი",
      რეგისტრაციის_თარიღი: "18.11.2022 11:28:31",
      აღმასრულებლის_ვინაობა: "000000501",
      სააღსრულებო_საქმის_N: "A1800031000",
    },
  ];

  const listItem = (item) => (
    <View style={tw`bg-white rounded-lg mt-2`}>
      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`w-[37%] py-4 pl-2 `}>მოვალე</Text>

        <View style={tw`w-[60%] py-4 pl-2 border-b border-b-gray-300`}>
          <Text style={tw``}>{item.მოვალე}</Text>
        </View>
      </View>

      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`w-[37%] py-4 pl-2 `}>პირადი ნომერი</Text>

        <View style={tw`w-[60%] py-4 pl-2 border-b border-b-gray-300`}>
          <Text style={tw``}>{item.პირადი_ნომერი}</Text>
        </View>
      </View>

      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`w-[37%] py-4 pl-2 `}>მისამართი</Text>

        <View style={tw`w-[60%] py-4 pl-2 border-b border-b-gray-300`}>
          <Text style={tw``}>{item.მისამართი}</Text>
        </View>
      </View>

      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`w-[37%] py-4 pl-2 `}>რეგისტრაციის თარიღი</Text>

        <View style={tw`w-[60%] py-4 pl-2 border-b border-b-gray-300`}>
          <Text style={tw``}>{item.რეგისტრაციის_თარიღი}</Text>
        </View>
      </View>

      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`w-[37%] py-4 pl-2 `}>აღმასრულებლის ვინაობა</Text>

        <View style={tw`w-[60%] py-4 pl-2 border-b border-b-gray-300`}>
          <Text style={tw``}>{item.აღმასრულებლის_ვინაობა}</Text>
        </View>
      </View>

      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`w-[37%] py-4 pl-2 `}>სააღსრულებო საქმის N</Text>

        <View style={tw`w-[60%] py-4 pl-2 `}>
          <Text style={tw``}>{item.სააღსრულებო_საქმის_N}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={tw`p-4 flex-1`}>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={tw`p-4 mt-33 bg-gray-100 border-t border-t-gray-200 flex-1`}>
          <View style={tw`ml-2 flex-row items-center justify-between`}>
            <Text>
              სულ <Text style={tw`text-blue-500`}>3</Text> ჩანაწერი
            </Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Ionicons name="refresh" size={22} />
            </Pressable>
          </View>
          <View style={tw``}>
            <FlatList
              data={data}
              renderItem={({ item }) => listItem(item)}
              //FIXME change key
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
      </Modal>

      <View style={tw`bg-white rounded-lg`}>
        <TextInput
          placeholder="სახელი"
          style={tw`py-4 px-3 border-b border-b-gray-100`}
          onChangeText={(value) => setFirstName(value)}
        />
        <TextInput
          placeholder="გვარი"
          style={tw`h-13 px-3 border-b border-b-gray-100`}
          onChangeText={(value) => setLastName(value)}
        />
        <TextInput
          placeholder="ორგანიზაციის დასახელება"
          style={tw`h-13 px-3 border-b border-b-gray-100`}
          onChangeText={(value) => setOrganisation(value)}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="პირადი ნომერი ან საიდ. კოდი"
          style={tw`h-13 px-3`}
          onChangeText={(value) => setPersonalId(value)}
        />
      </View>

      <TouchableHighlight
        style={tw`py-4 bg-sky-400 rounded-lg mt-3 items-center `}
        underlayColor="hsl(198, 100%, 45.7%)"
        onPress={() => setModalVisible(true)}
      >
        <Text style={tw`text-white`}>ძიება</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SearchDebtors;
