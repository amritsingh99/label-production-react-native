// React Imports
import { Button, TouchableOpacity, TouchableHighlight,View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useState, useEffect } from 'react';


// Metadata imports
import { buttonNames, buttons } from './metadata/ButtonData.js'

// const buttonNames = ['buttonDate', 'buttonDateRange', 'buttonLastTen']
// const buttons = {}
// var key = "key2"
// buttonNames.map((key) => {
//     buttons[key.toString()] = false
// })

export const ButtonGroup = (props : {buttons : Array<string>, chooseButton : Function}) => {
    const [firstChecked, setFirstChecked] = useState(false);
    const [secondChecked, setSecondChecked] = useState(false);
    const [trigger, setTrigger] = useState('null')

    const [buttonState, setButtonState] = useState(buttons)
    console.log(buttons);
    
    const changeButton = (buttonName : string) => {
        const defaultButtonState = buttons
        setTrigger(buttonName)
    }

    // useEffect(() => {
    //     if (firstChecked == true) setSecondChecked(false)
    //     else setFirstChecked(false)
    // }, [firstChecked, secondChecked])
    // useEffect(() => {
    //     if ()
    //   }, [buttonState])
    // useEffect(() => {

    // }, [firstChecked, secondChecked])

    // console.log(prop.buttons)

    return (
        <>
        <View style={styles.buttonGroupStyle}>
            <TouchableHighlight delayPressIn={0} onPress={() => {
                        // setFirstChecked(true)
                        // setSecondChecked(false)
                        props.chooseButton([true, false])
                        changeButton(buttonNames[0])
            }} underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
                <View style={[styles.buttonOne, styles.buttonProps]}>
                    <Text style={[styles.buttonTextStyle]}>Date</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
                        // setFirstChecked(false)
                        // setSecondChecked(true)
                        props.chooseButton([false, true])
                        changeButton(buttonNames[1])
            }} underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
                <View style={[styles.buttonTwo, styles.buttonProps]}>
                    <Text style={[styles.buttonTextStyle]}>Date Range</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
                        // setFirstChecked(false)
                        // setSecondChecked(true)
                        props.chooseButton([false, true])
                        changeButton(buttonNames[2])
            }} underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
                <View style={[styles.buttonTwo, styles.buttonProps]}>
                    <Text style={[styles.buttonTextStyle]}>Last Ten Orders</Text>
                </View>
            </TouchableHighlight>

        </View>

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
        backgroundColor: '#ccddff'     ,
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