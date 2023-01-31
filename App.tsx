/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  NativeModules,
  Dimensions,
  // DatePickerIOSComponent
  // Share
} from 'react-native';

const { RNShareFile } = NativeModules;

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Screens
import { MainScreen } from './src/Screens/MainScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>

//     </View>
    
//   );
// }


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


function App() : JSX.Element {

  return (
        <>
          <MainScreen/>
        </>
    )
}


function getTestData() {
  return [["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"],
  ["22122022", "RCR00U2A", "444", "48", "RC Labels"]];
}




export default App;