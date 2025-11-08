import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();
  
  // Animation values
  const fadeText1 = useRef(new Animated.Value(1)).current;
  const fadeEquals = useRef(new Animated.Value(0)).current;
  const scaleEquals = useRef(new Animated.Value(0.5)).current;
  const fadePloc = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Sequence: Show "Picture + Location" -> Show "=" -> Hide first text -> Show "PLOC"
    Animated.sequence([
      // Show Picture + Location for 800ms
      Animated.delay(500),
      
      // Fade in "=" sign and scale it up
      Animated.parallel([
        Animated.timing(fadeEquals, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(scaleEquals, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
      ]),
      
      // Wait a bit
      Animated.delay(300),
      
      // Fade out "Picture + Location" and fade in "PLOC"
      Animated.parallel([
        Animated.timing(fadeText1, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(fadeEquals, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(fadePloc, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      
      // Wait then navigate
      Animated.delay(600),
    ]).start(() => {
      router.replace('/(tabs)');
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Picture + Location */}
      <Animated.View 
        style={[
          styles.textContainer,
          { opacity: fadeText1 }
        ]}
      >
        <Text style={styles.text}>Picture + Location</Text>
      </Animated.View>

      {/* = Sign */}
      <Animated.View 
        style={[
          styles.equalsContainer,
          { 
            opacity: fadeEquals,
            transform: [{ scale: scaleEquals }]
          }
        ]}
      >
        <Text style={styles.equals}>=</Text>
      </Animated.View>

      {/* PLOC */}
      <Animated.View 
        style={[
          styles.plocContainer,
          { opacity: fadePloc }
        ]}
      >
        <Text style={styles.ploc}>PLOC</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A855F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 1,
  },
  equalsContainer: {
    position: 'absolute',
  },
  equals: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
  },
  plocContainer: {
    position: 'absolute',
  },
  ploc: {
    fontSize: 56,
    fontWeight: '900',
    color: 'white',
    letterSpacing: 4,
  },
});
