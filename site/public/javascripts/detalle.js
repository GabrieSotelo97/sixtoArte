window.onload = function(){

    let main = document.querySelector("main");
    let h4 = document.querySelectorAll("h4");
    let section = document.querySelector('.principio')
    let body = document.querySelector('.detalleAdm')
    let div = document.querySelector('.comprar')
    let a = document.querySelector('.editar a')
    let div1 = document.querySelector('.trash')
    let article = document.querySelector('.pedidos')
    let h2 = document.querySelectorAll('h2')

    let darkModeButton = document.querySelector(".botonDark");
    
      
      darkModeButton.addEventListener('click',()=>{

        body.classList.toggle('fondoNegro4')  

        main.classList.toggle('fondoNegro')

        h4.forEach(dato =>{
          dato.classList.toggle('blanco2')
        })

       section.classList.toggle('fondoNegro2')

       div.classList.toggle('fondoNegro')

       div1.classList.toggle('fondoNegro')
       

       article.classList.toggle('fondoNegro4')

       h2.forEach(dato =>{
        dato.classList.toggle('negro2')
      })
      a.classList.toggle('blanco')
      })
   

    
}