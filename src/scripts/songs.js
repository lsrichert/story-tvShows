const songPrinter = require("./songsPrintToDom");
// I commented out this code because calling this function here causes the 'add song' form to load before the 'add song' button is clicked.
// addSong.buildSongForm();

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/songs")
        .then((songs) => {
            songPrinter.printSong(songs);
        })
}

printOnPageLoad();