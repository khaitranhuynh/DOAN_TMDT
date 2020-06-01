let controller = {};
let models = require('../models');
//let Product = models.Product;
let Course = models.Course

controller.getAll = (query) => {
    return new Promise((resolve,reject) => {
        let options = {
            include: [{ model: models.Category }],
            attributes: ['id','name','price','summary','description', 'availability','imagepath','thumbnailPath','overallReview','reviewCount'],
            where: {}
        };
        if (query.Category) {
            options.where.categoryId = query.Category;
        }
        Course
        .findAll(options)    
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};
/*
controller.getAll = () => {
    return new Promise((resolve,reject)=> {
        Course
            .findAll({
                attributes: ['id','name','price','sumary','description', 'availability','imagepath','thumbnailPath' ,'overallReview','reviewCount'],
                include: [{ model: models.Course}]
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    }
    )
}*/

controller.getById = (id) => {
    return new Promise((resolve,reject) => {
        Course
        .findOne({
            where: { id: id },
            include: [{ model: models.Category }]
        })
        .then (result => resolve(result))
        .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;

 
  