import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Screen2 = ({ navigation }) => {
  return (
    <View>
      <Button title="press me" onPress={() => navigation.navigate("ავტორიზაცია")} />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
