import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const pokemonData = [
  {
    icon_name: 'bolt-lightning',
    title: 'Electric',
    color: '#FFDD57',
    data: [
      {
        name: 'Pikachu',
        cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25.png',
      },
      {
        name: 'Magnemite',
        cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_81.png',
      },
    ],
  },
  {
    icon_name: 'fire',
    title: 'Fire',
    color: '#FA8072',
    data: [
      {
        name: 'Charmander',
        cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4.png',
      },
      {
        name: 'Vulpix',
        cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37.png',
      },
    ],
  },
];

const Pokemon = ({ item, icon_name }) => (
    <View>
    <Icon name={icon_name} size={24} color="#333" />

    <TouchableOpacity style={styles.cardItem}>
      <Text style={styles.pokemonName}>{item.name}</Text>
      <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>
      </View>
);

function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button style={styles.button} title="Add Pokémon"/>
        <SectionList
            sections={pokemonData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item, section }) => (
                <Pokemon item={item} />
            )}
            renderSectionHeader={({ section }) => (
                <View style={[styles.header, { backgroundColor: section.color }]}>
                  {/* Display the icon next to the section title */}
                  <Icon name={section.icon_name} size={24} color="#333" style={styles.sectionIcon} />
                  <Text style={styles.headerText}>{section.title}</Text>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
  },
  header: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    marginTop:20,
    marginHorizontal:10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderWidth: 1,
  },

  pokemonName: {
    fontSize: 16,
    fontWeight: '500',
  },

  cardImage: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
  },

});

export default App;
