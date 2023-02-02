type buttonType = {
    buttonInfo : string, 
    buttonName : string
}

// To add a new button modify modalButtonMapping, buttons and modalNames

const modalButtonMapping = {
    modalClient : 0,
    modalDate : 1,
    modalDateRange : 2,
    modalRecent : 3
}

export const buttons = [
                        {
                            buttonName: 'buttonClient',
                            buttonTitle: 'Select Client',
                            modalName : 'modalClient'
                        },
                        {
                            buttonName: 'buttonDate', 
                            buttonTitle : 'Date',
                            modalName: 'modalDate'
                        },
                        {
                            buttonName: 'buttonDateRange',
                            buttonTitle : 'Date Range',
                            modalName : 'modalDateRange'
                        },
                        {
                            buttonName: 'buttonLastFifteen', 
                            buttonTitle : 'Recent Orders',
                            modalName : null
                        }]

export const modalNames = {
    modalDate      : buttons[modalButtonMapping.modalDate].modalName,
    modalDateRange : buttons[modalButtonMapping.modalDateRange].modalName,
    modalRecent    : buttons[modalButtonMapping.modalRecent].modalName,
    modalClient    : buttons[modalButtonMapping.modalClient].modalName,
}                            

// export var buttonNames = {}
// buttonNames.date = {
//     buttonInfo: 'buttonDate', 
//     buttonName : 'Date'
// }
// buttonNames.dataRange = {
//     buttonInfo: 'buttonDateRange', 
//     buttonName : 'Date Range'
// }

// buttonNames.dataRange = {
//     buttonInfo: 'buttonDateRange', 
//     buttonName : 'Date Range'
// }



export const dataRoutes = {
    buttonLastFifteen : "findAll/",
    buttonDate : "byDate/"
}




// export const buttons = {}

// buttonNames.map((key :  buttonType) => {
//     buttons[key.buttonInfo] = false
// })
