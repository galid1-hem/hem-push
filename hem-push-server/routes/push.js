const express = require('express');
const createPushTokenJob = require("../producer/CreatePushTokenProducer");
const createNotificationJob = require("../producer/CreateNotificationProducer");
const CreatePushTokenRequest = require("../dto/CreatePushTokenRequest");
const CreateNotificationRequest = require("../dto/CreateNotificationRequest");

const router = express.Router();

router.post("/tokens", (req, res) => {
    createPushTokenJob(new CreatePushTokenRequest(
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