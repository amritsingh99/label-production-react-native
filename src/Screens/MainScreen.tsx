// React Modules
import { useState, useEffect } from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';

// Custom libs
import { getData } from "../lib/dataFunctions/productionDataGet";
import { generatePDF } from '../lib/pdfFunctions.js'

// Custom components
import { ButtonGroup } from '../Components/data/ButtonGroup';
import { default as ProductionData } from '../Components/data/ProductionData'

export function MainScreen() {
    var initialData = getData();
    // console.log(initialData);
    
    const [pdf, setPdf] = useState<string | null>(null);
    const [initalDataCheck, setinitalData] = useState(true)
    
    const [buttonState, setButtonState] = useState({'buttonDate' : false, 'buttonDateRange' : false})

    const chooseButton = (buttonArray : Array<boolean>) => {
        setButtonState({'buttonDate' : buttonArray[0], 'buttonDateRange' : buttonArray[1]})
    }
  
    // console.log(buttonState)

    useEffect(() => {
        console.log('render')
    }, [])    
  
    // console.log('firstChecked: ', firstChecked)
    // console.log('secondChecked: ', secondChecked)
  
    // console.log(totalRows)
    // useEffect(() => {
  
    // }, [data, totalRows])
  
    // console.log(data);
    
  
    const makePDF = async () => {
      const options = {
        html: '<h1>Hello World</h1><p>This is Amrit generating a pdf from HTML.</p>',
        fileName: 'test',
        directory: 'docs',
      };
      generatePDF(options).then((file) => {
        setPdf(file.filePath)
      }).catch((err) => {
        console.error(err)
      })
    };
  
  
    return (
          <>
            <View style={[styles.container, {gap: Dimensions.get('screen').height / 36, alignItems: 'stretch'}]}>
              <ProductionData productionInfo={initialData} tableDebug={0}/>
              <View style={{flex: 6, borderColor: 'white', borderWidth: 1, marginTop: 0, alignItems: 'center', justifyContent: 'space-around'}}>
                <ButtonGroup chooseButton={chooseButton} buttons={["Select Date", "Select Date Range"]}/>
                <Button title='Generate PDF'></Button>
              </View>
              {/* <DatePickerIOSComponent onDate></DatePickerIOSComponent> */}
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
    },
  });  