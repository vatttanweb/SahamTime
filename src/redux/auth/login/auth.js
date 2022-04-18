class Auth {

    constructor() {
        this.localstorage = localStorage.getItem("persist:root");
        this.user = this.localstorage ? JSON.parse(this.localstorage) : {}
        this.authenticated = this.user.authenticated ? true : false
    }

    login(cb) {
        this.localstorage = localStorage.getItem("persist:root");
        this.user = this.localstorage ? JSON.parse(this.localstorage) : {}
        if (
            this.user.authenticated &&
            this.user.value.token &&
            this.user.value.member_id
        ) {
            this.authenticated = true
        } else {
            this.authenticated = false
        }
        cb()
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth();