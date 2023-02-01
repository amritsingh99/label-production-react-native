// JS Imports
import { DeviceEventEmitter, EventEmitter } from 'react-native';

// React Imports
import { Button, TouchableOpacity, TouchableHighlight, View, Text, StyleSheet, Dimensions, Pressable, Modal, Alert } from 'react-native';
import { useState, useEffect } from 'react';

// Metadata imports
import { buttonNames, buttons } from './metadata/ButtonData'

// Custom Components
import PickDateModal from './PickDateModal'
import PickDateRangeModal from './PickDateRangeModal';

export const ButtonGroup = (props : {buttons : Array<string>}) => {

    const [modalVisible, setModalVisible] = useState(true);
    const [trigger, setTrigger] = useState('null')
    const [isPickDateModalVisible, setPickDateModalVisible] = useState(false);
    const [isPickDateRangeModalVisible, setPickDateRangeModalVisible] = useState(false);    

    const changeButton = (buttonName : string) => {
        setTrigger(buttonName)
        // DeviceEventEmitter.emit('dataTrigger', buttonName)
    }

    useEffect(() => {
        if (trigger == 'buttonLastFifteen') {
            DeviceEventEmitter.emit('dataTrigger', trigger)
        }
        
    }, [trigger])
    
    return (
        <>
        <View style={styles.buttonGroupStyle}>
        <TouchableHighlight onPress={() => {
                                        changeButton(buttonNames[0].buttonInfo)
                                        setPickDateModalVisible(true)                                        
                                    }} 
                            underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
            <View style={[styles.buttonOne, styles.buttonProps]}>
                <Text style={[styles.buttonTextStyle]}>{buttonNames[0].buttonName}</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
                                        changeButton(buttonNames[1].buttonInfo)
                                        setPickDateRangeModalVisible(true)
                                    }}
                            underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
            <View style={[styles.buttonOne, styles.buttonProps]}>
                <Text style={[styles.buttonTextStyle]}>{buttonNames[1].buttonName}</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
                                        changeButton(buttonNames[2].buttonInfo)
                                    }} 
                            underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
            <View style={[styles.buttonOne, styles.buttonProps]}>
                <Text style={[styles.buttonTextStyle]}>{buttonNames[2].buttonName}</Text>
            </View>
        </TouchableHighlight>
        </View>
        <PickDateModal isVisible={isPickDateModalVisible} closeModal={() => setPickDateModalVisible(false)}/>
        <PickDateRangeModal isVisible={isPickDateRangeModalVisible} closeModal={() => setPickDateRangeModalVisible(false)}/>

        <Text>Button Triggered: {trigger}</Text>

        </>   
    )
}

const styles = StyleSheet.create({
    buttonCheckedStyle : {
        color: '#1a8cff'
    },
    buttonProps : {
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        height: Dimensions.get('screen').height / 32,
        width: Dimensions.get('screen').width / 3,
        backgroundColor: '#ccddff',
        borderRadius: 20,
        elevation: 10
    },
    buttonOne: {
        // borderWidth: 1,
    },
    buttonTwo : {
        // borderWidth: 1
    },
    buttonTextStyle : {
        color: '#1a8cff',
        fontWeight: 'bold',
        fontSize: 16 / Dimensions.get('window').fontScale,
    },
    buttonGroupStyle : {
        flexDirection: 'column',
        gap: Dimensions.get('screen').width / 24,    
    }    
})