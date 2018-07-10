const userLoginForm = Object.create({}, {
    buildLoginForm: {
        value: () => {
            console.log("user login form", userLoginForm)
            const $loginDiv = $("<div>").attr("id", "login");
            $("<input>").attr("id", "login-input").attr("placeholder", "Login").appendTo($loginDiv);
            $("<button>").attr("id", "login-button").text("Login").appendTo($loginDiv);
            $loginDiv.appendTo($("#login-container"))
        }
    }
})

module.exports = userLoginForm;