'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Number of lessons' },//Số lượng bài học
            { name: 'Duration of each lesson' },//Thời lượng của mỗi buổi học
            { name: 'Time to complete the course' },//Thời gian hoàn thành khóa học
            { name: 'Number of exams' },//Số lượng bài kiểm tra
            { name: 'Number of live chat sessions with the teacher' }//Số buổi trò chuyện trực tiếp với giáo viên
            
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Specifications', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Specifications', null, {});
    }
};