import { useFonts } from 'expo-font';
import { ThemeProvider } from './src/context/ThemeContext';
import { SidebarProvider } from './src/context/SidebarContext';
import RootNavigator from './src/routes/root';
import { AuthProvider } from './src/context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QuizProvider } from './src/context/QuizContext';

export default function App() {

  useFonts({
    'Baloo2-Regular': require('./src/assets/fonts/Baloo2-Regular.ttf'),
    'Baloo2-Medium': require('./src/assets/fonts/Baloo2-Medium.ttf'),
    'Baloo2-SemiBold': require('./src/assets/fonts/Baloo2-SemiBold.ttf'),
    'Baloo2-Bold': require('./src/assets/fonts/Baloo2-Bold.ttf'),
    'Baloo2-ExtraBold': require('./src/assets/fonts/Baloo2-ExtraBold.ttf'),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QuizProvider>
        <SidebarProvider>
          <ThemeProvider>
            <AuthProvider>
              <RootNavigator/>
            </AuthProvider>
          </ThemeProvider>
        </SidebarProvider>
      </QuizProvider>
    </GestureHandlerRootView>
  );
}

