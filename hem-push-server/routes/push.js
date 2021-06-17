const express = require('express');
const registerPushTokenJob = require("../producer/RegisterPushTokenProducer");
const createNotificationJob = require("../producer/CreateNotificationProducer");
const RegisterPushTokenRequest = require("../dto/RegisterPushTokenRequest");
const CreateNotificationRequest = require("../dto/CreateNotificationRequest");

const router = express.Router();

router.post("/tokens", (req, res) => {
    registerPushTokenJob(new RegisterPushTokenRequest(
        req.body.user_id,
        req.body.device_id,
        req.body.push_token,
        req.body.os
    ));

    res.send({"ok": "OKOK"})
});

router.post("/", (req, res) => {
    createNotificationJob(new CreateNotificationRequest(
        req.body.user_id,
        req.body.notification
    ));

    res.send({"ok": "notification"});
});

module.exports = router;