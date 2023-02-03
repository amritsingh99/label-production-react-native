import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from './types/StackType';
import { Text, View, Button, Pressable, Dimensions} from 'react-native';

import { default as ButtonStyle } from '../Components/data/Styles/ModalStyles';

export const HomeScreen = ({route, navigation} : NativeStackScreenProps<RootStackParamList, 'Home'>) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection : 'column', gap: Dimensions.get('screen').height / 32}}>
        {/* <Text>Select a Client</Text> */}
        {/* <Text>{route.params.client}</Text> */}
        <Pressable style={[ButtonStyle.button, ButtonStyle.buttonClose]}
                            onPress={() => {
                                navigation.navigate('MainScreen', {props : {tableDebug : 0}})
                            }}>        
            <Text style={ButtonStyle.textStyle}>Select Client</Text>
        </Pressable>
      </View>
    )
}