const songPrinter = Object.create({}, {
    printSongs: {
        value: function (songArray) {
            $("#addSongs-container").empty();
            songArray.forEach((song) => {
                const $addSongsDiv = $("<div>").attr("id", song.id)
                $("<p>").text(song.title).appendTo($songsDiv);
                $("<p>").text(song.album).appendTo($songsDiv);
                $("<p>").text(song.artist).appendTo($songsDiv);
                $("<button>").text("Edit Song").addClass("edit-btn").appendTo($songsDiv);
                $("<button>").text("Delete Song").addClass("delete-btn").appendTo($songsDiv);
                $($addSongsDiv).appendTo("#addSongs-container");
            })
        }
    }
})
module.exports =songPrinter;