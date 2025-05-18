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
    container: {
        width: "100%",
        padding: 30,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#C3C3C3',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        fontFamily: 'Baloo2-SemiBold',
        color: '#325874',
    },
    inputDark: {
        backgroundColor: '#202E38',
        borderWidth: 2,
        borderColor: '#7E7E7E',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        fontFamily: 'Baloo2-Bold',
        color: 'white',
    },
    btn: {
        width: '100%',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        alignItems: 'center',
    },
    txt: {
        fontFamily: 'Baloo2-SemiBold',
        fontSize: 20
    },
    btnEntrar: {
        backgroundColor: '#6A91AD',
        marginBottom: 20
    },
    btnRegistrar: {
        backgroundColor: '#E40E3C',
    },
    btnRegistrarCima: {
        marginBottom: 20,
    },
    btnCancelar: {
        backgroundColor: '#ACACAC'
    },
    txtEntrar:{
        color: '#fff',
    },
    txtRegistrar: {
        color: 'white',
    },
    botoes: {
        width: '100%',
        alignItems: "center"
    },
    error: {
        color: 'red', 
        marginTop: -20, 
        paddingBottom: 20, 
        textAlign: "center"
    },
    themeToggleButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
    },    
    btnPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop:10
    },
    btnBottomPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop:30
    },
    picker: {
        backgroundColor: "#000",
        borderWidth: 2,
        borderRadius: 10,
        padding: 0,
        marginBottom: 20,
        fontFamily: 'Baloo2-Bold',
        color: 'white',
    },
    dropdown: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#C3C3C3',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    dropdownDark: {
        backgroundColor: '#202E38',
        borderWidth: 2,
        borderColor: '#7E7E7E',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    dropdownPlaceholder: {
        fontFamily: 'Baloo2-SemiBold',
        color: '#A8A8A8',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
    },
    passwordInput: {
        flex: 1,
        paddingRight: 40,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        padding: 10,
        bottom: 25
    },
});
