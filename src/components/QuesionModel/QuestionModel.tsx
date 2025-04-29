import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { playClickSound } from '../../utills/sound';
import { useTheme } from '../../context/ThemeContext';

interface QuestionModelProps {
  title: string;
  onPress: () => void;
  isSelected: boolean;
}

const QuestionModel: React.FC<QuestionModelProps> = ({ title, onPress, isSelected }) => {
  const { isDarkMode } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    playClickSound();
    onPress();
  };

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isSelected ? 1.03 : 1,
      useNativeDriver: true,
      friction: 5,
    }).start();
  }, [isSelected]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        style={[
          styles.btn,
          isSelected
            ? styles.selected
            : isDarkMode
            ? styles.btnDark
            : styles.btnWhite
        ]}
        onPress={handlePress}
      >
        <View style={styles.aux}>
          <View
            style={[
              styles.circleModel,
              isSelected
                ? styles.circleSelect
                : isDarkMode
                ? styles.circleDark
                : styles.circleWhite
            ]}
          />
          <Text style={isSelected || isDarkMode ? styles.txt : styles.txtWhite}>{title}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default QuestionModel;
