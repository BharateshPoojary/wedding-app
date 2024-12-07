import React, { useState, useContext } from "react";
import {
  AppRegistry,
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import {
  TextInput as TextInputMaterial,
  IconButton,
  Snackbar,
  List,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { Card } from "react-native-paper";
import * as Device from "expo-device";
import { CommonActions } from "@react-navigation/native";
import UserSessionContext from "./UserSessionContext";
import Spinner from "react-native-loading-spinner-overlay";
import COLORS from "./Colors"
import appJson from "../../app.json";
import { Ionicons } from "@expo/vector-icons";

const staticData = [
  { id: "1", icon: "mail-unread-outline", title: "Inbox" },
  { id: "2", icon: "calendar-outline", title: "My Bookings" },
  { id: "3", icon: "bonfire-outline", title: "Planning", page: "Planning" },
  { id: "4", icon: "create-outline", title: "Write a Review" },
  { id: "5", icon: "gift-outline", title: "Packages" },
  { id: "6", icon: "alert-outline", title: "Genie Recommendations" },
  { id: "7", icon: "people-outline", title: "Join A Wedding" },
  { id: "8", icon: "bag-handle-outline", title: "Shop" },
  { id: "9", icon: "megaphone-outline", title: "Promotions" },
  { id: "10", icon: "call-outline", title: "Contact Support" },
  { id: "11", icon: "document-text-outline", title: "Information" },
  { id: "12", icon: "star-outline", title: "Rate on Play Store" },
  { id: "13", icon: "share-social-outline", title: "Share App" },
  { id: "14", icon: "log-out-outline", title: "Log Out" },
];

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity>
            <Text style={styles.subTitle}>View Profile</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.horizontalLine} /> */}
      </View>
      <ScrollView style={styles.container}>
        {staticData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.listItem}
            onPress={() => navigation.navigate(item.page)}
          >
            <Ionicons
              name={item.icon}
              size={20}
              color="#000"
              style={styles.icon}
            />
            <View style={styles.itemView}>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 15,
  //   },

  headerIcons: {
    backgroundColor: COLORS.LigntGray,
    padding: 5,
    borderRadius: 8,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  headerText: {
    left: 10,
    fontSize: 17,
    fontWeight: "bold",
    color: COLORS.Black,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subTitle: {
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
    paddingHorizontal: 20,
    marginTop: 80,
    marginBottom: 70,
    borderTopWidth: 1,
    borderBottomColor: "#ddd",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    marginRight: 12,
  },
  itemView: {},
  itemTitle: {
    fontSize: 16,
  },
  horizontalLine: {
    marginVertical: 10,
    height: 1,
    backgroundColor: "#ddd",
  },
  profileSection: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  profileCard: {
    borderRadius: 40,
    width: 80,
    height: 80,
    marginTop: 18,
    overflow: "hidden",
    elevation: 2,
  },
  profileCardMain: {
    borderRadius: 10,
    overflow: "hidden",
    elevation: 0,
  },
  //   profileImage: {
  //     width: "100%",
  //     height: "100%",
  //   },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default Profile;