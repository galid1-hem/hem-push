const createPushTokenQueue = require('../queue/createPushTokenQueue');

const createPushTokenJob = (createPushTokenRequest) => {
    createPushTokenQueue.add(createPushTokenRequest);
}

module.exports = createPushTokenJob;