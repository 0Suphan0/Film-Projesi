const form = document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const secondCardBody =document.querySelectorAll(".card-body")[1];

allEventListeners();


function allEventListeners(){
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",loadAllFilms)
    secondCardBody.addEventListener("click", deleteFilm)

}



function addFilm(e) {

    const titleValue = titleElement.value;
    const directorValue = directorElement.value;
    const urlValue = urlElement.value;

    // New Film

    const newFilm = new Film(titleValue,directorValue,urlValue);



    // add film to UI
    if(titleValue!=="" && directorValue!=="" && urlValue!==""){
        
        UI.addFilmToUI(newFilm)
        Storage.addFilmToStorage(newFilm)

        //succes
        showMessage("Başarılı Bir Şekilde Eklendi","success")

    }
    else
    {
        //danger
        showMessage("Lütfen Tüm Alanları Doldurunuz...","danger")
    }
    
   


    clearInputs(titleElement, directorElement, urlElement)

    e.preventDefault()
}


// Clear all input areas after adding elements
function clearInputs(element1,element2,element3){

    element1.value="";
    element2.value="";
    element3.value="";
}




function showMessage(message, type) {
    //get first card body

    const firstCardBody = document.querySelectorAll(".card-body")[0];

    //createDiv
    const alertDiv = document.createElement("div");
    
    alertDiv.textContent = message;
    alertDiv.className = `alert alert-${type}`;

    //add div to cardbody

    firstCardBody.appendChild(alertDiv);

    setTimeout(()=>{
        alertDiv.remove();
    },1500)
}

function loadAllFilms(){

    // Get all Films from storage
   const allFilms= Storage.getLocalStorage();

   //add all films by addFilmToUI method
   for (const film of allFilms) {
       UI.addFilmToUI(film)
   }
}

function deleteFilm(e){
    
    
    if(e.target.id==="delete-film"){
        
        const element=e.target;
        //remove from UI
        UI.deleteUI(element)

        //remove from Storage
        Storage.deleteStorage(element)

    }

    if(e.target.id==="clear-films"){
        
        Storage.deleteAllFilmStorage();
        UI.deleteAllFilmUI();
        
    }

}