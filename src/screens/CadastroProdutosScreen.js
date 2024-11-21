import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function CadastroProdutosScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [altura, setAltura] = useState("");
  const [largura, setLargura] = useState("");
  const [profundidade, setProfundidade] = useState("");
  const [categoria, setCategoria] = useState("");

  const adicionarProduto = () => {
    if (nomeProduto && quantidade && altura && largura && profundidade && categoria) {
      const novoProduto = {
        id: Math.random().toString(),
        nomeProduto,
        quantidade,
        altura,
        largura,
        profundidade,
        categoria,
      };
      setProdutos([...produtos, novoProduto]);
      limparCampos();
    }
  };

  const limparCampos = () => {
    setNomeProduto("");
    setQuantidade("");
    setAltura("");
    setLargura("");
    setProfundidade("");
    setCategoria("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produtos</Text>

      {/* Formulário de Cadastro */}
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
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
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      <TouchableOpacity style={styles.button} onPress={adicionarProduto}>
        <Text style={styles.buttonText}>Adicionar Produto</Text>
      </TouchableOpacity>

      {/* Lista de Produtos Adicionados */}
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.produtoItem}>
            <Text style={styles.produtoText}>{item.nomeProduto}</Text>
            <Text style={styles.produtoText}>
              Qtde: {item.quantidade}, Dimensões: {item.altura}x{item.largura}x{item.profundidade}, Cat: {item.categoria}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto adicionado ainda.</Text>}
      />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  produtoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  produtoText: {
    fontSize: 14,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },
  link: {
    color: "#007B61",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 15,
  },
});
