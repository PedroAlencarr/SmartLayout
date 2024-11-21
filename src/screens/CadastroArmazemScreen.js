import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function CadastroArmazemScreen({ navigation }) {
  const [nomeArmazem, setNomeArmazem] = useState("");
  const [altura, setAltura] = useState("");
  const [largura, setLargura] = useState("");
  const [profundidade, setProfundidade] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Armazém</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Armazém"
        value={nomeArmazem}
        onChangeText={setNomeArmazem}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <TextInput
        style={styles.input}
        placeholder="Largura"
        keyboardType="numeric"
        value={largura}
        onChangeText={setLargura}
      />
      <TextInput
        style={styles.input}
        placeholder="Profundidade"
        keyboardType="numeric"
        value={profundidade}
        onChangeText={setProfundidade}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Planta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e8e4db",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007B61",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "#007B61",
    marginTop: 15,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
