import { useEffect, useState } from 'react';
import { View, Modal, Text, Pressable, StyleSheet, DeviceEventEmitter, Dimensions } from 'react-native';
import { default as ModalStyle } from '../Styles/ModalStyles';
import DatePicker from 'react-native-date-picker';

type modalProps = {
    isVisible : boolean, 
    closeModal : Function,
    client : boolean | null
}

export const PickDateModal = (props : modalProps) => {
    const [date, setDate] = useState(new Date())
    const [dateVariable, setDateVariable] = useState(new Date())
    const [confirm, setConfirmState] = useState(false)
    const [dateState, setDateState] = useState(false)
    const [client, setClientState] = useState(false)
    // console.log(date);
    
    // useEffect(() => {
    //     // if (props.client) {
    //         DeviceEventEmitter.emit('dataTrigger', {buttonName: 'buttonDate', date: date})
    //         console.log('useEffect1');
    //     // }
    // }, [date])

    const sendData = () => {
        DeviceEventEmitter.emit('dataTrigger', {buttonName: 'buttonDate', date: date})
    }
    
    useEffect(() => {
        if (props.client) {
            sendData()
        }
    }, [date, dateState])

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
                                        // console.log(date.toISOString());
                                        // console.log(dateVariable.toISOString());
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
            </View>
        )
    // }
}

export const PickDateRangeModal = (props : modalProps) => {
    if (props.client) {
        return <NoClientModal/>
    } else {
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
}

export const NoClientModal = (props : {trigger : Function}) => {
    
    return (
        <View style={[ModalStyle.centeredView, {flex: 0}]}>
            <Modal
                visible={true}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                }}>
                    <View style={ModalStyle.centeredView}>
                        <View style={[ModalStyle.modalView, {gap: Dimensions.get('screen').height / 42}]}>
                            <Text style={ModalStyle.modalText}>No client selected</Text>
                            <Pressable style={[ModalStyle.button, ModalStyle.buttonClose]}
                                        onPress={() => {
                                            props.trigger()
                                        }}>
                                <Text style={ModalStyle.textStyle}>Done</Text>
                            </Pressable>
                        </View>
                    </View>
            </Modal>            
        </View>
    )
}