import { ScrollView, FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Help from "../Help";
import VerticalListItem from "../VerticalListItem";
import HorizontalListItem from "../HorizontalListItem";

const Everything = ({ route }) => {
  const {
    params: { itemId },
  } = route;

  return (
    <ScrollView style={tw`relative flex-1`}>
      <View style={tw``}>
        <VerticalListItem text="ძებნა მოვალეთა რეესტრში" iconName="arch" to="" />
        <VerticalListItem text="ნოტარიუსთა ელექტრონული რეესტრი" iconName="arch" to="" />
        <VerticalListItem text="პარკირების ჯარიმები" iconName="arch" to="" />
        <VerticalListItem text="ელექტრონული დოკუმენტის მიწოდება" iconName="arch" to="" />
        <VerticalListItem text="სოციალური სარეიტინგო ქულა" iconName="arch" to="" />

        <View style={tw`pb-3 px-2 mb-1 mt-3`}>
          <View style={tw`my-2 ml-4 flex-row justify-start items-center`}>
            <MaterialCommunityIcons name="home-analytics" size={18} />
            <Text style={tw`ml-2`}>უწყება</Text>
          </View>

          <ScrollView horizontal>
            <HorizontalListItem text="საქართველოს იუსტიციის სამინისტრო" iconName="apple-icloud" to="" />
            <HorizontalListItem text="აღსრულების ეროვნული ბიურო" iconName="apple-icloud" to="" />
            <HorizontalListItem text="სოციალური მომსახურების სააგენტო" iconName="apple-icloud" to="" />
            <HorizontalListItem text="მომსახურების სააგენტო" iconName="apple-icloud" to="" />
            <HorizontalListItem
              text="სახელმწიფო სერვისების განვითარების სააგენტო"
              iconName="apple-icloud"
              to=""
            />
          </ScrollView>
        </View>

        <VerticalListItem text="სოციალური დახმარებები და სახელმწიფო გასაცემლები" iconName="arch" to="" />
        <VerticalListItem text="ავტომობილის ფლობა" iconName="arch" to="" />
        <VerticalListItem text="საზღვრის კვეთა" iconName="arch" to="" />
        <VerticalListItem text="პიროვნების მონაწილეობა სამოქალაქო აქტებში" iconName="arch" to="" />
      </View>

      <Help />
    </ScrollView>
  );
};

export default Everything;
