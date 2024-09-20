import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from 'react';

export function Planet({ planeta }) {
  function formatNum(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " m²";
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (


    <View style={styles.planet}>

      <Text style={styles.planetTitle}>{planeta.nome}</Text>
      <Image
        style={styles.planetImage}
        source={{
          uri: planeta.img,
        }}
      ></Image>

      <View style={styles.planetSubject}>
        <View style={styles.planetRow}>
          <Text style={styles.planetText1}>Average Orbital Speed</Text>
          <Text style={styles.planetText2}>
            {planeta.velocidadeOrbitalMediaKmS}
          </Text>
        </View>
        
      </View>

      <View style={styles.planetSubject}>
        <View style={styles.planetRow}>
          <Text style={styles.planetText1}>Satellites</Text>
          <Text style={styles.planetText2}>{planeta.quantidadeSatelites}</Text>
        </View>
      </View>

      <View style={styles.planetSubject}>
        <View style={styles.planetRow}>
          <Text style={styles.planetText1}>Surface Area</Text>
          <Text style={styles.planetText2}>
            {formatNum(planeta.areaSuperficieKm2)}
          </Text>
        </View>
      </View>

      <View style={styles.planetSubject}>
        <View style={styles.planetRow}>
          <Text style={styles.planetText1}>Rotation Period</Text>
          <Text style={styles.planetText2}>{planeta.periodoRotacaoDias}</Text>
        </View>
      </View>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{planeta.descricao}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show planet description</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  planet: {
    padding: 10,
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 15,
    marginBottom: 20,
  },
  planetTitle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 35,
  },
  planetImage: {
    width: "100%",
    height: 200,
    alignItems: "center",
    objectFit: "contain",
  },
  planetSubject: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 5,
  },
  planetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },

  planetText1: {
    color: "#FFF",
    fontWeight: "300",
    fontSize: 16,
    flex: 1,
  },
  planetText2: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
