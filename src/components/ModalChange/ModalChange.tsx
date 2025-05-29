import React, { useEffect, useRef, useState } from 'react';
import { Modal, View, Text, Pressable, Animated, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import Button from '../../components/Button/Button';
import { serieMap } from '../../utills/serieFormatada';
import { styles } from './styles';

type Props = {
  visible: boolean;
  materia: string;
  currentSerie: string;
  onRefazer: () => void;
  onAlterarSerie: (newSerie: string) => void;
  onCancel: () => void;
};

export default function CompleteMateriaModal({ 
  visible, 
  materia, 
  currentSerie,
  onRefazer, 
  onAlterarSerie,
  onCancel 
}: Props) {
  const { isDarkMode } = useTheme();
  const [showSerieSelection, setShowSerieSelection] = useState(false);
  const [selectedSerie, setSelectedSerie] = useState(currentSerie);
  
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
      ]).start(() => setShowSerieSelection(false));
    }
  }, [visible]);

  const handleSerieSelection = (serie: string) => {
    setSelectedSerie(serie);
  };

  const handleConfirmSerieChange = () => {
    onAlterarSerie(selectedSerie);
    setShowSerieSelection(false);
  };

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableWithoutFeedback onPress={onCancel}>
        <Animated.View style={[styles.modalOverlay, { opacity: opacityAnim }]}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Animated.View
              style={{
                transform: [{ translateY: slideAnim }],
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <View style={isDarkMode ? styles.modalContainerDark : styles.modalContainerWhite}>
                {!showSerieSelection ? (
                  <>
                    <Text style={[styles.modalTitle, isDarkMode ? styles.modalTitleDark : styles.modalTitleWhite]}>
                      Parabéns!
                    </Text>
                    <Text style={[styles.modalMessage, isDarkMode ? styles.modalMessageDark : styles.modalMessageWhite]}>
                      Você dominou {materia} na {serieMap[currentSerie] || currentSerie} série!
                    </Text>
                    <Text style={[styles.modalSubMessage, isDarkMode ? styles.modalMessageDark : styles.modalMessageWhite]}>
                      Você pode tentar uma série mais avançada ou cancelar.
                    </Text>
                    
                    <View style={styles.modalButtons}>
                      <Button
                        title="Alterar"
                        onPress={() => setShowSerieSelection(true)}
                        style={styles.primaryButton}
                        textStyle={styles.primaryText}
                        disabled={false}
                      />
                      <Button
                        title="Cancelar"
                        onPress={onCancel}
                        style={isDarkMode ? styles.secondaryButtonDark : styles.secondaryButton}
                        textStyle={isDarkMode ? styles.secondaryTextDark : styles.secondaryText}
                        disabled={false}
                      />
                    </View>
                  </>
                ) : (
                  <>
                    <Text style={[styles.modalTitle, isDarkMode ? styles.modalTitleDark : styles.modalTitleWhite]}>
                      Selecione a Série
                    </Text>
                    <Text style={[styles.modalMessage, isDarkMode ? styles.modalMessageDark : styles.modalMessageWhite]}>
                      Escolha para qual série deseja alterar:
                    </Text>
                    
                    <View style={styles.serieOptions}>
                      {Object.entries(serieMap).map(([key, value]) => (
                        <Pressable
                          key={key}
                          style={[
                            styles.serieOption,
                            selectedSerie === key && styles.selectedSerieOption,
                            selectedSerie === key && isDarkMode && styles.selectedSerieOptionDark
                          ]}
                          onPress={() => handleSerieSelection(key)}
                        >
                          <Text 
                            style={[
                              styles.serieOptionText,
                              selectedSerie === key && styles.selectedSerieOptionText,
                              selectedSerie === key && isDarkMode && styles.selectedSerieOptionTextDark
                            ]}
                          >
                            {value}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                    
                    <View style={styles.modalButtons}>
                      <Button
                        title="Voltar"
                        onPress={() => setShowSerieSelection(false)}
                        style={isDarkMode ? styles.secondaryButtonDark : styles.secondaryButton}
                        textStyle={isDarkMode ? styles.secondaryTextDark : styles.secondaryText}
                        disabled={false}
                      />
                      <Button
                        title="Confirmar"
                        onPress={handleConfirmSerieChange}
                        style={styles.primaryButton}
                        textStyle={styles.primaryText}
                        disabled={false}
                      />
                    </View>
                  </>
                )}
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
