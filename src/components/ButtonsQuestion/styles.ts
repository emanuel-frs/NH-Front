import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: "100%",
        width: "100%",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    btn: {
        borderWidth: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 20
    },
    btnWhiteLeft: {
        backgroundColor: "#fff",
        borderColor: "#BCBCBC",
    },
    btnDarkLeft: {
        backgroundColor: "#202E38",
        borderColor: "#3F4A52"  
    },
    btnRight: {
        backgroundColor: "#E40E3C",
        borderColor: "#C2062E",
        borderWidth: 0
    },
    btnBlockedRight: {
        backgroundColor: "#BCBCBC",
        borderColor: "#BCBCBC",
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop: 10, 
    },
    btnBlockedDarkRight: {
        backgroundColor: "#3F4A52",
        borderColor: "#3F4A52",
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop: 10, 
    },
    btnPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop: 10,
    },
    txt: {
        fontFamily: 'Baloo2-Bold',
        fontSize: 20,
    },
    txtDarkLeft: {
        color: 'white',
    },
    txtWhiteLeft: {
        color: "#325874"
    },
    txtRight: {
        color: 'white',
    },
    txtBlockedRight: {
        color: "#606D77"
    },
});
