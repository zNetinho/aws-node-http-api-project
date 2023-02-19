const AWS = require("aws-sdk");

const findItem = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters
    let item;

    try {
        // dependendo do tamanho do db a operação Scan pode ser muito custosa.
        const results = await dynamodb.scan({
            TableName: "ItemTableNew",
            Key: {id}
        }).promise();
    } catch (error) {
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item)
    }
}

module.exports = {
    handler: findItem
}