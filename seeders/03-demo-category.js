'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'HTML and CSS', imagepath: '/img/home/hero-slide1.png', summary: "HTML and CSS item" },
            { name: 'JavaScript', imagepath: '/img/home/hero-slide3.png', summary: "JavaScript item" },
            { name: 'XML Tutorials', imagepath: '/img/home/hero-slide2.png', summary: "XML Tutorials item" },
            { name: 'SQL', imagepath: '/img/home/hero-slide1.png', summary: "SQL item" },
            { name: 'Python', imagepath: '/img/home/hero-slide2.png', summary: "Python item" }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Categories', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});

    }
};