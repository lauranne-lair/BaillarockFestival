import { useEffect, useState } from "react";
import { Alert, Platform, StatusBar, View } from "react-native";
import { Appearance } from "react-native";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainNavigator from "./navigation/MainNavigation";

export default function App() {
  
  const [permissionGranted, setPermissionGranted] = useState(false);

  // Demander la permission pour les notifications (Android 13+ et iOS)
  const requestNotificationPermission = async () => {
    if (Platform.OS === "android" || Platform.OS === "ios") {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === "granted") {
        console.log("Permission accordée pour les notifications !");
        setPermissionGranted(true);
        return true;
      } else {
        console.log("Permission refusée pour les notifications !");
        Alert.alert(
          "Autoriser les notifications",
          "Pour recevoir des alertes, activez les notifications dans les paramètres.",
          [
            { text: "Annuler", style: "cancel" },
            {
              text: "Ouvrir les paramètres",
              onPress: () => {
                Alert.alert(
                  "Ouvrir les paramètres manuellement",
                  "Vous devez ouvrir les paramètres de l'application et activer les notifications manuellement.",
                  [{ text: "OK" }]
                );
              },
            },
          ]
        );
        return false;
      }
    }
    return false;
  };

  // Vérifier la permission et récupérer le token FCM
  const checkPermissionAndGetToken = async () => {
    const permission = await requestNotificationPermission();
    if (permission) {
      try {
        const token = await messaging().getToken();
        console.log("FCM Token:", token);
      } catch (error) {
        console.error("Erreur lors de la récupération du token:", error);
      }
    } else {
      console.log("Permission non accordée");
    }
  };

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const isFirstLaunch = await AsyncStorage.getItem("firstLaunch");
        if (!isFirstLaunch) {
          await AsyncStorage.setItem("firstLaunch", "true");
          Alert.alert(
            "Activer les notifications",
            "Voulez-vous recevoir des notifications pour rester informé ?",
            [
              { text: "Non merci", style: "cancel" },
              { text: "Oui", onPress: checkPermissionAndGetToken },
            ]
          );
        } else {
          checkPermissionAndGetToken();
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du premier lancement :", error);
      }
    };

    checkFirstLaunch();

    // Gérer les notifications selon l'état de l'application
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log("Notification ouverte depuis l'état fermé :", remoteMessage.notification);
        }
      });

    const unsubscribeForeground = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("Nouveau message reçu", JSON.stringify(remoteMessage));
    });

    const unsubscribeBackground = messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log("Notification ouverte depuis l'arrière-plan :", remoteMessage.notification);
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message en arrière-plan reçu :", remoteMessage);
    });

    // Activer le mode sombre
    Appearance.setColorScheme("dark");

    // Nettoyage des écouteurs lors du démontage
    return () => {
      unsubscribeForeground();
      unsubscribeBackground();
    };
  }, []);
  

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <MainNavigator />
    </View>
  );
}
