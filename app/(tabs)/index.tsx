import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const VendorCategories = () => {
  const categories = [
    { title: 'Venues', subtitle: 'Banquet Halls, Marriage Gardens', image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg' },
    { title: 'Photographers', subtitle: 'Photographers', image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/2/photographers.jpg' },
    { title: 'Makeup', subtitle: 'Bridal Makeup, Family Makeup', image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/3/makeup.jpg' },
    { title: 'Pre Wedding Shoot', subtitle: 'Pre Wedding Shoot Locations', image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg' },
    { title: 'Planning & Decor', subtitle: 'Wedding Planners, Decorators', image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/7/planning-decor.jpg' },
    { title: 'Bridal Wear', subtitle: 'Bridal Lehengas, Kanjeevaram Sarees', image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/4/bridal-wear.jpg' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vendor Categories</Text>
        <TouchableOpacity>
          <Text style={styles.cityDropdown}>All Cities ▾</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryCard}>
            <View style={styles.textContainer}>
              <Text style={styles.categoryTitle}>{category.title} ▾</Text>
              <Text style={styles.categorySubtitle}>{category.subtitle}</Text>
            </View>
            <Image source={{ uri: category.image }} style={styles.categoryImage} />
          </View>
        ))}
      </ScrollView>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cityDropdown: {
    fontSize: 16,
    color: '#E91E63',
  },
  categoryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categorySubtitle: {
    fontSize: 14,
    color: '#666',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
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