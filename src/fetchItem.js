const AWS = require("aws-sdk");

const fetchItems = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let items;

    try {
        // dependendo do tamanho do db a operação Scan pode ser muito custosa.
        const results = await dynamodb.scan({
            TableName: "ItemTableNew"
        }).promise();

        items = results.Items
    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items)
    }
}

module.exports = {
    handler: fetchItems
}