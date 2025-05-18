import React, { useEffect, useRef, useState } from "react";
import { Pressable, Animated, View } from "react-native";
import { styles } from "./styles";
import { useSidebar } from "../../context/SidebarContext";
import ButtonHeader from "../ButtonSidebar/ButtonSidebar";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import LogoutConfirmationModal from "../ModalLogout";

export function Sidebar() {
    const { sidebar, setSidebar } = useSidebar();
    const { isDarkMode, toggleTheme } = useTheme();
    const navigation = useNavigation<NavigationProp<any>>();
    const [isVisible, setIsVisible] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const { usuario, logout } = useAuth();

    if (!usuario) return null;

    const handleLogoutPress = () => {
        setShowLogoutModal(true);
    };

    const handleConfirmLogout = () => {
        setShowLogoutModal(false);
        logout();
    };

    const handleCancelLogout = () => {
        setShowLogoutModal(false);
    };

    const slideAnim = useRef(new Animated.Value(-300)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleNavigateAboutUs = () => {
        setSidebar(false)
        navigation.navigate('AboutUs');
    };

    const handleNavigateInicio = () => {
        setSidebar(false)
        navigation.navigate('Home');
    };

    useEffect(() => {
        if (sidebar) {
            setIsVisible(true);
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0.5,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: -300,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start(() => {
                setIsVisible(false);
            });
        }
    }, [sidebar]);

    if (!isVisible) return null;

    return (
        <>
            <Animated.View
                style={[
                    styles.background,
                    { opacity: fadeAnim }
                ]}>
                <Pressable style={{ flex: 1 }} onPress={() => setSidebar(false)} />
            </Animated.View>

            <Animated.View
                style={[
                    isDarkMode ? styles.containerDark : styles.containerWhite,
                    styles.container,
                    { left: slideAnim }
                ]}>
                <View>
                    <View style={[
                        isDarkMode ? styles.perfilDark : styles.perfilWhite,
                        styles.perfil
                    ]}>
                        {usuario && (
                        <Text style={[
                            isDarkMode ? styles.txtSidebarNomeDark : styles.txtSidebarDark,
                            styles.txtSidebarNome
                        ]}>
                            {usuario.nome}
                        </Text>
                        )}
                    </View>
                    <ButtonHeader
                        title="INÍCIO"
                        onPress={handleNavigateInicio}
                        style={[
                            isDarkMode ? styles.btnSidebarDark : styles.btnSidebarWhite,
                            styles.btnSidebar
                        ]}
                        textStyle={[
                            isDarkMode ? styles.txtSidebarDark : styles.txtSidebarWhite,
                            styles.txtSidebar
                        ]}
                    />
                    <ButtonHeader
                        title="MUDAR TEMA"
                        onPress={toggleTheme}
                        style={[
                            isDarkMode ? styles.btnSidebarDark : styles.btnSidebarWhite,
                            styles.btnSidebar
                        ]}
                        textStyle={[
                            isDarkMode ? styles.txtSidebarDark : styles.txtSidebarWhite,
                            styles.txtSidebar
                        ]}
                    />
                    <ButtonHeader
                        title="SOBRE NÓS"
                        onPress={handleNavigateAboutUs}
                        style={[
                            isDarkMode ? styles.btnSidebarDark : styles.btnSidebarWhite,
                            styles.btnSidebar
                        ]}
                        textStyle={[
                            isDarkMode ? styles.txtSidebarDark : styles.txtSidebarWhite,
                            styles.txtSidebar
                        ]}
                    />
                </View>
                <ButtonHeader
                    title="SAIR DA CONTA"
                    onPress={handleLogoutPress}
                    style={styles.btnSair}
                    textStyle={styles.txtSair}
                />

                <LogoutConfirmationModal
                    visible={showLogoutModal}
                    onConfirm={handleConfirmLogout}
                    onCancel={handleCancelLogout}
                />
            </Animated.View>
        </>
    );
}
