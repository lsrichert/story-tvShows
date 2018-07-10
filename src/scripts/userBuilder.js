const userLogin = Object.create({}, {
    buildLogin: {
        value: () => {
            const $loginDiv = $("div").attr("id", "login");
            $("<input>").attr("id", "login-input").attr("placeholder", "Login").appendTo($loginDiv);
            $("<button>").attr("id", "login-button").text("Login").appendTo($loginDiv);
        }
    }
})