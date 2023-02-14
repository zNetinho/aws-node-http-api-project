const AWS = require("aws-sdk");
const fetchItems = async (event) => {
    
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let items;

    try {
        const results = await dynamodb.scan({
            TableName: "ItemTableNew"
        }).promise();
        
        items = results.item
    } catch (error) {
        console.log("")
    }
    

    
}