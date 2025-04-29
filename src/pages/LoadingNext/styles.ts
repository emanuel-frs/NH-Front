import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    titleDark: {
        color: '#FFF'
    },
    score: {
        fontSize: 32,
        marginBottom: 10
    },
    scoreDark: {
        color: '#FFF'
    },
    grade: {
        fontSize: 28,
        marginBottom: 30
    },
    gradeDark: {
        color: '#FFF'
    },
    questionItem: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#F5F5F5'
    },
    questionText: {
        fontSize: 16
    },
    questionTextDark: {
        color: '#333'
    },
    correct: {
        color: 'green',
        fontWeight: 'bold'
    },
    wrong: {
        color: 'red',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    text: {
        marginTop: 20,
        fontSize: 25,
        fontFamily: 'Baloo2-ExtraBold',
    },
    txtDark: {
        color: '#fff'
    },
    txtWhite: {
        color: "#325874"
    }
});