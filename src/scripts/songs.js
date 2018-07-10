const addSong = require("./songBuilder");
const songPrinter = require("./songsPrintToDom");

addSong.buildSongForm();

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/songs")
        .then((songs) => {
            printer.printUsers(songs);
        })
}

printOnPageLoad();