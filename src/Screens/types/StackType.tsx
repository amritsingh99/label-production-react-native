export type RootStackParamList = {
    Home: {client ?: string},
    Details: { itemId: number, otherParam ?: string },
    MainScreen : {props : {tableDebug : number}}
  };