import RNHTMLtoPDF from 'react-native-html-to-pdf';


export const generatePDF = async ({html, fileName, directory}) => {
    const options = {html, fileName, directory}
    try {
        const file = await RNHTMLtoPDF.convert(options);
        return {filePath : file.filePath, base64 : file.base64};
    } catch (err) {
        console.error(err);
    }
}
