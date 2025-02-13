import { useEffect, useState } from "react";
import { Alert, Platform, StatusBar, View } from "react-native";
import { Appearance } from "react-native";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainNavigator from "./navigation/MainNavigation"; // Ton navigateur principal

export default function App() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  // Demander la permission pour Android 13+
  const requestNotificationPermission = async () => {
    if (Platform.OS === "android") {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === "granted") {
        console.log("Permission accordée pour les notifications !");
        setPermissionGranted(true);
        return true; // Retourner vrai si la permission est accordée
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
                // Afficher un message expliquant à l'utilisateur qu'il doit le faire manuellement
                Alert.alert(
                  "Ouvrir les paramètres manuellement",
                  "Vous devez ouvrir les paramètres de l'application et activer les notifications manuellement.",
                  [{ text: "OK", onPress: () => {} }]
                );
              },
            },
          ]
        );
        return false; // Retourner faux si la permission est refusée
      }
    }
    return false; // Par défaut, retourner faux si ce n'est pas Android
  };

  // Vérifier la permission et récupérer le token
  const checkPermissionAndGetToken = async () => {
    const permissionGranted = await requestNotificationPermission();
    if (permissionGranted) {
      try {
        const token = await messaging().getToken();
        console.log("FCM Token:", token);
      } catch (error) {
        console.error("Error fetching token: ", error);
      }
    } else {
      console.log("Permission non accordée");
    }
  };

  // Vérification du premier lancement
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

    // Gestion des notifications en fonction de l'état de l'application
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log("Notification ouverte depuis l'état fermé :", remoteMessage.notification);
        }
      });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log("Notification ouverte depuis l'arrière-plan :", remoteMessage.notification);
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message en arrière-plan reçu :", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("Nouveau message reçu", JSON.stringify(remoteMessage));
    });

    Appearance.setColorScheme("dark");

    return unsubscribe; // Nettoyage de l'écouteur lors du démontage
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <MainNavigator />
    </View>
  );
}
