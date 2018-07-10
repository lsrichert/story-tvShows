const userPrinter = Object.create({}, {
    printUser: {
        value: function (usersArray) {
            $("users-container").empty();
            userArray.forEach((user) => {
                const $loginDiv = $(",div>").attr("id", user)
                $("<p>").text(user).appendTo($userDiv);
                $("<button>").text("Login").addClass("login-button").appendTo($loginDiv);
                $($loginDiv).appendTo("#users-container");
            })
        }
    }
})
module.exports =userPrinter;