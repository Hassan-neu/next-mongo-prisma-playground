export class SessionAuthentication extends Error {
    constructor(message = "Session needed") {
        super(message);
        this.name = "Session Authentication";
    }
}
