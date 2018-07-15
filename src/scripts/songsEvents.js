const songsDatabaseHandler = require("./songsDatabaseHandler");
const songPrinter = require("./songsPrintToDom");
const addSong = require("./songsBuilder");

// click the new song button to load the add song form
$("#newSong-button").on("click", () => {
    addSong.buildSongForm();
})
// event handler for when the save button is clicked to save a new song
$("#songs-container").on("click", "#save-button", () => {
    const songTitleInput = $("#songTitle-input").val();
    const songAlbumInput = $("#songAlbum-input").val();
    const songArtistInput = $("#songArtist-input").val();
    const mySong = {
        title: songTitleInput,
        album: songAlbumInput,
        artist: songArtistInput,
    }
    // post the new song to the database
    songsDatabaseHandler.postSong(mySong)
    .then((songInfo) => {
        $("#songTitle-input").val("").attr("placeholder", "Song Title")
        $("#songAlbum-input").val("").attr("placeholder", "Album")
        $("#songArtist-input").val("").attr("placeholder", "Artist")
        console.log(songInfo);
        return songsDatabaseHandler.getAllSongs()
    })
    .then(songArray => {
        songPrinter.printSong(songArray)
    })
})
// delete button event handler
$("songs-container").on("click", ".delete-button", () => {
    const songID = $(event.target).parent().attr("id")
    songsDatabaseHandler.deleteSong(songID)
    .then(() => {
        return songsDatabaseHandler.getAllSongs()
    })
    .then((songArray) => {
        songPrinter.printSong(songArray)
    })
})