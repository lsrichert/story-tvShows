const songsDatabaseHandler = require("./songsDatabaseHandler");
const songPrinter = require("./songsPrintToDom");
const addSong = require("./songsBuilder");

$("#newSong-button").on("click", () => {
    addSong.buildSongForm();
})
$("#songs-container").on("click", "#save-button", () => {
    const songTitleInput = $("#songTitle-input").val();
    const songAlbumInput = $("#songAlbum-input").val();
    const songArtistInput = $("#songArtist-input").val();
    const mySong = {
        title: songTitleInput,
        album: songAlbumInput,
        artist: songArtistInput,
    }
    songsDatabaseHandler.postSong(mySong)
    .then((songInfo) => {
        $("#songTitle-input").val("").attr("placeholder", "Song Title")
        $("#songAlbum-input").val("").attr("placeholder", "Album")
        $("#songArtist-input").val("").attr("placeholder", "Artist")
        console.log(songInfo);
        return songsDatabaseHandler.getAllSongs()
    })
    .then(songArray => {
        songPrinter.printSongs(songArray)
    })
})
// $("songs-container").on("click", "save-button", () => {
// const songID = event.target.parentNode.id
// })
