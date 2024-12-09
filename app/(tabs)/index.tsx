import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const VendorCategories = () => {
  type Category = {
    id: number;
    name: string;
    subcategories: string[];
    image: string;
    bgColor: string;
  }
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [toggleStates, setToggleStates] = useState<{ [key: number]: boolean }>({});
  const categories: Category[] = [
    {
      id: 1,
      name: 'Venues',
      subcategories: [
        "View All Venues",
        "Banquet Halls",
        "Marriage Garden / Lawns",
        "Wedding Resorts",
        "Small Function / Party Halls",
        "Destination Wedding Venues",
        "Kalyana Mandapams",
        "4 Star & Above Wedding Hotels",
      ],
      image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg',
      bgColor: "#D8DFFC"
    },
    {
      id: 2,
      name: 'Photographers',
      subcategories: [
        'Photographers'
      ],
      image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/2/photographers.jpg',
      bgColor: "#F4D5C2"
    },
    {
      id: 3,
      name: 'Makeup',
      subcategories: [
        'Bridal Makeup',
        'Family Makeup'
      ],
      image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/3/makeup.jpg',
      bgColor: "#DFB2AD"
    },
    {
      id: 4,
      name: 'Pre Wedding Shoot',
      subcategories: [
        'Pre Wedding Shoot Locations',
        'Pre Wedding Photographers'
      ],
      image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg',
      bgColor: "#D8DFFC"
    },
    {
      id: 5,
      name: 'Planning & Decor',
      subcategories: [
        'Wedding Planners',
        'Decorators'
      ],
      image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/7/planning-decor.jpg',
      bgColor: "#F6B896"
    },
    {
      id: 6,
      name: 'Bridal Wear',
      subcategories: [
        'View All Bridal Wear',
        'Bridal Lehengas',
        'Kanjeevaram/Silk Sarees',
        'Cocktail Gowns',
        'Trousseau Sarees',
        'Bridal Lehenga on Rent'
      ],
      image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/4/bridal-wear.jpg',
      bgColor: "#CFCDB8"
    },
  ];
  const toggleDropdown = (id: number) => {
    setActiveCategory((prev) => (prev === id ? null : id));//If the previous Id is equal to current Id  then it will be null so that subcats will not be mapped again if not equal then its a new Id It will be setted to activ.cat state and the subcats are mapped
    setToggleStates((prev) => ({
      ...prev,//using spread operator ensuring all other  ids value remain unchanged
      [id]: !prev[id], // Toggle the state for the given card's id 
      //[id]is for dynamically accessing the id 
    }));
  };

  const renderCategory = ({ item }: { item: Category }) => (//{ item }: This is a destructuring assignment. The FlatList passes an object to the renderItem function for each element in the categories array, and the item represents the data of that particular element (i.e., a Category object).
    <View style={{
      backgroundColor: `${item.bgColor}`,
      marginBottom: 5,
      shadowColor: "#000",
    }}>
      <TouchableOpacity onPress={() => toggleDropdown(item.id)}>
        <View style={styles.cardHeader} >
          <View style={styles.textContainer}>
            <View style={styles.dropImageTitleContainer}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Image
                source={require("./line-angle-down-icon.png")}
                style={toggleStates[item.id] ? styles.dropDownImageRotate : styles.dropDownImageNoRotate}
                resizeMode="cover"
              />
              {/* toggleStates= {
                1: true,
                2: false,
                3: true
              } toggleStates[2] is false here (Dynamicall)*/}
            </View>
            <Text >{item.subcategories[0]}</Text>
          </View>
          <Image
            source={{ uri: item.image }}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      {activeCategory === item.id && (//if the id is set to null then it will not show
        <View style={styles.dropdown}>
          {item.subcategories.map((sub, index) => (
            <Text key={index} style={styles.subcategory}>
              {sub}
            </Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headername}>Vendor Categories</Text>
        <TouchableOpacity>
          <Text style={styles.cityDropdown}>All Cities ▾</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>FOR YOU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>VENDORS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>E-INVITES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>IDEAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>GENIE</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  dropDownImageRotate: {
    width: 10,
    height: 10,
    marginLeft: 5,
    transform: [{ rotate: "180deg" }]
  },
  dropDownImageNoRotate: {
    width: 10,
    height: 10,
    marginLeft: 5,
    transform: [{ rotate: "0deg" }]
  },
  dropImageTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

  },
  textContainer: {
    paddingLeft: 10,
    display: "flex",
    flexDirection: "column",
    fontFamily: "serif"
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  cardImage: {
    width: 150,
    height: 90,
    borderBottomLeftRadius: 50, // Adjust this value for more/less curvature
    borderTopLeftRadius: 50,
  },
  dropdown: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "#fff"
  },
  subcategory: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headername: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cityDropdown: {
    fontSize: 16,
    color: '#E91E63',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#555',
  },
});

export default VendorCategories;