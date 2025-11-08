import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Image, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');

interface LocationPointProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  count: number;
  imagePath: any;
}

const LocationPoint = ({ coordinate, count, imagePath }: LocationPointProps) => {
  return (
    <Marker coordinate={coordinate} anchor={{ x: 0.5, y: 1 }}>
      <View style={styles.locationBubbleWrapper}>
        <View style={styles.locationCard}>
          <Image 
            source={imagePath}
            style={styles.backgroundImage}
            blurRadius={8}
          />
          <View style={styles.darkOverlay} />
          
          <View style={styles.locationContent}>
            <Ionicons name="lock-closed" size={18} color="white" />
            <Text style={styles.locationText}>
              {count} friends posted here
            </Text>
          </View>
        </View>
        <View 
          style={[
            styles.trianglePointer, 
            { borderTopColor: 'rgba(150, 150, 150, 0.8)' }
          ]} 
        />
      </View>
    </Marker>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is needed to show your position on the map');
        return;
      }
      setHasLocationPermission(true);
    })();
  }, []);
  
  const locations = [
    { coordinate: { latitude: 50.8450, longitude: 4.3600 }, count: 5, imagePath: { uri: 'file:///Users/margauxloncour/Desktop/Cassini-Hackathon/images/image1.JPG' } },
    { coordinate: { latitude: 50.8400, longitude: 4.3700 }, count: 3, imagePath: { uri: 'file:///Users/margauxloncour/Desktop/Cassini-Hackathon/images/image1.jpg' } },
    { coordinate: { latitude: 50.8350, longitude: 4.3650 }, count: 8, imagePath: { uri: 'file:///Users/margauxloncour/Desktop/Cassini-Hackathon/images/image1.jpg' } },
    { coordinate: { latitude: 50.8500, longitude: 4.3750 }, count: 2, imagePath: { uri: 'file:///Users/margauxloncour/Desktop/Cassini-Hackathon/images/image2.jpg' } },
    { coordinate: { latitude: 50.8300, longitude: 4.3550 }, count: 4, imagePath: { uri: 'file:///Users/margauxloncour/Desktop/Cassini-Hackathon/images/image2.jpg' } },
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
          zoomEnabled={true}
          scrollEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
        >
          {/* Location Points */}
          {locations.map((loc, idx) => (
            <LocationPoint key={idx} {...loc} />
          ))}
        </MapView>

        {/* Floating friends button */}
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => router.push('/friends')}
        >
          <Ionicons name="people" size={24} color="#333" />
        </TouchableOpacity>


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
  locationBubbleWrapper: {
    alignItems: 'center',
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
  trianglePointer: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginTop: 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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

});
