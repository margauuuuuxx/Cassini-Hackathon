import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map View (Web version - native maps not supported on web)</Text>
      <Text style={styles.subtext}>This app works best on iOS or Android devices</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
