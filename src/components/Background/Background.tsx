// components/Background.tsx
import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { styles } from './styles'

interface BackgroundProps {
  children: React.ReactNode;
  backgroundImage: any;
  backgroundColor: string;
}

const Background: React.FC<BackgroundProps> = ({ children, backgroundImage, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Background;
