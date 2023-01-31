import { View, Text } from 'react-native';
import { useState } from 'react';
import { RadioButton as RNRadioButton} from 'react-native-paper';

const RadioButton = (props : {checked : boolean, name : string}) => {
    const [checked, setChecked] = useState(props.checked);
    return (
    <View style={{borderWidth: 0, flexDirection: 'row'}}>
        <View style={{alignSelf: 'center'}}><Text>{props.name}</Text></View>
        <RNRadioButton
        value={props.name}
        status={ checked === true ? 'checked' : 'unchecked' }
        onPress={() => setChecked(true)}
        />
    </View>        
    )
}



export default RadioButton;