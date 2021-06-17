const Queue = require("bull");
const redisDomain = "redis://127.0.0.1:6379";

const registerPushTokenQueue = new Queue("registerPushTokenQueue", redisDomain);
module.exports = registerPushTokenQueue;
