import { View } from '@/components/Themed';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import { SearchBar } from '@rneui/base';
import { useColorScheme } from '@/components/useColorScheme';
import { SectionHeaders } from "@/models/DataModels";
import { UpdateEndpoint, RetrievalEndpoint } from "@/constants/DataEndpoints";
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SearchScreen() {
  const colorScheme = useColorScheme();
  const useLightMode = colorScheme === 'light';
  const [omtData, setOmtData] = useState([]);

  fetch(RetrievalEndpoint)
    .then(response => response.json())
    .then(data => {
      // Handle the response data here
      if (JSON.stringify(data) !== JSON.stringify(omtData)) {
        AsyncStorage.setItem('omtData', JSON.stringify(data));
        setOmtData(data);
        console.log("Data has been updated.")
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error);
    });

  return (
    <View style={styles.searchScreenContainer}>
      <SearchBar style={styles.searchBar} placeholder='Enter Condition' lightTheme={useLightMode} />
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
                .sort((a: { code: string }, b: { code: string }) => a.code.localeCompare(b.code)) as { title: string, code: string }[]}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <Link
                  href={{
                    pathname: "/modal",
                    params: { code: item.code },
                  }}
                >
                  <Text style={styles.item}>{item.title}</Text>
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
    padding: 5,
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
