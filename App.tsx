import React, { useCallback, useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { SidebarProvider } from './src/context/SidebarContext';
import RootNavigator from './src/routes/root';
import { AuthProvider } from './src/context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QuizProvider } from './src/context/QuizContext';
import SplashScreenContent from './src/components/SplashScreenContent/SplashScreenContent';

SplashScreen.preventAutoHideAsync();

function AppContent() {
  const { isDarkMode } = useTheme();
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    'Baloo2-Regular': require('./src/assets/fonts/Baloo2-Regular.ttf'),
    'Baloo2-Medium': require('./src/assets/fonts/Baloo2-Medium.ttf'),
    'Baloo2-SemiBold': require('./src/assets/fonts/Baloo2-SemiBold.ttf'),
    'Baloo2-Bold': require('./src/assets/fonts/Baloo2-Bold.ttf'),
    'Baloo2-ExtraBold': require('./src/assets/fonts/Baloo2-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <SplashScreenContent />; 
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? '#202E38' : '#ffffff',
      }}
      onLayout={onLayoutRootView}
    >
      <StatusBar
        backgroundColor={isDarkMode ? '#202E38' : '#ffffff'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <RootNavigator />
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QuizProvider>
        <SidebarProvider>
          <ThemeProvider>
            <AuthProvider>
              <AppContent />
            </AuthProvider>
          </ThemeProvider>
        </SidebarProvider>
      </QuizProvider>
    </GestureHandlerRootView>
  );
}
