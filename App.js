import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

