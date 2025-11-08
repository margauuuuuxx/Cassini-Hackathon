import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

interface Friend {
  id: string;
  username: string;
  name: string;
  pictureCount: number;
  mutualFriends: number;
  isPending?: boolean;
}

export default function FriendsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const friends: Friend[] = [
    { id: '1', username: '@johndoe', name: 'John Doe', pictureCount: 28, mutualFriends: 12 },
    { id: '2', username: '@sarahsmith', name: 'Sarah Smith', pictureCount: 45, mutualFriends: 8 },
    { id: '3', username: '@mikechen', name: 'Mike Chen', pictureCount: 33, mutualFriends: 15 },
    { id: '4', username: '@emilyjones', name: 'Emily Jones', pictureCount: 52, mutualFriends: 6 },
    { id: '5', username: '@alexbrown', name: 'Alex Brown', pictureCount: 19, mutualFriends: 10 },
  ];

  const suggestions: Friend[] = [
    { id: '6', username: '@lisawang', name: 'Lisa Wang', pictureCount: 41, mutualFriends: 5, isPending: true },
    { id: '7', username: '@davidkim', name: 'David Kim', pictureCount: 27, mutualFriends: 9, isPending: true },
  ];

  const filteredFriends = friends.filter(friend => 
    friend.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSuggestions = suggestions.filter(friend => 
    friend.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderFriendItem = ({ item }: { item: Friend }) => (
    <View style={styles.friendCard}>
      <View style={styles.friendInfo}>
        <View style={[styles.avatar, { backgroundColor: getAvatarColor(item.id) }]} />
        <View style={styles.friendDetails}>
          <Text style={styles.friendName}>{item.name}</Text>
          <Text style={styles.friendUsername}>{item.username}</Text>
          <Text style={styles.friendStats}>
            {item.pictureCount} pictures · {item.mutualFriends} mutual friends
          </Text>
        </View>
      </View>
      {item.isPending && (
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="person-add" size={20} color="#A855F7" />
        </TouchableOpacity>
      )}
    </View>
  );

  const getAvatarColor = (id: string) => {
    const colors = ['#A855F7', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    return colors[parseInt(id) % colors.length];
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Friends</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search friends..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {searchQuery.length === 0 && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Suggestions</Text>
              {suggestions.map(friend => (
                <View key={friend.id}>
                  {renderFriendItem({ item: friend })}
                </View>
              ))}
            </View>

            <View style={styles.divider} />
          </>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {searchQuery.length > 0 ? 'Search Results' : `My Friends (${friends.length})`}
          </Text>
          {filteredFriends.length > 0 ? (
            filteredFriends.map(friend => (
              <View key={friend.id}>
                {renderFriendItem({ item: friend })}
              </View>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="people-outline" size={48} color="#CCC" />
              <Text style={styles.emptyText}>No friends found</Text>
            </View>
          )}
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
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },
  placeholder: {
    width: 40,
  },
  searchContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111',
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
    marginBottom: 12,
  },
  friendCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 2,
  },
  friendUsername: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  friendStats: {
    fontSize: 12,
    color: '#999',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 8,
    backgroundColor: '#F3F4F6',
    marginVertical: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    marginTop: 12,
  },
});
