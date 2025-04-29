import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        height: '100%',
        paddingBottom: 150
    },
    correct: {
        color: '#2ECC71',
        fontWeight: 'bold',
    },
    total: {
        color: '#16A085',
        fontWeight: 'bold',
    },
    grid: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        rowGap: 10,
    },
    cell: {
        width: 70,
        height: 70,
        borderRadius: 10,
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellCorrect: {
        borderColor: '#2CCB8E',
    },
    cellWrong: {
        borderColor: '#E40E3C',
    },
    cellText: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'Baloo2-ExtraBold',
    },
    cellDark: {
        backgroundColor: "#202E38"
    },
    cellWhite: {
        backgroundColor: "#fff"
    },
    cellTextCorrect: {
        color: "#2CCB8E"
    },
    cellTextWrong: {
        color: "#E40E3C"
    },
    buttonContainer: {
        marginTop: 40,
        width: '100%',
    },
    button: {
        width: '100%',
        alignItems: "center",
        marginBottom: 20,
        borderColor: '#119E68',
        backgroundColor: '#2CCB8E',
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
    },
    btnGabaritou: {
        borderColor: '#D103B2',
        backgroundColor: '#FF00D9',
    },
    btnNormal: {
        borderColor: '#119E68',
        backgroundColor: '#2CCB8E',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Baloo2-ExtraBold',
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Baloo2-ExtraBold',
        textAlign: 'center'
    },
    txtDark: {
        color: '#fff'
    },
    txtWhite: {
        color: "#325874"
    },
    gabaritou: {
        borderColor: "#FF00D9",
    },
    txtGabaritou: {
        color: "#FF00D9"
    }
});