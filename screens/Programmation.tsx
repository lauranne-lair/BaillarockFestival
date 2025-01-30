import React, { useState, useEffect, useRef } from 'react';
import { View,  Text,  Image,  FlatList,  TouchableOpacity,  Dimensions,  SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
  image: any; // Image source
  bannerImage: any;
  description: string;
  socialLinks: SocialLink[];
};

type DayScreenProps = {
  groups: Group[];
  festivalDate: string;
};

function DayScreen({ groups, festivalDate }: DayScreenProps) {
  const flatListRef = useRef<FlatList<Group>>(null);
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
      return { containerStyle: {}, imageStyle: styles.groupImage, timeText: `${group.startTime} - ${group.endTime}` };
    }

    if (currentTime > endTime) {
      return { containerStyle: styles.pastGroup, imageStyle: styles.groupImage, timeText: `${group.startTime} - ${group.endTime}` };
    } else if (currentTime >= startTime && currentTime <= endTime) {
      return {
        containerStyle: styles.currentGroup,
        imageStyle: styles.currentGroupImage,
        timeText: 'En cours',
      };
    }

    return { containerStyle: styles.futureGroup, imageStyle: styles.groupImage, timeText: `${group.startTime} - ${group.endTime}` };
  };

  const renderGroup = ({ item }: { item: Group }) => {
    const { containerStyle, imageStyle, timeText } = getGroupStyle(item);

    return (
      <TouchableOpacity
        style={[styles.groupContainer, containerStyle]}
        onPress={() => openModal(item)}
      >
        <Image source={item.image} style={imageStyle} />
        <View style={styles.groupDetails}>
          <Text style={styles.groupName}>{item.name}</Text>
          <Text style={styles.groupGenre}>{item.genre}</Text>
        </View>
        <Text style={styles.groupTime}>{timeText}</Text>
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
            fontSize: 20,
            fontWeight: 'bold',
            textTransform: 'none',
            color: Colors.black,
            textAlign: 'center',
            width: '100%',
          },
          tabBarStyle: {
            height: 80,
            backgroundColor: Colors.lightGray,
            elevation: 5,
            shadowColor: Colors.black,
            shadowOpacity: 0.2,
            shadowRadius: 4,
            justifyContent: 'center',
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.primary,
            height: 4,
            borderRadius: 2,
          },
          tabBarPressColor: Colors.lightGray,
        }}
      >
        <Tab.Screen name="Ven. 23 Mai">
          {() => <DayScreen groups={dayOneGroups} festivalDate="2025-05-23" />}
        </Tab.Screen>
        <Tab.Screen name="Sam. 24 Mai">
          {() => <DayScreen groups={dayTwoGroups} festivalDate="2025-05-24" />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}