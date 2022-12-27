import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Search from './Search';
import Header from './src/components/Header';

export default function App() {
  return (
    <View>
      <Header />
      <Search />
      <StatusBar style="auto" />
    </View>
  );
}

