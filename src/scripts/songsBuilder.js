const addSong = Object.create({}, {
    buildSongForm: {
        value: () => {
            const $songsDiv = $("<div>").attr("id", "addSong");
            $("<input>").attr("id", "songs-input").attr("placeholder", "Title").appendTo($songsDiv);
            $("<input>").attr("id", "songs-input").attr("placeholder", "Album").appendTo($songsDiv);
            $("<input>").attr("id", "songs-input").attr("placeholder", "Artist").appendTo($songsDiv);
            $("<button>").attr("id", "save-button").text("Save New Song").appendTo($songsDiv);
            $("<button>").attr("id", "update-button").text("Update Song").appendTo($songsDiv);
            $songsDiv.appendTo($("#songs-container"))
        }
    }
})

module.exports = addSong;