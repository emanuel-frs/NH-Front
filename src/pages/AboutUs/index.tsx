import React from 'react';
import { Image, Text, View, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import Background from '../../components/Background/Background';
import { styles } from './styles';
import HeaderDefault from '../../components/HeaderDefault/HeaderDefault';

export default function AboutUs() {
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

  const estacioLogo = isDarkMode 
    ? require('../../assets/icons/estacioLogoWhite.png')
    : require('../../assets/icons/estacioLogoBlue.png');

  const members = [
    { name: 'Emanuel', url: 'https://github.com/emanuel-frs' },
    { name: 'Ana', url: 'https://github.com/ana-dev' },
    { name: 'João', url: 'https://github.com/joao-dev' },
    { name: 'Maria', url: 'https://github.com/maria-dev' },
    { name: 'Carlos', url: 'https://github.com/carlos-dev' },
    { name: 'Julia', url: 'https://github.com/julia-dev' },
  ];

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn("Não foi possível abrir a URL: " + url);
    }
  };

  return (
    <Background backgroundImage={() => {}} backgroundColor={backgroundColor}>
      <HeaderDefault materia={""} showBackButton={true} />
      <View style={styles.container}>
        <Image source={estacioLogo} style={styles.logo} />
        <Text style={[styles.txt, styles.messenge, isDarkMode ? styles.txtWhite : styles.txtBlue]}>
          Somos um grupo de estudantes e em nosso trabalho decidimos ajudar os pequenos estudantes da escola Novo Horizonte. 
          Esperamos que gostem do resultado!
        </Text>
        <Text style={[styles.txt, styles.integrantes, isDarkMode ? styles.txtWhite : styles.txtBlue]}>
          Integrantes:
        </Text>
        {members.map((member, index) => (
          <TouchableOpacity key={index} onPress={() => openLink(member.url)}>
            <Text style={[styles.txt, styles.link]}>
              {member.name}: {member.url}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Background>
  );
}