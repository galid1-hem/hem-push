const Queue = require("bull");
const redisDomain = "redis://127.0.0.1:6379";

const createPushTokenQueue = new Queue("createPushTokenQueue", redisDomain);
module.exports = createPushTokenQueue;
