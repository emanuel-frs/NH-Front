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
    marginBottom: 15,
  },
  modalTitleWhite: {
    color: '#325874',
  },
  modalTitleDark: {
    color: '#FFFFFF',
  },
  userInfoLabel: {
    fontFamily: 'Baloo2-Bold',
    fontSize: 16,
    marginTop: 10,
  },
  userInfoLabelWhite: {
    color: '#325874',
  },
  userInfoLabelDark: {
    color: '#ACACAC',
  },
  userInfoText: {
    fontFamily: 'Baloo2-Medium',
    fontSize: 18,
    marginBottom: 5,
  },
  userInfoTextWhite: {
    color: '#1A3B4C',
  },
  userInfoTextDark: {
    color: '#FFFFFF',
  },
});
