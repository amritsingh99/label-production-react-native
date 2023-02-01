// React Modules
import { useState, useEffect } from 'react';
import { View, Text, Button, Dimensions, StyleSheet} from 'react-native';

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

export function MainScreen() {

    const [trigger, setTriggerState] = useState('null')
    const [data, setDataState] = useState<Array<Array<string>> | [] | undefined>()
    const [pdf, setPdf] = useState<string | undefined>('')
    const [loading, isLoading] = useState(true)
    

    const fetchData = async (button : Object | string | undefined) => {
        const data2 = await getData(button)
        
        setDataState(data2)
        isLoading(false)
    }

    useEffect(() => {
        isLoading(true)
        fetchData(trigger)
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
        html: '<h1>Hello World</h1><p>This is Amrit generating a pdf from HTML.</p>',
        fileName: 'test',
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
            <View style={[styles.container, {gap: Dimensions.get('screen').height / 36, alignItems: 'stretch'}]}>
              <ProductionData dateQuery={trigger} productionInfo={data} tableDebug={0} loading={loading}/>
              <View style={{flex: 6, borderColor: 'white', borderWidth: 1, marginTop: 0, alignItems: 'center', justifyContent: 'space-around'}}>
                <ButtonGroup buttons={["Select Date", "Select Date Range"]}/>
                <Button title='Generate PDF'></Button>
              </View>
            </View>
          </>
      )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
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