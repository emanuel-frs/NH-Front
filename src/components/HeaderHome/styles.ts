import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logo: {
        flexDirection: "row",
        justifyContent: 'center',
        height: 50
    },
    quiz: {
        color: '#E40E3C',
    },
    fontLogo: {
        fontSize: 35,
        fontFamily: 'Baloo2-ExtraBold'
    },
    tion: {
        color: '#325874',
    },
    tionDark: {
        color: '#FFFFFF',
    },
    containerWhite: {
        backgroundColor: '#ffffff',
    },
    containerDark: {
        backgroundColor: '#202E38',
        borderBottomWidth: 2,
        borderBottomColor: '#3F4A52'
    },
    container: {
        padding: 5,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        zIndex: 1
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    aux: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0
    }
})