import { View } from '@/components/Themed';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { SectionHeaders } from "@/models/DataModels";
import { UpdateEndpoint, RetrievalEndpoint, getData as getDataFromStorage } from "@/constants/DataEndpoints";
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchBar, ListItem } from '@rneui/themed';

fetch(RetrievalEndpoint)
  .then(response => response.json())
  .then(data => {
    AsyncStorage.setItem('omtData', JSON.stringify(data));
    console.log("Data has been updated.")
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });

export default function SearchScreen() {
  const colorScheme = useColorScheme();
  const useLightMode = colorScheme === 'light';
  const [omtData, setOmtData] = useState([]);
  const [search, setSearch] = useState("");

  getDataFromStorage(omtData, setOmtData);
  console.log("Search Term: " + search);

  return (
    <View style={styles.searchScreenContainer}>
      <SearchBar style={styles.searchBar} lightTheme={useLightMode} placeholder='Search' onChangeText={setSearch} value={search} />
      <SafeAreaView style={styles.infoView}>
        <ScrollView>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["I"]["A"]["1"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["I"]["A"]["1"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["I"]["A"]["1"]["thirdHeader"]}</Text>
          </View>
          <View>
            <FlatList
              data={omtData
                .filter((item: { title: string, code: string }) => item.code.startsWith('I-A-1'))
                .filter((item: { tags: string[] }) => item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())))
                .sort((a: { code: string }, b: { code: string }) => a.code.localeCompare(b.code)) as { title: string, code: string }[]}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <Link
                  href={{
                    pathname: "/modal",
                    params: { code: item.code },
                  }}
                >
                  <ListItem>
                    <ListItem.Content>
                      <ListItem.Title style={styles.item}>{item.title}</ListItem.Title>
                      <ListItem.Subtitle style={styles.itemCode}>{item.code}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                </Link>

              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchScreenContainer: {
    flex: 1,
    width: '100%',
    fontSize: 10,
  },
  searchBar: {
    fontSize: 15,
  },
  infoView: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    fontSize: 15
  },
  itemCode: {
    backgroundColor: '#fff',
    fontSize: 10
  },
  firstHeader: {
    backgroundColor: '#043d99',
    padding: 5,
    color: '#fff',
    textAlign: 'center',
  },
  secondHeader: {
    backgroundColor: '#3577e0',
    padding: 5,
    color: '#fff',
    textAlign: 'center'
  },
  thirdHeader: {
    backgroundColor: '#7caeff',
    padding: 5,
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    padding: 10,
  },
});
