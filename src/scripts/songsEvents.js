const songPrinter = require("./songsPrintToDom");
const songsDatabaseHandler = require("./songsDatabaseHandler");
const addSong = require("./songsBuilder");

$("#addSong-button").on("click", () => {
    addSong.buildSongForm();
})
$("#songs-container").on("click", "#saveSong-button", () => {
    const songTitleInput = $("#song-input").val();
    const songAlbumInput = $("#song-input").val();
    const songArtistInput = $("#song-input").val();
    const mySong = {
        title: songTitleInput,
        album: songAlbumInput,
        artist: songArtistInput,
    }
    songsDatabaseHandler.postSong(song)
    .then((songInfo) => {
        $("#songTitle-input").val("").attr("placeholder", "Title")
        $("#songAlb-input").val("").attr("placeholder", "Album")
        $("#songArt-input").val("").attr("placeholder", "Artist")
        console.log(songInfo);
        return songsDatabaseHandler.getAllSongs()
    })
    .then(songArray => {
        songPrinter.printSongs(songArray)
    })
})
