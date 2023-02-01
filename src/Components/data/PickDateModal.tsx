import { useEffect, useState } from 'react';
import { View, Modal, Text, Pressable, StyleSheet, DeviceEventEmitter } from 'react-native';
import { default as ModalStyle } from './Styles/ModalStyles';
import DatePicker from 'react-native-date-picker';


const PickDateModal = (props : {isVisible : boolean, closeModal : Function}) => {
    const [date, setDate] = useState(new Date())
    const [dateVariable, setDateVariable] = useState(new Date())
    const [confirm, setConfirmState] = useState(false)
    const [dateState, setDateState] = useState(false)
    // const []
    // date.getDate()
    // date.getMonth()
    // date.getFullYear()
    useEffect(() => {
        DeviceEventEmitter.emit('dataTrigger', {buttonName: 'buttonDate', date: date})
    }, [date])
    useEffect(() => {
        DeviceEventEmitter.emit('dataTrigger', {buttonName: 'buttonDate', date: date})
    }, [dateState])

    // console.log(date.toUTCString())
    return (
        <View style={[ModalStyle.centeredView, {flex: 0}]}>
            <Modal
                visible={props.isVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    props.closeModal()
            }}>
            <View style={ModalStyle.centeredView}>
                <View style={[ModalStyle.modalView, {width: 300}]}>
                    <Text style={ModalStyle.modalText}>Pick a Date</Text>
                    <DatePicker mode='date' 
                                open={props.isVisible}
                                date={date} 
                                theme='light' 
                                confirmText='confirm' 
                                androidVariant='nativeAndroid' 
                                textColor='#1a8cff'
                                fadeToColor='white' 
                                onDateChange={setDateVariable}
                                />
                    <View style={{flexDirection: 'row', gap: 10}}>
                        <Pressable style={[ModalStyle.button, ModalStyle.buttonClose]}
                            onPress={() => {
                                console.log(date.toISOString());
                                console.log(dateVariable.toISOString());
                                
                                if (date == dateVariable) {
                                    var previousState = dateState
                                    previousState = !dateState
                                    setDateState(previousState)
                                }
                                setDate(dateVariable)
                                props.closeModal()
                            }}>
                            <Text style={ModalStyle.textStyle}>Confirm</Text>
                        </Pressable>
                        <Pressable style={[ModalStyle.button, ModalStyle.buttonClose]}
                            onPress={() => {
                                props.closeModal()
                            }}>
                            <Text style={ModalStyle.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    {/* <DatePicker mode='date' 
                open={props.isVisible}
                date={date} 
                theme='light' 
                confirmText='confirm' 
                androidVariant='nativeAndroid' 
                textColor='#1a8cff' 
                fadeToColor='white' 
                onConfirm={(date) => {
                    props.closeModal()
                    setDate(date)
                }} /> */}
      {/* <DatePicker
        modal
        open={props.isVisible}
        date={date}
        onConfirm={(date) => {
            props.closeModal()
            setDate(date)
        }}
        onCancel={() => {
            props.closeModal()
        }}
      />                 */}

</View>
    )
}

export default PickDateModal;