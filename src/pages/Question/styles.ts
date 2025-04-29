import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
    },
    containt: {
        padding: 20,
        alignItems: 'center',
        paddingBottom: 100
    },
    containerQuestion: {
        borderRadius: 10,
        padding: 20,
        width: "100%",
        borderWidth: 4
    },
    containerDark: {
        borderColor: "#3F4A52",
        backgroundColor: "#202E38"
    },
    containerWhite: {
        borderColor: "#BCBCBC",
        backgroundColor: "#fff"
    },
    textDefault: {
        fontSize: 15,
        fontFamily: 'Baloo2-ExtraBold'
    },
    textDark: {
        color: "#fff"
    },
    textWhite: {
        color: "#325874"
    },
    btnResposta: {
        width: '100%',
        marginTop: 15,
        borderWidth: 4,
        borderRadius: 10,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    btnRespostaDark: {
        borderColor: '#325874',
        backgroundColor: '#FFFFFF',
    },
    btnRespostaWhite: {
        borderColor: '#D5D5D5',
        backgroundColor: '#FFFFFF',
    },
})