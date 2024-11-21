import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

// Dados simulados dos produtos (em uma aplicação real, esses dados seriam carregados de uma API ou banco de dados)
const produtos = [
  { id: "1", nome: "Produto A", qtde: 10, altura: 20, largura: 30, profundidade: 15, categoria: "Categoria 1" },
  { id: "2", nome: "Produto B", qtde: 5, altura: 25, largura: 35, profundidade: 10, categoria: "Categoria 2" },
  { id: "3", nome: "Produto C", qtde: 7, altura: 15, largura: 20, profundidade: 12, categoria: "Categoria 3" },
  // Adicione mais produtos aqui conforme necessário
];

export default function RelatorioScreen() {
  // Função para renderizar os dados de cada produto
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nome}</Text>
      <Text style={styles.cell}>{item.qtde}</Text>
      <Text style={styles.cell}>{item.altura}</Text>
      <Text style={styles.cell}>{item.largura}</Text>
      <Text style={styles.cell}>{item.profundidade}</Text>
      <Text style={styles.cell}>{item.categoria}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Relatório de Produtos</Text>

      {/* Tabela de Produtos */}
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.headerCell}>Nome</Text>
          <Text style={styles.headerCell}>Quantidade</Text>
          <Text style={styles.headerCell}>Altura</Text>
          <Text style={styles.headerCell}>Largura</Text>
          <Text style={styles.headerCell}>Profundidade</Text>
          <Text style={styles.headerCell}>Categoria</Text>
        </View>

        <FlatList
          data={produtos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
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
  table: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#007B61",
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  headerCell: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    width: "16%",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "space-between",
  },
  cell: {
    fontSize: 14,
    width: "16%",
    textAlign: "center",
  },
});
