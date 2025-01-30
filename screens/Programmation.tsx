import React, { useState, useEffect, useRef } from 'react';
import { View,  Text,  Image,  FlatList,  TouchableOpacity,  Dimensions,  SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Video } from 'expo-av';
import GroupModal from '../popup/popUp_Groups';
import { dayOneGroups, dayTwoGroups } from '../data/groupsData';
import styles from '../styles/Programmation_Styles'
import Colors from '../constants/colors';

const { width, height } = Dimensions.get('window');

export type SocialLink = {
  name: string;
  url: string;
};

export type Group = {
  id: string;
  name: string;
  genre: string;
  startTime: string;
  endTime: string;
  image: any;
  bannerImage: any;
  videoBackground?: any;
  description: string;
  socialLinks: SocialLink[];
};

type DayScreenProps = {
  groups: Group[];
  festivalDate: string;
};

function DayScreen({ groups, festivalDate }: DayScreenProps) {
  const flatListRef = useRef<FlatList<Group>>(null);
  const videoRef = useRef<Video>(null); 
  const now = new Date();
  const today = now.toISOString().split('T')[0];

  const [currentTime, setCurrentTime] = useState(now.getHours() + now.getMinutes() / 60);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const isToday = today === festivalDate;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.getHours() + now.getMinutes() / 60);
    }, 60000);
  
    return () => clearInterval(interval);
  }, []);  

  const timeToDecimal = (time: string) => {
    const [hours, minutes] = time.split(':').map((x) => parseFloat(x));
    return hours + minutes / 60;
  };

  const currentIndex = isToday
    ? groups.findIndex((group) => {
        const startTime = timeToDecimal(group.startTime);
        const endTime = timeToDecimal(group.endTime);
        return currentTime >= startTime && currentTime <= endTime;
      })
    : -1;

  useEffect(() => {
    if (isToday && currentIndex >= 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex, isToday]);

  const openModal = (group: Group) => {
    setSelectedGroup(group);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedGroup(null);
    setModalVisible(false);
  };

  const getGroupStyle = (group: Group) => {
    const startTime = timeToDecimal(group.startTime);
    const endTime = timeToDecimal(group.endTime);
  
    if (!isToday) {
      return { 
        containerStyle: {}, 
        imageStyle: styles.groupImage, 
        timeText: `${group.startTime} - ${group.endTime}` 
      };
    }
  
    if (currentTime > endTime) {
      return { 
        containerStyle: styles.pastGroup, 
        imageStyle: styles.groupImage, 
        timeText: `${group.startTime} - ${group.endTime}` 
      };
    } else if (currentTime >= startTime && currentTime <= endTime) {
      return {
        containerStyle: styles.currentGroup,
        imageStyle: styles.currentGroupImage,
        timeText: 'En cours',
      };
    }
  
    return { 
      containerStyle: styles.futureGroup, 
      imageStyle: styles.groupImage, 
      timeText: `${group.startTime} - ${group.endTime}` 
    };
  };  

  const renderGroup = ({ item, index }: { item: Group; index: number }) => {
    const isCurrent = index === currentIndex;
  
    return (
      <TouchableOpacity
        style={[index === currentIndex ? styles.currentGroup : styles.normalGroup]}
        onPress={() => openModal(item)}
      >
        <View style={styles.videoContainer}>
          {isCurrent && item.videoBackground && (
            <Video
              source={{ uri: item.videoBackground }}
              style={styles.videoBackground}
              shouldPlay
              isLooping
              resizeMode="cover"
              muted
              onError={(error) => console.log('Erreur de vidéo:', error)}
            />
          )}
        </View>
  
        {/* Image du groupe */}
        <Image source={item.image} style={isCurrent ? styles.currentGroupImage : styles.groupImage} />
  
        {/* Infos du groupe */}
        <View style={styles.groupDetails}>
          <Text style={[styles.groupName, isCurrent && styles.currentGroupText]}>{item.name}</Text>
          <Text style={[styles.groupGenre, isCurrent && styles.currentGenreText]}>{item.genre}</Text>
        </View>
  
        <Text 
          style={[
            styles.groupTime, 
            isCurrent && styles.currentTimeText // Applique un style différent si en cours
          ]}
        >
          {isCurrent ? 'En cours' : `${item.startTime} - ${item.endTime}`}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.backgroundContainer}>
        <FlatList
          ref={flatListRef}
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={renderGroup}
          getItemLayout={(data, index) => ({
            length: 110,
            offset: 110 * index,
            index,
          })}
          initialNumToRender={5}
          nestedScrollEnabled={true}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          removeClippedSubviews={false}
          ListFooterComponent={<View style={{ height: 100 }} />}
        />
      </View>
      <GroupModal visible={isModalVisible} onClose={closeModal} group={selectedGroup} />
    </SafeAreaView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Programme() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: true,
          tabBarLabelStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            textTransform: 'none',
            color: Colors.white,
            textAlign: 'center',
            width: '100%',
          },
          tabBarStyle: {
            height: 80,
            backgroundColor: Colors.black,
            elevation: 5,
            shadowColor: Colors.black,
            shadowOpacity: 0.2,
            shadowRadius: 4,
            justifyContent: 'center',
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.dark.accent,
            height: 4,
            borderRadius: 2,
          },
          tabBarPressColor: Colors.accent,
        }}
      >
        <Tab.Screen name="Ven. 23 Mai">
          {() => <DayScreen groups={dayOneGroups} festivalDate="2025-01-30" />}
        </Tab.Screen>
        <Tab.Screen name="Sam. 24 Mai">
          {() => <DayScreen groups={dayTwoGroups} festivalDate="2025-05-24" />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}