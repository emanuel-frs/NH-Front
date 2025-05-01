import { ImageBackground, TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useTheme } from '../../context/ThemeContext';
import ThemeToggleButton from "../../components/ThemeChange/ThemeChange";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import { useAuth } from "../../context/AuthContext";

export default function Login () {
    const [registrar, setRegistrar] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const { isDarkMode } = useTheme();
    const { login } = useAuth();

    const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

    const handleRegistrar = () => {
        setRegistrar(!registrar);
        setError("");
    };

    const handleLogin = () => {
        if (email === "adalberto@gmail.com" && password === "1234") {
            setError("");
            login();
        } else {
            setError("Usuário ou senha inválido");
        }
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
                                onChangeText={(text) => setUsername(text)}  
                                placeholderTextColor={'#A8A8A8'}
                            />
                            <TextInput 
                                style={isDarkMode ? styles.inputDark : styles.input} 
                                placeholder="Email" 
                                onChangeText={(text) => setEmail(text)}  
                                placeholderTextColor={'#A8A8A8'}
                            />
                            <TextInput 
                                style={isDarkMode ? styles.inputDark : styles.input} 
                                placeholder="Senha" 
                                secureTextEntry 
                                onChangeText={(text) => setPassword(text)}  
                                placeholderTextColor={'#A8A8A8'}
                            />
                            <View style={styles.botoes}>
                                <Button
                                    title="REGISTRAR"
                                    onPress={() => {}}
                                    style={[styles.btnRegistrar, styles.btnRegistrarCima, styles.btn]}
                                    textStyle={[styles.txtEntrar, styles.txt]}
                                />
                                <Button
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
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                placeholderTextColor={'#A8A8A8'}
                            />
                            <TextInput 
                                style={isDarkMode ? styles.inputDark : styles.input} 
                                placeholder="Senha" 
                                secureTextEntry 
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                                placeholderTextColor={'#A8A8A8'}
                            />
                            {error !== "" && (
                                <Text style={[styles.txt, { color: 'red',marginTop: -15, marginBottom: 5, textAlign: "center" }]}>{error}</Text>
                            )}
                            <View style={styles.botoes}>
                                <Button
                                    title="ENTRAR"
                                    onPress={handleLogin}
                                    style={[styles.btnEntrar, styles.btn]}
                                    textStyle={[styles.txtEntrar, styles.txt]}
                                />
                                <Button
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
        </View>
    );
}
