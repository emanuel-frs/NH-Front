import React from 'react';
import { styles } from './styles';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../../context/ThemeContext'; // ou o hook correspondente do seu setup

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const backgroundImage = isDarkMode 
    ? require('../../assets/icons/sun.png')
    : require('../../assets/icons/moon.png');

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Image source={backgroundImage} style={styles.iconTheme}/>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeToggleButton;
