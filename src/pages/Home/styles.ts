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
        borderRadius: 10,
        justifyContent: "center",
        height: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        fontFamily: 'Baloo2-SemiBold',
        height: 32,
        fontSize: 25,
    },
    txtSerie: {
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
    btnTenteNovamente: {
        backgroundColor: '#E40E3C',
    },
    retryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        marginBottom: 80,
        width: '100%',
    },
    txtTenteNovamente: {
        justifyContent: "center",
        fontSize: 20
    },
    btn: {
        width: '100%',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        alignItems: 'center',
    },
    txtError: {
        color: 'white',
        fontFamily: 'Baloo2-SemiBold',
        fontSize: 20,
    },
    txtPorcentagem: {
        fontSize: 30,
        fontFamily: 'Baloo2-Bold',
        marginRight: 20
    },
});