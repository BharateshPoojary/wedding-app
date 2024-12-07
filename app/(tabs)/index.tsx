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
  { id: "1", title: "Venues",dropdown:[{list:"View All Venues"},{list:"Banquet Halls"},{list:"Marriage Garden/Lawns"},{list:"Wedding Resorts"},{list:"Small Function/PartyHalls"},{list:"Destination Wedding Venues"},{list:"Kalyana Mandapams"},{list:"4 Star & Above Wedding Hotels"}] },
  { id: "2", title: "Photographers", dropdown:[{list:"Photographers"}] },
  { id: "3", title: "Makeup",  dropdown:[{list:"Bridal Makeup"},{list:"Family Makeup"}] },
  { id: "4", title: "Pre Wedding Shoot", dropdown:[{list:"Pre Wedding Shoot Locations"},{list:"Pre Wedding Photographers"}]  },
  { id: "5", title: "Planning & Decorations", dropdown:[{list:"Wedding Planners"},{list:"Decorators"}]},
  { id: "6", title: "Bridal Wear", dropdown:[{list:"View All Bridal Wear"},{list:"Bridal Lehengas"},{list:"Kanjeevaram/Silk Sarees"},{list:"Cocktail Gowns"},{list:"Trousseau Sarees"},{list:"Bridal Lehenga on Rent"}] },
  { id: "7",  title: "Groom Wear", dropdown:[{list:"View All Groom Wear"},{list:"Sherwani"},{list:"Wedding Suits/Tuxes"},{list:"Sherwani On Rent"}] },
 
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
          >
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