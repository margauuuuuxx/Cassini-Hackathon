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
  const stackCount = Math.min(count, 3); // Limit to max 3 stacked cards
  
  return (
    <Marker coordinate={coordinate} anchor={{ x: 0.5, y: 1 }}>
      <View style={styles.locationBubbleWrapper}>
        <View style={styles.locationStackContainer}>
          {/* Back card */}
          {stackCount >= 3 && <View style={[styles.locationCard, styles.locationCardBack]} />}
          {/* Middle card */}
          {stackCount >= 2 && <View style={[styles.locationCard, styles.locationCardMiddle]} />}
          {/* Front card */}
          <View style={[styles.locationCard, styles.locationCardFront]}>
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
    { coordinate: { latitude: 50.826869, longitude: 4.362878 }, count: 1, imagePath: require('../../assets/images/samples/IMG_2958.jpg') },
    { coordinate: { latitude: 50.847406, longitude: 4.369225 }, count: 1, imagePath: require('../../assets/images/samples/IMG_4645.jpg') },
    { coordinate: { latitude: 50.823094, longitude: 4.367133 }, count: 1, imagePath: require('../../assets/images/samples/IMG_6685.jpg') },
    { coordinate: { latitude: 50.841606, longitude: 4.388861 }, count: 1, imagePath: require('../../assets/images/samples/IMG_7470.jpg') },
    { coordinate: { latitude: 50.864397, longitude: 4.344731 }, count: 2, imagePath: require('../../assets/images/samples/IMG_9163.jpg') },
    { coordinate: { latitude: 50.825683, longitude: 4.359992 }, count: 1, imagePath: require('../../assets/images/samples/IMG_9240.jpg') },
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

        {/* Floating eco score button */}
        <TouchableOpacity 
          style={styles.ecoScoreButton}
          onPress={() => router.push('/(tabs)/profile')}
        >
          <View style={styles.ecoScoreBadge}>
            <Text style={styles.ecoScoreNumber}>92</Text>
          </View>
          <Ionicons name="leaf" size={18} color="#10B981" style={styles.ecoLeafIcon} />
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
  locationStackContainer: {
    width: 80,
    height: 96,
    position: 'relative',
  },
  locationCard: {
    width: 80,
    height: 96,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  locationCardBack: {
    position: 'absolute',
    transform: [{ translateX: -10 }, { translateY: -10 }, { rotate: '-8deg' }],
    backgroundColor: '#9CA3AF',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  locationCardMiddle: {
    position: 'absolute',
    transform: [{ translateX: -5 }, { translateY: -5 }, { rotate: '-4deg' }],
    backgroundColor: '#C4C9D1',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  locationCardFront: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 3,
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
  ecoScoreButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  ecoScoreBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#10B981',
  },
  ecoScoreNumber: {
    fontSize: 14,
    fontWeight: '900',
    color: '#10B981',
  },
  ecoLeafIcon: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
  },

});
