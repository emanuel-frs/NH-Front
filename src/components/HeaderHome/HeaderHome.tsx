import { useTheme } from "../../context/ThemeContext";
import { useSidebar } from "../../context/SidebarContext";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { playClickSound } from "../../utills/sound";

export default function HeaderHome() {
    const { isDarkMode } = useTheme();
    const { setSidebar } = useSidebar();
    const handlePress = () => {
        playClickSound();
        setSidebar(true)
    };

    return (
        <View style={[isDarkMode ? styles.containerDark : styles.containerWhite, styles.container]}>
            <Pressable style={styles.menu} onPress={handlePress}>
                <Ionicons name="menu" size={30} color={isDarkMode ? "#FFF" : "#325874"} />
            </Pressable>
            <View style={styles.logo}/>
            <View style={styles.aux}>
                <Ionicons name="menu" size={30}/>
            </View>
        </View>
    );
}
