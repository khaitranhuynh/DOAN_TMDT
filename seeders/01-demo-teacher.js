'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Nguyễn Thị Mỹ Tiên' },
            { name: 'Thái Vĩnh Toàn' },
            { name: 'Phan Thị Mỹ Diễm' },
            { name: 'Huỳnh Khải trân' },
            { name: 'Lương Vĩ Minh' },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Teachers', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Teachers', null, {});

    }
};