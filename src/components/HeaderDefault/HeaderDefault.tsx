import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { View, Text, Pressable, Animated } from "react-native";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { playClickSound } from "../../utills/sound";

interface HeaderProps {
    materia: string;
    showBackButton: boolean;
}

const HeaderDefault : React.FC<HeaderProps> = ({materia, showBackButton}) => {
    const { isDarkMode } = useTheme();
    const navigation = useNavigation<NavigationProp<any>>();

    const handlePress = () => {
        if (showBackButton) {
            playClickSound();
            navigation.navigate('Home');
        }
    };

    return (
        <View
            style={[
                isDarkMode ? styles.containerDark : styles.containerWhite,
                showBackButton ? styles.container : styles.containerNone
            ]}
        >
            <Pressable style={showBackButton ? styles.menu : styles.none} onPress={handlePress}>
                <Ionicons name="chevron-back" size={30} color={isDarkMode ? "#FFF" : "#325874"} />
            </Pressable>
            <View style={styles.logo}>
                <Text style={[isDarkMode ? styles.tionDark : styles.tion, styles.fontLogo]}>{materia}</Text>
            </View>
            <View style={showBackButton ? styles.aux : styles.none}>
                <Ionicons name="ellipsis-vertical" size={30} color={isDarkMode ? "#FFF" : "#325874"} />
            </View>
        </View>
    );
}

export default HeaderDefault;