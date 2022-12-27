import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from 'react';
import Search from './src/components/Search';
import Header from './src/components/Header';
import Category from './src/components/Category';

export default function App() {

  const [term, setTerm] = useState("Burger");

  return (
    <View>
      <Header />
      <Search setTerm={setTerm} />
      <Category term={term} setTerm={setTerm} />
      <StatusBar style="auto" />
    </View>
  );
}

