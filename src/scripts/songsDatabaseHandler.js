const songsDatabaseHandler = Object.create({}, {
    postSong: {
        value: (newSongObject) => {
            return $.ajax({
                url: "http://localhost:3000/songs",
                method: "POST",
                data: newSongObject
            })
        }
    },
    getAllSongs: {
        value: () => {
            return $.ajax("http://localhost:3000/songs")
        }
    }

})
module.exports = songsDatabaseHandler;