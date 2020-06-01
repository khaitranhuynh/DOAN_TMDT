'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { "courseId": 1, "levelId": 1, "imagepath": "/img/product/product1.png" },
            { "courseId": 1, "levelId": 2, "imagepath": "/img/product/product1.png" },
            { "courseId": 1, "levelId": 3, "imagepath": "/img/product/product1.png" },
            { "courseId": 2, "levelId": 1, "imagepath": "/img/product/product2.png" },
            { "courseId": 2, "levelId": 1, "imagepath": "/img/product/product2.png" },
            { "courseId": 3, "levelId": 1, "imagepath": "/img/product/product3.png" },
            { "courseId": 3, "levelId": 2, "imagepath": "/img/product/product3.png" },
            { "courseId": 3, "levelId": 3, "imagepath": "/img/product/product3.png" },
            { "courseId": 4, "levelId": 2, "imagepath": "/img/product/product4.png" },
            { "courseId": 5, "levelId": 1, "imagepath": "/img/product/product5.png" },
            { "courseId": 5, "levelId": 2, "imagepath": "/img/product/product5.png" },
            { "courseId": 6, "levelId": 3, "imagepath": "/img/product/product6.png" },
            { "courseId": 7, "levelId": 1, "imagepath": "/img/product/product7.png" },
            { "courseId": 7, "levelId": 2, "imagepath": "/img/product/product7.png" },
            { "courseId": 7, "levelId": 2, "imagepath": "/img/product/product7.png" },
            { "courseId": 8, "levelId": 3, "imagepath": "/img/product/product8.png" },
            { "courseId": 9, "levelId": 1, "imagepath": "/img/product/product9.png" },
            { "courseId": 9, "levelId": 2, "imagepath": "/img/product/product9.png" },
            { "courseId": 10, "levelId": 1, "imagepath": "/img/product/product10.png" },
            { "courseId": 10, "levelId": 2, "imagepath": "/img/product/product10.png" },
            { "courseId": 11, "levelId": 2, "imagepath": "/img/product/product11.png" },
            { "courseId": 12, "levelId": 1, "imagepath": "/img/product/produc12.png" },
            { "courseId": 13, "levelId": 2, "imagepath": "/img/product/product13.png" },
            { "courseId": 14, "levelId": 3, "imagepath": "/img/product/product14.png" },
            { "courseId": 14, "levelId": 2, "imagepath": "/img/product/product14.png" },
            { "courseId": 15, "levelId": 1, "imagepath": "/img/product/product15.png" },
            { "courseId": 15, "levelId": 2, "imagepath": "/img/product/product15.png" },
            { "courseId": 16, "levelId": 2, "imagepath": "/img/product/product16.png" },
            { "courseId": 17, "levelId": 1, "imagepath": "/img/product/product17.png" },
            { "courseId": 17, "levelId": 2, "imagepath": "/img/product/product17.png" },
            { "courseId": 18, "levelId": 1, "imagepath": "/img/product/product18.png" },
            { "courseId": 18, "levelId": 2, "imagepath": "/img/product/product18.png" },
            { "courseId": 19, "levelId": 3, "imagepath": "/img/product/product19.png" },
            { "courseId": 20, "levelId": 1, "imagepath": "/img/product/product20.png" },
            { "courseId": 20, "levelId": 2, "imagepath": "/img/product/product20.png" },
            { "courseId": 20, "levelId": 3, "imagepath": "/img/product/product20.png" },
            { "courseId": 21, "levelId": 1, "imagepath": "/img/product/product21.png" },
            { "courseId": 22, "levelId": 2, "imagepath": "/img/product/product22.png" },
            { "courseId": 23, "levelId": 3, "imagepath": "/img/product/product23.png" },
            { "courseId": 24, "levelId": 1, "imagepath": "/img/product/product24.png" },
            { "courseId": 25, "levelId": 1, "imagepath": "/img/product/product25.png" },
            { "courseId": 26, "levelId": 2, "imagepath": "/img/product/product26.png" },
            { "courseId": 27, "levelId": 1, "imagepath": "/img/product/product27.png" },
            { "courseId": 27, "levelId": 2, "imagepath": "/img/product/product27.png" },
            { "courseId": 28, "levelId": 1, "imagepath": "/img/product/product28.png" },
            { "courseId": 28, "levelId": 2, "imagepath": "/img/product/product28.png" },
            { "courseId": 29, "levelId": 2, "imagepath": "/img/product/product29.png" },
            { "courseId": 29, "levelId": 1, "imagepath": "/img/product/product29.png" },
            { "courseId": 31, "levelId": 3, "imagepath": "/img/product/product31.png" },
            { "courseId": 32, "levelId": 2, "imagepath": "/img/product/product32.png" },
            { "courseId": 33, "levelId": 3, "imagepath": "/img/product/product33.png" },
            { "courseId": 35, "levelId": 3, "imagepath": "/img/product/product35.png" },
            { "courseId": 36, "levelId": 1, "imagepath": "/img/product/product36.png" },
            { "courseId": 37, "levelId": 3, "imagepath": "/img/product/product37.png" },
            { "courseId": 39, "levelId": 1, "imagepath": "/img/product/product39.png" },
            { "courseId": 40, "levelId": 2, "imagepath": "/img/product/product40.png" },
            { "courseId": 40, "levelId": 3, "imagepath": "/img/product/product40.png" },
            { "courseId": 40, "levelId": 1, "imagepath": "/img/product/product40.png" },
            { "courseId": 41, "levelId": 1, "imagepath": "/img/product/product41.png" },
            { "courseId": 41, "levelId": 2, "imagepath": "/img/product/product41.png" },
            { "courseId": 42, "levelId": 3, "imagepath": "/img/product/product42.png" },
            { "courseId": 42, "levelId": 1, "imagepath": "/img/product/product42.png" },
            { "courseId": 42, "levelId": 2, "imagepath": "/img/product/product42.png" },
            { "courseId": 43, "levelId": 3, "imagepath": "/img/product/product43.png" },
            { "courseId": 43, "levelId": 2, "imagepath": "/img/product/product43.png" },
            { "courseId": 43, "levelId": 1, "imagepath": "/img/product/product43.png" },
            { "courseId": 44, "levelId": 1, "imagepath": "/img/product/product44.png" },
            { "courseId": 44, "levelId": 2, "imagepath": "/img/product/product44.png" },
            { "courseId": 45, "levelId": 1, "imagepath": "/img/product/product45.png" },
            { "courseId": 45, "levelId": 2, "imagepath": "/img/product/product45.png" },
            { "courseId": 45, "levelId": 3, "imagepath": "/img/product/product45.png" },
            { "courseId": 46, "levelId": 1, "imagepath": "/img/product/product46.png" },
            { "courseId": 46, "levelId": 2, "imagepath": "/img/product/product46.png" },
            { "courseId": 47, "levelId": 1, "imagepath": "/img/product/product47.png" },
            { "courseId": 47, "levelId": 2, "imagepath": "/img/product/product47.png" },
            { "courseId": 48, "levelId": 1, "imagepath": "/img/product/product48.png" },
            { "courseId": 49, "levelId": 3, "imagepath": "/img/product/product49.png" },
            { "courseId": 50, "levelId": 1, "imagepath": "/img/product/product50.png" },
            { "courseId": 50, "levelId": 3, "imagepath": "/img/product/product50.png" },
            { "courseId": 50, "levelId": 2, "imagepath": "/img/product/product50.png" }
            
         ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('CourseLevels', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('CourseLevels', null, {});

    }
};