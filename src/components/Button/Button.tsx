import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { playClickSound } from '../../utills/sound';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style: object;
  textStyle: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
  const handlePress = () => {
    playClickSound();
    onPress();
  };

  return (
    <TouchableOpacity style={style} onPress={handlePress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
