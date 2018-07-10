const songPrinter = require("./songsPrintToDom");
const songsDatabaseHandler = require("./songsDatabaseHandler");

$("#songs-container").on("click", "#songs-button", () => {
    const songInput = $("#song-input").val();
    const song = {
        songTitle: songTitleInput,
        userId: userData()
    }
    userDatabaseHandler.postEvent(song)
    .then(response => {
        $("song-input").val("").attr("placeholder", "Song")
        console.log(response);
        return songDatabaseHandler.getAllUsers()
    })
    .then(userArray => {
        userPrinter.printUser(userArray)
    })
})