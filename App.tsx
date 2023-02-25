import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text>Home</Text>
        <Text>Our story</Text>
        <Text>Why Miss</Text>
      </View>
      <Text style={styles.title}>Miss Cupcake</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7c0e8',
    justifyContent: 'flex-start',
    paddingTop: 80,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'purple'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  }
});
