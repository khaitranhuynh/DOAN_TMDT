let controller = {};
let models = require('../models');
let Product = models.Product;

controller.getAll = (query) => {
    return new Promise((resolve,reject) => {
        let options = {
            include: [{ model: models.Category }],
            attributes: ['id','name','imagepath','price','description','availability'],
            where: {}
        };
        if (query.category) {
            options.where.categoryID = query.category;
        }
        Product
        .findAll(options)    
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};
controller.getAll = () => {
    return new Promise((resolve,reject)=> {
        Product
            .findAll({
                attributes: ['id','name','imagepath','price','description','availability'],
                include: [{ model: models.Product}]
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    }
    )
}

controller.getById = (id) => {
    return new Promise((resolve,reject) => {
        Product
        .findOne({
            where: { id: id },
            include: [{ model: models.Category }]
        })
        .then (result => resolve(result))
        .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;