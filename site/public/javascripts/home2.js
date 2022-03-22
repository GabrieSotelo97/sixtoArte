window.addEventListener('load',()=>{

    fetch('http://localhost:3000/api/products/list')
    .then(response=>{
        return response.json()
        
    })
    .then(data=>{
         console.log(data)

         if(data.length < 1){
            const sec = document.querySelector("section");
            const h2 = document.createElement("h2");
            h2.setAttribute("class", "cargando");
            h2.innerText ="Cargando..."
            sec.appendChild(h2);
         }else{
            const sec = document.querySelector("section");

            data.forEach(producto =>{
                const art = document.createElement("article");
                sec.appendChild(art);

                const a = document.createElement("a");
                a.setAttribute("href", "/product/detalle/"+producto.id);
                art.appendChild(a);

                const div1 = document.createElement("div");
                div1.setAttribute("class", "imagen");
                a.appendChild(div1);

                const img = document.createElement("img");
                img.setAttribute("src", "../images/productos/"+ producto.imagen[0].name);
                div1.appendChild(img);
                
                const div2 = document.createElement("div");
                div2.setAttribute("class", "art2");
                a.appendChild(div2);

                const p1 = document.createElement("p");
                p1.setAttribute("class", "descripcion negro");
                p1.setAttribute("style", "text-transform: uppercase");
                p1.innerText =producto.name
                div2.appendChild(p1);

                const p2 = document.createElement("p");
                p2.setAttribute("class", "precio negro");
                p2.innerText ="$"+producto.price
                div2.appendChild(p2);

                const div3 = document.createElement("div");
                div3.setAttribute("class", "icons2");
                div2.appendChild(div3);

                const form = document.createElement("form");
                form.setAttribute("action", "#");
                form.setAttribute("method", "POST");
                div3.appendChild(form);

                const button = document.createElement("button");
                button.setAttribute("type", "submit");
                form.appendChild(button);
                
                const i = document.createElement("i");
                i.setAttribute("class", "fas fa-shopping-cart negro");
                button.appendChild(i);
            })
            






         }
        








    })
    .catch(error =>{
        console.log(error)
    })
 
    
    

})