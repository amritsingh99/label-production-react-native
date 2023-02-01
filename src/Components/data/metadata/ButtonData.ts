type buttonType = {
    buttonInfo : string, 
    buttonName : string
}

export const buttonNames = [{
                                buttonInfo: 'buttonDate', 
                                buttonName : 'Date'
                            },
                            {
                                buttonInfo: 'buttonDateRange',
                                buttonName : 'Date Range'
                            },
                            {
                                buttonInfo: 'buttonLastFifteen', 
                                buttonName : 'Recent Orders'
                            }]
export const dataRoutes = {
    buttonLastFifteen : "findAll/",
    buttonDate : "byDate/"
}




export const buttons = {}

buttonNames.map((key :  buttonType) => {
    buttons[key.buttonInfo] = false
})
