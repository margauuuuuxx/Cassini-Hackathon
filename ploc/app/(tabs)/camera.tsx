import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Alert } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function CameraScreen() {
  const router = useRouter();
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <View style={styles.permissionContainer}>
          <Ionicons name="camera-outline" size={64} color="#666" />
          <Text style={styles.permissionText}>We need your permission to show the camera</Text>
          <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
            <Text style={styles.permissionButtonText}>Grant Permission</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log('Photo taken:', photo);
        Alert.alert('Success', 'Photo captured!');
        // TODO: Handle photo (save, upload, etc.)
      } catch (error) {
        console.error('Error taking picture:', error);
        Alert.alert('Error', 'Failed to take picture');
      }
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Close Triangle Button - Left */}
        <TouchableOpacity 
          style={styles.closeTriangleButton}
          onPress={() => router.back()}
        >
          <View style={styles.triangleDown} />
        </TouchableOpacity>

        {/* Title - Center */}
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>PLOC!</Text>
        </View>

        {/* Spacer for layout balance - Right */}
        <View style={styles.closeTriangleButton} />
      </View>

      {/* Content Area */}
      <View style={styles.content}>
        {/* Location Section */}
        <View style={styles.locationSection}>
          <View style={styles.locationIcon}>
            <Ionicons name="location-outline" size={28} color="white" />
          </View>
          <View>
            <Text style={styles.locationLabel}>Location</Text>
            <Text style={styles.locationText}>BeCentral, Bruxelles</Text>
          </View>
        </View>

        {/* Camera View with Grid */}
        <View style={styles.cameraContainer}>
          <CameraView 
            style={styles.camera} 
            facing={facing}
            ref={cameraRef}
          >
            {/* Grid Overlay */}
            <View style={styles.gridOverlay}>
              {/* Horizontal lines */}
              <View style={[styles.gridLine, styles.gridLineHorizontal, { top: '33.33%' }]} />
              <View style={[styles.gridLine, styles.gridLineHorizontal, { top: '66.66%' }]} />
              {/* Vertical lines */}
              <View style={[styles.gridLine, styles.gridLineVertical, { left: '33.33%' }]} />
              <View style={[styles.gridLine, styles.gridLineVertical, { left: '66.66%' }]} />
            </View>
          </CameraView>
        </View>

        {/* Tap to ploc text */}
        <Text style={styles.tapText}>Tap to ploc!</Text>

        {/* Bottom Controls */}
        <View style={styles.controls}>
          {/* Flash Toggle */}
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="flash-off" size={32} color="white" />
          </TouchableOpacity>

          {/* Capture Button */}
          <TouchableOpacity 
            style={styles.captureButton}
            onPress={takePicture}
          >
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>

          {/* Flip Camera */}
          <TouchableOpacity 
            style={styles.controlButton}
            onPress={toggleCameraFacing}
          >
            <Ionicons name="camera-reverse" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  permissionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  permissionButton: {
    backgroundColor: '#333',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  permissionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  closeTriangleButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangleDown: {
    width: 20,
    height: 20,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderLeftColor: '#000',
    borderBottomColor: '#000',
    transform: [{ rotate: '-45deg' }],
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    paddingTop: 20,
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  locationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 2,
  },
  locationText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  cameraContainer: {
    marginHorizontal: 20,
    borderRadius: 24,
    overflow: 'hidden',
    aspectRatio: 3/4,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  gridOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  gridLineHorizontal: {
    left: 0,
    right: 0,
    height: 1,
  },
  gridLineVertical: {
    top: 0,
    bottom: 0,
    width: 1,
  },
  tapText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  controlButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderWidth: 6,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#6B5FC7',
  },
});