import Colors from '../constants/colors'

export const programmationConfig = {
    festivalDates: [
      { name: "Ven. 23 Mai", date: "2025-02-05" },
      { name: "Sam. 24 Mai", date: "2025-05-24" },
    ],
  
    tabNavigatorOptions: {
      swipeEnabled: true,
      tabBarLabelStyle: {
        fontSize: 22,
        fontWeight: "bold",
        textTransform: "none",
        color: "white",
        textAlign: "center",
        width: "100%",
      },
      tabBarStyle: {
        height: 80,
        backgroundColor: "black",
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        justifyContent: "center",
      },
      tabBarIndicatorStyle: {
        backgroundColor: Colors.dark.accent,
        height: 4,
        borderRadius: 2,
      },
      tabBarPressColor: Colors.accent,
    },
  
    listOptions: {
      length: 110,
      initialNumToRender: 5,
      nestedScrollEnabled: true,
      contentContainerStyle: { flexGrow: 1 },
      keyboardShouldPersistTaps: "handled",
      showsVerticalScrollIndicator: false,
      scrollEnabled: true,
      removeClippedSubviews: false,
      listFooterHeight: 100,
    },
  };
  