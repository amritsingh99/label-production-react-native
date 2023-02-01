import { buttonNames, dataRoutes } from "../../Components/data/metadata/ButtonData"
import DATA_API_URL from "../../env/urls"

const getURL = (buttonData : {buttonName : string, date: Date} | string | undefined) : string => {
  var url = DATA_API_URL
  console.log(buttonData);
  
  if (typeof(buttonData) == 'object') {
    if (buttonData.buttonName == 'buttonDate') {
        url = url.concat(dataRoutes['buttonDate']).concat(buttonData.date.toDateString())
        console.log(url);
    }
  } else if (typeof(buttonData) == 'string' || buttonData == undefined) {
    url = url.concat(dataRoutes['buttonLastFifteen'])
  }

  return url
}

export async function getData(buttonData : {buttonName : string, date: Date} | string | undefined) {  
  const url = getURL(buttonData)
  const response = await fetch(url)
  return await response.json()
}