const Queue = require("bull");
const redisDomain = "redis://127.0.0.1:6379";

const taskQueue = new Queue("task-queue", redisDomain);

taskQueue.add({foo: 'bar'});