const Queue = require("bull");
const redisDomain = "redis://127.0.0.1:6379";

const createNotificationQueue = new Queue("createNotificationQueue", redisDomain);
module.exports = createNotificationQueue;