const userPrinter = require("./userPrintToDom");
const userDatabaseHandler = require("./userDatabaseHandler");

$("#login-container").on("click", "#login-button", () => {
    const userNameInput = $("#userName-input").val();
    const userName = {
        userName: userNameInput,
        // userId: userData()
    }
    userDatabaseHandler.postUser(userName)
    .then(response => {
        $("userName-input").val("").attr("placeholder", "User")
        console.log(response);
        return userDatabaseHandler.getAllUsers()
    })
    .then(userArray => {
        userPrinter.printUser(userArray)
    })
})