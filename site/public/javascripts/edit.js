window.onload = function(){
    let main = document.querySelector('main')
    let h2 = document.querySelector('h2')
    let form = document.querySelector('.form')

    let darkModeButton = document.querySelector(".botonDark");
    
      
    darkModeButton.addEventListener('click',()=>{
      main.classList.toggle('fondoNegro3')
      h2.classList.toggle('blanco1')
      form.classList.toggle('fondoNegro4')
    })
}