import { View } from '@/components/Themed';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { SearchBar } from '@rneui/base';
import { useColorScheme } from '@/components/useColorScheme';
import { SectionHeaders } from "@/models/DataModels";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const useLightMode = colorScheme === 'light';

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
            <Text style={styles.firstHeader}>{SectionHeaders["I"]["A"]["2"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["I"]["A"]["2"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["I"]["A"]["2"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["I"]["A"]["3"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["I"]["A"]["3"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["I"]["A"]["3"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["I"]["A"]["4"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["I"]["A"]["4"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["I"]["A"]["4"]["thirdHeader"]}</Text>
          </View>

          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["I"]["B"]["1"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["I"]["B"]["1"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["I"]["B"]["1"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["I"]["B"]["2"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["I"]["B"]["2"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["I"]["B"]["2"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["I"]["B"]["3"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["I"]["B"]["3"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["I"]["B"]["3"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["I"]["B"]["4"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["I"]["B"]["4"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["I"]["B"]["4"]["thirdHeader"]}</Text>
          </View>

          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["II"]["A"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["II"]["A"]["secondHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["II"]["B"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["II"]["B"]["secondHeader"]}</Text>
          </View>

          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["III"]["A"]["1"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["III"]["A"]["1"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["III"]["A"]["1"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["III"]["A"]["2"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["III"]["A"]["2"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["III"]["A"]["2"]["thirdHeader"]}</Text>
          </View>

          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["III"]["B"]["1"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["III"]["B"]["1"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["III"]["B"]["1"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["III"]["B"]["2"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["III"]["B"]["2"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["III"]["B"]["2"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["III"]["B"]["3"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["III"]["B"]["3"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["III"]["B"]["3"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["III"]["B"]["4"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["III"]["B"]["4"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["III"]["B"]["4"]["thirdHeader"]}</Text>
          </View>

          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["III"]["C"]["1"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["III"]["C"]["1"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["III"]["C"]["1"]["thirdHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["III"]["C"]["2"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["III"]["C"]["2"]["secondHeader"]}</Text>
            <Text style={styles.thirdHeader}>{SectionHeaders["III"]["C"]["2"]["thirdHeader"]}</Text>
          </View>

          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["IV"]["A"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["IV"]["A"]["secondHeader"]}</Text>
          </View>
          <View>
            <Text style={styles.firstHeader}>{SectionHeaders["IV"]["B"]["firstHeader"]}</Text>
            <Text style={styles.secondHeader}>{SectionHeaders["IV"]["B"]["secondHeader"]}</Text>
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
