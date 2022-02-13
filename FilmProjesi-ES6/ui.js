class UI {
    // write static functions

    static addFilmToUI(newFilm) {

        //get table body
        const table=document.querySelector("#films")
        
        table.innerHTML += `
        <tr>
             <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
             <td>${newFilm.title}</td>
             <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>

        `;
       
    }

    //Remove from UI
    static deleteUI(element){
        element.parentElement.parentElement.remove();
    }

   static deleteAllFilmUI(){
       const table=document.querySelectorAll("#films")

       table.forEach(element => {
           element.remove();
       });
   }
}