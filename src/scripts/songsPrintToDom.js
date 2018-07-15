const songPrinter = Object.create({}, {
    printSong: {
        value: function (songArray) {
            $("#songs-container").empty();
            songArray.forEach((song) => {
                const $songsDiv = $("<div>").attr("id", song.id)
                $("<p>").text(song.title).appendTo($songsDiv);
                $("<p>").text(song.album).appendTo($songsDiv);
                $("<p>").text(song.artist).appendTo($songsDiv);
                $("<button>").text("Edit Song").addClass("edit-btn").appendTo($songsDiv);
                $("<button>").text("Delete Song").addClass("delete-btn").appendTo($songsDiv);
                $($songsDiv).appendTo("#songs-container");
            })
        }
    }
})
module.exports =songPrinter;