// import * as admin from "firebase-admin";
const admin = require("firebase-admin");

const serviceKey = require("./hem-app-5fb78-firebase-adminsdk-f1usl-cc69aea873.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceKey)
});

const messaging = admin.messaging();

const userToken = "fzXf5f86Rmi3EYsigVC-MG:APA91bF6Ii3kFE6v0Y_jlAaJ1etT94ZcGorcZ3xr0xL4ne1DSElTNq7tsnoA-vIabzULd-hEdm7OJwHiXKXoWb_iavJv4BP_YqdFVsVyhEV8tXmshqtVpJT4wFT5_fEYb7Ofo29u0DgK";

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
