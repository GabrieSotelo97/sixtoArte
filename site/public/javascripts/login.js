window.addEventListener('load',()=>{
    let usuarios = 'nada'
    fetch('http://localhost:3000/api/user/list')
    .then(resultado=>{
         return resultado.json()
        .then(datas=>{  
             usuarios = datas    
        })
        .catch(error=>{
            console.log(error)
        })
    })
    .catch(error=>{
        console.log(error)
    })
    
    const qs =(tag)=>{
        return document.querySelector(tag)
    }
    const form = qs('#form')
    const user = qs('#user')
    const contraseña = qs('#contraseña')
    const small7 =qs('.small7')
    const small8 =qs('.small8')

    let usuario 
    let contra
    
    user.addEventListener('blur', (e)=>{
      
        
            for (let i = 0; i < usuarios.length; i++) {
                if(usuarios[i].username == e.target.value){
                    usuario = usuarios[i]
                }
            }
            if(usuario != undefined){
                user.classList.add('inputValid')
            user.classList.remove('inputInvalid')
            small7.innerHTML = ('')
            
            }else{
                user.classList.add('inputInvalid')
            user.classList.remove('inputValid')
            small7.innerHTML = ('Debes escribir un nombre de usuario')
            /* small7.innerHTML = ('el usuario no existe') */
            }
        
    })
    
    contraseña.addEventListener('input',(e)=>{
        if(e.target.value == ''){
            contraseña.classList.add('inputInvalid')
                    contraseña.classList.remove('inputValid')
                    small8.innerHTML = ('el campo no puede estar vacio')
                    contra = false
        }else{
            contraseña.classList.add('inputValid')
                    contraseña.classList.remove('inputInvalid')
                    small8.innerHTML = ('')
                    contra = true
        }
        })


        

    form.addEventListener('submit', (e)=>{
      if(!usuario){
            e.preventDefault()
            
        }
    if(!usuario){
        user.classList.add('inputInvalid')
            user.classList.remove('inputValid')
            small7.innerHTML = ('el usuario no existe')
            e.preventDefault()
    }else{
        user.classList.remove('inputInvalid')
            small7.innerHTML = ('')
    }
    if(!contra){
        contraseña.classList.add('inputInvalid')
                    contraseña.classList.remove('inputValid')
                    small8.innerHTML = ('el campo no puede estar vacio')
                    e.preventDefault()
    }else{
        contraseña.classList.add('inputValid')
                    contraseña.classList.remove('inputInvalid')
                    small8.innerHTML = ('')
    }

        


    })
    
    let darkModeButton = document.querySelector(".botonDark");
   let body =qs('.login')
    let contenedor = qs('.contenedor')
    let h1 = qs('.titulolog')
    let label = document.querySelectorAll('label')
    darkModeButton.addEventListener("click", (e) => {
    
        body.classList.toggle('fondoNegro2')
        contenedor.classList.toggle('fondoNegro')
        contenedor.classList.toggle('fondoBlanco')
        h1.classList.toggle('blanco')
   })


   const eyeLogin =qs('.fa-eye')
   const eyeLogin2 =qs('.fa-eye-slash')

   eyeLogin.addEventListener('click', (e) =>{
    contraseña.type = 'text'
    eyeLogin.classList.toggle('invisible')
    eyeLogin2.classList.toggle('invisible')
   })
   eyeLogin2.addEventListener('click', (e) =>{
    contraseña.type = 'password'
    eyeLogin.classList.toggle('invisible')
    eyeLogin2.classList.toggle('invisible')
   })

})