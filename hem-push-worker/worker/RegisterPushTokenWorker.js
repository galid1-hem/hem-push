import mongoClient from '../util/Db.js';
import registerPushTokenQueue from "../../queue/registerPushTokenQueue.js";

export default mongoClient
    .then(mongoClient => mongoClient.connect(() => {
    const db = mongoClient.db("push");
    const pushTokenCollection = db.collection("push_token");

    registerPushTokenQueue.process(async message => {
        const newPushTokenDoc = message.data;
        const result = await pushTokenCollection.insertOne(newPushTokenDoc);
    });
}));