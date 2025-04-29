import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containt: {
        padding: 20,
        alignItems: 'center'
    },
    materias: {
        padding: 0,
        width: '100%'
    },
    btnMateria: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        marginBottom: 20,
        borderColor: '#C2062E',
        backgroundColor: '#E40E3C',
        borderRadius: 10,
        justifyContent: "center",
        height: 100
    },
    descricoesMateria: {
        flex: 1,
        paddingLeft: 20,
        paddingVertical: 15,
        height: "100%",
        justifyContent: "center"
    },
    book: {
        flex: 1,
        justifyContent: "flex-end"
    },
    txtMateria: {
        color: 'white',
        fontFamily: 'Baloo2-SemiBold',
        height: 32,
        fontSize: 25,
    },
    txtSerie: {
        color: '#980724',
        fontFamily: 'Baloo2-ExtraBold',
        fontSize: 20,
    },
    btnPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop:10
    },
    btnMateriaPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        marginTop:10,
        height: 100
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
})