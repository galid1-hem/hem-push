import MongoClient from 'mongodb';

const uri = "mongodb://localhost:27017?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
});

export default mongoClient;

// async function createPushToken(userId, deviceId, pushToken, os) {
//     try {
//         await mongoClient.connect();
//
//         const database = mongoClient.db('push');
//         const pushTokenCollection = database.collection("push_token");
//
//         const newDoc = {
//             user_id: userId,
//             device_id: deviceId,
//             push_token: pushToken,
//             os: os
//         };
//
//         const result = await pushTokenCollection.insertOne(doc);
//
//         console.log(result.insertedCount, result.insertedId);
//
//     } finally {
//         await mongoClient.close();
//     }
// }
//
// module.exports = db;