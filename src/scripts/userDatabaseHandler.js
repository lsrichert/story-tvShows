const userDatabaseHandler = Object.create({}, {
    postUser: {
        value: (newUserObject) => {
            return $.ajax({
                url: "http://localhost:3000/users",
                method: "POST",
                data: newUserObject
            })
        }
    },
    getAllUsers: {
        value: () => {
            return $.ajax("http://localhost:3000/users")
        }
    }

})
module.exports = userDatabaseHandler;