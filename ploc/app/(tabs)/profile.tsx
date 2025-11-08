import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const stats = [
    { label: 'Pictures', value: '42' },
    { label: 'Friends', value: '156' },
    { label: 'Places', value: '28' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity 
          style={styles.settingsButton}
          onPress={() => router.push('/settings')}
        >
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={18} color="#FFF" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.name}>Margaux Loncour</Text>
          <Text style={styles.username}>@margauuuuux</Text>
          <Text style={styles.bio}>
            📍 Brussels, Belgium{'\n'}
            🌍 Travel enthusiast & photographer
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Top Places Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Places</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
          >
            {[
              { 
                location: 'BeCentral', 
                count: 3, 
                image: 'file:///Users/margauxloncour/Desktop/Cassini-Hackathon/images/IMG_0521.jpg' 
              }
            ].map((place, index) => (
              <View key={index} style={styles.placeStack}>
                {/* Back card */}
                {place.count > 2 && <View style={[styles.placeCard, styles.placeCardBack]} />}
                {/* Middle card */}
                {place.count > 1 && <View style={[styles.placeCard, styles.placeCardMiddle]} />}
                {/* Front card */}
                <TouchableOpacity style={[styles.placeCard, styles.placeCardFront]}>
                  <Image 
                    source={{ uri: place.image }}
                    style={styles.placeImage}
                    blurRadius={8}
                  />
                  <View style={styles.placeOverlay} />
                  <View style={styles.placeContent}>
                    <Text style={styles.placeLocationText}>
                      {place.location}
                    </Text>
                  </View>
                  <View style={styles.photoCountBadge}>
                    <Text style={styles.photoCountText}>{place.count}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Eco Score Section */}
        <View style={styles.section}>
          <View style={styles.ecoHeader}>
            <Text style={styles.sectionTitle}>Eco Score</Text>
            <View style={styles.ecoBadge}>
              <Text style={styles.ecoBadgeText}>🌿 Green Explorer</Text>
            </View>
          </View>
          
          <View style={styles.ecoCard}>
            {/* Main Score */}
            <View style={styles.ecoScoreMain}>
              <View style={styles.ecoScoreCircle}>
                <Text style={styles.ecoScoreNumber}>92</Text>
                <Text style={styles.ecoScoreLabel}>ECO SCORE</Text>
              </View>
              <View style={styles.ecoSummary}>
                <Text style={styles.ecoSummaryTitle}>This Month</Text>
                <Text style={styles.ecoSummaryText}>15.2 kg CO₂ saved</Text>
                <Text style={styles.ecoSummarySubtext}>vs. average traveler</Text>
              </View>
            </View>

            <View style={styles.ecoDivider} />

            {/* Stats Grid */}
            <View style={styles.ecoStatsGrid}>
              <View style={styles.ecoStatItem}>
                <Ionicons name="walk" size={24} color="#10B981" />
                <Text style={styles.ecoStatValue}>42 km</Text>
                <Text style={styles.ecoStatLabel}>By foot</Text>
              </View>
              
              <View style={styles.ecoStatItem}>
                <Ionicons name="bicycle" size={24} color="#10B981" />
                <Text style={styles.ecoStatValue}>18 km</Text>
                <Text style={styles.ecoStatLabel}>By bike</Text>
              </View>
              
              <View style={styles.ecoStatItem}>
                <Ionicons name="train" size={24} color="#3B82F6" />
                <Text style={styles.ecoStatValue}>85 km</Text>
                <Text style={styles.ecoStatLabel}>Public transit</Text>
              </View>
              
              <View style={styles.ecoStatItem}>
                <Ionicons name="car" size={24} color="#F59E0B" />
                <Text style={styles.ecoStatValue}>12 km</Text>
                <Text style={styles.ecoStatLabel}>By car</Text>
              </View>
            </View>

            <View style={styles.ecoDivider} />

            {/* Galileo Tracking Info */}
            <View style={styles.ecoTrackingInfo}>
              <Ionicons name="navigate-circle" size={20} color="#A855F7" />
              <Text style={styles.ecoTrackingText}>
                Tracked via Galileo satellite positioning
              </Text>
            </View>
          </View>
        </View>

        {/* Activity Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activity</Text>
          <View style={styles.activityCard}>
            <View style={styles.activityRow}>
              <View style={styles.activityIconContainer}>
                <Ionicons name="camera" size={20} color="#A855F7" />
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityLabel}>Photos this month</Text>
                <Text style={styles.activityValue}>12 new photos</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#CCC" />
            </View>
            
            <View style={styles.dividerLine} />
            
            <View style={styles.activityRow}>
              <View style={styles.activityIconContainer}>
                <Ionicons name="location" size={20} color="#3B82F6" />
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityLabel}>Places visited</Text>
                <Text style={styles.activityValue}>5 new places</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#CCC" />
            </View>
          </View>
        </View>


      </ScrollView>
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
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#A855F7',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#A855F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
    marginBottom: 12,
  },
  activityCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  activityValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },

  dividerLine: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 64,
  },
  carouselContainer: {
    paddingVertical: 12,
    gap: 12,
  },
  placeStack: {
    width: 80,
    height: 96,
    marginRight: 20,
    position: 'relative',
  },
  placeCard: {
    width: 80,
    height: 96,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  placeCardBack: {
    position: 'absolute',
    transform: [{ translateX: -8 }, { translateY: -8 }, { rotate: '-5deg' }],
    backgroundColor: '#E5E7EB',
    zIndex: 1,
  },
  placeCardMiddle: {
    position: 'absolute',
    transform: [{ translateX: -4 }, { translateY: -4 }, { rotate: '-2deg' }],
    backgroundColor: '#D1D5DB',
    zIndex: 2,
  },
  placeCardFront: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 3,
  },
  placeImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  placeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  placeContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeLocationText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  photoCountBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  photoCountText: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
  },
  ecoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ecoBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  ecoBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10B981',
  },
  ecoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  ecoScoreMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 16,
  },
  ecoScoreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#10B981',
  },
  ecoScoreNumber: {
    fontSize: 32,
    fontWeight: '900',
    color: '#10B981',
  },
  ecoScoreLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#059669',
    marginTop: 2,
  },
  ecoSummary: {
    flex: 1,
  },
  ecoSummaryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4,
  },
  ecoSummaryText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  ecoSummarySubtext: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  ecoDivider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 16,
  },
  ecoStatsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  ecoStatItem: {
    alignItems: 'center',
    flex: 1,
  },
  ecoStatValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginTop: 8,
  },
  ecoStatLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
    textAlign: 'center',
  },
  ecoTrackingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  ecoTrackingText: {
    fontSize: 12,
    color: '#A855F7',
    fontWeight: '500',
  },
});
