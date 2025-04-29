import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { playClickSound } from '../../utills/sound';
import { useTheme } from '../../context/ThemeContext';

interface ButtonQuestionProps {
    onPressLeft: () => void;
    onPressRight: () => void;
    isBlocked: boolean;
    rightButtonText: string;
    leftButtonText: string;
}

const ButtonQuestion : React.FC<ButtonQuestionProps> = ({ onPressLeft, onPressRight, isBlocked, rightButtonText, leftButtonText }) => {
    const { isDarkMode } = useTheme();

    const handlePressLeft = () => {
        playClickSound();
        onPressLeft();
    };

    const handlePressRight = () => {
        if (!isBlocked) {
            playClickSound();
            onPressRight();
        }
    };

    return(
        <>
        <View style={styles.container}>
            <Pressable style={
                [styles.btn, 
                    isDarkMode ? styles.btnDarkLeft : styles.btnWhiteLeft]} 
                onPress={handlePressLeft}>
                <Text style={[styles.txt, isDarkMode ? styles.txtDarkLeft : styles.txtWhiteLeft]}>
                    {leftButtonText}
                </Text>
            </Pressable>
            <Pressable style={
                [styles.btn, 
                    isBlocked ? (isDarkMode ? styles.btnBlockedDarkRight : styles.btnBlockedRight) : styles.btnRight]} 
                onPress={handlePressRight}
                >
                <Text style={[styles.txt, isBlocked ? styles.txtBlockedRight : styles.txtRight]}>
                    {rightButtonText}
                </Text>
            </Pressable>
        </View>
        </>
    )
}

export default ButtonQuestion;