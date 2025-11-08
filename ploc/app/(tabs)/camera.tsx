import { StyleSheet, View, Text } from 'react-native';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Camera Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
});
