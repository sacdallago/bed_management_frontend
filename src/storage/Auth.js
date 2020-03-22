export default class Auth {
    authKey = null;

    constructor() {
        this.authKey = window.localStorage.getItem("authKey");
    }

    auth(authKey) {
        // Validate auth

        this.authKey = authKey;
        window.localStorage.setItem("authKey", this.authKey);

        return this.authKey;
    }

    isAuthenticated() {
        return this.authKey !== null;
    }

    logoff(){
        window.localStorage.removeItem("authKey");
        this.authKey = null;
        return true;
    }
}
