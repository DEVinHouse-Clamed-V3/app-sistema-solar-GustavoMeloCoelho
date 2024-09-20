import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

import { useState } from "react";

import { planetas } from "./planetas";

import { Planet } from "./Planet";

export default function App() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

  const next = () => {
    if (currentPlanetIndex < planetas.length - 1) {
      setCurrentPlanetIndex(currentPlanetIndex + 1);
    }
  };

  const previous = () => {
    if (currentPlanetIndex > 0) {
      setCurrentPlanetIndex(currentPlanetIndex - 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerContentRow}>
          <Text style={styles.headerText}>Let's discover!</Text>

          <Image
            style={styles.catLogo}
            source={require("./assets/cat.jpg")}
          ></Image>
        </View>


        <Planet planeta={planetas[currentPlanetIndex]}></Planet>
        {/* <ScrollView> */}
        {/* {planetas.map((planeta) => (
            <Planet planeta={planeta}></Planet>
          ))} */}
        {/* </ScrollView> */}

        <View style={styles.navButtons}>
          <Button
            title="Previous"
            onPress={previous}
            disabled={currentPlanetIndex === 0}
          ></Button>

          <Button
            title="Next"
            onPress={next}
            disabled={currentPlanetIndex === planetas.length - 1}
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    marginTop: 40

  },
  header: {
    flex: 1,
    backgroundColor: "#1F2B45",
    padding: 20,
    alignItems: "center",
  },
  headerAlign: {
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    color: "#FFFEFD",
    fontSize: 30,
  },
  catLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  headerContentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginBottom: 15,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
});
