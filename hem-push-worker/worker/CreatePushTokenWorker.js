import mongoClient from '../util/Db.js';
import { redisDomain } from "../const/RedisDomain.js";
import Queue from 'bull';

const createPushTokenQueue = new Queue("createPushTokenQueue", redisDomain);

export default mongoClient
    .then(mongoClient => mongoClient.connect(() => {
    const db = mongoClient.db("push");
    const pushTokenCollection = db.collection("push_token");

    createPushTokenQueue.process(async message => {
        const newPushTokenDoc = message.data;
        const result = await pushTokenCollection.insertOne(newPushTokenDoc);
    });
}));