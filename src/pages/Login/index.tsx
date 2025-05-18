import { ImageBackground, TextInput, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useTheme } from '../../context/ThemeContext';
import ThemeToggleButton from "../../components/ThemeChange/ThemeChange";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import { useAuth } from "../../context/AuthContext";
import { handleLogin as apiLogin, createUsuario } from '../../services/api';
import axios from "axios";
import { Dropdown } from 'react-native-element-dropdown';
import { serieMap } from "../../utills/serieFormatada";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login() {
  const [registrar, setRegistrar] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [serieSelecionada, setSerieSelecionada] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { isDarkMode } = useTheme();
  const { login } = useAuth();

  const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return re.test(password);
  };

  const handleRegistrar = () => {
    setRegistrar(!registrar);
    setEmail("");
    setUsername("");
    setPassword("");
    setSerieSelecionada("");
    setError("");
  };

  const handleLogin = async () => {
    try {
      const user = await apiLogin(email, password);
      if (user) {
        setError("");
        login(user);
      } else {
        setError("Usuário ou senha inválido");
        setShowErrorModal(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setError("Usuário ou senha inválido");
          setShowErrorModal(true);
          return null;
        }
        console.error('Erro de resposta da API:', error.response);
      } else {
        console.error('Erro inesperado:', error);
      }
      throw error;
    }
  };

  const handleCreateUser = async () => {
    if (!username || !email || !password || !serieSelecionada) {
      setError("Preencha todos os campos");
      setShowErrorModal(true);
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, insira um email válido");
      setShowErrorModal(true);
      return;
    }

    if (!validatePassword(password)) {
      setError("A senha deve ter no mínimo 8 caracteres, incluindo letras e números");
      setShowErrorModal(true);
      return;
    }

    try {
      const user = await createUsuario(username, email, password, serieSelecionada);
      console.log('Usuário criado e retornado pela API:', user);
      setError("");
      login(user);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (typeof err.response?.data === 'string' && err.response.data.includes("Já existe um usuário com este email.")) {
          setError(err.response.data);
        } else {
          setError("Erro ao registrar usuário. Verifique os dados.");
        }
      } else {
        console.error(err);
        setError("Erro inesperado ao registrar usuário.");
      }
      setShowErrorModal(true);
    }
  };

  const series = Object.entries(serieMap).map(([key, label]) => ({
    label,
    value: key,
  }));

  const dropdownTextStyle = {
    fontFamily: 'Baloo2-Bold',
    color: isDarkMode ? 'white' : '#325874',
  };

  return (
    <View style={[styles.background, { backgroundColor }]}>
      <ImageBackground style={styles.imageBackground}>
        <ThemeToggleButton />
        <View style={styles.container}>
          <Logo />
          {registrar ? (
            <>
              <TextInput
                style={isDarkMode ? styles.inputDark : styles.input}
                placeholder="Nome completo"
                onChangeText={setUsername}
                value={username}
                placeholderTextColor={'#A8A8A8'}
              />
              <Dropdown
                style={[
                    isDarkMode ? styles.dropdownDark : styles.dropdown,
                ]}
                placeholderStyle={styles.dropdownPlaceholder}
                selectedTextStyle={dropdownTextStyle}
                data={series}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Série"
                value={serieSelecionada}
                onChange={item => setSerieSelecionada(item.value)}
              />
              <TextInput
                style={isDarkMode ? styles.inputDark : styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                placeholderTextColor={'#A8A8A8'}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[isDarkMode ? styles.inputDark : styles.input, styles.passwordInput]}
                  placeholder="Senha"
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                  value={password}
                  placeholderTextColor={'#A8A8A8'}
                  autoCapitalize="none"
                />
                <TouchableOpacity 
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color={isDarkMode ? 'white' : '#325874'}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.botoes}>
                <Button
                  disabled={false}
                  title="REGISTRAR"
                  onPress={handleCreateUser}
                  style={[styles.btnRegistrar, styles.btnRegistrarCima, styles.btn]}
                  textStyle={[styles.txtEntrar, styles.txt]}
                />
                <Button
                  disabled={false}
                  title="CANCELAR"
                  onPress={handleRegistrar}
                  style={[styles.btnCancelar, styles.btn]}
                  textStyle={[styles.txtRegistrar, styles.txt]}
                />
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={isDarkMode ? styles.inputDark : styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                placeholderTextColor={'#A8A8A8'}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[isDarkMode ? styles.inputDark : styles.input, styles.passwordInput]}
                  placeholder="Senha"
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                  value={password}
                  placeholderTextColor={'#A8A8A8'}
                  autoCapitalize="none"
                />
                <TouchableOpacity 
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color={isDarkMode ? 'white' : '#325874'}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.botoes}>
                <Button
                  disabled={false}
                  title="ENTRAR"
                  onPress={handleLogin}
                  style={[styles.btnEntrar, styles.btn]}
                  textStyle={[styles.txtEntrar, styles.txt]}
                />
                <Button
                  disabled={false}
                  title="REGISTRAR"
                  onPress={handleRegistrar}
                  style={[styles.btnRegistrar, styles.btn]}
                  textStyle={[styles.txtRegistrar, styles.txt]}
                />
              </View>
            </>
          )}
        </View>
      </ImageBackground>

      <ErrorModal
        visible={showErrorModal}
        message={error}
        onClose={() => setShowErrorModal(false)}
      />
    </View>
  );
}