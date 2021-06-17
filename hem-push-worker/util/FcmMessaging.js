import {readFile} from "fs/promises";
import admin from "firebase-admin";

const serviceKey = JSON.parse(
    await readFile(
        new URL('../hem-app-5fb78-firebase-adminsdk-f1usl-cc69aea873.json', import.meta.url)
    )
);
admin.initializeApp({
    credential: admin.credential.cert(serviceKey)
});
const messaging = admin.messaging();

export default messaging;
