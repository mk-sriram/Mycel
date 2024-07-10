// screens/ContactsScreen/ContactsScreen.tsx

import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import UserCard from "@/components/UserCard";

import contacts from "../Data/contacts"; // Import the dummy data

export default function ContactsScreen(){

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <UserCard
          firstName="Sriram"
          lastName="MK"
          totalContacts={388}
          activeContacts={73}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  itemContainer : { 
    flex:1 , 
    marginTop: 100

  }, 
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});

