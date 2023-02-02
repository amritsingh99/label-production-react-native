// React Libraries
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

// Custom Components
import { TableData, TableHeader } from './Table';

type productionInfoType = {
  productionInfo : Array<Array<string>> | [] | undefined, 
  tableDebug : number, 
  dateQuery : {date: Date, buttonName: string} | string,
  loading: boolean
}

const ProductionData = (props: productionInfoType) => {

    // console.log('Production info ', props.productionInfo)
    let [name, setName] = useState('');

    const buttons = ['Generate Bill', 'Choose Date', 'Choose Client']
  
    const [a, seta] = useState(9);
    const [page, setPage] = React.useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(2);
    const [data, setData] = useState() ;
  

    useEffect(() => {
      setPage(0);
    }, [itemsPerPage])
    
    const flexArray = [2, 3, 1, 1, 2]

    return (
    <>
      <View style={[styles.headerStyle, {borderWidth: props.tableDebug}]}>
        <Text style={[styles.resultOutput]}>Production Details</Text>
      </View>
      <TableHeader tableDebug={props.tableDebug} headers={[{name : "Date",   flexLength : flexArray[0]}, 
                                                           {name : "File",   flexLength : flexArray[1]}, 
                                                           {name : "Pick",   flexLength : flexArray[2]}, 
                                                           {name : "Rep",    flexLength : flexArray[3]}, 
                                                           {name : "Client", flexLength : flexArray[4]}]}
      />

      <View style={{flex: 1, marginLeft: Dimensions.get('screen').width / 50, marginRight: Dimensions.get('screen').width / 50}}>
        <TableData flexArray={flexArray} tableData={props.productionInfo} tableDebug={props.tableDebug} length={4} dateQuery={props.dateQuery} loading={props.loading}/>
      </View>

    </>
    );
    
  };

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  row : {
    flexDirection: 'row'
  },
  square : {
    backgroundColor : '#7CA1B4',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput : {
    marginTop: 10,
    height: 40,
    borderColor : 'gray',
    borderWidth: 1
  },
  resultOutput : {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20 / Dimensions.get('window').fontScale,
    fontWeight: 'bold',
    color: '#1a8cff'
  },
  submitButton: {
    bottom: 0,
    left: 50,
    top: 150,
    width: 140
  },
  tableStyle:  {
    height: 300,
  },
  headerStyle : {
    backgroundColor: '#ccddff',
    flex: 1 / 4, 
    justifyContent: 'center',
    marginTop: Dimensions.get('screen').height / 32,
    marginLeft: Dimensions.get('screen').width / 6,
    marginRight: Dimensions.get('screen').width / 6,
    borderRadius: 30,
    // borderWidth: 1,
    elevation: 10
  }
});

export default ProductionData;