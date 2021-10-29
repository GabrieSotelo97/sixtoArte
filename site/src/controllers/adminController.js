const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    //listar
    admin: (req,res) => {
        res.render('admin/admin', {products: JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))})
    },    

    //crear
    carga: (req,res) => {
        res.render('admin/carga', {products})
    },
    guardar: (req,res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            let max = 0
		    products.forEach(element => {
			
			    if(max < element.id){
			    max = element.id
			    }
		    });
        
            let {nombre, precio, descripcion} = req.body
            const product ={}
            product.id =max +1
		    product.nombre = nombre
		    product.precio = +precio
		    product.descripcion = descripcion
            product.categoria = 'otro'
            product.relacionado = 'Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!'
		    product.imagen = req.file ? req.file.filename : 'default icon.jpeg'

            products.push(product)
		    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))
		    res.redirect('/admin/detalle/'+ product.id)

        } else{
        // Si hay errores los envia a la vista de admin/carga            
             res.render('admin/carga', {errors: errors.mapped(), old: req.body});
        }

    },

    //editar
    edit: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const {id} =req.params
        let productEdit = products.find(e => e.id === +id)
        res.render('admin/edit', {productEdit})
        
    },

    guardarEdit:(req,res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()) {

            const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));       
            const productUpdate = products.find(p => p.id === +req.params.id)
            let {nombre, precio, descripcion} = req.body
            if(productUpdate){
			    productUpdate.nombre = nombre
			    productUpdate.precio = +precio
			    productUpdate.descripcion = descripcion
                productUpdate.imagen = req.file ? req.file.filename : productUpdate.imagen

			    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))
		        res.redirect('/admin/detalle/'+req.params.id)

		    }else{
			    res.redirect('/admin/detalle/'+req.params.id)
		    } 
        } else {
            // Si hay errores los envia a la vista de admin/edit
            const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            const {id} =req.params
            let productEdit = products.find(e => e.id === +id)            
            res.render('admin/edit', {errors: errors.mapped(), productEdit});
        }        
    },    
     detalleAdmin: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));        
        const {id} = req.params;
        const producto = products.find(element => element.id === +id);
        res.render('admin/detalle', {producto}); 
    }, 

    //eliminar
    eliminar: (req,res) => 
         {
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let productos = products.filter(product => product.id !== +req.params.id)
fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 3))
res.redirect('/admin')
}    
 
}