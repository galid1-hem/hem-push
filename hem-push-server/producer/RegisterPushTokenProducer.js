const registerPushTokenQueue = require('../../queue/registerPushTokenQueue');

const registerPushTokenJob = (registerPushTokenRequest) => {
    registerPushTokenQueue.add(registerPushTokenRequest);
}

module.exports = registerPushTokenJob;