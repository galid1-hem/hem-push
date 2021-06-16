// import * as admin from "firebase-admin";
const admin = require("firebase-admin");

const serviceKey = require("./hem-app-5fb78-firebase-adminsdk-f1usl-cc69aea873.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceKey)
});

const messaging = admin.messaging();

const userToken = "fXoS6Qt9SlSf35iCKnhD_c:APA91bFK0D7KjWZIaLSmupDeBSFZnc8LD4NjmlcBNymvaqAZh01k1EcPxYEz6nFemFjl83zhmslxXv0sSyygrJ8ET-9FkVrH5djItzGWk-bllt7Zg7XCVUkQUcpjJ0blO5yoYFKt9DpF";

messaging.sendMulticast({
    tokens: [userToken],
    notification: {
        title: "HI First Noti",
        body: "my noti !!",
    }
})
    .then(response => console.log("response : ", response))
    .catch(error => console.log("error : ", error));


// messaging.sendToDevice(
//     userToken,
//     {
//         data: {
//             hi: "first push Noti !"
//         }
//     },
//     {
//         priority: "high"
//     }
// ).then(response => console.log("response : ", response))
//     .catch(error => console.log("error : ", error))
