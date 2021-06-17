const createNotificationQueue = require('../queue/createNotificationQueue');

const createNotificationJob = (createPushTokenRequest) => {
    createNotificationQueue.add(createPushTokenRequest);
}

module.exports = createNotificationJob;