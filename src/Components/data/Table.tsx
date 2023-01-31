import {View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions} from 'react-native';

export const TableData = (props : {tableHeaders : Array<Array<string>>, tableDebug : number, length : number, flexArray: Array<number>}) => (
    <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{flex: props.length, borderWidth: props.tableDebug}}>
        {
            props.tableHeaders.map((array, index) => {
                return (
                    <View key={index} style={{flexDirection: 'row'}}>
                        {
                            array.map((cellData, cellIdx) => {
                                var borderRightWidth = 0;
                                if (cellIdx == 4) borderRightWidth = 1;
                                return (
                                        <View key={cellIdx} style={[styles.cell, {flex: props.flexArray[cellIdx], borderWidth: props.tableDebug}]}>
                                            <Text style={styles.cellTextStyle}>{cellData}</Text>
                                        </View>
                                )
                            })
                        }
                    </View>
                )
            })
        }
    </ScrollView>
);

export const TableHeader = (props: {tableDebug : number, headers : Array<Object>}) => {
    return (
    <View style={styles.tableHeaderContainer}>
        {
            props.headers.map((data, idx) => {
                return (
                    <Text key={idx} style={[styles.tableHeaderText, {flex: data.flexLength, borderWidth: props.tableDebug}]}>{data.name}</Text>
                )
            })
        }
    </View>        
    )
}

const styles = StyleSheet.create({
    scrollViewContainer : {
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column'
    },
    tableHeaderContainer : {
        flex: 1, 
        flexDirection: 'row',
        gap: 5,
        borderColor: 'magenta',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: Dimensions.get('screen').width / 50, marginRight: Dimensions.get('screen').width / 50
    },
    tableHeaderText : {
        flex: 1, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: '#1a8cff',
        backgroundColor: '#ccddff',
        fontSize: 14 / Dimensions.get('window').fontScale,
        borderRadius: 5,
        elevation: 10  
    },
    cell: {
        flex: 1,
        alignItems: 'center',
        padding: 3,
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#e6eeff',
        
    },
    cellTextStyle : {
        fontSize: 14 / Dimensions.get('window').fontScale,
        color: 'black'     
    }
});