import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Button title="press me" onPress={() => navigation.navigate("მოძებნა")} />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
