window.onload = function(){
    let main = document.querySelector('.admin1')
    let body = document.querySelector('.admin')
    let h2 = document.querySelector('h2')
    let h3 = document.querySelectorAll('h3')
    let section = document.querySelectorAll('.atributos div')
    let eye = document.querySelectorAll('.fa-eye')
    let edit = document.querySelectorAll('.fa-edit')
    let BDelete = document.querySelectorAll('.fa-trash-alt')

    let darkModeButton = document.querySelector(".botonDark");

    darkModeButton.addEventListener('click',()=>{
        main.classList.toggle('marron')
        h2.classList.toggle('blanco')
        h2.classList.toggle('marron')
        body.classList.toggle('fondoNegro2')
        h3.forEach(dato =>
            dato.classList.toggle('blanco2'))
        section.forEach(dato =>
            dato.classList.toggle('fondoNegro'))
        section.forEach(dato =>
            dato.classList.toggle('blanco2'))
        eye.forEach(dato =>
            dato.classList.toggle('blanco2'))
        edit.forEach(dato =>
            dato.classList.toggle('blanco2'))
            BDelete.forEach(dato =>
                dato.classList.toggle('blanco2'))
      })
      console.log(section)
    
}
