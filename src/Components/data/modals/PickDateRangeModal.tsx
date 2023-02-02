import { View, Modal, Text, Pressable } from 'react-native';
import { default as ModalStyle } from '../Styles/ModalStyles'

const PickDateRangeModal = (props : {isVisible : boolean, closeModal : Function}) => {
    return (
        <View style={[ModalStyle.centeredView, {flex: 0}]}>
        <Modal
            visible={props.isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                props.closeModal()
        }}
        >
            <View style={ModalStyle.centeredView}>
                <View style={ModalStyle.modalView}>
                    <Text style={ModalStyle.modalText}>Pick a Date Range</Text>
                    <Pressable style={[ModalStyle.button, ModalStyle.buttonClose]}
                        onPress={() => props.closeModal()}>
                        <Text style={ModalStyle.textStyle}>Done</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
</View>
    )
}

export default PickDateRangeModal;