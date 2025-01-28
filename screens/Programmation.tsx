import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupModal from '../popup/popUp_Groups';
import { dayOneGroups, dayTwoGroups } from '../data/groupsData';
import COLORS from '../constants/colors'
import colors from '../constants/colors';

const { width, height } = Dimensions.get('window');
const colorss = {
  black: 'rgb(0, 0, 0)', 
  lightGray: 'rgb(131, 131, 131)',
  darkGray: 'rgb(93, 92, 92)',
  green: 'rgb(40, 144, 9)',
  lightGreen: 'rgb(131, 131, 131)',
  background: 'rgb(84, 81, 81)',
};

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
  image: any; // Remplacé par "any" pour simplifier le type de l'image
  bannerImage: any; // Remplacé par "any" pour simplifier
  description: string;
  socialLinks: SocialLink[];
};

type DayScreenProps = {
  groups: Group[];
  festivalDate: string; // Date au format "YYYY-MM-DD"
};

function DayScreen({ groups, festivalDate }: DayScreenProps) {
  const flatListRef = useRef<FlatList<Group>>(null);

  const timeToDecimal = (time: string) => {
    const [hours, minutes] = time.split(':').map((x) => parseFloat(x));
    return hours + minutes / 60;
  };

  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const [currentTime, setCurrentTime] = useState(
    now.getHours() + now.getMinutes() / 60,
  );

  const isToday = today === festivalDate;

  const currentIndex = isToday
    ? groups.findIndex((group) => {
        const startTime = timeToDecimal(group.startTime);
        const endTime = timeToDecimal(group.endTime);
        return currentTime >= startTime && currentTime <= endTime;
      })
    : -1;

  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (group: Group) => {
    setSelectedGroup(group);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedGroup(null);
    setModalVisible(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.getHours() + now.getMinutes() / 60);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isToday && currentIndex >= 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex, isToday]);

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
          contentContainerStyle={styles.listContent}
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
            color: colors.black,
            textAlign: 'center',
            width: '100%',
          },
          tabBarStyle: {
            height: 80,
            backgroundColor: colors.lightGray,
            elevation: 5,
            shadowColor: colors.black,
            shadowOpacity: 0.2,
            shadowRadius: 4,
            justifyContent: 'center',
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.greeninspi,
            height: 4,
            borderRadius: 2,
          },
          tabBarPressColor: colors.lightGray,
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

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: colors.blacktransparent7,
  },
  screenContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  listContent: {
    paddingBottom: height * 0.02,
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.03,
    backgroundColor: colors.lightGray,
    marginVertical: height * 0.01,
    marginHorizontal: width * 0.03,
    borderRadius: 10,
  },
  pastGroup: {
    opacity: 0.5,
    backgroundColor: '#e0e0e0',
  },
  currentGroup: {
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.secondary,
    elevation: 5,
  },
  currentGroupImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 15,
    marginRight: width * 0.03,
  },
  futureGroup: {
    opacity: 0.8,
    backgroundColor: 'rgb(225, 225, 225)',
  },
  groupImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 10,
    marginRight: width * 0.03,
  },
  groupDetails: {
    flex: 1,
  },
  groupName: {
    fontSize: height * 0.02,
    fontWeight: 'bold',
  },
  groupGenre: {
    fontSize: height * 0.018,
    color: '#555',
  },
  groupTime: {
    fontSize: height * 0.015,
    fontWeight: '500',
    color: colors.darkGray,
  },
});
