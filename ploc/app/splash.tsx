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

  // New animation value for sliding "="
  const translateEquals = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(500),

      // Fade + scale in "="
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

      Animated.delay(300),

      // Sweep animation: "=" slides left & text fades out
      Animated.parallel([
        Animated.timing(translateEquals, {
          toValue: -180, // adjust if needed for text width
          duration: 400,
          useNativeDriver: true,
        }),
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

      Animated.delay(600),
    ]).start(() => {
      router.replace('/(tabs)');
    });
  }, []);

  return (
    <View style={styles.container}>

      {/* Row containing "Picture + Location" and "=" */}
      <View style={styles.row}>
        <Animated.Text
          style={[
            styles.text,
            { opacity: fadeText1 }
          ]}
        >
          Picture + Location
        </Animated.Text>

        <Animated.Text
          style={[
            styles.equals,
            {
              opacity: fadeEquals,
              transform: [
                { scale: scaleEquals },
                { translateX: translateEquals },
              ],
            },
          ]}
        >
          =
        </Animated.Text>
      </View>

      {/* PLOC */}
      <Animated.View
        style={[
          styles.plocContainer,
          { opacity: fadePloc }
        ]}
      >
        <Text style={styles.ploc}>
          =PLOC!
        </Text>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 1,
  },
  equals: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
    marginLeft: 8,
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
