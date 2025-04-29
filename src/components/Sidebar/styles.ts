import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 9,
    },
    container: {
        position: 'absolute',
        width: '80%',
        height: '100%',
        zIndex: 10,
        paddingTop: 50,
        display: 'flex',
        padding: 15,
        justifyContent: "space-between",
        borderEndEndRadius: 30,
        borderEndStartRadius: 30
    },
    containerWhite: {
        backgroundColor: 'white',
        borderColor: '#E5E5E5'
    },
    containerDark: {
        backgroundColor: '#202E38',
        borderColor: '#3F4A52'
    },
    btnSidebar: {
        width: '100%',
        alignItems: "center",
        marginBottom: 15,
        borderWidth: 4,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
    },
    txtSidebar: {
        fontFamily: 'Baloo2-Bold',
        fontSize: 20
    },
    txtSidebarWhite: {
        color: '#325874'
    },
    txtSidebarDark: {
        color: '#FFF'
    },
    btnSair: {
        width: '100%',
        alignItems: "center",
        borderColor: '#C2062E',
        backgroundColor: '#E40E3C',
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
    },
    txtSair: {
        color: '#FFFFFF',
        fontFamily: 'Baloo2-Bold',
        fontSize: 20
    },
    btnSidebarWhite: {
        borderColor: '#325874',
        backgroundColor: '#FFFFFF',
    },
    btnSidebarDark: {
        borderColor: '#7E7E7E',
        backgroundColor: '#202E38',
    },
    perfil:{
        marginBottom: 15,
        padding: 10,
        borderWidth: 5,
        borderRadius: 10,
        flexWrap: "wrap",
        flexDirection: "row",
        display: "flex",
        alignItems: "center"
    },
    perfilWhite:{
        borderColor: '#325874',
        backgroundColor: '#325874',
    },
    perfilDark:{
        borderColor: "#7E7E7E",
        backgroundColor: "#7E7E7E",
    },
    imgPerfil:{
        height: 50,
        width: 50,
        backgroundColor: "#FFF",
        borderRadius: "100%",
        marginRight: 10
    },
    txtSidebarNome: {
        fontFamily: 'Baloo2-Bold',
        fontSize: 20,
        width: 190,
    },
    txtSidebarNomeDark: {
        color: '#FFF'
    },
})