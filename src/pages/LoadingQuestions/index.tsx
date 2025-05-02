import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { getQuestoesByMateria } from '../../services/api';
import { useQuiz } from '../../context/QuizContext';
import { styles } from './styles';
import { useTheme } from '../../context/ThemeContext';
import Background from '../../components/Background/Background';

type Params = {
  params: {
    materia: {
      idMateria: number;
      nome: string;
      ano: number;
    };
  };
};

type NavigationProps = {
  navigate: (screen: string, params?: any) => void;
  replace: (screen: string, params?: any) => void;
};

export default function LoadingQuestions() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProp<Params, 'params'>>();
  const { materia } = route.params;
  const { setQuestoes } = useQuiz();
  const { isDarkMode } = useTheme();

  const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

  useEffect(() => {
    const fetchQuestoes = async () => {
      try {
        const data = await getQuestoesByMateria(materia.idMateria);
        const questoesAleatorias = embaralharArray(data);
        setQuestoes(questoesAleatorias);
        navigation.replace('Question', { 
          index: 0, 
          materia 
        });        
      } catch (err) {
        console.error('Erro ao carregar questões:', err);
      }
    };

    fetchQuestoes();
  }, [materia.idMateria, setQuestoes, navigation]);

  const embaralharArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <Background backgroundImage={() => {}} backgroundColor={backgroundColor}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={isDarkMode ? '#fff' : '#325874'}/>
        <Text style={[styles.text, isDarkMode ? styles.txtDark : styles.txtWhite]}>Carregando questões...</Text>
      </View>
    </Background>
  );
}