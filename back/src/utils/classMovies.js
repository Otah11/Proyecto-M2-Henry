class Movies {
    constructor({ title, year, director, duration, genre, rate, poster}){
        
        if(!title || !poster || !director) throw new Error('Tenemos cambos vacios')

        this.title = title;
        this.year = year;
        this.director = director
        this.duration = duration
        this.genre = genre
        this.rate = rate
        this.poster = poster
    }
}

module.exports = Movies