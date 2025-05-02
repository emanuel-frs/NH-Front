import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Background from '../../components/Background/Background';
import { useTheme } from '../../context/ThemeContext';
import { useQuiz } from '../../context/QuizContext';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/root';
import { styles } from './styles';
import HeaderDefault from '../../components/HeaderDefault/HeaderDefault';

type ResultsNavigationProp = StackNavigationProp<RootStackParamList, 'Results'>;

export default function Results() {
    const { isDarkMode } = useTheme();
    const { questoes, respostas, resetQuiz } = useQuiz();
    const navigation = useNavigation<ResultsNavigationProp>();
    const [mensagem, setMensagem] = useState<string>("");
    const [tituloMensagem, setTituloMensagem] = useState<string>("");
    const [gabaritou, setGabaritou] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState<{
        questao: any;
        acertou: boolean;
    } | null>(null);

    const backgroundImage = isDarkMode 
        ? require('../../assets/backgroundDark.png') 
        : require('../../assets/backgroundWhite.png');
    
    const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';
    
    const totalQuestoes = questoes.length;
    const acertos = Object.values(respostas).filter(acertou => acertou).length;
    
    useEffect(() => {
        if (acertos === 10) {
            setTituloMensagem("INCRÍVEL");
            setMensagem("Você acertou 10 de 10 questões! Seu esforço e dedicação valeram a pena. Continue assim, você está arrasando!");
            setGabaritou(true);
        } else if (acertos >= 7) {
            setTituloMensagem("PARABÉNS");
            setMensagem(`Você acertou ${acertos} de 10 questões! Ótimo trabalho! Continue se dedicando, pois você está no caminho certo para melhorar ainda mais.`);
        } else if (acertos >= 5) {
            setTituloMensagem("BOA");
            setMensagem(`Você acertou ${acertos} de 10 questões! Já é um ótimo começo! Continue praticando e você vai melhorar ainda mais. Você consegue!`);
        } else if (acertos > 0) {
            setTituloMensagem("NÃO DESANIME");
            setMensagem(`Você acertou ${acertos} de 10 questões, e isso significa que há espaço para crescer. Continue estudando e praticando, porque cada erro é uma oportunidade de aprendizado. Você consegue!`);
        } else {
            setTituloMensagem("NÃO DESANIME");
            setMensagem("Dessa vez, você não acertou nenhuma, mas isso faz parte do aprendizado. Cada erro é uma chance de melhorar. Continue estudando e tentando, porque você é capaz de evoluir e conquistar seus objetivos!");
        }
    }, [acertos]);    

    const handleRestart = () => {
        resetQuiz();
        navigation.navigate('Home');
    };

    const handleQuestionPress = (questao: any) => {
        const acertou = respostas[questao.idQuestao];
        setSelectedQuestion({
            questao,
            acertou
        });
        setModalVisible(true);
    };

    const getQuestionIndex = () => {
        return questoes.findIndex(q => q.idQuestao === selectedQuestion?.questao?.idQuestao) + 1;
    };

    return (
        <Background backgroundImage={() => {}} backgroundColor={backgroundColor}>
            <HeaderDefault 
                materia={tituloMensagem} 
                showBackButton={false}
            />
            <View style={styles.container}>
                <Text style={[styles.text, isDarkMode ? styles.txtDark : styles.txtWhite]}>
                    {mensagem}
                </Text>
                <View style={styles.grid}>
                    {questoes.map((questao, index) => {
                        const acertou = respostas[questao.idQuestao];
                        return (
                            <TouchableOpacity
                                key={questao.idQuestao}
                                style={[
                                    styles.cell,
                                    isDarkMode ? styles.cellDark : styles.cellWhite,
                                    acertou ? styles.cellCorrect : styles.cellWrong,
                                    gabaritou ? styles.gabaritou : {}
                                ]}
                                onPress={() => handleQuestionPress(questao)}
                            >
                                <Text style={[
                                    styles.cellText, 
                                    acertou ? styles.cellTextCorrect : styles.cellTextWrong,
                                    gabaritou ? styles.txtGabaritou : {}
                                ]}>
                                    {index + 1}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="FINALIZAR"
                        onPress={handleRestart}
                        style={[styles.button, gabaritou ? styles.btnGabaritou : styles.btnNormal]}
                        textStyle={styles.buttonText}
                    />
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={[
                        styles.modalContent,
                        isDarkMode ? styles.modalContentDark : styles.modalContentWhite,
                        selectedQuestion?.acertou === false && styles.modalContentWrong
                    ]}>
                        <Text style={[
                            styles.modalTitle,
                            isDarkMode ? styles.modalTitleDark : styles.modalTitleWhite,
                            selectedQuestion?.acertou === false && { color: '#E40E3C' }
                        ]}>
                            Questão {getQuestionIndex()}
                        </Text>
                        
                        <Text style={[
                            { 
                                textAlign: 'center', 
                                marginBottom: 10, 
                                fontSize: 16, 
                                fontFamily: 'Baloo2-ExtraBold' 
                            },
                            selectedQuestion?.acertou ? { color: '#2CCB8E' } : { color: '#E40E3C' }
                        ]}>
                            {selectedQuestion?.acertou ? '✓ Você acertou!' : '✗ Você errou'}
                        </Text>
                        
                        <ScrollView>
                            <Text style={[
                                styles.modalText,
                                isDarkMode ? styles.modalTextDark : styles.modalTextWhite
                            ]}>
                                {selectedQuestion?.questao?.enunciado}
                            </Text>
                        </ScrollView>
                        
                        <Button
                            title="FECHAR"
                            onPress={() => setModalVisible(false)}
                            style={[
                                styles.modalButton,
                                gabaritou ? styles.modalButtonGabaritou : styles.modalButtonNormal,
                                selectedQuestion?.acertou === false && { 
                                    borderColor: '#E40E3C',
                                    backgroundColor: '#E40E3C' 
                                }
                            ]}
                            textStyle={styles.buttonText}
                        />
                    </View>
                </View>
            </Modal>
        </Background>
    );
}