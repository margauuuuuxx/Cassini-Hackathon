import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface LocationPointProps {
  x: number;
  y: number;
  count: number;
}

const LocationPoint = ({ x, y, count }: LocationPointProps) => {
  const randomHue1 = Math.floor(Math.random() * 360);
  
  return (
    <View 
      style={[
        styles.locationPointContainer,
        { left: `${x}%`, top: `${y}%` }
      ]}
    >
      <View style={styles.locationCard}>
        <View 
          style={[
            styles.locationGradient,
            { backgroundColor: `hsl(${randomHue1}, 70%, 50%)` }
          ]} 
        />
        <View style={styles.locationOverlay} />
        <View style={styles.locationContent}>
          <Ionicons name="lock-closed" size={18} color="white" />
          <Text style={styles.locationText}>
            {count} friends posted here
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  const locations = [
    { x: 30, y: 25, count: 5 },
    { x: 55, y: 40, count: 3 },
    { x: 45, y: 55, count: 8 },
    { x: 70, y: 70, count: 2 },
    { x: 25, y: 75, count: 4 },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.profileSection}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.username}>@margauuuuux</Text>
              <Text style={styles.pictureCount}>42 pictures</Text>
            </View>
          </View>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="help-circle-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="share-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

      </View>

      {/* Map Area */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 50.8400,
            longitude: 4.3650,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        />

        {/* Location Points */}
        {locations.map((loc, idx) => (
          <LocationPoint key={idx} {...loc} />
        ))}

        {/* Floating menu button */}
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>

        {/* Current location indicator */}
        <View style={styles.currentLocation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#A855F7',
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  pictureCount: {
    fontSize: 14,
    color: '#666',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    width: width,
    height: '100%',
  },
  locationPointContainer: {
    position: 'absolute',
    zIndex: 10,
    transform: [{ translateX: -40 }, { translateY: -48 }],
  },
  locationCard: {
    width: 80,
    height: 96,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  locationGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  locationOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(107, 114, 128, 0.6)',
  },
  locationContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  locationText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
  menuButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 48,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  currentLocation: {
    position: 'absolute',
    bottom: height * 0.33,
    left: width / 2 - 8,
    width: 16,
    height: 16,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});
