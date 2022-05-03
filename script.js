function Addmovies(dit){
    const poster = document.getElementById("posters");
    poster.replaceChildren(posterli)
    for (i = 0; i < dit.length; i ++){
        var posterli = document.createElement("li");
        posterli.classList.add("movie")
        poster.appendChild(posterli);
        var link = document.createElement("a")
        let geturl = new URL(dit[i].imdbID, "https://www.imdb.com/title/")
        link.href = geturl
        posterli.appendChild(link)
        var posterimg = document.createElement("img");
        posterimg.src = dit[i].poster
        link.appendChild(posterimg);
    }
}

Addmovies(movies)

function onevent(event) {
    switch(event.target.value){
        case "2014":
            console.log("2014");
            yearfilm("2014")
            break;
        case "avengers":
            filmfilter("Avengers")
            break;
        case "xmen":
            filmfilter("X-Men")
            break;
        case "princess":
            filmfilter("Princess")
            break;   
        case "batman":
            filmfilter("Batman")
            break;
    }
}

filmfilter = (word) => {
    const filteredMovies = movies.filter(movie => 
        movie.title.includes(word));
    Addmovies(filteredMovies);
};

function yearfilm(){
    const year = movies.filter(movie =>
        movie.year >= 2014)
    Addmovies(year)
}