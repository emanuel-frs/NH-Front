import React, { useEffect, useRef } from 'react';
import { Modal, View, Text, Pressable, Animated, StyleSheet } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../context/ThemeContext';
import { serieMap } from "../../utills/serieFormatada";

type Props = {
  visible: boolean;
  onClose: () => void;
  user: {
    nome: string;
    email: string;
    serie: string;
  };
};

export default function UserInfoModal({ visible, onClose, user }: Props) {
  const { isDarkMode } = useTheme();

  const slideAnim = useRef(new Animated.Value(100)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          damping: 20,
          stiffness: 150,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 100,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
      <Animated.View style={[styles.modalOverlay, { opacity: opacityAnim }]}>
        <Pressable 
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }} 
          onPress={onClose}
        />
        <Animated.View
          style={{
            transform: [{ translateY: slideAnim }],
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={isDarkMode ? styles.modalContainerDark : styles.modalContainerWhite}>
            <Text style={[styles.modalTitle, isDarkMode ? styles.modalTitleDark : styles.modalTitleWhite]}>
              Informações do Usuário
            </Text>
            <Text style={[styles.userInfoLabel, isDarkMode ? styles.userInfoLabelDark : styles.userInfoLabelWhite]}>
              Nome:
            </Text>
            <Text style={[styles.userInfoText, isDarkMode ? styles.userInfoTextDark : styles.userInfoTextWhite]}>
              {user.nome}
            </Text>
            <Text style={[styles.userInfoLabel, isDarkMode ? styles.userInfoLabelDark : styles.userInfoLabelWhite]}>
              Email:
            </Text>
            <Text style={[styles.userInfoText, isDarkMode ? styles.userInfoTextDark : styles.userInfoTextWhite]}>
              {user.email}
            </Text>
            <Text style={[styles.userInfoLabel, isDarkMode ? styles.userInfoLabelDark : styles.userInfoLabelWhite]}>
              Série:
            </Text>
            <Text style={[styles.userInfoText, isDarkMode ? styles.userInfoTextDark : styles.userInfoTextWhite]}>
              {serieMap[user.serie] || user.serie}
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}