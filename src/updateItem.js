const AWS = require("aws-sdk");

const updateItem = async(event) => {

    const {ItemStatus} = JSON.parse(event.body);
    const {id} = event.pathParameters;

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    await dynamodb.update({
        TableName: "ItemTableNew",
        Key: {id},
        UpdateExpression:"set ItemStatus = :ItemStatus",
        ExpressionAttributeValues: {
            'itemStatus': ItemStatus
        },
        ReturnValues: "ALL_NEW"
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(ItemStatus)
    }
}

module.exports = {
    handler: updateItem
}