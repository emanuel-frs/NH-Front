import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home';
import LoginScreen from '../pages/Login';
import { useAuth } from '../context/AuthContext';
import QuestionScreen from '../pages/Question';
import LoadingQuestions from '../pages/LoadingQuestions';
import LoadingNext from '../pages/LoadingNext';
import ResultsScreen from '../pages/Results';
import AboutUs from '../pages/AboutUs';
import { useTheme } from '../context/ThemeContext';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Question: { index: number; materia?: { id: number; nome: string; ano: string } };
  LoadingQuestions: { materia: { idMateria: number; nome: string; ano: number } };
  LoadingNext: { index: number };
  Results: undefined;
  AboutUs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isDarkMode } = useTheme();
  const { isLoggedIn } = useAuth();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? '#325874' : '#ffffff',
    },
  };
  
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />        
            <Stack.Screen
              name="Question"
              component={QuestionScreen}
              options={{ headerShown: false }}
            />  
            <Stack.Screen
              name="LoadingQuestions"
              component={LoadingQuestions}
              options={{ headerShown: false }}
            />  
            <Stack.Screen
              name="LoadingNext"
              component={LoadingNext}
              options={{ headerShown: false }}
            />  
            <Stack.Screen
              name="Results"
              component={ResultsScreen}
              options={{ headerShown: false }}
            />  
            <Stack.Screen
              name="AboutUs"
              component={AboutUs}
              options={{ headerShown: false }}
            />  
          </>      
        ) : (
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;