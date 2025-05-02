import React, { useEffect, useRef } from 'react';
import { Modal, View, Text, Pressable, Animated } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function LogoutConfirmationModal({ visible, onConfirm, onCancel }: Props) {
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
    <Modal transparent visible={visible} animationType="none">
  <Animated.View style={[styles.modalOverlay, { opacity: opacityAnim }]}>
    <Pressable style={{ flex: 1 }} onPress={onCancel} />
    
    <Animated.View
      style={{
        transform: [{ translateY: slideAnim }],
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '35%',
        left: 0,
        right: 0,
      }}
    >
      <View style={isDarkMode ? styles.modalContainerDark : styles.modalContainerWhite}>
        <Text style={[styles.modalTitle, isDarkMode ? styles.modalTitleDark : styles.modalTitleWhite]}>
          Confirmar Logout
        </Text>
        <Text style={[styles.modalMessage, isDarkMode ? styles.modalMessageDark : styles.modalMessageWhite]}>
          Você realmente deseja sair da sua conta?
        </Text>
        <View style={styles.modalButtons}>
          <Pressable style={[isDarkMode ? styles.cancelButtonDark : styles.cancelButton]} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
          <Pressable style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmText}>Sair</Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  </Animated.View>
</Modal>

  );
}
