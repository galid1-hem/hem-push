class CreatePushTokenRequest {
    constructor(user_id, device_id, push_token, os) {
        this.user_id = user_id;
        this.device_id = device_id;
        this.push_token = push_token;
        this.os = os;
    }
}

module.exports = CreatePushTokenRequest;