import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        // marginTop: 22,
      },
      modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#ccddff',
      },
      textStyle: {
        color: '#1a8cff',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        fontSize: 16 / Dimensions.get('window').fontScale,
        textAlign: 'center'
      }
})

export default styles;