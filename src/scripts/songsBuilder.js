const addSong = Object.create({}, {
    buildSongForm: {
        value: () => {
            // console.log(buildSongForm)
            const $songsDiv = $("<div>").attr("id", "songs");
            $("<input>").attr("id", "songs-input").attr("placeholder", "Songs").appendTo($songsDiv);
            $("<button>").attr("id", "songs-button").text("Song Title").appendTo($songsDiv);
            $songsDiv.appendTo($("#songs-container"))
        }
    }
})

module.exports = addSong;