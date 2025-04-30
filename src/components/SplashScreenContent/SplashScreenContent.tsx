import React, { useCallback } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useTheme } from '../../context/ThemeContext';

const SplashScreenContent = () => {
  const { isDarkMode } = useTheme();

  const handleLayout = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  const logo = isDarkMode
    ? require('../../assets/logoBranca.png')
    : require('../../assets/logoVermelha.png');

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#202E38' : '#ffffff' },
      ]}
      onLayout={handleLayout}
    >
      <Image 
        source={logo} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
});

export default SplashScreenContent;
