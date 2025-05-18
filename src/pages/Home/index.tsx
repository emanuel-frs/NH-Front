import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation, NavigationProp, useRoute, RouteProp } from "@react-navigation/native";
import { styles } from "./styles";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Background from "../../components/Background/Background";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ScrollView } from "react-native-gesture-handler";
import { getMaterias, porcentagemAcertos } from "../../services/api";
import Button from "../../components/Button/Button";
import { useAuth } from "../../context/AuthContext";
import { serieMap } from "../../utills/serieFormatada";

interface Materia {
  id: number;
  nome: string;
}

interface Usuario {
  id: number;
  nome: string;
  email: string;
  serie: string;
}

type HomeRouteParams = {
  Home: {
    usuario: Usuario;
  };
};

const getColorByPercentage = (percentage: number) => {
  if (percentage === 100) return '#FF00D9';
  if (percentage >= 75) return '#2CCB8E';
  if (percentage >= 50) return '#E3AD27';
  if (percentage >= 25) return '#E36927';
  return '#E40E3C';
};

const getTextColor = (percentage: number) => {
  if (percentage >= 50 && percentage < 75) return '#202E38';
  if (percentage >= 75 && percentage < 100) return '#202E38';
  return '#FFFFFF'; 
};

export default function Home() {
  const { isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [porcentagens, setPorcentagens] = useState<Record<number, number>>({});
  const route = useRoute<RouteProp<HomeRouteParams, "Home">>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retrying, setRetrying] = useState(false);
  const { usuario, logout } = useAuth();

  const backgroundColor = isDarkMode ? "#202E38" : "#FFFFFF";

  useEffect(() => {
    fetchMaterias();
  }, []);

  useEffect(() => {
    if (!usuario) {
      const timeout = setTimeout(() => {
        logout();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [usuario]);

  const fetchMaterias = async (isRetry = false) => {
    if (isRetry) setRetrying(true);
    else setLoading(true);

    setError("");
    try {
      const data = await getMaterias();
      setMaterias(data);
      await fetchPorcentagens(data);
    } catch (err) {
      setError("Houve um erro ao buscar as matérias.\n Tente novamente mais tarde.");
      console.error(err);
    } finally {
      if (isRetry) setRetrying(false);
      else setLoading(false);
    }
  };

  const fetchPorcentagens = async (materias: Materia[]) => {
    if (!usuario) return;

    try {
      const porcentagensMap: Record<number, number> = {};

      for (const materia of materias) {
        try {
          const response = await porcentagemAcertos(materia.id, usuario.serie, usuario.id);
          const porcentagem = response || 0;

          porcentagensMap[materia.id] = porcentagem;
        } catch (error) {
          console.error(`Erro ao buscar porcentagem da matéria ${materia.nome}`, error);
          porcentagensMap[materia.id] = 0;
        }
      }

      setPorcentagens(porcentagensMap);
    } catch (err) {
      console.error("Erro ao carregar porcentagens:", err);
    }
  };

  const handleMateriaPress = (materia: Materia, usuario: Usuario) => {
    navigation.navigate("LoadingQuestions", { materia, usuario });
  };

  if (!usuario) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={isDarkMode ? "#FFF" : "#202E38"} />
        <Text style={{ color: isDarkMode ? "#FFF" : "#202E38", marginTop: 10 }}>
          Carregando informações do usuário...
        </Text>
      </View>
    );
  }

  return (
    <>
      <Sidebar />
      <Background backgroundImage={() => {}} backgroundColor={backgroundColor}>
        <HeaderHome />
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={isDarkMode ? "#FFF" : "#325874"} />
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
                disabled={false}
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
              {materias.map((materia) => {
                const porcentagem = porcentagens[materia.id] ?? 0;
                const bgColor = getColorByPercentage(porcentagem);
                const textColor = getTextColor(porcentagem);

                return (
                  <TouchableOpacity
                    key={`${materia.id}-${materia.nome}`}
                    style={[styles.btnMateria, { backgroundColor: bgColor }]}
                    onPress={() => handleMateriaPress(materia, usuario)}
                  >
                    <View style={styles.descricoesMateria}>
                      <Text style={[styles.txtMateria, { color: textColor }]}>
                        {materia.nome.toUpperCase()}
                      </Text>
                      <Text style={[styles.txtSerie, { color: textColor }]}>
                        {serieMap[usuario.serie] || usuario.serie}
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.txtPorcentagem, { color: textColor }]}>
                        {porcentagem}%
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        )}
      </Background>
    </>
  );
}