import mongoClient from "../util/Db.js";
import messaging from "../util/FcmMessaging.js";

import createNotificationQueue from "../../queue/createNotificationQueue.js";

export default mongoClient.then(mongoClient => {
    mongoClient.connect(() => {
        const db = mongoClient.db("push");
        const pushTokenCollection = db.collection("push_token");

        createNotificationQueue.process(async message => {
            const reqBody = message.data;

            const pushTokenDoc = await pushTokenCollection.findOne({user_id: reqBody.user_id});

            messaging.sendToDevice(
                pushTokenDoc.push_token,
                {
                    notification: reqBody.notification
                }
            )
                .then(response => console.log("response : ", response))
                .catch(error => console.log("error : ", error));
        });
    });
});



