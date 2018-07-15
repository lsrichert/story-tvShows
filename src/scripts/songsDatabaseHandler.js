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
    },
    getSong: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
            })
        }
    },
    deleteSong: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "DELETE",
            })
        }
    },
    putSong: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "PUT",
                data: {
                    title: updateSong.title,
                    album: updateSong.album,
                    artist: updateSong.artist,
                    userID: updateSong.userID
                }
            })
        }
    }
})
module.exports = songsDatabaseHandler;