import {View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions, ActivityIndicator} from 'react-native';

type tableDateType = {
    tableData : Array<Array<string>> | [] | undefined,
    tableDebug : number,
    length: number,
    flexArray: Array<number>,
    dateQuery : {date: Date, buttonName: string} | string,
    loading: boolean
}

export const TableData = (props : tableDateType) => {

    if (props.tableData != undefined) {
        if (props.tableData.length == 0) {
            if (typeof(props.dateQuery) == 'string') {
            } else {
                return (
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text>No Orders on {props.dateQuery.date.toDateString()}</Text>
                    </View>
                )
            }

        }
    }

    if (props.loading || props.tableData == undefined) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color={'#ccddff'} size="large"/>
            </View>            
        )
    } else {
        return (
            <ScrollView persistentScrollbar={true} contentContainerStyle={styles.scrollViewContainer} style={{flex: props.length, borderWidth: props.tableDebug}}>
                {
                    props.tableData.map((array, index) => {
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
        )
    }


};

type headerType = {
    name : string,
    flexLength: number
}

export const TableHeader = (props: {tableDebug : number, headers : Array<headerType>}) => {
    return (
    <View style={[styles.tableHeaderContainer]}>
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