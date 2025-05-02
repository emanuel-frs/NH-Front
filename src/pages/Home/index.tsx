import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Background from "../../components/Background/Background";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ScrollView } from "react-native-gesture-handler";
import { getMateriasByAno } from "../../services/api";
import Button from "../../components/Button/Button";

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
  const [retrying, setRetrying] = useState(false);
  const ano = 8;

  const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

  useEffect(() => {
    fetchMaterias();
  }, []);

  const fetchMaterias = async (isRetry = false) => {
    if (isRetry) setRetrying(true);
    else setLoading(true);

    setError('');
    try {
      const data = await getMateriasByAno(ano);
      setMaterias(data);
    } catch (err) {
      setError('Houve um erro ao buscar as matérias.\n Tente novamente mais tarde.');
      console.error(err);
    } finally {
      if (isRetry) setRetrying(false);
      else setLoading(false);
    }
  };

  const handleMateriaPress = (materia: Materia) => {
    navigation.navigate("LoadingQuestions", { materia });
  };

  return (
    <>
      <Sidebar />
      <Background backgroundImage={() => {}} backgroundColor={backgroundColor}>
        <HeaderHome />
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={isDarkMode ? '#FFF' : '#325874'} />
          </View>
        ) : error ? (
          <View style={styles.retryContainer}>
            <Text
              style={[
                styles.txtError,
                {
                  textAlign: "center",
                  marginBottom: 20,
                  color: isDarkMode ? "#FFF" : "#325874",
                },
              ]}
            >
              {error}
            </Text>
  
            {retrying ? (
              <ActivityIndicator size="large" color="#FFF" />
            ) : (
              <Button
                title="TENTAR NOVAMENTE"
                style={[styles.btnTenteNovamente, styles.btn]}
                onPress={() => fetchMaterias(true)}
                textStyle={[styles.txtMateria, styles.txtTenteNovamente]}
              />
            )}
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.containt}>
            <View style={styles.materias}>
              {materias.map((materia) => (
                <TouchableOpacity
                  key={`${materia.id}-${materia.nome}`}
                  style={styles.btnMateria}
                  onPress={() => handleMateriaPress(materia)}
                >
                  <View style={styles.descricoesMateria}>
                    <Text style={styles.txtMateria}>{materia.nome.toUpperCase()}</Text>
                    <Text style={styles.txtSerie}>{materia.ano} ANO</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
      </Background>
    </>
  );  
}
