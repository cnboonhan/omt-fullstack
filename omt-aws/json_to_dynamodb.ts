import { readFileSync } from 'fs';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const loadJsonFromFile = (filePath: string): any => {
    try {
        const jsonData = readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error('Error loading JSON from file:', error);
        return null;
    }
};

// Usage
const dynamodbClient = new DocumentClient({ region: 'ap-southeast-1' });
const filePath = 'omt_db.json';
const jsonData = loadJsonFromFile(filePath);
if (jsonData) {
    // Use the loaded JSON data here
    for (let i = 1; i < 18; i++) {
        console.log(i)
        var OMT = jsonData['OMT_' + i]['conditions'];
        Object.keys(OMT).forEach((code) => {
            const title = OMT[code]['title']
            const etiology = OMT[code]['info'].filter((item: { title: string; }) => item.title === 'Etiology')[0].content
            const description = OMT[code]['info'].filter((item: { title: string; }) => item.title === 'Description')[0].content
            const tags = OMT[code]['tags']
            const images = OMT[code]['images']
            dynamodbClient.put({
                TableName: 'OmtAwsStack-OmtTable4F6204AE-1GEYNBBD26NYK',
                Item: {
                    code: code,
                    title: title,
                    etiology: etiology,
                    description: description,
                    tags: tags,
                    images: images
                }
            }, (error, data) => {
                if (error) {
                    console.error('Error writing to DynamoDB:', error);
                } else {
                    console.log('Data written to DynamoDB:', data);
                }
            })
        })
    }
}