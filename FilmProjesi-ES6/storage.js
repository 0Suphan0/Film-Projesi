class Storage {
    // write static functions
    static addFilmToStorage(newFilm) {
        // get local storage
        let films = this.getLocalStorage();
        //add new film to array
        films.push(newFilm)
        //update storage..(convert to string)
        localStorage.setItem("films", JSON.stringify(films))
        
    }


    //get all films in array format
    static getLocalStorage() {
        let films;

        if (localStorage.getItem("films") === null) {
            films = [];

        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }

        return films;
    }


    static deleteStorage(element) {
        let allFilms = this.getLocalStorage();

        const directorName = element.parentElement.previousSibling.previousSibling.textContent;
        
        allFilms.forEach(function(film,index){
            if(film.director===directorName){
                allFilms.splice(index,1)
            }
        })

        localStorage.setItem("films", JSON.stringify(allFilms))

    }

    static deleteAllFilmStorage(){
        localStorage.removeItem("films")
    }
}