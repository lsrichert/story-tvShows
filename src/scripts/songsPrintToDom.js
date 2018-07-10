const songPrinter = Object.create({}, {
    printSong: {
        value: function (songArray) {
            $("#songs-container").empty();
            songArray.forEach((song) => {
                const $songsDiv = $("<div>").attr("id", song.id)
                $("<p>").text(user.userName).appendTo($songsDiv);
                $("<button>").text("Song Title").addClass("songs-button").appendTo($songsDiv);
                $($songsDiv).appendTo("#songs-container");
            })
        }
    }
})
module.exports =songPrinter;