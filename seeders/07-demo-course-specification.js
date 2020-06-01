'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { "courseId": 1, "specificationId": 1, "description": "mauris" },
            { "courseId": 1, "specificationId": 2, "description": "sapien urna pretium" },
            { "courseId": 1, "specificationId": 3, "description": "diam neque" },
            { "courseId": 1, "specificationId": 4, "description": "eleifend" },
            { "courseId": 1, "specificationId": 5, "description": "semper" },

            { "courseId": 2, "specificationId": 1, "description": "tristique in" },
            { "courseId": 2, "specificationId": 2, "description": "duis" },
            { "courseId": 2, "specificationId": 3, "description": "at lorem" },
            { "courseId": 2, "specificationId": 4, "description": "amet eros" },
            { "courseId": 2, "specificationId": 5, "description": "ligula" },

            { "courseId": 3, "specificationId": 1, "description": "quam sapien" },
            { "courseId": 3, "specificationId": 2, "description": "eget nunc" },
            { "courseId": 3, "specificationId": 3, "description": "dictumst" },
            { "courseId": 3, "specificationId": 4, "description": "quis" },
            { "courseId": 3, "specificationId": 5, "description": "magna ac consequat" },

            { "courseId": 4, "specificationId": 1, "description": "elit ac" },
            { "courseId": 4, "specificationId": 2, "description": "nisi at nibh" },
            { "courseId": 4, "specificationId": 3, "description": "lorem ipsum" },
            { "courseId": 4, "specificationId": 4, "description": "est" },
            { "courseId": 4, "specificationId": 5, "description": "justo pellentesque" },

            { "courseId": 5, "specificationId": 1, "description": "vestibulum ac est" },
            { "courseId": 5, "specificationId": 2, "description": "quis lectus" },
            { "courseId": 5, "specificationId": 3, "description": "congue vivamus" },
            { "courseId": 5, "specificationId": 4, "description": "justo" },
            { "courseId": 5, "specificationId": 5, "description": "pede malesuada" },
            

            { "courseId": 6, "specificationId": 1, "description": "non sodales sed" },
            { "courseId": 6, "specificationId": 2, "description": "est quam pharetra" },
            { "courseId": 6, "specificationId": 3, "description": "blandit" },
            { "courseId": 6, "specificationId": 4, "description": "quam nec dui" },
            { "courseId": 6, "specificationId": 5, "description": "nisi" },
            
            { "courseId": 7, "specificationId": 1, "description": "turpis a" },
            { "courseId": 7, "specificationId": 2, "description": "orci vehicula" },
            { "courseId": 7, "specificationId": 3, "description": "ipsum dolor sit" },
            { "courseId": 7, "specificationId": 4, "description": "nulla sed" },
            { "courseId": 7, "specificationId": 5, "description": "sed tristique in" },
            
            { "courseId": 8, "specificationId": 1, "description": "placerat ante nulla" },
            { "courseId": 8, "specificationId": 2, "description": "venenatis turpis enim" },
            { "courseId": 8, "specificationId": 3, "description": "sit amet justo" },
            { "courseId": 8, "specificationId": 4, "description": "est donec odio" },
            { "courseId": 8, "specificationId": 5, "description": "hac" },
            
            { "courseId": 9, "specificationId": 1, "description": "sed" },
            { "courseId": 9, "specificationId": 2, "description": "non" },
            { "courseId": 9, "specificationId": 3, "description": "ut" },
            { "courseId": 9, "specificationId": 4, "description": "mattis egestas metus" },
            { "courseId": 9, "specificationId": 5, "description": "ornare" },
            
            { "courseId": 10, "specificationId": 1, "description": "non" },
            { "courseId": 10, "specificationId": 2, "description": "nunc nisl" },
            { "courseId": 10, "specificationId": 3, "description": "vulputate ut" },
            { "courseId": 10, "specificationId": 4, "description": "ultrices vel" },
            { "courseId": 10, "specificationId": 5, "description": "molestie nibh" },
            
            { "courseId": 11, "specificationId": 1, "description": "aliquam augue quam" },
            { "courseId": 11, "specificationId": 2, "description": "pede posuere" },
            { "courseId": 11, "specificationId": 3, "description": "nibh" },
            { "courseId": 11, "specificationId": 4, "description": "feugiat non" },
            { "courseId": 11, "specificationId": 5, "description": "libero ut" },
            
            { "courseId": 12, "specificationId": 1, "description": "vivamus vestibulum" },
            { "courseId": 12, "specificationId": 2, "description": "vel pede" },
            { "courseId": 12, "specificationId": 3, "description": "adipiscing" },
            { "courseId": 12, "specificationId": 4, "description": "diam nam" },
            { "courseId": 12, "specificationId": 5, "description": "risus" },
            
            { "courseId": 13, "specificationId": 1, "description": "dui nec nisi" },
            { "courseId": 13, "specificationId": 2, "description": "amet sapien" },
            { "courseId": 13, "specificationId": 3, "description": "luctus et ultrices" },
            { "courseId": 13, "specificationId": 4, "description": "nunc" },
            { "courseId": 13, "specificationId": 5, "description": "diam" },
            
            { "courseId": 14, "specificationId": 1, "description": "porttitor" },
            { "courseId": 14, "specificationId": 2, "description": "eget eros elementum" },
            { "courseId": 14, "specificationId": 3, "description": "nulla" },
            { "courseId": 14, "specificationId": 4, "description": "risus" },
            { "courseId": 14, "specificationId": 5, "description": "pede" },
            
            { "courseId": 15, "specificationId": 1, "description": "vulputate vitae nisl" },
            { "courseId": 15, "specificationId": 2, "description": "ut nunc" },
            { "courseId": 15, "specificationId": 3, "description": "fermentum" },
            { "courseId": 15, "specificationId": 4, "description": "sem duis" },
            { "courseId": 15, "specificationId": 5, "description": "enim" },
            
            { "courseId": 16, "specificationId": 1, "description": "neque vestibulum" },
            { "courseId": 16, "specificationId": 2, "description": "consectetuer eget" },
            { "courseId": 16, "specificationId": 3, "description": "justo morbi ut" },
            { "courseId": 16, "specificationId": 4, "description": "congue" },
            { "courseId": 16, "specificationId": 5, "description": "maecenas ut" },
            
            { "courseId": 17, "specificationId": 1, "description": "luctus et" },
            { "courseId": 17, "specificationId": 2, "description": "non velit" },
            { "courseId": 17, "specificationId": 3, "description": "vestibulum ante" },
            { "courseId": 17, "specificationId": 4, "description": "ac" },
            { "courseId": 17, "specificationId": 5, "description": "morbi vel lectus" },
            
            { "courseId": 18, "specificationId": 1, "description": "donec pharetra" },
            { "courseId": 18, "specificationId": 2, "description": "duis bibendum morbi" },
            { "courseId": 18, "specificationId": 3, "description": "nullam sit amet" },
            { "courseId": 18, "specificationId": 4, "description": "in libero" },
            { "courseId": 18, "specificationId": 5, "description": "interdum venenatis" },
            
            { "courseId": 19, "specificationId": 1, "description": "tincidunt" },
            { "courseId": 19, "specificationId": 2, "description": "felis fusce" },
            { "courseId": 19, "specificationId": 3, "description": "nisl venenatis" },
            { "courseId": 19, "specificationId": 4, "description": "ante ipsum" },
            { "courseId": 19, "specificationId": 5, "description": "sapien in sapien" },
            
            { "courseId": 20, "specificationId": 1, "description": "odio curabitur" },
            { "courseId": 20, "specificationId": 2, "description": "odio porttitor id" },
            { "courseId": 20, "specificationId": 3, "description": "lacus" },
            { "courseId": 20, "specificationId": 4, "description": "id ligula" },
            { "courseId": 20, "specificationId": 5, "description": "bibendum" },
            
            { "courseId": 21, "specificationId": 1, "description": "vestibulum" },
            { "courseId": 21, "specificationId": 2, "description": "nam" },
            { "courseId": 21, "specificationId": 3, "description": "metus sapien" },
            { "courseId": 21, "specificationId": 4, "description": "diam" },
            { "courseId": 21, "specificationId": 5, "description": "risus" },
            
            { "courseId": 22, "specificationId": 1, "description": "pulvinar sed nisl" },
            { "courseId": 22, "specificationId": 2, "description": "sociis natoque penatibus" },
            { "courseId": 22, "specificationId": 3, "description": "nulla dapibus" },
            { "courseId": 22, "specificationId": 4, "description": "a suscipit" },
            { "courseId": 22, "specificationId": 5, "description": "vestibulum eget vulputate" },
            
            { "courseId": 23, "specificationId": 1, "description": "parturient" },
            { "courseId": 23, "specificationId": 2, "description": "eros" },
            { "courseId": 23, "specificationId": 3, "description": "id mauris vulputate" },
            { "courseId": 23, "specificationId": 4, "description": "congue" },
            { "courseId": 23, "specificationId": 5, "description": "pulvinar" },
            
            { "courseId": 24, "specificationId": 1, "description": "parturient montes nascetur" },
            { "courseId": 24, "specificationId": 2, "description": "justo in" },
            { "courseId": 24, "specificationId": 3, "description": "nulla" },
            { "courseId": 24, "specificationId": 4, "description": "proin leo odio" },
            { "courseId": 24, "specificationId": 5, "description": "nulla nunc purus" },
            
            { "courseId": 25, "specificationId": 1, "description": "arcu" },
            { "courseId": 25, "specificationId": 2, "description": "nec" },
            { "courseId": 25, "specificationId": 3, "description": "non mi integer" },
            { "courseId": 25, "specificationId": 4, "description": "adipiscing molestie" },
            { "courseId": 25, "specificationId": 5, "description": "morbi" },
        
            { "courseId": 26, "specificationId": 1, "description": "sed lacus" },
            { "courseId": 26, "specificationId": 2, "description": "diam" },
            { "courseId": 26, "specificationId": 3, "description": "aenean" },
            { "courseId": 26, "specificationId": 4, "description": "lobortis est phasellus" },
            { "courseId": 26, "specificationId": 5, "description": "nisl aenean lectus" },

            { "courseId": 27, "specificationId": 1, "description": "leo odio" },
            { "courseId": 27, "specificationId": 2, "description": "dolor sit amet" },
            { "courseId": 27, "specificationId": 3, "description": "libero" },
            { "courseId": 27, "specificationId": 4, "description": "massa volutpat convallis" },
            { "courseId": 27, "specificationId": 5, "description": "orci pede" },
            
            { "courseId": 28, "specificationId": 1, "description": "imperdiet sapien urna" },
            { "courseId": 28, "specificationId": 2, "description": "neque" },
            { "courseId": 28, "specificationId": 3, "description": "dui" },
            { "courseId": 28, "specificationId": 4, "description": "lobortis est" },
            { "courseId": 28, "specificationId": 5, "description": "vel enim" },
            
            { "courseId": 29, "specificationId": 1, "description": "justo" },
            { "courseId": 29, "specificationId": 2, "description": "ipsum" },
            { "courseId": 29, "specificationId": 3, "description": "molestie sed justo" },
            { "courseId": 29, "specificationId": 4, "description": "vitae" },
            { "courseId": 29, "specificationId": 5, "description": "nec" },
            
            { "courseId": 30, "specificationId": 1, "description": "nec nisi" },
            { "courseId": 30, "specificationId": 2, "description": "vivamus" },
            { "courseId": 30, "specificationId": 3, "description": "tellus semper interdum" },
            { "courseId": 30, "specificationId": 4, "description": "dapibus duis at" },
            { "courseId": 30, "specificationId": 5, "description": "elementum pellentesque quisque" },
            
            { "courseId": 31, "specificationId": 1, "description": "sed accumsan" },
            { "courseId": 31, "specificationId": 2, "description": "varius ut" },
            { "courseId": 31, "specificationId": 3, "description": "sodales" },
            { "courseId": 31, "specificationId": 4, "description": "eros viverra" },
            { "courseId": 31, "specificationId": 5, "description": "tempus vivamus" },
            
            { "courseId": 32, "specificationId": 1, "description": "vel" },
            { "courseId": 32, "specificationId": 2, "description": "convallis tortor risus" },
            { "courseId": 32, "specificationId": 3, "description": "velit vivamus vel" },
            { "courseId": 32, "specificationId": 4, "description": "non" },
            { "courseId": 32, "specificationId": 5, "description": "metus" },
            
            { "courseId": 33, "specificationId": 1, "description": "vivamus" },
            { "courseId": 33, "specificationId": 2, "description": "auctor gravida sem" },
            { "courseId": 33, "specificationId": 3, "description": "at" },
            { "courseId": 33, "specificationId": 4, "description": "at" },
            { "courseId": 33, "specificationId": 5, "description": "aliquam quis turpis" },
            
            { "courseId": 34, "specificationId": 1, "description": "quis orci" },
            { "courseId": 34, "specificationId": 2, "description": "maecenas tincidunt lacus" },
            { "courseId": 34, "specificationId": 3, "description": "pede morbi porttitor" },
            { "courseId": 34, "specificationId": 4, "description": "lorem vitae" },
            { "courseId": 34, "specificationId": 5, "description": "purus phasellus" },
            
            { "courseId": 35, "specificationId": 1, "description": "ante" },
            { "courseId": 35, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 35, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 35, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 35, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 36, "specificationId": 1, "description": "ante" },
            { "courseId": 36, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 36, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 36, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 36, "specificationId": 5, "description": "aenean lectus pellentesque" },
                
            { "courseId": 37, "specificationId": 1, "description": "ante" },
            { "courseId": 37, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 37, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 37, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 37, "specificationId": 5, "description": "aenean lectus pellentesque" },
                
            { "courseId": 38, "specificationId": 1, "description": "ante" },
            { "courseId": 38, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 38, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 38, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 38, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 39, "specificationId": 1, "description": "ante" },
            { "courseId": 39, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 39, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 39, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 39, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 40, "specificationId": 1, "description": "ante" },
            { "courseId": 40, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 40, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 40, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 40, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 41, "specificationId": 1, "description": "ante" },
            { "courseId": 41, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 41, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 41, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 41, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 42, "specificationId": 1, "description": "ante" },
            { "courseId": 42, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 42, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 42, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 42, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 43, "specificationId": 1, "description": "ante" },
            { "courseId": 43, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 43, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 43, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 43, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 44, "specificationId": 1, "description": "ante" },
            { "courseId": 44, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 44, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 44, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 44, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 45, "specificationId": 1, "description": "ante" },
            { "courseId": 45, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 45, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 45, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 45, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 46, "specificationId": 1, "description": "ante" },
            { "courseId": 46, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 46, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 46, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 46, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 47, "specificationId": 1, "description": "ante" },
            { "courseId": 47, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 47, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 47, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 47, "specificationId": 5, "description": "aenean lectus pellentesque" },
        
            { "courseId": 48, "specificationId": 1, "description": "ante" },
            { "courseId": 48, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 48, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 48, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 48, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 49, "specificationId": 1, "description": "ante" },
            { "courseId": 49, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 49, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 49, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 49, "specificationId": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseId": 50, "specificationId": 1, "description": "ante" },
            { "courseId": 50, "specificationId": 2, "description": "massa volutpat" },
            { "courseId": 50, "specificationId": 3, "description": "dolor sit amet" },
            { "courseId": 50, "specificationId": 4, "description": "maecenas pulvinar lobortis" },
            { "courseId": 50, "specificationId": 5, "description": "aenean lectus pellentesque" },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('CourseSpecifications', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('CourseSpecifications', null, {});

    }
};