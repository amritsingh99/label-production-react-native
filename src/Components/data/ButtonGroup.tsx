import { RadioButton as RNRadioButton} from 'react-native-paper';
import { Button, TouchableOpacity, TouchableHighlight,View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { default as RadioButton } from './RadioButton';
import { useState, useEffect } from 'react';

export const ButtonGroup = (props : {buttons : Array<string>, chooseButton : Function}) => {
    const [firstChecked, setFirstChecked] = useState(false);
    const [secondChecked, setSecondChecked] = useState(false);
    const [trigger, setTrigger] = useState(false)

    // useEffect(() => {
    //     if (firstChecked == true) setSecondChecked(false)
    //     else setFirstChecked(false)
    // }, [firstChecked, secondChecked])

    useEffect(() => {

    }, [firstChecked, secondChecked])

    // console.log(prop.buttons)

    return (
        <>
        <View style={styles.buttonGroupStyle}>
        <TouchableHighlight onPress={() => {
                    setFirstChecked(true)
                    setSecondChecked(false)
                    props.chooseButton([true, false])
        }} underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
            <View style={[styles.buttonOne, styles.buttonProps]}>
                <Text style={[styles.buttonTextStyle]}>Date</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
                    setFirstChecked(false)
                    setSecondChecked(true)
                    props.chooseButton([false, true])
        }} underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
            <View style={[styles.buttonTwo, styles.buttonProps]}>
                <Text style={[styles.buttonTextStyle]}>Date Range</Text>
            </View>
        </TouchableHighlight>
        </View>

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
        flexDirection: 'row',
        gap: Dimensions.get('screen').width / 12
    }
})