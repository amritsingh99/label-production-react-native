/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
  Button,
  NativeModules,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// Screens
import { MainScreen } from './src/Screens/MainScreen';
import { HomeScreen} from './src/Screens/HomeScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';

// Custom Stack Type
import { RootStackParamList } from './src/Screens/types/StackType';

// Custom Libs
import { getData } from './src/lib/dataFunctions/getProductionData';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type productionInfoRow = {
  Sno: number,
  Job_Date: string,
  Length: number,
  Width: number,
  Fname: string,
  Pick: number,
  Repeat: number,
  Client: string
}

const CONTENT = {
  tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
  tableData: [
    ['1', '2', '3', '4'],
    ['1', '2', '3', '4'],
    ['1', '2', '3', '4']
  ]
};

const DetailsScreen = ({route, navigation} : NativeStackScreenProps<RootStackParamList, 'Details'>) => {

  const { itemId, otherParam } = route.params
  // navigation.setParams({
  //   otherParam: 'amrit'
  // })
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>      
      
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {itemId: 22})}
      />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home', {client: 'a'})}/>
      <Button title='Go back' onPress={() => navigation.goBack()}/>
      <Button
        title='Go back to first screen in stack'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}



const Stack = createNativeStackNavigator<RootStackParamList>();

function App() : JSX.Element {

  const [clients, setClients] = useState(null)
  const fetchData = async (type : string) => {
    const clientData = await getData(type)
    // setDataState(data2)
    // isLoading(false)
}


  useEffect(() => {
    fetchData('clients')
  }, [])

  return (
        <NavigationContainer>
          {/* <MainScreen tableDebug={0}/> */}
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} initialParams={{client: 'amrit'}}/>
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} initialParams={{props: {tableDebug : 0}}}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;