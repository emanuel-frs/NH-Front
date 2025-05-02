import { View, Text, ScrollView } from 'react-native';
import Background from '../../components/Background/Background';
import HeaderDefault from '../../components/HeaderDefault/HeaderDefault';
import { useTheme } from '../../context/ThemeContext';
import { styles } from './styles';
import QuestionGroup from '../../components/QuestionGroup/QuestionGroup';
import ButtonQuestion from '../../components/ButtonsQuestion/ButtonQuestion';
import { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'; // Corrigido: useRoute importado
import { useQuiz } from '../../context/QuizContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/root';

interface Materia {
  id: number;
  nome: string;
  ano: string;
}

// Tipo estendido para incluir replace
type QuestionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Question'> & {
  replace: (screen: keyof RootStackParamList, params?: any) => void;
};

// Tipo para os parâmetros da rota
type QuestionRouteProp = RouteProp<RootStackParamList, 'Question'>;

export default function Question() {
    const { isDarkMode } = useTheme();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigation = useNavigation<QuestionScreenNavigationProp>();
    const route = useRoute<QuestionRouteProp>(); // Usando o tipo correto
    const { questoes, addResposta } = useQuiz();
    
    const currentIndex = route.params?.index || 0;
    const questao = questoes[currentIndex];
    const isLastQuestion = currentIndex === questoes.length - 1;

    const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

    const options = [
      { 
        title: questao?.opcaoA || '', 
        value: 'A',
        onPress: () => setSelectedOption('A') 
      },
      { 
        title: questao?.opcaoB || '', 
        value: 'B',
        onPress: () => setSelectedOption('B') 
      },
      { 
        title: questao?.opcaoC || '', 
        value: 'C',
        onPress: () => setSelectedOption('C') 
      },
      { 
        title: questao?.opcaoD || '', 
        value: 'D',
        onPress: () => setSelectedOption('D') 
      },
    ];

    const handleNext = () => {
        if (selectedOption !== null && questao) {
            const acertou = selectedOption === questao.opcaoCerta;
            addResposta(questao.idQuestao, acertou);
            
            if (isLastQuestion) {
                navigation.replace('Results');
            } else {
                setSelectedOption(null);
                navigation.replace('Question', { 
                    index: currentIndex + 1,
                    materia: route.params?.materia
                });
            }
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setSelectedOption(null);
            navigation.replace('Question', { 
                index: currentIndex - 1,
                materia: route.params?.materia
            });
        }
    };

    return (
        <Background backgroundImage={() => {}} backgroundColor={backgroundColor}>
            <HeaderDefault 
                materia={route.params?.materia?.nome.toUpperCase() || 'Quiz'} 
                showBackButton={true}
            />
            
            <ScrollView contentContainerStyle={styles.containt}>
              <View style={[styles.containerQuestion, isDarkMode ? styles.containerDark : styles.containerWhite]}>
                  <Text style={[isDarkMode ? styles.textDark : styles.textWhite, styles.textDefault]}>
                  {currentIndex + 1} - {questao?.enunciado || 'Carregando questão...'}
                  </Text>
              </View>
              
              <QuestionGroup 
                options={options}
                selectedIndex={options.findIndex(opt => opt.value === selectedOption)}
                onSelect={(index) => setSelectedOption(options[index].value)}
              />
            </ScrollView>
            
            <ButtonQuestion 
              onPressLeft={handlePrevious} 
              onPressRight={handleNext}
              isBlocked={selectedOption === null}
              rightButtonText={isLastQuestion ? 'Finalizar' : 'Próxima'}
              leftButtonText='Voltar'
            />
        </Background>
    );
}