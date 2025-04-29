import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btn: {
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
    padding: 15,
  },
  aux: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20
  },
  btnDark: {
    borderColor: "#3F4A52",
    backgroundColor: "#202E38"
  },
  btnWhite: {
    borderColor: "#BCBCBC",
    backgroundColor: "#fff"
  },
  selected: {
    borderColor: "#E40E3C",
    backgroundColor: "#E40E3C"
  },
  txt: {
    color: 'white',
    fontFamily: 'Baloo2-Bold',
    fontSize: 15,
  },
  txtWhite: {
    color: '#325874',
    fontFamily: 'Baloo2-Bold',
    fontSize: 15,
  },
  circleModel: {
    height: 30,
    width: 30,
    borderRadius: "100%",
    marginRight: 15,
    borderWidth: 4
  },
  circleSelect: {
    borderColor: "#fff",
    backgroundColor: "#E40E3C",
  },
  circleWhite: {
    borderColor: "#BCBCBC",
    backgroundColor: "#fff",
  },
  circleDark:{
    borderColor: "#3F4A52",
    backgroundColor: "#202E38",
  },
});
