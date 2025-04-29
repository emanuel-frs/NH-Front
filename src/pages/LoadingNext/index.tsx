import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root';
import { useTheme } from '../../context/ThemeContext';
import Background from '../../components/Background/Background';
import { styles } from './styles';

type LoadingNextNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoadingNext'>;

export default function LoadingNext() {
  const navigation = useNavigation<LoadingNextNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'LoadingNext'>>();
  const { isDarkMode } = useTheme();

  const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';
  
  const { index } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Question', { index });
    }, 500);

    return () => clearTimeout(timer);
  }, [index, navigation]);

  return (
    <Background backgroundImage={() => {}} backgroundColor={backgroundColor}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={isDarkMode ? '#fff' : '#325874'}/>
        <Text style={[styles.text, isDarkMode ? styles.txtDark : styles.txtWhite]}>Carregando...</Text>
      </View>
    </Background>
  );
}