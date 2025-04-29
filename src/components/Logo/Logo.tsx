import { Image, Text, View } from "react-native";
import { styles } from "./styles"
import { useTheme } from "../../context/ThemeContext";

export default function Logo () {
    const { isDarkMode } = useTheme();

    const logoImage = isDarkMode 
    ? require('../../assets/logoBranca.png')
    : require('../../assets/logoVermelha.png');

    return (
        <View style={styles.logo}>
            <Image source={logoImage} style={styles.logoImg}/>
        </View>
    )
}