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
    marginBottom: 10,
    textAlign: 'center',
  },
  modalSubMessage: {
    fontFamily: 'Baloo2-Regular',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
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
    marginTop: 24,           // aumente o espaçamento acima dos botões
    gap: 10,                 // espaçamento entre os botões (React Native >= 0.71)
    paddingHorizontal: 8,    // espaçamento lateral interno
  },
  primaryButton: {
    flex: 1,
    marginLeft: 0,           // remova o marginLeft para não colar nos cantos
    marginRight: 5,          // adicione espaçamento à direita
    backgroundColor: '#2CCB8E',
    borderColor: '#2CCB8E',
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: 'center'
  },
  secondaryButton: {
    flex: 1,
    marginLeft: 5,           // adicione espaçamento à esquerda
    marginRight: 0,          // remova o marginRight para não colar nos cantos
    backgroundColor: 'transparent',
    borderColor: '#325874',
    borderWidth: 2,
    padding: 15,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10
  },
  secondaryButtonDark: {
    flex: 1,
    marginLeft: 6,           // adicione espaçamento à esquerda
    marginRight: 0,          // remova o marginRight para não colar nos cantos
    backgroundColor: 'transparent',
    borderColor: '#ACACAC',
    borderWidth: 2,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: 'center'
  },
  primaryText: {
    color: '#FFFFFF',
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 16
  },
  secondaryText: {
    color: '#325874',
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 16
  },
  secondaryTextDark: {
    color: '#ACACAC',
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 16
  },
  serieOptions: {
    marginVertical: 15,
  },
  serieOption: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
  },
  selectedSerieOption: {
    backgroundColor: '#325874',
  },
  selectedSerieOptionDark: {
    backgroundColor: '#3F4A52',
  },
  serieOptionText: {
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color: '#325874',
  },
  selectedSerieOptionText: {
    color: '#FFFFFF',
  },
  selectedSerieOptionTextDark: {
    color: '#FFFFFF',
  },
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '80%',
  },
});