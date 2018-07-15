const addSong = Object.create({}, {
    buildSongForm: {
        value: () => {
            const $songsDiv = $("<div>").attr("id", "form");
            $("<input>").attr("id", "songTitle-input").attr("placeholder", "Song Title").appendTo($songsDiv);
            $("<input>").attr("id", "songAlbum-input").attr("placeholder", "Album").appendTo($songsDiv);
            $("<input>").attr("id", "songArtist-input").attr("placeholder", "Artist").appendTo($songsDiv);
            $("<button>").attr("id", "save-button").text("Save Song").appendTo($songsDiv);
            $("<button>").attr("id", "update-button").text("Update Song").appendTo($songsDiv);
            $songsDiv.appendTo($("#songs-container"))
        }
    }
})

module.exports = addSong;