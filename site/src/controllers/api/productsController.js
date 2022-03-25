const fs = require('fs');
const path = require('path');


const db = require('../../database/models');
const { Console } = require('console');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op

module.exports = {

   list:(req , res) => {
    db.product.findAll({
        include:[{all:true}]
    })
    .then(lista=>{
        return res.json(lista)
        
    })

    },
    id:(req, res)=>{
        db.product.findByPk(req.params.id,{
            include:[{all:true}]
        })
            
        .then(product=>{
            return res.json(product)
            
        })
    },
    buscar:(req, res)=>{
         
        db.product.findAll({    
            where:{
                name:{[Op.like]:`%${req.params.buscador.trim()}%`} 
            },        

            include: [{association: 'imagen'}]
        })
        .then(productos => {         
                 
            return res.json(productos)
        })
        .catch(err => {
                res.send(err)
                
        })
    }

}