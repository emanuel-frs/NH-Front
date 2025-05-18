import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
    },
    modalContainerWhite: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        borderColor: '#E5E5E5',
    },
    modalContainerDark: {
        width: '80%',
        backgroundColor: '#202E38',
        borderRadius: 20,
        padding: 20,
        borderColor: '#3F4A52',
    },
    modalTitle: {
        fontFamily: 'Baloo2-Bold',
        textAlign: "center",
        fontSize: 22,
        marginBottom: 10,
    },
    modalTitleWhite: {
        color: '#325874',
    },
    modalTitleDark: {
        color: '#FFFFFF',
    },
    modalMessage: {
        fontFamily: 'Baloo2-SemiBold',
        fontSize: 18,
        marginBottom: 20,
    },
    modalMessageWhite: {
        color: '#325874',
    },
    modalMessageDark: {
        color: '#FFFFFF',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        paddingVertical: 5,
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#325874',
        backgroundColor: '#FFFFFF',
    },
    cancelButtonDark: {
        paddingVertical: 5,
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#ACACAC',
        backgroundColor: '#ACACAC',
    },
    confirmButton: {
        paddingVertical: 5,
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#E40E3C',
        borderColor: '#E40E3C',
        borderWidth: 3,
    },
    cancelText: {
        fontFamily: 'Baloo2-Bold',
        fontSize: 20,
        color: '#325874',
    },
    confirmText: {
        fontFamily: 'Baloo2-Bold',
        fontSize: 20,
        color: '#FFFFFF',
    },      
});