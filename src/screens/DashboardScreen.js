import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SmartLayout</Text>
      <Text style={styles.subtitle}>Mapa de Armazéns</Text>
      
      <View style={styles.mapContainer}>
        {/* Simulação de áreas do armazém */}
        <View style={styles.warehouseBox}></View>
        <View style={styles.warehouseBox}></View>
        <View style={styles.warehouseBox}></View>
        <View style={styles.warehouseBox}></View>
      </View>
      
      <View style={styles.infoContainer}>
        <Text>Capacidade total: XXXX</Text>
        <Text>Taxa de Ocupação: X%</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CadastroArmazem")}>
          <Text style={styles.buttonText}>Novo Layout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Simulações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Relatorio")}>
          <Text style={styles.buttonText}>Relatórios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e4db",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  mapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  warehouseBox: {
    width: "48%",
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007B61",
    padding: 10,
    borderRadius: 8,
    width: "30%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
