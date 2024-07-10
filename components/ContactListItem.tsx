// components/ContactListItem/ContactListItem.tsx

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Instagram from "../assets/images/instagram.svg";
import PhoneLogo from "../assets/images/phoneLogo.svg";

interface ContactListItemProps {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  onPressPhone: () => void;
  onPressMessage: () => void;
  onPressInstagram: () => void;
}

const ContactListItem: React.FC<ContactListItemProps> = ({
  firstName,
  lastName,
  avatarUrl,
  onPressPhone,
  onPressMessage,
  onPressInstagram,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/dummyprofile.png")}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
      </View>
      <TouchableOpacity onPress={onPressPhone} style={styles.iconButton}>
        <PhoneLogo width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressMessage} style={styles.iconButton}>
        <Image
          source={require("../../assets/images/Action Button/messages.svg")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressInstagram} style={styles.iconButton}>
        <Instagram width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default ContactListItem;
