const addSong = require("./songsBuilder");
const songPrinter = require("./songsPrintToDom");

addSong.buildSongForm();

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/songs")
        .then((songs) => {
            songPrinter.printSong(songs);
        })
}

printOnPageLoad();