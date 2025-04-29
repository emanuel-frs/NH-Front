import React, { useEffect, useState } from "react";
import { Text, Pressable, Image, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Background from "../../components/Background/Background";
import Button from "../../components/Button/Button";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ScrollView } from "react-native-gesture-handler";
import { getMaterias, getMateriasByAno } from "../../services/api";
import Timer from "../../components/HeaderTimer/HeaderTimer";

interface Materia {
  id: number;
  nome: string;
  ano: number;
}

export default function Home() {
  const { isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  var ano = 8;

  const book = require('../../assets/book.png');

  const backgroundImage = isDarkMode
    ? require('../../assets/backgroundDark.png')
    : require('../../assets/backgroundWhite.png');

  const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const data = await getMateriasByAno(ano);
        setMaterias(data);
      } catch (err) {
        setError('Erro ao carregar matérias');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterias();
  }, []);

  const handleMateriaPress = (materia: Materia) => {
    navigation.navigate("LoadingQuestions", { materia });
  };  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={isDarkMode ? '#FFF' : '#000'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <>
      <Sidebar/>
      <Background backgroundImage={() => {}} backgroundColor={backgroundColor}>
        <HeaderHome />
        <ScrollView contentContainerStyle={styles.containt}>
          <View style={styles.materias}>
            {materias.map((materia) => (
              <TouchableOpacity
                key={`${materia.id}-${materia.nome}`}
                style={styles.btnMateria}
                onPress={() => handleMateriaPress(materia)}>
                <View style={styles.descricoesMateria}>
                  <Text style={styles.txtMateria}>{materia.nome.toUpperCase()}</Text>
                  <Text style={styles.txtSerie}>{materia.ano} ANO</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Background>
    </>
  );
}