import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function ModalScreen() {
  const params = useLocalSearchParams();
  const [omtData, setOmtData] = useState([]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('omtData');
      const jsonValueNotNull = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (JSON.stringify(jsonValueNotNull) !== JSON.stringify(omtData)) {
        setOmtData(jsonValueNotNull);
        console.log("Modal data updated.")
      }
    } catch (e) {
      console.log(e)
    }
  };

  getData();
  const displayData = omtData.filter((item: { code: string }) => item.code === params.code)[0] as { code: string, title: string, etiology: string, description: string, tags: string[], images: string[] };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{displayData.code}</Text>
      <Text style={styles.title}>{displayData.title}</Text>
      <Text style={styles.title}>{displayData.etiology}</Text>
      <Text style={styles.title}>{displayData.description}</Text>
      <Text style={styles.title}>{displayData.tags}</Text>
      <Text style={styles.title}>{displayData.images}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
