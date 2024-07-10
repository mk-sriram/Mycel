// components/UserCard/UserCard.tsx

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ArrowRight from "../assets/images/arrowRight.svg"; 

interface UserCardProps {
  firstName: string;
  lastName: string;
  totalContacts: number;
  activeContacts: number;
}

const pfpImage = require("../assets/images/pfpIcon.svg");
const UserCard: React.FC<UserCardProps> = ({
  firstName,
  lastName,
  totalContacts,
  activeContacts,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={pfpImage} // replace with actual image source
        style={styles.profileImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>

        <Text style={styles.contacts}>{`${totalContacts} contacts`}</Text>
        <Text style={styles.activeContacts}>{`${activeContacts} active`}</Text>
      </View>
      <TouchableOpacity>
        <ArrowRight style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1, 

  },
  
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contacts: {
    fontSize: 14,
    color: "#888",
  },
  activeContacts: {
    fontSize: 14,
    color: "green",
  },
  arrow: { 
    height: 1, 
    width: 1
  }
});

export default UserCard;