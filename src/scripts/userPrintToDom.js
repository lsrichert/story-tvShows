const userPrinter = Object.create({}, {
    printUser: {
        value: function (userArray) {
            $("#users-container").empty();
            userArray.forEach((user) => {
                const $loginDiv = $("<div>").attr("id", user.id)
                $("<p>").text(user.userName).appendTo($userDiv);
                $("<button>").text("Login").addClass("login-button").appendTo($loginDiv);
                $($loginDiv).appendTo("#users-container");
            })
        }
    }
})
module.exports =userPrinter;