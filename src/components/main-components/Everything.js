import { ScrollView, FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Help from "../Help";
import VerticalListItem from "../VerticalListItem";
import HorizontalListItem from "../HorizontalListItem";

const Everything = ({ route, navigation }) => {
  const {
    params: { itemId },
  } = route;

  return (
    <ScrollView style={tw`relative flex-1`}>
      <View style={tw``}>
        <VerticalListItem
          text="ძებნა მოვალეთა რეესტრში"
          iconName="arch"
          navigate={() => navigation.navigate("მოვალეები")}
        />
        <VerticalListItem text="ნოტარიუსთა ელექტრონული რეესტრი" iconName="arch" navigate="" />
        <VerticalListItem text="პარკირების ჯარიმები" iconName="arch" navigate="" />
        <VerticalListItem text="ელექტრონული დოკუმენტის მიწოდება" iconName="arch" navigate="" />
        <VerticalListItem text="სოციალური სარეიტინგო ქულა" iconName="arch" navigate="" />

        <View style={tw`pb-3 px-2 mb-1 mt-3`}>
          <View style={tw`my-2 ml-4 flex-row justify-start items-center`}>
            <MaterialCommunityIcons name="home-analytics" size={18} />
            <Text style={tw`ml-2`}>უწყება</Text>
          </View>

          <ScrollView horizontal>
            <HorizontalListItem
              text="საქართველოს იუსტიციის სამინისტრო"
              iconName="apple-icloud"
              navigate=""
            />
            <HorizontalListItem text="აღსრულების ეროვნული ბიურო" iconName="apple-icloud" navigate="" />
            <HorizontalListItem
              text="სოციალური მომსახურების სააგენტო"
              iconName="apple-icloud"
              navigate=""
            />
            <HorizontalListItem text="მომსახურების სააგენტო" iconName="apple-icloud" navigate="" />
            <HorizontalListItem
              text="სახელმწიფო სერვისების განვითარების სააგენტო"
              iconName="apple-icloud"
              navigate=""
            />
          </ScrollView>
        </View>

        <VerticalListItem
          text="სოციალური დახმარებები და სახელმწიფო გასაცემლები"
          iconName="arch"
          navigate=""
        />
        <VerticalListItem text="ავტომობილის ფლობა" iconName="arch" navigate="" />
        <VerticalListItem text="საზღვრის კვეთა" iconName="arch" navigate="" />
        <VerticalListItem text="პიროვნების მონაწილეობა სამოქალაქო აქტებში" iconName="arch" navigate="" />
      </View>

      {/* <Help /> */}
    </ScrollView>
  );
};

export default Everything;
