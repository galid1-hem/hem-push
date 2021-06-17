class CreateNotificationRequest {
    constructor(user_id, notification) {
        this.user_id = user_id;
        this.notification = notification;
    }
}

module.exports = CreateNotificationRequest;