import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import CadastroScreen from "../screens/CadastroScreen";
import DashboardScreen from "../screens/DashboardScreen";
import CadastroArmazemScreen from "../screens/CadastroProdutosScreen";
import CadastroProdutosScreen from "../screens/CadastroProdutosScreen";
import RelatorioScreen from "../screens/RelatorioScreen";


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="CadastroArmazem" component={CadastroArmazemScreen} />
      <Stack.Screen name="CadastroProdutos" component={CadastroProdutosScreen} />
      <Stack.Screen name="Relatorio" component={RelatorioScreen} />
    </Stack.Navigator>
  );
}
