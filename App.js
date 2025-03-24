import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GameProvider } from "./context/GameContext";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartGameScreen" component={StartGameScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="GameOverScreen" component={GameOverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}
