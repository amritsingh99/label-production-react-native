// React Modules
import { useState, useEffect } from 'react';
import { View, Text, Button, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';

// Custom libs
import { getData } from "../lib/dataFunctions/getProductionData";
import { generatePDF } from '../lib/pdfFunctions.js'

// Custom components
import { ButtonGroup } from '../Components/data/ButtonGroup';
import { default as ProductionData } from '../Components/data/ProductionData'

import { DeviceEventEmitter } from 'react-native';

type fileType = {
    filePath : string,
    base64 : string
}

const MyComponent = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        console.log('Component Mounted')

        return () => {
            setIsMounted(false)
            console.log('Component Unmounted')
        }
    })
}

export function MainScreen(props : {tableDebug : number}) {
    const [test, testState] = useState(null)
    const [trigger, setTriggerState] = useState('null')
    const [data, setDataState] = useState<Array<Array<string>> | [] | undefined>()
    const [pdf, setPdf] = useState<string | undefined>('')
    const [loading, isLoading] = useState(true)
    
    // console.log(test);
    
    const fetchData = async (button : Object | string | undefined) => {
        const data2 = await getData(button)
        
        setDataState(data2)
        isLoading(false)
    }

    useEffect(() => {
        isLoading(true)
        fetchData(trigger)
        console.log(trigger);
        if (trigger != 'null') {
            if (trigger == 'buttonLastFifteen') {
                testState(true)
            } else {
                testState(false)
            }
                
        }
    }, [trigger])

    useEffect(() => {
        fetchData(undefined)
        isLoading(false)
        const subscription = DeviceEventEmitter.addListener('dataTrigger', (button) => {
            setTriggerState(button)
        })
        return () => {
            subscription.remove()
        }
    }, [])


    const makePDF = async () => {
      const options = {
        html: `<!DOCTYPE html>
        <html>
        <style>
        table, td, th {
          border: 3px solid red;
          font-family: monospace;
        }
        
        table {
          border-collapse: collapse;
          border-color: blue;
          
        }

        </style>
        <table style="width:100%">
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
        
        <p>To understand the example better, we have added borders to the table.</p>
        
        </body>
        </html>
        
        `,
        fileName: 'test6',
        directory: 'docs',
      };
      generatePDF(options).then((file) => {
        if (file != undefined)
        {
            setPdf(file.filePath)
        }
      }).catch((err) => {
        console.error(err)
      })
    };

  
    return (
          <>
            <View style={[styles.container]}>

                <View style={[styles.dataContainer, {borderWidth: props.tableDebug}]}>
                    <ProductionData dateQuery={trigger} productionInfo={data} tableDebug={props.tableDebug} loading={loading}/>
                </View>

                <View style={[styles.buttonContainer, {borderWidth: props.tableDebug}]}>

                <ButtonGroup buttons={["Select Date", "Select Date Range"]}/>
                    <TouchableHighlight onPress={makePDF}
                                underlayColor={styles.buttonProps.backgroundColor} style={[{borderRadius: styles.buttonProps.borderRadius}]}>
                        <View style={[styles.buttonProps]}>
                            <Text style={[styles.buttonTextStyle]}>Generate Bill</Text>
                        </View>
                    </TouchableHighlight>                

                    {pdf && <Text>PDF generated: {pdf}</Text>}

                </View>
            </View>
          </>
      )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'column', 
      alignItems: 'stretch', 
      justifyContent: 'center'
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
    buttonTextStyle : {
        color: '#1a8cff',
        fontWeight: 'bold',
        fontSize: 16 / Dimensions.get('window').fontScale,
    },
    buttonContainer : {
        flex: 1, 
        borderColor: 'black',
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: Dimensions.get('screen').height / 42
    },
    dataContainer : {
        flex: 1
    }
  });  

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