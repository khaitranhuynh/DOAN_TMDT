'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Basic', imagepath:'' },
            { name: 'Medium', imagepath: '' },
            { name: 'Advanced', imagepath: '' }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Levels', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Levels', null, {});

    }
};