'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                name: 'HTML and CSS for every one',
                price: '50.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 1,
                categoryId: 1,
                reviewCount: 3,
                overallReview: 2.67
            },
        
            {
                name: 'HTML and CSS from basic to advanced',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 2,
                categoryId: 1,
                reviewCount: 4,
                overallReview: 3.67
            },

            {
                name: 'HTML and CSS for lazy people',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 3,
                categoryId: 1,
                reviewCount: 5,
                overallReview: 4.67
            },


            {
                name: 'HTML and CSS vividly understandable',
                price: '30.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 4,
                categoryId: 1,
                reviewCount: 2,
                overallReview: 2.67
            },

            {
                name: 'HTML and CSS After studying, go to work immediately',
                price: '68.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 5,
                categoryId: 1,
                reviewCount: 3,
                overallReview: 2.67
            },

            {
                name: 'HTML and CSS accessible',
                price: '90.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 1,
                categoryId: 1,
                reviewCount: 3,
                overallReview: 2.67
            },
        
            {
                name: 'HTML and CSS field fight',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 2,
                categoryId: 1,
                reviewCount: 4,
                overallReview: 3.67
            },

            {
                name: 'HTML and CSS practical application',
                price: '80.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 3,
                categoryId: 1,
                reviewCount: 5,
                overallReview: 4.67
            },


            {
                name: 'HTML and CSS teaching experts',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 4,
                categoryId: 1,
                reviewCount: 2,
                overallReview: 2.67
            },

            {
                name: 'HTML and CSS for busy people',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 5,
                categoryId: 1,
                reviewCount: 3,
                overallReview: 2.67
            },
            //JavaScript
            {
                name: 'JavaScript for every one',
                price: '50.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 1,
                categoryId: 2,
                reviewCount: 3,
                overallReview: 2.67
            },
        
            {
                name: 'JavaScript from basic to advanced',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 2,
                categoryId: 2,
                reviewCount: 4,
                overallReview: 3.67
            },

            {
                name: 'JavaScript for lazy people',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 3,
                categoryId: 2,
                reviewCount: 5,
                overallReview: 4.67
            },


            {
                name: 'JavaScript vividly understandable',
                price: '30.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 4,
                categoryId: 2,
                reviewCount: 2,
                overallReview: 2.67
            },

            {
                name: 'JavaScript After studying, go to work immediately',
                price: '68.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 5,
                categoryId: 2,
                reviewCount: 3,
                overallReview: 2.67
            },

            {
                name: 'JavaScript accessible',
                price: '90.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 1,
                categoryId: 2,
                reviewCount: 3,
                overallReview: 2.67
            },
        
            {
                name: 'JavaScript field fight',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 2,
                categoryId: 2,
                reviewCount: 4,
                overallReview: 3.67
            },

            {
                name: 'JavaScript practical application',
                price: '80.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 3,
                categoryId: 2,
                reviewCount: 5,
                overallReview: 4.67
            },


            {
                name: 'JavaScript teaching experts',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 4,
                categoryId: 2,
                reviewCount: 2,
                overallReview: 2.67
            },

            {
                name: 'JavaScript for busy people',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 5,
                categoryId: 2,
                reviewCount: 3,
                overallReview: 2.67
            },
            //XML Tutorials
            {
                name: 'XML Tutorials for every one',
                price: '50.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 1,
                categoryId: 3,
                reviewCount: 3,
                overallReview: 2.67
            },
        
            {
                name: 'XML Tutorials from basic to advanced',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 2,
                categoryId: 2,
                reviewCount: 4,
                overallReview: 3.67
            },

            {
                name: 'XML Tutorials for lazy people',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 3,
                categoryId: 3,
                reviewCount: 5,
                overallReview: 4.67
            },


            {
                name: 'XML Tutorials vividly understandable',
                price: '30.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 4,
                categoryId: 3,
                reviewCount: 2,
                overallReview: 2.67
            },

            {
                name: 'XML Tutorials After studying, go to work immediately',
                price: '68.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 5,
                categoryId: 3,
                reviewCount: 3,
                overallReview: 2.67
            },

            {
                name: 'XML Tutorials accessible',
                price: '90.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 1,
                categoryId: 3,
                reviewCount: 3,
                overallReview: 2.67
            },
        
            {
                name: 'XML Tutorials field fight',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 2,
                categoryId: 3,
                reviewCount: 4,
                overallReview: 3.67
            },

            {
                name: 'XML Tutorials practical application',
                price: '80.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 3,
                categoryId: 3,
                reviewCount: 5,
                overallReview: 4.67
            },


            {
                name: 'XML Tutorials teaching experts',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 4,
                categoryId: 3,
                reviewCount: 2,
                overallReview: 2.67
            },

            {
                name: 'XML Tutorials for busy people',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailPath: '/img/product/product-sm-3.png',
                teacherId: 5,
                categoryId: 3,
                reviewCount: 3,
                overallReview: 2.67
            },

           //SQL
           {
            name: 'SQL for every one',
            price: '50.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 1,
            categoryId: 3,
            reviewCount: 3,
            overallReview: 2.67
        },
    
        {
            name: 'SQL from basic to advanced',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 2,
            categoryId: 2,
            reviewCount: 4,
            overallReview: 3.67
        },

        {
            name: 'SQL for lazy people',
            price: '70.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 3,
            categoryId: 3,
            reviewCount: 5,
            overallReview: 4.67
        },


        {
            name: 'SQL vividly understandable',
            price: '30.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 4,
            categoryId: 3,
            reviewCount: 2,
            overallReview: 2.67
        },

        {
            name: 'SQL After studying, go to work immediately',
            price: '68.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 5,
            categoryId: 3,
            reviewCount: 3,
            overallReview: 2.67
        },

        {
            name: 'SQL accessible',
            price: '90.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 1,
            categoryId: 3,
            reviewCount: 3,
            overallReview: 2.67
        },
    
        {
            name: 'SQL field fight',
            price: '70.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 2,
            categoryId: 3,
            reviewCount: 4,
            overallReview: 3.67
        },

        {
            name: 'SQL practical application',
            price: '80.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 3,
            categoryId: 3,
            reviewCount: 5,
            overallReview: 4.67
        },


        {
            name: 'SQL teaching experts',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 4,
            categoryId: 3,
            reviewCount: 2,
            overallReview: 2.67
        },

        {
            name: 'SQL for busy people',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 5,
            categoryId: 3,
            reviewCount: 3,
            overallReview: 2.67
        },
        //Python
        {
            name: 'Python for every one',
            price: '50.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 1,
            categoryId: 3,
            reviewCount: 3,
            overallReview: 2.67
        },
    
        {
            name: 'Python from basic to advanced',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 2,
            categoryId: 2,
            reviewCount: 4,
            overallReview: 3.67
        },

        {
            name: 'Python for lazy people',
            price: '70.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 3,
            categoryId: 3,
            reviewCount: 5,
            overallReview: 4.67
        },


        {
            name: 'Python vividly understandable',
            price: '30.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 4,
            categoryId: 3,
            reviewCount: 2,
            overallReview: 2.67
        },

        {
            name: 'Python After studying, go to work immediately',
            price: '68.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 5,
            categoryId: 3,
            reviewCount: 3,
            overallReview: 2.67
        },

        {
            name: 'Python accessible',
            price: '90.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 1,
            categoryId: 3,
            reviewCount: 3,
            overallReview: 2.67
        },
    
        {
            name: 'Python field fight',
            price: '70.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 2,
            categoryId: 3,
            reviewCount: 4,
            overallReview: 3.67
        },

        {
            name: 'Python practical application',
            price: '80.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 3,
            categoryId: 3,
            reviewCount: 5,
            overallReview: 4.67
        },


        {
            name: 'Python teaching experts',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 4,
            categoryId: 3,
            reviewCount: 2,
            overallReview: 2.67
        },

        {
            name: 'Python for busy people',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product7.png',
            thumbnailPath: '/img/product/product-sm-3.png',
            teacherId: 5,
            categoryId: 3,
            reviewCount: 3,
            overallReview: 2.67
        }
        

        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Courses', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Courses', null, {});
    }
};

 
  