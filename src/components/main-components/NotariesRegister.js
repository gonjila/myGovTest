import { StyleSheet, ScrollView, View, Text, FlatList, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import RadioButtonRN from "radio-buttons-react-native";

const data = [
  {
    პიროვნება: "გურანდუხტ შავდათუაშვილი",
    დაბადების_რიცხვი: "28 Mar 1966",
    პირადი_ნომერი: "01023001170",
    სამუშაო_ადგილის_მისამართი: "თბილისი, გლდანი, ომარ ხიზანიშვილის ქუჩა #33, ბინა #6,",
    ნოტარიუსად_დანიშვნის_რეკვიზიტი:
      "ბრძ. №59 §1 11 აგვ 2008 ბრძ. №100 §1 23 დეკ 2008 ბრძ. №126 §2 21 დეკ 2009",
    რეგისტრაციის_თარიღი: "31 Mar 2010",
    ნოტარიუსობიდან_გათავისუფლების_რეკვიზიტი: "ბრძ. №97 §16 16 დეკ 2008",
    ამორიცხვის_თარიღი: "",
    შენიშვნა: "",
  },
  {
    პიროვნება: "ლამზირა ტყეშელაშვილი",
    დაბადების_რიცხვი: "28 Jan 1973",
    პირადი_ნომერი: "01023001170",
    სამუშაო_ადგილის_მისამართი: "თბილისი, გლდანი, ომარ ხიზანიშვილის ქუჩა #33, ბინა #6,",
    ნოტარიუსად_დანიშვნის_რეკვიზიტი:
      "ბრძ. №59 §1 11 აგვ 2008 ბრძ. №100 §1 23 დეკ 2008 ბრძ. №126 §2 21 დეკ 2009",
    რეგისტრაციის_თარიღი: "1 Feb 2017",
    ნოტარიუსობიდან_გათავისუფლების_რეკვიზიტი: "ბრძ. №97 §16 16 დეკ 2008",
    ამორიცხვის_თარიღი: "",
    შენიშვნა: "",
  },
];

const NotariesRegister = () => {
  const [notaryModalVisible, setNotaryModalVisible] = useState(false);
  const [notaryInfo, setNotaryInfo] = useState(null);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [filterStatusIndex, setFilterStatusIndex] = useState(1);
  const [notariesData] = useState(data);

  const onNotary = (item) => {
    setNotaryInfo(notariesData.find((notary) => notary.პიროვნება === item.პიროვნება));
    setNotaryModalVisible(true);
  };

  const NotariesList = (item) => (
    <Pressable
      style={tw`bg-white px-5 py-4 rounded-md mb-2 flex-row justify-between`}
      onPress={() => onNotary(item)}
    >
      <View style={tw`flex-row items-center`}>
        <Ionicons name="person" size={18} />
        <Text style={tw`ml-3`}>{item.პიროვნება}</Text>
      </View>

      <Ionicons name="information-circle-outline" size={24} color="gray" />
    </Pressable>
  );

  const NotaryModalView = () => (
    <View style={{ backgroundColor: "#00000035", flex: 1 }}>
      <View style={tw`bg-gray-100 mt-33 flex-1`}>
        <View style={tw`py-4 pl-5 border-b border-b-gray-300 flex-row items-center`}>
          <Pressable
            onPress={() => {
              setNotaryModalVisible(false);
              setNotaryInfo(null);
            }}
          >
            <Ionicons name="close" size={24} color="gray" />
          </Pressable>
          <Text style={tw`ml-3`}>{notaryInfo?.პიროვნება}</Text>
        </View>

        <ScrollView style={tw``}>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>სახელი და გვარი</Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.პიროვნება}</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>დაბადების თარიღი</Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.დაბადების_რიცხვი}</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>პირადი ნომერი</Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.პირადი_ნომერი}</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>სამუშაო ადგილის მისამართი</Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.სამუშაო_ადგილის_მისამართი}</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>
              ნოტარიუსის თანამდებობაზე დანიშვნის აქტის რეკვიზიტები
            </Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.ნოტარიუსად_დანიშვნის_რეკვიზიტი}</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>რეგისტრაციის თარიღი</Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.რეგისტრაციის_თარიღი}</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>
              ნოტარიუსის თანამდებობიდან გათავისუფლების აქტის რეკვიზიტები
            </Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.ნოტარიუსობიდან_გათავისუფლების_რეკვიზიტი}</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>რეესტრიდან ამორიცხვის თარიღი</Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.ამორიცხვის_თარიღი}</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`w-[37%] py-4 pl-2 `}>შენიშვნა</Text>
            <View style={tw`w-[60%] h-full py-4 pl-2 border-b border-b-gray-300`}>
              <Text style={tw``}>{notaryInfo?.შენიშვნა}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );

  const sortNotariesData = () => {
    if (filterStatusIndex == 1) {
      return notariesData.sort(function (a, b) {
        return new Date(b.რეგისტრაციის_თარიღი) - new Date(a.რეგისტრაციის_თარიღი);
      });
    } else if (filterStatusIndex == 2) {
      return notariesData.sort(function (a, b) {
        return new Date(a.რეგისტრაციის_თარიღი) - new Date(b.რეგისტრაციის_თარიღი);
      });
    }
  };

  const RadioButtonData = [{ label: "თარიღით ახალი" }, { label: "თარიღით ძველი" }];
  const SortModalView = () => (
    <View style={{ backgroundColor: "#00000035", flex: 1, justifyContent: "flex-end" }}>
      <View style={tw`h-40 py-4  bg-white`}>
        <View style={tw`px-7`}>
          <Text style={tw`text-gray-400 font-semibold`}>სორტირება</Text>
        </View>
        <RadioButtonRN
          data={RadioButtonData}
          style={styles.radioBtnStyle}
          boxStyle={styles.radioBtnBox}
          activeColor="black"
          circleSize={12}
          initial={filterStatusIndex}
          selectedBtn={({ label }) => {
            if (label == "თარიღით ახალი") {
              if (filterStatusIndex != 1) {
                setSortModalVisible(false);
              }
              setFilterStatusIndex(1);
            } else {
              if (filterStatusIndex != 2) {
                setSortModalVisible(false);
              }
              setFilterStatusIndex(2);
            }
          }}
        />
      </View>
    </View>
  );

  return (
    <View style={tw`py-5 px-6 flex-1`}>
      <Modal visible={notaryModalVisible} animationType="fade" transparent>
        {NotaryModalView()}
      </Modal>
      <Modal visible={sortModalVisible} animationType="fade" transparent>
        {SortModalView()}
      </Modal>

      <View style={tw`px-2 mb-2 flex-row justify-between`}>
        <Text>
          სულ <Text style={tw`text-blue-500`}>{notariesData.length}</Text> ჩანაწერი
        </Text>
        <Pressable onPress={() => setSortModalVisible(true)}>
          <Ionicons name="filter" size={18} />
        </Pressable>
      </View>

      <FlatList
        data={notariesData}
        keyExtractor={(item, index) => item.პიროვნება + index}
        renderItem={({ item }) => NotariesList(item)}
      />
    </View>
  );
};

export default NotariesRegister;

const styles = StyleSheet.create({
  radioBtnStyle: {},
  radioBtnBox: {
    marginTop: 5,
    borderWidth: 0,
    backgroundColor: "#00000000",
  },
});
