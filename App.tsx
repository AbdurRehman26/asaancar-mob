import "intl";
import "intl/locale-data/jsonp/en";
import 'react-native-gesture-handler'

import { KeyboardAvoidingView, Platform } from "react-native";
import StartUpStackNavigation from "@components/navigators/StartUpStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "@app/shared/store";

export default function App() {
  return (
    // @ts-ignore
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
            <StartUpStackNavigation />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
